const path = require("path");

module.exports = {
    entry:"./src/home.js",
    output:{
        path: path.join(__dirname,"build"),
        filename: "main.js"
    },
    mode: "development",
    module:{
        rules:[
            {
                test: /\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
        ]
    }
        
}