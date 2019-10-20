<template>
    <div>
        <f-layout height="900px">
            <f-header class="header" height="100px">
                <h3>FFatty UI</h3>
            </f-header>
        <f-layout>
            <f-sider width="20%">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                </el-menu>
            </f-sider>
            <f-content>content</f-content>
        </f-layout>
            <f-footer>footer</f-footer>
        </f-layout>
    </div>
</template>

<script>
    import sHeader from './Container/header'
    import sFooter from './Container/footer'
    import sContent from './Container/content'
    import sLayout from './Container/layout'
    import sSider from './Container/sider'
    export default {
        components:{
            "f-header":sHeader,
            "f-footer":sFooter,
            "f-content":sContent,
            "f-layout":sLayout,
            "f-sider":sSider,
        },methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

    }
</script>

<style lang="less" scoped>
    .header{
        display: flex;
        background: #FFF;
        border: 1px solid #efefef;
        justify-content: space-between;
        h3{
            margin-left: 20px;
            font-size: 30px;
            color: #000;
        }
    }
</style>