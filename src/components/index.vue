<template>
    <div>   
        <h2 class="title">FFatty UI</h2>
        <h5>请勿在生产环境中使用，供学习&交流~~</h5>
        <div>
        <img src="../assets/LOGO.jpg" alt="" class="image">
        </div>
        <hr>
        <br>
        <br>
        <a href="https://github.com/Nine9Dragon/FFatty-UI">
            <f-button type="primary" @click='jump'>进入文档</f-button>
        </a>
    </div>
</template>

<script>
    import button from './button/src/button'
    export default {
        name:'index',
        components:{
            'f-button':button
        },
        methods:{
            
        }
    }
</script>

<style lang="less" scoped>
    .title{
    font-size: 56px;
    color: rgb(250, 132, 132);
    }
    .image{
    width: 500px;
    height: 500px;
    }
    a{
        text-decoration: none;
    }
</style>