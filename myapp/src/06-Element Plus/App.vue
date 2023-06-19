<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu
          class="el-menu-vertical-demo"
          :router="true"
          :default-active="route.fullPath"
        >
          <el-menu-item index="/home">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="/news">
            <template #title>
              <el-icon><Document /></el-icon>
              <span>新闻管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/news/add">添加新闻</el-menu-item>
              <el-menu-item index="/news/list">新闻列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header>全球新闻管理系统</el-header>
      <el-main>
        <el-scrollbar>
          <!-- 路由容器 -->
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  HomeFilled,
} from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  overflow-x: hidden;
  overflow-y: auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: unset !important;
}
.el-header {
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
}
</style>
