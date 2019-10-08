<template>
    <div>   
        <f-button type="primary">进入文档</f-button>
    </div>
</template>

<script>
    import button from './button/src/button'
    export default {
        name:'index',
        components:{
            'f-button':button
        }
    }
</script>

<style lang="less" scoped>

</style>