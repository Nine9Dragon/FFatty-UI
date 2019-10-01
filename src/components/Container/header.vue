<template>
    <div :style="headerHeight" class="f-header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'f-header',
        props:{
            'height':{
                type:[Number,String],
                default:'60px'
            }
        },
        computed:{
            headerHeight(){
                let value = 'height:'+this.height;
                return value
            }
        }
    }   
</script>

<style lang="less" scoped>
    .f-header{
        background: #7dbcea;
        color: #fff;
    }
</style>