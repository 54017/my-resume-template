module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jade$/, loader: "jade" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.json$/, loader: "json-loader"},
            { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' },
            {
      			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      			loader: "url?limit=10000&mimetype=application/font-woff"
    		}, {
		      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
		      loader: "url?limit=10000&mimetype=application/font-woff"
		    }, {
		      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		      loader: "url?limit=10000&mimetype=application/octet-stream"
		    }, {
		      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		      loader: "file"
		    }, {
		      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		      loader: "url?limit=10000&mimetype=image/svg+xml"
		    }
        ]
    }
};
