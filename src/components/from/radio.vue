<template>
    <label class="box" >
        <input 
        ref="radio"
        class="inpHidden"
        type="radio"
        :name="name"
        :value="label"
        :disabled="disabled"
        :checked="values===label"
        @input="$emit('input',$event.target.value)"
        @change="$emit('change',$event.target.value)"
        >
        <span class="radio" :class="{disabled}" @click="test"></span>
        <slot></slot>    
    </label>
</template>

<script>
    export default {
        name:"f-radio",
        props:{
            'name':String,
            'label':String,
            'values':String,
            'disabled':{
                type:Boolean,
                default:false
            }
        },
        model:{
            prop:'values'
        },
        methods:{
            test(){
                console.log(this.values)
            }
        }
    }
</script>

<style lang="less" scoped>
    .inpHidden{
        display: none;
    }
    .radio{
        display: inline-block;
        width: 15px;
        height: 15px;
        // border: 2px solid #FFF;
        border-radius:100%;
        background: #FFF;
        transition: all .3s linear;
    }
    .inpHidden:checked + .radio{
        background: #00a1e9;
    }
    .inpHidden:checked + .radio::after{
        content:"";
        display: inline-block;
        width: 5px;
        height: 5px;
        background:#FFF;
        border-radius:100%;
        margin-bottom: 4px;
    }
    .disabled{
        background: #cdcaca;
        cursor: not-allowed;
    }
</style>