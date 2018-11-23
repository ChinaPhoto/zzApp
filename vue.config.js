
const path = require( 'path' );

function  resolve( dir ) {
    return path.join( __dirname, dir )
}

module.exports = {

    lintOnSave: false,

    devServer: {
        open: 'Chrome',
        port: 1119,
        hot: true
    },

    chainWebpack: config=> {
        config.resolve.alias

            // 静态文件路径
            .set( 'Ass', resolve( 'src/assets' ) )

            // 组件路径
            .set( 'Com', resolve( 'src/components' ) )

            // 页面路径
            .set( 'View', resolve( 'src/views' ) )

            //基础文件路径
            .set( 'Base', resolve( 'src/base/css' ) )

            //其他小分页路径
            .set('Upcoming', resolve('src/views/Upcoming'))
            .set('Application', resolve('src/views/Application'))
            .set('ProcessStart', resolve('src/views/ProcessStart'))
            .set('EqMonitoring', resolve('src/views/EqMonitoring'))
            .set('Mine', resolve('src/views/Mine'))

            // 业务逻辑路径
            .set('business', resolve('src/business'))
    }

}