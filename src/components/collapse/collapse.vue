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
        mounted(){
            this.eventBus.$emit('update:selected', this.value);
            this.eventBus.$on('update:addSelected',name=>{
                let selectedCopy = typeof (this.value) === 'string' ? this.value : [...this.value]
                if(this.accordion){
                    selectedCopy = [name]
                }else{
                    selectedCopy.push(name)
                }
                this.$emit('input',this.accordion?name:selectedCopy)
                this.eventBus.$emit('update:selected',selectedCopy)
            })

            this.eventBus.$on('update:removeSelected',name=>{
                let selectedCopy = typeof (this.value) === 'string' ? this.value : [...this.value]
                if(this.accordion){
                    if(name === this.value){
                        this.$emit('input','')
                    }
                }else{
                    let idx = selectedCopy.indexOf(name)
                    selectedCopy.splice(idx,1)
                    this.$emit('input',selectedCopy)
                    this.eventBus.$emit('update:selected',selectedCopy)
                }
            })
        }

    }
</script>

<style lang="less" scoped>
  @border-color: #ddd;
  @border-radius: 4px;
  .collapse{
      border: 1px solid @border-color;
      border-radius: @border-radius;
      padding:.5em 1em;
  }
</style>