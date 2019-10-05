<template>
    <div class="f-tab" :class="`tab-${tabPosition}`">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name:'f-tab',
        data(){
            return {
                eventBus:new Vue()
            }
        },
        props:{
            value:{
                type:String
            },
            tabPosition:{
                default:'top',
                validator(val){
                    return ['top','left'].includes(val)
                }
            }
        },
        provide(){
            return {eventBus:this.eventBus}
        },
        mounted(){
            this.$children.forEach(child=>{
                if(child.$options.name==='f-tab-head'){
                    child.$children.forEach(gChild=>{
                        if(gChild.name === this.value){
                            this.eventBus.$emit('update:selected', this.value, gChild)
                        }
                    })
                }
            })
            this.eventBus.$on('update:selected',($event)=>{
                this.$emit('input',$event)
            })
            if(this.tabPosition === 'left'){
                this.$children.forEach(child=>{
                    child.align = child.$options.name === 'f-tab-head' ? 'left':''
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .f-tab{
        display: flex;
        &.tab-top{
            flex-direction: column;
        }
        &.tab-left{
            flex-direction: row;
        }
    }
</style>