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
        <f-radio name="sex" value="1" v-model="radio">aaa</f-radio>
        <f-radio name="sex" value="2" v-model="radio" disabled>bbb</f-radio>
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
    export default {
        data(){
            return {
                radio:'1',
                value:''
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
            "f-radio":sRadio
        },
        methods:{
            aa(){
                console.log("1");
            },
            change(){
                console.log(this.value);
            }
        }
    }
</script>

<style lang="less" scoped>
    div{
        // width: 100%;
        // height: 300px;
        background-color: #aaa;
    }
</style>