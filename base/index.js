module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": [2, {
      "ignore": ["electron"]
    }],
    'new-cap': ['error', {
      "newIsCap": true,
      "newIsCapExceptions": [],
      "capIsNew": false,
      "properties": false,
      "capIsNewExceptions": ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],
    "no-else-return": "off",
    "arrow-parens": "off",
    "max-classes-per-file": "off",
    "no-warning-comments": "warn",
    "curly": "error",
    "import/no-named-as-default": "off",
    "linebreak-style": 0,
    "indent": ["error", 2],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-tabs": "off",
    "max-len": ["warn", 120, 2, {
      "ignoreStrings": true,
      "ignoreUrls": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    "no-bitwise": "off",
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": false
    }],
    "consistent-return": "off",
    "no-param-reassign": "off",
    "no-plusplus": ["error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-unused-vars": ["error", { "vars": "local", "args": "after-used", "varsIgnorePattern": "^_", "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],
    "no-prototype-builtins": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": ["warn", {
      "allowAfterThis": true,
      "allowAfterSuper": true,
      "allow": ["_id"]
    }],
    "prefer-destructuring": ["warn", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": false,
        "object": false
      }
    }, {
        "enforceForRenamedProperties": false
      }],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
  },
  "overrides": [{
    "files": ["**/*.spec.js"],
    "env": {
      "node": true,
      "mocha": true
    },
    "rules": {
      "no-underscore-dangle": "off", // we may access private stuff in tests
      "no-unused-expressions": "off", // expect-style tests have this
      "object-curly-newline": "off", // test data can be long and boring
    }
  }]
};