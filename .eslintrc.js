const parser = require('@typescript-eslint/typescript-estree');
module.exports = {
    parser: '@typescript-eslint/typescript-estree',  // Specifies the ESLint parser
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        //0 = off, 1 = warn, 2 = error
        "no-multiple-empty-lines": "warn",
        "no-var": "error",
        "prefer-const": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "@typescript-eslint/no-explicit-any": "error"
    },
};