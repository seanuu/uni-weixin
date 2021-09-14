const colors = require('@tailwindcss/postcss7-compat/colors');

module.exports = {
    purge: {
        content: ['./src/**/*.vue'],

        // These options are passed through directly to PurgeCSS
        options: {}
    },
    theme: {
        colors: {...colors, transparent: 'transparent', current: 'currentColor'},
        spacing: {
            ...new Array(20).fill(0).map((_, index) => index * 8 + 'rpx')
        }
    },
    // https://www.tailwindcss.cn/docs/configuration#-11
    corePlugins: [
        'flex',
        'flexDirection',
        'flexGrow',
        'flexShrink',
        'flexWrap',
        'alignContent',
        'alignItems',
        'alignSelf',

        'padding',
        'margin',
        'boxSizing'
    ]
};
