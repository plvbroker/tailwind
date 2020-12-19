module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            syntax: "postcss-scss",
                            plugins: [
                                'postcss-import',
                                'tailwindcss',
                                'autoprefixer',
                            ],
                        }
                    },
                }]
            },
        ],
    },
};

// The following is going to be deprecated in future versions of webpack & postCSS

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    syntax: 'postcss-scss',
                    plugins: () => [
                        require('postcss-import'),
                        require('tailwindcss')('./config/tailwind.config.js'),
                        require('autoprefixer'),
                    ],
                },
            },
        ],
    },
};