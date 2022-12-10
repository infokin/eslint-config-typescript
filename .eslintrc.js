"use strict";

module.exports = {
  root: true,
  extends: [
    "./index.js"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: "tsconfig.json"
      }
    }
  ]
};
