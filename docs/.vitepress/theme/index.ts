import DefaultTheme from "vitepress/theme";
import Layout from "./MyLayout.vue";
import NoPage from "../components/404.vue";
import DemoModel from '../components/DemoModel.vue';
import TheIconList from '../components/TheIconList.vue';
import TheColors from '../components/Colors.vue';
import PreviewDome from "../components/PreviewDome.vue";
import BackTop from "../components/BackTop.vue";
import MouseClick from "../components/MouseClick.vue";
import MouseFollower from "../components/MouseFollower.vue";
import DocVersion from "../components/DocVersion.vue";
import AdvertisingPosition from "../components/AdvertisingPosition.vue";
import 'virtual:group-icons.css'
import '../styles/scss/theme.scss'
import '../styles/scss/color.scss'
import '../styles/scss/common.scss'


export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('NoPage', NoPage)
        app.component('DemoModel', DemoModel)
        app.component('TheIconList', TheIconList)
        app.component('TheColors', TheColors)
        app.component('PreviewDome', PreviewDome)
        app.component('BackTop', BackTop)
        app.component('MouseClick', MouseClick)
        app.component('MouseFollower', MouseFollower)
        app.component('DocVersion', DocVersion)
        app.component('AdvertisingPosition', AdvertisingPosition)
    }
};