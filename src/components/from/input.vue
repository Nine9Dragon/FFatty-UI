<template>
    <div>
        <template v-if="icon">              
            <f-icon :name="icon"></f-icon>
        </template>
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
            
        }
    }
</script>

<style lang="less" scoped>

</style>