<template>
    <div class="f-sider" :style="siderWidth">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'f-sider',
        props:{
            width:{
                type:[String,Number],
                default:300
            }
        },
        computed:{
            siderWidth(){
                return `width:${this.width}px`
            }
        }
    }
</script>

<style lang="less" scoped>
    .f-sider{
        background: #3ba0e9;
        color:#fff;
    }
</style>