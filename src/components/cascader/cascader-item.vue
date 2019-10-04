<template>
    <div class="item-wrapper">
    <div class="left" v-if="options && options.length>0">
        <div v-for="(item,index) in this.options"
          :class="{'active-item': selected && selected[level] &&item.label=== selected[level].label}"
          :key="index"
          @click="setNextOption(item)">
          {{item.label}}
          <f-icon v-if="item.children" name="youjiantou-" style="transform: scale(.7)"></f-icon>
        </div>
    </div>
    <div class="right" v-if="selected && selected[level]">
          <f-cascader-item
            :options="childOption"
            :level="level+1"
            :selected="selected"
            @update:selected="onRecursiveUpdateSelected"
          ></f-cascader-item>
    </div>

  </div>
</template>

<script>
    import Icon from '../icon/src/icon'
    export default {
        name:'f-cascader-item',
        data(){
            return {
                curItem:{}
            }
        },
        props:{
            options:{
                default:()=>{
                    return []
                }
            },
            level:{
                default:0,
            },
            selected:{
                type:Array,
                default:()=>{
                    return []
                }
            }
        },
        components:{
            'f-icon':Icon
        },
        methods:{
            setNextOption (item) {
                console.log(this.selected)
                //  子组件要修改props 只能通过事件
                let selectedCopy = [...this.selected]
                console.log(selectedCopy)
                // console.log(item)
                selectedCopy[this.level] = item
                // console.log(selectedCopy)
                selectedCopy.splice(this.level + 1)
                // console.log(selectedCopy)
                this.$emit('update:selected', selectedCopy)
                console.log()
            },
            // 递归的组件也要监听内部的$emit事件，此法同cascader.vue里面的事件传播一样
            onRecursiveUpdateSelected (newSelected) {
                this.$emit('update:selected', newSelected)
            }
        },
        computed:{
            childOption(){
                return this.selected[this.level].children || []
            },
            isActive(){
                return {'active-item':true}
            }
        },
        watch:{
            selected(){
                // console.log(this.selected,this.selected[level])
            }
        }
    }
</script>

<style lang="less" scoped>
    .item-wrapper{
        display:flex;
        align-items: flex-start;
        justify-content: flex-start;
        .left{
            border:1px solid #000;
            overflow: auto;
            max-height: 300px;
            background: #fff;
            flex-shrink: 0;
            > div{
                padding:.5em;
                &.active-item{
                    background: lightblue;
                }
            }
        }
    } 
</style>