<template>
    <div>
        <l-button>defalut</l-button>
        <l-button type="primary" >primary</l-button>
        <l-button type="success" >success</l-button>
        <l-button type="danger" >danger</l-button>
        <l-button type="warning"  >warning</l-button>
        <hr>
        <l-button plain @click.native="aa">defalut</l-button>
        <l-button type="primary" plain>primary</l-button>
        <l-button type="success" plain>success</l-button>
        <l-button type="danger" plain>danger</l-button>
        <l-button type="warning" plain >warning</l-button>
        <hr>
        <l-button round>defalut</l-button>
        <l-button type="primary" round>primary</l-button>
        <l-button type="success" round>success</l-button>
        <l-button type="danger" round icon="mima" iconPositon="right">danger</l-button>
        <l-button icon="jiazai" loading type="warning"  round @click="change" iconPositon="right">warning</l-button>
        <hr>
        <l-button disabled>defalut</l-button>
        <l-button type="primary" disabled>primary</l-button>
        <l-button type="success" disabled>success</l-button>
        <l-button type="danger" disabled>danger</l-button>
        <l-button type="warning"  disabled>warning</l-button>
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
    export default {
        data(){
            return {
                values:'1',
                value:'',
                checkList:[1,2],
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
            "l-button":Button,
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
            'f-cascader-item':fCascaderItem
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
</style>