//#region tok test

const dropsuit_tok = require("../index.js");
const json_data = require("../jsobj.js");

const localFile = "./test/intents.json";

describe("dropsuit-tok", () => {
  let intentData = json_data.jsonIntStrct(localFile);
  let dstok = new dropsuit_tok(intentData.req_arr, true);
  it("should return the tokens object", () => {
    let tok_output = dstok.tok(null, 1);
    // console.log("\n\ntok() output:", tok_output);
  });
  it("should return the tokens array with tokArr()", () => {
    let tok_output = dstok.tok(null, 1).tokArr();
    // console.log("\n\ntokArr() output:", tok_output);
  });
  it("should return the tokens concatenated string with tokStr()", () => {
    let tok_output = dstok.tok(null, 1).tokStr();
    // console.log("\n\ntokStr() output:", tok_output);
  });
  it("should return the tokens number with tokNmb()", () => {
    let tok_output = dstok.tok(null, 1).tokNmb();
    // console.log("\n\ntokNmb() output:", tok_output);
  });
});

//#endregion
