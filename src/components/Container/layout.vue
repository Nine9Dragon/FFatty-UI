<template>
    <div class="f-layout" :class="layoutClass" :style="layoutHeight">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'f-layout',
        data(){
            return {
                layoutClass:{
                    hasSider:false
                }
            }
        },
        props:{
            'height':{
                type: [Number, String]
            }
        },
        computed:{
            layoutHeight(){
                return `height:${this.height}`
            }
        },
        mounted(){
            console.log(this.$children)
            this.$children.forEach(ele => {
                console.log(ele.$options.name)
                if(ele.$options.name === "f-sider"){
                    this.layoutClass.hasSider = true;
                }
            });
        }
    }
</script>

<style lang="less" scoped>
    .f-layout{
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>