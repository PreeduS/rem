
const prodConfig = {
    test:/\.(js|ts|tsx)$/,
    exclude:/node_modules/,
    use : [{
        loader:'babel-loader',
        options:{
            presets: [
                ['@babel/preset-env',{useBuiltIns: false}],
                '@babel/preset-react',
                '@babel/preset-typescript',
            ],
        }
    }]
}
const devConfig = {
    test:/\.(js|ts|tsx)$/,
    exclude:/node_modules/,
    use : [{
        loader:'babel-loader',
        options:{
            presets: [
                ['@babel/preset-env',{useBuiltIns: false}],
                '@babel/preset-react',
                '@babel/preset-typescript',
            ],
            //presets: ['@babel/preset-env', '@babel/preset-react'],
            //plugins: ["react-hot-loader/babel"]
        }
    },{
        loader: 'eslint-loader',
        options:{

        }
    }]
}


module.exports = ({isProd}) => isProd ? prodConfig : devConfig;


