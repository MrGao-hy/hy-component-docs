import DefaultTheme from "vitepress/theme";
import Layout from "./MyLayout.vue";
import DemoModel from '../components/demoModel.vue';
import TheIconList from '../components/TheIconList.vue';
import Colors from '../components/colors.vue';
import PreviewDome from "../components/previewDome.vue";
import 'virtual:group-icons.css'


export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('demoModel', DemoModel)
        app.component('TheIconList', TheIconList)
        app.component('Colors', Colors)
        app.component('PreviewDome', PreviewDome)
    }
};