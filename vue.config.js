const path = require("path"); // 引入path模块
function resolve(dir) { // 路径解析函数 __dirname为路径的绝对地址
    return path.join(__dirname, dir);
}
module.exports = {
    
    chainWebpack: config => {
    config.resolve.alias
        // 识别@为src文件夹
        .set("@", resolve("src")) 
        // 识别assets为 src/assets文件夹
        .set("assets", resolve("src/assets")) 
            // 识别components为 src/components文件夹
        .set("components", resolve("src/components"))
        // 识别views为 src/ views文件夹
        .set("views", resolve("src/views"))
            // .set("base", resolve("baseConfig"))
            // .set("public", resolve("public"));
    }

}