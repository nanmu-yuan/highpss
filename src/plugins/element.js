import Vue from 'vue'
import {
    Select,
    Option,
    Checkbox,
    Empty,
    Loading,
    Aside,
    Container,
    Header,
    Main,
    Footer,
    Dialog,
    Radio,
    RadioGroup,
    Button,
    Slider,
    Progress,
    MessageBox,
    Message, Carousel,
    CarouselItem,
    TabPane,
    Tabs,
    Pagination,
    Breadcrumb,
    BreadcrumbItem,
    Collapse,
    CollapseItem,
    Form,
    FormItem,
    Input,
    Upload
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Upload)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(Empty)
Vue.use(Loading)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Progress)
Vue.use(Slider)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Pagination)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading
