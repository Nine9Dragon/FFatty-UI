<template>
    <label>
        <input 
        type="checkbox" 
        class="hiddenElement"
        :name="name"
        :value="label"
        :checked="isChecked"
        :dusabled="disabled"
        @input="input"
        @change="change"
        >
        <span class="showElement"></span>
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name:'f-checkbox',
        props:{
            'name':String,
            'label':String,
            'checkList':Array,
            'disabled':Boolean
        },
        model:{
            prop:'checkList'
        }
        ,
        methods:{
            change(){
                this.$emit('change',this.checkList)
            },
            input(){
                if(this.isChecked){
                    var a =  this.checkList.indexOf(this.label)
                    this.checkList.splice(a,1);
                    this.$emit('change',this.checkList)
                }else{
                    this.checkList.push(this.label)
                }
            }
        },
        computed:{
            isChecked(){
                for(var key of this.checkList){
                    if(key==this.label){
                        return true
                    }
                }
                return false
            }
        }
    }
</script>

<style lang="less" scoped>
    .hiddenElement{
        display: none;
    }
    .showElement{
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius:100%;
        background: #FFF;
        transition: all .3s linear;
    }
    .hiddenElement:checked + .showElement::after{
        content:"";
        display: inline-block;  
        width: 3px;
        height: 5px;
        // background: #00a1e9;
        border-color: #FFF;
        border-style: solid;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg) translate(-30%,-30%);
        // transform:
    }
    .hiddenElement:checked + .showElement{
        background: #00a1e9;
    }
</style>