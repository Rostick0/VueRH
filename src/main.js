import { createApp } from 'vue';
import App from './App.vue';
import componentsUI from '@/components/UI';
import router from '@/router/router.js';

const app = createApp(App)

componentsUI.forEach(component => {
    app.component(component.name, component)
});

app
    .use(router)
    .mount('#app');
