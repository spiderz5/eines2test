module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
      "stylelint-scss",
      "stylelint-order"
    ],
    "rules": {
      "selector-nested-pattern": "^&",
      "indentation": 2,
      "no-descending-specificity": null,
      "no-eol-whitespace": null,
      "declaration-empty-line-before": null,
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "tailwind",
            "apply",
            "responsive",
            "variants",
            "screen",
            "use"
          ]
        }
      ],
      "value-keyword-case": null,
      
      'property-no-vendor-prefix': true,
      'rule-empty-line-before': null,
      'selector-attribute-quotes': 'always',
      'selector-class-pattern': '^[a-z][a-z0-9\\-]*[a-z0-9]$',
      'selector-list-comma-newline-before': 'never-multi-line',
      'selector-list-comma-space-after': 'always-single-line',
      'selector-list-comma-space-before': 'never-single-line',
      'selector-max-attribute': 2,
      'selector-max-class': 4,
      'selector-max-combinators': 4,
      'selector-max-compound-selectors': 4,
      'selector-max-id': 0,
      'selector-max-specificity': null,
      'selector-max-type': 2,
      'selector-max-universal': 1,
      'selector-no-qualifying-type': true,
      'selector-no-vendor-prefix': true,
      'shorthand-property-no-redundant-values': true,
      'string-quotes': 'double',
      'unicode-bom': 'never',
      'value-list-comma-newline-after': 'never-multi-line',
      'value-list-comma-newline-before': 'never-multi-line',
      'value-list-comma-space-after': 'always',
      'value-no-vendor-prefix': true
    }
  }