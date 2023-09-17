module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/footer.html');
    eleventyConfig.addPassthroughCopy('./src/header.html');
    eleventyConfig.addPassthroughCopy('./src/include.js');
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/form.html');
    eleventyConfig.addPassthroughCopy('./src/galerie.html');
    eleventyConfig.addPassthroughCopy('./src/contact.html');
    eleventyConfig.addPassthroughCopy('./src/index.js');
    eleventyConfig.addPassthroughCopy('./src/tarif.html');
    eleventyConfig.addPassthroughCopy('./src/admin/config.yml');
    eleventyConfig.addPassthroughCopy('./src/admin/index.html');

    return{
        dir:{
            input: "src",
            output: "public"
        }

    }
    
}