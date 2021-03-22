import styled from "styled-components"

export const Content = styled.div`
  padding: 38px 32px 38px 200px;
  text-align: justify;
  line-height: 1.6;
  letter-spacing: 0.05em;
  .secName {
    color: #e77832;
    width: 10%;
    height: 100%;
    display: inline-block;
    transform: rotate(90deg);
    vertical-align: middle;
    text-align: center;
    margin-left: -11%;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: relative;
    top: 20px;
  }
  .firstSec {
    display: inline-block;
  }
  .summaryBlock {
    color: #000;
    margin-top: -24px;
  }
  .summaryTW {
    font-size: 15px;
    font-weight: 500;
  }
  .summaryEN {
    font-size: 15px;
    font-weight: 500;
    margin-top: 28px;
  }
  .openBlock {
    height: 30px;
  }
  .closeBlock {
    height: 30px;
    width: 100%;
    float: right;
  }
  .openImg {
    width: 20px;
    height: 20px;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
  }
  .closeImg {
    width: 20px;
    height: 20px;
    padding: 0px;
    margin: 0px;
    float: right;
    cursor: pointer;
  }
  .contentBlock {
    color: #4f4f4f;
    font-size: 13px;
    width: 80%;
    display: flex;
    margin-bottom: 30px;
  }
  .contentTW {
    width: 50%;
    margin-left: 3%;
  }
  .contentEN {
    width: 50%;
    margin-left: 3%;
  }
  .mainVidInfo {
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.03em;
    margin: 13px 0px;
  }
  .titleBlock {
    color: #000;
  }
  .titleTW {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.23em;
  }
  .titleEN {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .textBlock {
    color: #4f4f4f;
    display: inline-block;
  }
  .textTW {
    font-size: 13px;
  }
  .textEN {
    font-size: 13px;
    margin: 15px 0px;
  }
  .swiper-pagination-bullet-active {
    background: var(--swiper-pagination-color, #e77832) !important;
  }
  .swiper-container {
    padding: 20px 0 !important;
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -6px !important;
  }
  .swiper-pagination {
    text-align: right !important;
  }
  .topMinus20 {
    position: relative;
    top: -20px;
  }
  .twoGrid55 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 47% 47%;
    column-gap: 6%;
  }
  .video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .eventCover {
    height: 24vw;
  }
  .eventCoverImg div {
    padding-bottom: 56.25% !important;
  }
  .reviewDate {
    font-size: 15px;
    color: #e77832;
  }
  .reviewTW {
    font-size: 16px;
  }
  .reviewEN {
    font-size: 14px;
    font-weight: 300;
  }
  .twoGrid37 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 27% 67%;
    column-gap: 6%;
    margin: 30px 0;
    padding-top: 10px;
    border-top: 1px #e77832 solid;
  }
  .arrowUp {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .cc {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    line-height: 14.3px;
    letter-spacing: 0.1em;
    color: #c4c4c4;
    margin: 30px 0px;
  }
  .fr {
    float: right;
  }
  .w80 {
    width: 80%;
  }
  .w70 {
    width: 70%;
  }
  .w70 {
    width: 70%;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mt80 {
    margin-top: 80px;
  }
  .mt120 {
    margin-top: 120px;
  }
  .mt60 {
    margin-top: 60px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mtvh {
    margin-top: 100vh;
  }
  .pd30 {
    padding-bottom: 30px;
  }
  // canopy
  .pageTitle {
    font-size: 24.5px;
    font-weight: 900;
    line-height: 45.5px;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }
  .arrowDown {
    position: relative;
    left: 50%;
    cursor: pointer;
  }
  .arrowUp {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .twoGrid73 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 67% 27%;
    column-gap: 6%;
  }
  .downloadBtnText {
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-decoration-line: underline;
    margin-left: 20px;
  }
  .downloadBtnImg {
    margin-bottom: 0px;
    width: 15px;
    margin: -2px 2px;
  }
  .equipName {
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-decoration-line: underline;
  }
  .equipDetailText {
    font-size: 10px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.1em;
  }
`