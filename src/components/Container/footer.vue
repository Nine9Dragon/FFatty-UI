<template>
    <div :style="footerHeight" class="f-footer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'f-footer',
        props:{
            'height':{
                type:[Number,String],
                default:'60px'
            }
        },
        computed:{
            footerHeight(){
                let value = 'height:'+this.height;
                return value
            }
        }
    }   
</script>

<style lang="less" scoped>
    .f-footer{
        background: #7dbcea;
        color: #fff;
    }
</style>