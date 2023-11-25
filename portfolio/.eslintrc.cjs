module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "airbnb",
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                ".eslintrc.{js,cjs}",
            ],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "linebreak-style": ["error", "windows"],
        indent: ["error", 4],
        "react/no-unescaped-entities": 0,
        "react/jsx-indent": ["error", 4],
        "arrow-body-style": 0,
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/button-has-type": 0,
        "no-shadow": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/destructuring-assignment": 0,
        "react/prop-types": 0,
    },
};
