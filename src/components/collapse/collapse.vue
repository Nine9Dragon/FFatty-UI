<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name:'f-collapse',
        data(){
            return {
                eventBus:new Vue()
            }
        },
        props:{
            value:{
                type:[String,Array],
                default:()=>{
                    return []
                }
            },
            accordion: {
                type: Boolean
            }
        },
        provide () {
            return { eventBus: this.eventBus }
        },

    }
</script>

<style lang="less" scoped>

</style>