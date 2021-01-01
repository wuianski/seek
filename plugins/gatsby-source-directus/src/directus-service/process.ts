import { SourceNodesArgs } from 'gatsby'
import { createRemoteFileNode } from "gatsby-source-filesystem";
import { DirectusService } from '.';
import { FieldInfos, FileInfo, RelationInfo } from './interfaces';

export interface CreateNodeArgs {
    directus: DirectusService,
    table: string,
    dataset: Array<object> | object,
    relations: Array<RelationInfo>,
    fields: Array<FieldInfos>,
    fileInfos: Array<FileInfo>,
    gatsbyNodesArgs: GatsbyNodesArgs
}

export interface GatsbyNodesArgs extends SourceNodesArgs {
}

const createNodesByObject = async (directus: DirectusService, table: string, dataset: object,
    relations: RelationInfo[],
    fieldInfos: FieldInfos[],
    fileInfos: FileInfo[],
    gatsbyNodesArgs: GatsbyNodesArgs) => {

    const { actions, store, cache, createNodeId, createContentDigest, reporter } = gatsbyNodesArgs;
    const { createNode } = actions;

    // Process file and image, download and create the node
    let fileFields = fieldInfos.filter(x => x.type === 'uuid' && (x.interface === 'image' || x.interface === 'file'));
    for (let i = 0; i < fileFields.length; i++) {
        const element = fileFields[i];
        let val = dataset[element.field];
        if (!val) {
            continue;
        }

        let fileInfo = fileInfos.find(f => f.fileId == val);
        if (!fileInfo) {
            continue;
        }

        let url = directus.getAssetUrl(val);
        try {
            let fileNode = await createRemoteFileNode({
                url: url,
                store: store,
                cache: cache,
                createNode: createNode,
                createNodeId: createNodeId,
                reporter: reporter,
                name: fileInfo.fileId
            });

            createNode({
                directus: { ...fileInfo },
                id: createNodeId(`fileInfo-${fileInfo.fileId}`),
                parent: fileNode.id,
                children: [],
                internal: {
                    type: 'fileInfo',
                    contentDigest: createContentDigest(fileInfo)
                }
            });

            dataset[`${element.field}___NODE`] = fileNode.id;
            delete dataset[element.field];
        } catch (error) {
            reporter.error(error);
        }
    }

    // Process files
    let manyFileFields = fieldInfos.filter(x => x.type === 'files');
    // TODO: get real file id and download file and use file id to generate node

    // Process for id to node
    let o2mFieldInfos = fieldInfos.filter(x => x.type === 'o2m');
    for (let i = 0; i < o2mFieldInfos.length; i++) {
        const o2mFieldInfo = o2mFieldInfos[i];
        let relation = relations.find(x => x.oneCollection === table && x.oneField === o2mFieldInfo.field);
        if (!relation) {
            continue;
        }

        let o2mFieldData = dataset[relation.manyCollection] as Array<any>;
        if (!o2mFieldData) {
            continue;
        }

        dataset[`${relation.manyCollection}___NODE`] = o2mFieldData
            .map(vId => createNodeId(`${relation.manyCollection}-${vId}`));

        delete dataset[relation.manyCollection];
    }

    let dataId = createNodeId(`${table}-${dataset['id']}`);
    // Create the node
    createNode({
        directus: { ...dataset },
        id: dataId,
        parent: null,
        children: [],
        internal: {
            type: table,
            content: JSON.stringify(dataset),
            contentDigest: createContentDigest(dataset)
        }
    });
};

export const createAllNodes = async (args: CreateNodeArgs) => {
    const { directus, table, dataset, relations, fields, fileInfos, gatsbyNodesArgs, } = args;

    const collectionFieldInfos = fields.filter(x => x.collection == table);

    if (dataset instanceof Array) {
        for (let index = 0; index < dataset.length; index++) {
            let element = dataset[index];
            await createNodesByObject(directus, table, element, relations, collectionFieldInfos, fileInfos, gatsbyNodesArgs);
        }
    } else {
        await createNodesByObject(directus, table, dataset, relations, collectionFieldInfos, fileInfos, gatsbyNodesArgs);
    }
}