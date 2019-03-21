var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create web/build/app.js and web/build/app.css
    .addEntry('app', './assets/js/app.js')
    .addEntry('main', './assets/js/main.js')
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .copyFiles({from: './assets/images', pattern: /\.(png|jpg|jpeg)$/, to: 'images/[name].[ext]'})
    .autoProvidejQuery()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();