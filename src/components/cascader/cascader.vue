<template>
    <div class="f-cascader">
      <div class="content" @click="toggle" ref="content">
        {{content || '请点击选择'}}
      </div>
      <div class="popper" v-if="popoverVisible" ref="popper">
          <f-cascader-item
            :options="options"
            :selected="selected"
            @update:selected="onItemUpdateSelected">
          </f-cascader-item>
      </div>
   </div>
</template>

<script>
    import CascaderItem from './cascader-item'
    export default {
        name:'f-cascader',
        data(){
            return {
                popoverVisible:false
            }
        },
        props: {
            options: {
                type: Array
            },
            selected: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        mounted(){
            this.addDocumentListener();
        },
        computed:{
            content () {
                return this.selected.map(x => x.label).join('/')
            }
        },
        methods:{
            addDocumentListener () {
                let docClickHandler = (e) => {
                        if ((this.$refs.popper && this.$refs.popper.contains(e.target)) || this.$refs.content.contains(e.target)) {
                            return false
                        }
                        this.popoverVisible = false
                    }
                    window.document.addEventListener('click', docClickHandler)
                },
            onItemUpdateSelected (newSelected) {
                this.$emit('update:selected', newSelected)
            },
            toggle () {
                this.popoverVisible = !this.popoverVisible
            }
        },
        components:{
            'f-cascader-item':CascaderItem
        }
    }
</script>

<style lang="less" scoped>
    .f-cascader{
        display: inline-block;
        position: relative;
    }
    .content{
        width: 200px;
        height: 24px;
        border: 1px solid #ccc;
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        padding:.6em;
    }
    .popper{
        display: inline-flex;
        flex-direction: row;
        position: absolute;
        z-index: 100
    }
</style>