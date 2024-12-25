const path = require('path'); // Módulo para trabalhar com caminhos

const miniCssExtracPlgin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        main: './index.js'// Definindo o ponto de entrada
    },
    mode:'development',
    module:{
        rules:[{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader , 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
};


// module.exports = {
//     entry: {
//         main: './index.js', // Definindo o ponto de entrada
//         hello: './hello.js'
//     },
//     mode: 'development', // Configurando para o modo de desenvolvimento
//     output: {
//         path: path.resolve(__dirname, 'public'), // Caminho completo para a saída
//         filename: '[name].bundle.min.js' // Nome correto do arquivo de saída, o [name] vai diferenciar quando tem mais de uma entrada para processar a saida
//     }
// };

