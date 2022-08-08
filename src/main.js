import { createApp }        from 'vue'
import axios                from 'axios';
import store                from './store/index';
import router               from './route/index';
import Api                  from './route/api';
import App                  from './App.vue'
// import mainSCSS             from './styles/main.scss';



const app = createApp(App).use(router).use(store);
app.config.globalProperties.axios = axios;
app.config.globalProperties.API = Api;
app.mount('#app');

