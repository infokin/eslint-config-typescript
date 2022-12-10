"use strict";

/**
 * This is a TypeScript specific ESLint configuration.
 */

module.exports = {
  extends: [
    "@infokin/eslint-config"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      rules: {

        // For a list of available TypeScript specific ESLint rules see: https://typescript-eslint.io/rules/

        // Note: corresponding ESLint rules for JavaScript must be disabled for the error reporting to work
        //       correctly; if applicable, TypeScript rules will be applied to JavaScript code accordingly

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "error",

        "@typescript-eslint/explicit-function-return-type": "error",

        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            "accessibility": "explicit",
            "overrides": {
              "accessors": "explicit",
              "constructors": "no-public",
              "methods": "explicit",
              "properties": "explicit",
              "parameterProperties": "explicit"
            }
          }
        ],

        "@typescript-eslint/member-delimiter-style": "error",

        "no-empty-functions": "off",
        "@typescript-eslint/no-empty-function": [
          "error",
          {
            "allow": [
              "private-constructors"
            ]
          }
        ],

        "@typescript-eslint/no-explicit-any": "error",

        "@typescript-eslint/no-inferrable-types": "off",

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_"
          }
        ],

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",

        "quotes": "off",
        "@typescript-eslint/quotes": "error",

        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            "allowNumber": true,
            "allowBoolean": true,
            "allowAny": false,
            "allowNullish": true
          }
        ],

        "semi": "off",
        "@typescript-eslint/semi": "error",

        "@typescript-eslint/typedef": [
          "error",
          {
            "arrayDestructuring": true,
            "arrowParameter": true,
            "memberVariableDeclaration": true,
            "objectDestructuring": true,
            "parameter": true,
            "propertyDeclaration": true,
            "variableDeclaration": true,
            "variableDeclarationIgnoreFunction": true
          }
        ]
      }
    }
  ]
};
