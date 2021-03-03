const path = require('path');

module.exports={
    outputDir:path.resolve(__dirname,'./dist'),

    lintOnSave: process.env.NODE_ENV !== 'production',

    devServer : {

        // port : 8888,
        open : 'Google Chrome',
        overlay:{
            errors: true
        }

    }
  


}