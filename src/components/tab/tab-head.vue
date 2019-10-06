<template>
    <div class="f-tab-head" :class="headClass" ref="tabHead">
        <div class="item-wrapper" :class="itemWrapperClass">
            <slot></slot>
        <div class="line" :style="lineStyle" ref="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'f-tab-head',
        data(){
            return {
                align:'top'
            }
        },
        inject:['eventBus'],
        computed:{
            headClass(){
                let headDirection = this.align ==='top'?'column':'row'
                console.log(headDirection)
                return `head-in-${headDirection}`
            },
            itemWrapperClass () {
            let itemDirection = this.align === 'top' ? 'row' : 'column'
                return `item-in-${itemDirection}`
            },
            lineStyle(){
                let mixinStyleObj
                if(this.align === 'top'){
                    mixinStyleObj = {
                        width:'100px',
                        borderBottom:'2px solid #FAA'
                    }
                } else{
                    mixinStyleObj = {
                        height:'20px',
                        borderLeft:'2px solid #FAA'
                    }
                }
                return mixinStyleObj
            }
        },
        mounted(){
            this.eventBus.$on('update:selected',(name,vm)=>{
                this.$nextTick(()=>{
                    // console.log(vm.$refs.item.getBoundingClientRect())
                    var vms = vm.$refs.item
                    vms = vms.getBoundingClientRect();
                    // console.log(vms)
                    let tabHeadStyle = this.$refs.tabHead.getBoundingClientRect();
                    console.log(tabHeadStyle)
                    let {width,left,height,top} = vms;
                    // console.log(width,left,height,top)
                    var lefts = left - tabHeadStyle.left;
                    console.log(lefts)
                    if(this.align === 'top'){
                        this.$refs.line.style.width = `${width}px`
                        this.$refs.line.style.left = `${left - tabHeadStyle.left}px`
                    }else{
                        this.$refs.line.style.height = `${height}px`
                        this.$refs.line.style.top = `${top - tabHeadStyle.top}px`
                    }
                })
            })
        }
    }
</script>

<style lang="less" scoped>
    .f-tab-head{
        display: flex;
        position: relative;
        text-align: center;
        margin: 0 auto;

        &.head-in-row{
            flex-direction: row;
            border-right: 1px solid #efefef;
        }
        &.head-in-columb{
            flex-direction: column;
            border-bottom: 1px solid #efefef;
        }
        .item-wrapper{
            display: flex;
            position: relative;
            &.item-in-row{
                flex-direction: row;
            }
            &.item-in-column{
                flex-direction: column;
            }
        }
        .line{
            position: absolute;
            transition: all .4s linear;
        }
        

    }
</style>