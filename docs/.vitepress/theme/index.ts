import DefaultTheme from "vitepress/theme";
import Layout from "./MyLayout.vue";
import DemoModel from '../components/DemoModel.vue';
import TheIconList from '../components/TheIconList.vue';
import Colors from '../components/Colors.vue';
import PreviewDome from "../components/PreviewDome.vue";
import MouseClick from "../components/MouseClick.vue";
import MouseFollower from "../components/MouseFollower.vue";
import 'virtual:group-icons.css'
import '../styles/scss/theme.scss'
import '../styles/scss/color.scss'


export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('DemoModel', DemoModel)
        app.component('TheIconList', TheIconList)
        app.component('Colors', Colors)
        app.component('PreviewDome', PreviewDome)
        app.component('MouseClick', MouseClick)
        app.component('MouseFollower', MouseFollower)
    }
};