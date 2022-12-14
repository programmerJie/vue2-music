module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserlist:['Android >= 4.0','iOS >= 7']
        },
        "postcss-px-to-viewport": {
            viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度.
            viewportHeight: 1334, // 视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
            unitPrecision: 2, // 保留几位小数，指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['tab-bar', 'tab-bar-item','shopping-cart-bottom-bar'], // 指定不需要转换的类
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位.
            mediaQuery: false // 允许在媒体查询中转换`px`
        }
    }
}