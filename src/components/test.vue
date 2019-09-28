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
    </div>
</template>

<script>
    import Button from "./button/src/button"
    import Icon from "./icon/src/icon"
    export default {
        components:{
            "l-button":Button,
            "f-icon":Icon
        },
        methods:{
            aa(){
                console.log("1");
            },
            change(){
                console.log("222");
            }
        }
    }
</script>

<style lang="less" scoped>
    div{
        width: 100%;
        height: 300px;
        background-color: #aaa;
    }
</style>