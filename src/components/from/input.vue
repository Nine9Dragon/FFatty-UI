<template>
    <div class="warpper" :class="{error,disabled}">
        <template v-if="icon">              
            <f-icon :name="icon"></f-icon>
        </template>
        <input 
        :type="type" 
        :value="value" 
        :disabled="disabled" 
        :placeholder="placeholder"
        @input="$emit('input',$event.target.value)"
        @change="$emit('change',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
        >
    </div>
</template>

<script>
    import Icon from '../icon/src/icon'
    export default {
        name:'f-input',
        components:{
            'f-icon':Icon
        },
        props:{
            'type':{
                type:String,
                default:'text'
            },
            'value':{
                type:String
            },
            'icon':{
                type:String
            },
            'disabled':{
                type:Boolean,
                default:false
            },
            'placeholder':{
                type:String
            },
            'error':{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="less" scoped>
    .warpper{
        display: inline-flex;
        align-items: center;
        margin-bottom:1em;
        border:1px solid #efefef;
        padding:2px 8px;
        border-radius: 4px;
        background-color:#FFF;
        &.disabled{
            background: #cdcaca;
            border-color: #cdcaca;
            cursor: not-allowed;
        }
        input{
            height:30px;
            padding: 0 8px;
            border:none;
            outline:none;
            &:focus { outline: none; }
        }
        input:disabled{
            background: #cdcaca;
            cursor: not-allowed;
        }
        &.error {
            border-color:#F00; 
        }
    }
    
</style>