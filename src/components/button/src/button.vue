<template>
    <button class="btn" @click="$emit('click')" :class="btnClass" :disabled="disabled">
        <f-icon v-if="icon && !loading" :name="icon" class="f-icon"  ></f-icon>
        <f-icon v-if="loading" name="jiazai" class="f-icon loading"></f-icon>
        <slot></slot>
    </button>
</template>

<script>
    import icon from '../../icon/src/icon'
    export default {
        components: {
            'f-icon': icon
        },
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
            },
            'loading':{
                type:Boolean,
                default:false
            },
            'icon':{
                type:String
            },
            'iconPositon':{
                type:String,
                default:'left',
                validator:function(val){
                    return val === 'left' || val === 'right'
                }
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
                if(this.iconPositon){
                    classList.push('icon-'+this.iconPositon)
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
        &:active{
            opacity: 1;
        }
        
    }
    .btn-success{
        border-color: @successColor;
        background-color: @successColor;
        color: @white;
        &:hover{
            opacity: .7;
        }
        &:active{
            opacity: 1;
        }
    }
    .btn-warning{
        border-color: @warningColor;
        background-color: @warningColor;
        color: @white;
        &:hover{
            opacity: .7;
        }
        &:active{
            opacity: 1;
        }
    }
    .btn-primary{
        border-color: @primaryColor;
        background-color: @primaryColor;
        color: @white;
        &:hover{
            opacity: .7;
        }
        &:active{
            opacity: 1;
        }
    }

    .danger-plain{
        border-color: #f5a2a2;
        background-color: #ffeced;
        color: @dangerColor;
        &:hover{
            background-color: @dangerColor;
            border-color:@dangerColor;
            color: @white;
            opacity: 1;
        }
        &:active{
            opacity: .7;
        }
        
    }
    .success-plain{
        border-color: #7be684;
        background-color: #b8fabe;
        color: @successColor;
        &:hover{
            background-color: @successColor;
            border-color:@successColor;
            color: @white;
            opacity: 1;
        }
        &:active{
            opacity: .7;
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
        &:active{
            opacity: .7;
        }
    }
    .primary-plain{
        border-color: @primaryColor;
        background-color: #d2e5f6;
        color: @primaryColor;
        &:hover{
            background-color: @primaryColor;
            border-color:@primaryColor;
            color: @white;
            opacity: 1;
        }
        &:active{
            opacity: .7;
        }
    }

    .is-round{
        border-radius: 25px;
    }
    .icon-left{
        >.f-icon{
            margin-top:1px;
            margin-right: .4rem;
        }
    }
    .icon-right{
        >.f-icon{
            margin-top:1px;
            float: right;
            margin-left: .4rem;
        }
    }
</style>