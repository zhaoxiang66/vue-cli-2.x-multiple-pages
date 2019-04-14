import Vue from 'vue';

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const requireComponent = require.context(
    '.',true,/\.vue$/
    //找到components文件夹下以.vue命名的文件
)
requireComponent.keys().forEach(fileName => {
    const componetConfig = requireComponent(fileName);
    let a = fileName.lastIndexOf('/');
    fileName = '.' + fileName.slice(a);
    const componetName = capitalizeFirstLetter(
        fileName.replace(/^\.\//,'').replace(/\.\w+$/,'')
    )
    Vue.component(componetName,componetConfig.default || componetConfig)
})