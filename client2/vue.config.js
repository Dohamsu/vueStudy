const path = require('path');

module.exports={
    outputDir:path.resolve(__dirname,'./dist'),

    lintOnSave: process.env.NODE_ENV !== 'production',

    devServer : {


        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/V2': {
                target: 'https://loclhost:4437',
                changeOrigin: true,
                pathRewrite: {
                    '^/V2': ''
                }
            },
    
        },

        // port : 8888,
        open : 'Google Chrome',
        overlay:{
            errors: true
        }

    }
  


}