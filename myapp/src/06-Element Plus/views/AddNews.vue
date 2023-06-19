<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="新闻标题">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="新闻类型">
      <el-select v-model="form.type" placeholder="请选择新闻类型">
        <el-option label="文艺" value="wenyi" />
        <el-option label="时事" value="shishi" />
      </el-select>
    </el-form-item>
    <el-form-item label="新闻内容">
      <el-input v-model="form.content" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue';
import { useNewsStore } from '../store/useNewsStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const newsStore = useNewsStore();
const newsType = {
  wenyi: '文艺',
  shishi: '时事',
};

// do not use same name with ref
const form = reactive({
  title: '',
  type: '',
  content: '',
});

const onSubmit = () => {
  console.log('submit!', form);
  newsStore.addNews({
    ...form,
    type: newsType[form.type],
  });
  router.push('/news/list');
};
</script>
