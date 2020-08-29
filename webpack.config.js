const path = require('path');
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('-p')

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry : './src/index.js',
    output : {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    }
};