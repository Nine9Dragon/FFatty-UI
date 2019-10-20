<template>
    <div class="item">
        <div class="header" @click="toggle">
          {{title}}
        </div>
        <div class="body" v-show="visible">
           <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'f-collapse-item',
        data(){
            return {
                visible:false
            }
        },
        props:{
            title:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        },
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',v=>{
                if(v.includes(this.name)){
                    this.visible=true
                }else{
                    this.visible=false
                }
            })
        },
        methods:{
            addSelectItem () {
                this.eventBus.$emit('update:addSelected', this.name)
            },
            removeSelectItem () {
                this.eventBus.$emit('update:removeSelected', this.name)
            },
            showPane () {
                this.addSelectItem()
            },
            closePane () {
                this.removeSelectItem()
            },
            toggle () {
                this.visible = !this.visible
                if (this.visible) {
                    this.showPane()
                } else {
                    this.closePane()
                }
            }
        
        }
    }
</script>

<style lang="less" scoped>
    @border-color:#ccc;
   .item{
      .header{
        padding:.5em 0em;
        display: flex;
        justify-content: space-between;
      }
      .body{
        padding:.6em 0em;
      }
      border-bottom:1px solid @border-color;
      &:last-child{
        border-bottom: none;
      }
      .ico{
        margin-left:auto;
        transition: all .3s;
      }
      .ico-active{
        transform-origin:center;
        transform: rotate(90deg);
      }
   }
</style>