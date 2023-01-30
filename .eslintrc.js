module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    rules: {
        'no-tabs': 'off',
        indent: 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off'
    }
}
