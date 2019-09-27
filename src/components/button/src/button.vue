<template>
    <button class="btn" @click="$emit('click')" :class="btnClass" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props:{
            'type':{
                type:String,
                validator (val) {
                    return ['primary', 'info', 'success', 'warning', 'danger'].includes(val)
                }
            },
            'round':{
                type:Boolean,
                default:false
            },
            'plain':{
                type:Boolean,
                default:false
            },
            'disabled':{
                type:Boolean,
                default:false
            }
        },
        computed:{
            btnClass(){
                var classList = []
                if(this.type){
                    classList.push('btn-'+this.type);
                }
                if(this.plain){
                    classList.push(this.type+'-plain')
                }
                if(this.round){
                    classList.push('is-round')
                }
                if(this.disabled){
                    classList.push('disabled')
                }
                return classList.join(" ");
            }
        }
    }
</script>

<style lang="less" scoped>
    @white:#FFF;
    @dangerColor:#F80000;
    @successColor:#14cc24;
    @warningColor:#f0ad4e;
    @primaryColor:#2a91eb;
    .btn{
        all:unset;
        min-width: 70px;
        border: 1px solid #efefef;
        padding: 15px;
        border-radius: 5px;
        font-size: 14px;
        background-color: @white;
        color: #aaa;
        cursor: pointer;
    }
    .disabled{
        opacity: .3 !important;
        cursor: no-drop !important;
    }
    .btn-danger{
        border-color: @dangerColor;
        background-color: @dangerColor;
        color: @white;
        &:hover{
            opacity: .7;
        }
        
    }
    .btn-success{
        border-color: @successColor;
        background-color: @successColor;
        color: @white;
        &:hover{
            opacity: .7;
        }
    }
    .btn-warning{
        border-color: @warningColor;
        background-color: @warningColor;
        color: @white;
        &:hover{
            opacity: .7;
        }
    }
    .btn-primary{
        border-color: @primaryColor;
        background-color: @primaryColor;
        color: @white;
        &:hover{
            opacity: .7;
        }
    }

    .danger-plain{
        border-color: #f5a2a2;
        background-color: #ffeced;
        color: @dangerColor;
        &:hover{
            background-color: @dangerColor;
            color: @white;
            opacity: 1;
        }
        
    }
    .success-plain{
        border-color: #7be684;
        background-color: #b8fabe;
        color: @successColor;
        &:hover{
            background-color: @successColor;
            color: @white;
            opacity: 1;
        }
    }
    .warning-plain{
        border-color: @warningColor;
        background-color: #fde0b8;
        color: @warningColor;
        &:hover{
            background-color: @warningColor;
            color: @white;
            opacity: 1;
        }
    }
    .primary-plain{
        border-color: @primaryColor;
        background-color: #d2e5f6;
        color: @primaryColor;
        &:hover{
            background-color: @primaryColor;
            color: @white;
            opacity: 1;
        }
    }

    .is-round{
        border-radius: 25px;
    }
</style>