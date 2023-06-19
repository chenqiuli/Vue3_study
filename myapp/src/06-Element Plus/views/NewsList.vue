<template>
  <el-table :data="newsStore.newsList" style="width: 100%">
    <el-table-column prop="title" label="新闻标题" width="180" />
    <el-table-column prop="type" label="新闻类型" width="180" />
    <el-table-column prop="content" label="新闻内容" />
    <!-- <el-table-column label="Operations" width="120">
      <template #default>
        <el-button link type="primary" @click="handleUpdate()">修改</el-button>
        <el-button link type="primary" @click="handleDelete">删除</el-button>
      </template>
    </el-table-column> -->
  </el-table>
  <!-- {{ newsStore.newsList }} -->
</template>

<script setup>
import { useNewsStore } from '../store/useNewsStore';
const newsStore = useNewsStore();
</script>
