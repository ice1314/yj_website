import Vue from 'vue'
import ElementUI from '../node_modules/element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import IsPcOrNot from './assets/js/IsPcOrNot'
import './plugins/element.js'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
import './assets/css/reset.css'

Vue.use(ElementUI);

Vue.config.productionTip = false;

//页面标题更换
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '';
    next();
});

//页面跳转回到顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
});

//rem.js 移动端生效
if (!IsPcOrNot.get()) {
    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                // 这里的750 取决于设计稿的宽度
                if (clientWidth >= 750) {
                    docEl.style.fontSize = '100px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
}
Vue.prototype.IsPcOrNot = IsPcOrNot.get();

//获取地址栏参数
Vue.prototype.getQueryParams = function (name, url) {
    if (!url) {
        url = location.href
    }
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    let regexS = "[\\?&]" + name + "=([^&#]*)";
    let regex = new RegExp(regexS);
    let results = regex.exec(url);
    return results == null ? null : results[1];
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
