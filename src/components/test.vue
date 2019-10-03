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
        <!-- <f-input type="search" icon="mima"  placeholder="我带你们打" v-model="value"></f-input> -->
        <hr>
        <f-radio name="sex" label="1" v-model="values">aaa</f-radio>
        <f-radio name="sex" label="2" v-model="values">bbb</f-radio>
        <hr>
        <f-checkbox label="1" v-model="checkList" name="1">aa</f-checkbox>
        <f-checkbox label="2" v-model="checkList" name="1">bb</f-checkbox>
        <f-checkbox label="3" v-model="checkList" name="1">cc</f-checkbox>
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
    export default {
        data(){
            return {
                values:'1',
                value:'',
                // checkedList:'1'
                checkList:[1,2]
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
            'f-checkbox':fCheckbox
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