module.exports = {
    entry: './front_end/index.js',
    output: {
        path: __dirname + '/src/main/resources/templates/admin/',
        filename: 'admin-bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/src/main/resources/templates/admin/',
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test : /\.(js|jsx)$/,
                loader : 'babel-loader',
                options : {
                    presets : [ 'es2015', 'react', 'stage-2'],
                    plugins : ["transform-object-rest-spread"]
                },
                exclude : /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }

        ]
    }
};