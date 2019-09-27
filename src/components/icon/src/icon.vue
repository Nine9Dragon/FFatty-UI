<template>
    <div>
        <svg class="f-icon" aria-hidden="true" :style="`color:${color}`">
            <use :xlink:href="`#icon-${name}`"></use>
        </svg>
    </div>
</template>

<script>
    import './iconfont'
    export default {
        name:'f-icon',
        props:['name','color']
    }
</script>

<style lang="less" scoped>
    .f-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    @keyframes spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    .loading{
        animation: spin 1s infinite linear
    }
</style>