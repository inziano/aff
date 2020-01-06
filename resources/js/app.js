require('./bootstrap');
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Trend from 'vuetrend'
import ViewUI from 'view-design'
import Moment from 'vue-moment'
import VueQuill from 'vue-quill'
import VueTruncate from 'vue-truncate-filter'

// import style
import 'view-design/dist/styles/iview.css';
// Locale
import locale from 'view-design/dist/locale/en-US'
// Routes
import router from './routes'
// Store
import store from './store'

// App
import App from './components/AppComponent'

 
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ViewUI,{locale})
Vue.use(Trend)
Vue.use(Moment)
Vue.use(VueQuill)
Vue.use(VueTruncate)

// Initiate
const app = new Vue({
    el: '#app',
    components: { App },
    router: router,
    store,
});


