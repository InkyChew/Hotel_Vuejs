module.exports = {
  publicPath: "https://inkychew.github.io/Hotel_Vuejs/",
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/css/variable.sass";@import "@/assets/css/mobile.sass";`
      }
    }
  }
}