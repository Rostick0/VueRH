import { createApp } from 'vue';
import App from './App.vue';
import componentsUI from '@/components/UI';

const app = createApp(App)

componentsUI.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app');
