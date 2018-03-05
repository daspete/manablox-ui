const { resolve } = require('path')

let imports = [
    {
        type: 'plugin',
        src: resolve(__dirname, 'templates/plugins/vuetify.js')
    },
    {
        type: 'template',
        src: resolve(__dirname, 'components/ui/Admin.vue'),
        fileName: 'components/ui/Admin.vue'
    },
    {
        type: 'template',
        src: resolve(__dirname, 'components/ui/Sidenav.vue'),
        fileName: 'components/ui/Sidenav.vue'
    },
    {
        type: 'template',
        src: resolve(__dirname, 'components/ui/Panel.vue'),
        fileName: 'components/ui/Panel.vue'
    },
    {
        type: 'template',
        src: resolve(__dirname, 'assets/ui/ui.styl'),
        fileName: 'assets/ui/ui.styl'
    },
    {
        type: 'plugin',
        src: resolve(__dirname, 'templates/plugins/ManabloxUiToolkit.js')
    },

];

module.exports = async function module(moduleOptions) {
    const options = Object.assign({}, moduleOptions)

    this.options.css.push(resolve(__dirname, 'assets/ui/ui.styl'))
    this.options.head.link.push({
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' 
    })

    for(let i = 0; i < imports.length; i++){
        switch(imports[i].type){
            case 'plugin':
                this.addPlugin({
                    src: imports[i].src,
                    options
                });
            break;

            case 'template':
                this.addTemplate({
                    src: imports[i].src,
                    fileName: imports[i].fileName,
                    options
                })
            break;
        }
    }

    // this.addPlugin({
    //     src: resolve(__dirname, 'templates/plugins/vuetify.js'),
    //     options
    // })

    // this.addTemplate({
    //     src: resolve(__dirname, 'components/Admin.vue'),
    //     fileName: 'components/ui/Admin.vue',
    //     options
    // })

    // this.addTemplate({
    //     src: resolve(__dirname, 'assets/ui/ui.styl'),
    //     fileName: 'assets/ui/ui.styl',
    //     options
    // })

    // this.addPlugin({
    //     src: resolve(__dirname, 'templates/plugins/ManaUiToolkit.js'),
    //     options
    // })


}
