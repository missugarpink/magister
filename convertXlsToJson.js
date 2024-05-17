const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const convertXlsToJson = (inputFile, outputFile) => {
  const workbook = XLSX.readFile(inputFile);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const json = XLSX.utils.sheet_to_json(sheet);

  fs.writeFileSync(outputFile, JSON.stringify(json, null, 2));
};

const inputFile = path.resolve(__dirname, "src/data.xls");
const outputFile = path.resolve(__dirname, "src/data.json");
convertXlsToJson(inputFile, outputFile);
