module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-duplicate-selectors': null,
    'selector-class-pattern': null,
    'scss/no-global-function-names': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'block-no-empty': null,
    'property-no-unknown': null,
    'scss/comment-no-empty': null,
    'scss/load-no-partial-leading-underscore': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'no-empty-source': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'scss/at-extend-no-missing-placeholder': null
  },
}
