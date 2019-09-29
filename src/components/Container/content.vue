<template>
    <div class="f-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'f-content'
    }
</script>

<style lang="less" scoped>
    .f-content{
        flex-grow: 1;
        background:rgba(16, 142, 233, 1);
        color: #fff;
    }
</style>