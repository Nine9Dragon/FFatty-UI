<template>
    <div>
        <f-button>defalut</f-button>
        <f-button type="primary" >primary</f-button>
        <f-button type="success" >success</f-button>
        <f-button type="danger" >danger</f-button>
        <f-button type="warning"  >warning</f-button>
        <hr>
        <f-button plain @click.native="aa">defalut</f-button>
        <f-button type="primary" plain>primary</f-button>
        <f-button type="success" plain>success</f-button>
        <f-button type="danger" plain>danger</f-button>
        <f-button type="warning" plain >warning</f-button>
        <hr>
        <f-button round>defalut</f-button>
        <f-button type="primary" round>primary</f-button>
        <f-button type="success" round>success</f-button>
        <f-button type="danger" round icon="mima" iconPositon="right">danger</f-button>
        <f-button icon="jiazai" loading type="warning"  round @click="change" iconPositon="right">warning</f-button>
        <hr>
        <f-button disabled>defalut</f-button>
        <f-button type="primary" disabled>primary</f-button>
        <f-button type="success" disabled>success</f-button>
        <f-button type="danger" disabled>danger</f-button>
        <f-button type="warning"  disabled>warning</f-button>
        <hr>
        <f-icon name="jiazai" color="#FAA" loading></f-icon>
        <hr>
        <f-layout height="400px">
            <f-sider>sider</f-sider>
            <f-layout>
                <f-header height="100px">header</f-header>
                <f-content>content</f-content>
                <f-footer height="100px">footer</f-footer>
            </f-layout>
        </f-layout>
        <hr>
        <f-input type="search" icon="mima"  placeholder="我带你们打" v-model="value"></f-input>
        <hr>
        <f-radio name="sex" label="1" v-model="values">aaa</f-radio>
        <f-radio name="sex" label="2" v-model="values">bbb</f-radio>
        <hr>
        <f-checkbox label="1" v-model="checkList" name="1">aa</f-checkbox>
        <f-checkbox label="2" v-model="checkList" name="1">bb</f-checkbox>
        <f-checkbox label="3" v-model="checkList" name="1">cc</f-checkbox>
        <hr>
        <f-cascader :options = "options" :selected.sync="selected"></f-cascader>
        <hr>
        <div class="box1">
            <f-tab v-model="selecteds" >
            <f-tab-head>
                <f-tab-item name="grass">
                葵姬
                
                </f-tab-item>
                <f-tab-item name="herb">
                夕颜

                </f-tab-item>
                <f-tab-item name="tree">
                明石姬
                </f-tab-item>
            </f-tab-head>
            <f-tab-body>
                <f-tab-pane name="grass">其夫为源氏，其子夕雾。葵端庄温柔，款款大方，相貌出众，气质高贵。产后因遭阴物袭击，当场身亡。</f-tab-pane>
                <f-tab-pane name="herb">夕颜的名字是源自于以她为主角的夕颜一帖，文中对此女以夕颜花来形容，因此得名。夕颜是源氏的情人之一，也是头中将的情人，是玉鬘的母亲。</f-tab-pane>
                <f-tab-pane name="tree">日本古典名著《源氏物语》中的人物，是光源氏的侧室，明石中宫的生母。</f-tab-pane>
            </f-tab-body>
            </f-tab>
        </div>
        
    </div>
</template>

<script>
    import Button from "./button/src/button"
    import Icon from "./icon/src/icon"
    import sHeader from './Container/header'
    import sFooter from './Container/footer'
    import sContent from './Container/content'
    import sLayout from './Container/layout'
    import sSider from './Container/sider'
    import sInput from './from/input'
    import sRadio from './from/radio'
    import fCheckbox from './from/checkbox'
    import fCascader from './cascader/cascader'
    import fCascaderItem from './cascader/cascader-item'
    import fTab from './tab/tab'
    import fTabHead from './tab/tab-head'
    import fTabItem from './tab/tab-item'
    import fTabBody from './tab/tab-body'
    import fTabPane from './tab/tab-pane'
    export default {
        data(){
            return {
                values:'1',
                value:'',
                checkList:[1,2],
                selecteds:[],
                selected:[],
                options:[{
                    label: '美国',
                    children: [
                    {
                        label: '德克萨斯',
                        children: [
                            { label: '休斯顿' },
                            { label: '达拉斯' }
                        ]
                    }
                    ]
                },
                {
                    label: '中国',
                    children: [
                    {
                        label: '广东',
                        children: [
                            { label: '汕头' },
                            { label: '揭阳' }
                        ]
                    },
                    {
                        label: '江苏',
                        children: [
                            { label: '苏州' },
                            { label: '南京' }
                        ]
                    },
                    {
                        label: '云南',
                        children: [
                            { label: '大理' },
                            { label: '丽江' },
                            { label: '香格里拉' },
                            { label: '西双版纳' }
                        ]
                    }
                    ]
                }
                ]
            }
        },
        components:{
            "f-button":Button,
            "f-icon":Icon,
            "f-header":sHeader,
            "f-footer":sFooter,
            "f-content":sContent,
            "f-layout":sLayout,
            "f-sider":sSider,
            "f-input":sInput,
            "f-radio":sRadio,
            'f-checkbox':fCheckbox,
            'f-cascader':fCascader,
            'f-cascader-item':fCascaderItem,
            'f-tab':fTab,
            'f-tab-head':fTabHead,
            'f-tab-item':fTabItem,
            'f-tab-body':fTabBody,
            'f-tab-pane':fTabPane,
        },
        methods:{
            aa(){
                console.log("1");
            },
            change(){
                console.log(this.value);
            }
        },
        watch:{
            checkList(){
                console.log(this.checkList)
            }
        }
    }
</script>

<style lang="less" scoped>
    div{
        background-color: #aaa;
    }
    .box1{
        width: 500px
    }
</style>