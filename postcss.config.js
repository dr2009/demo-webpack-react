/**
 * Created by dr2009 on 2017/1/25.
 */
module.exports = {
    plugins: [
        require('postcss-smart-import')({ /* ...options */ }),
        require('precss')({ /* ...options */ }),
        require('autoprefixer')({ /* ...options */ })
    ]
};