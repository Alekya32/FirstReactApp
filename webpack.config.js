module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js'
        },
        module:{
           rules:[
               {
                   test:/\.js$/,
                   exclude:/node_modules/,
                   loader:"babel-loader"
               },
               {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
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
        },
        devtool:"source-map"
    }