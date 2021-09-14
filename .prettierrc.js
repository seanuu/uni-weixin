module.exports = {
    printWidth: 140,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: false,
    jsxBracketSameLine: true,

    arrowParens: 'avoid',
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css',

    overrides: [
        {
            files: ['*.html', '.wxml'],
            options: {
                parser: 'html',
                singleQuote: false,
                printWidth: 140,
                proseWrap: 'never'
            }
        }
    ]
};
