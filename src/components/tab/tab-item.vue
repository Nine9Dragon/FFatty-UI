<template>
    <div class="f-tab-item" @click="changeSelect" :class="{active,disabled}" ref="item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'f-tab-item',
        inject:['eventBus'],
        props:{
            name:{
                type:String
            },
            disabled:{
                type:Boolean
            }
        },
        data(){
            return {
                active:false
                // disabled:false
            }
        },
        created(){
            this.eventBus.$on('update:selected',(val)=>{
                this.active = val === this.name
            })
        },
        methods:{
            changeSelect(){
                if(this.disabled) return
                this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>

<style lang="less" scoped>

    .f-tab-item{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding:.5em 2em;
        font-weight: bold;
        &:hover{
          cursor: pointer;
        }
        &.active{
            color: #3ba0e9;
        }
        &.disabled{
            cursor: not-allowed;
        }
    }
</style>