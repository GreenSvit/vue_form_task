module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ' @import "@/assets/styles.scss";'
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_form_task/'
    : '/'
};
