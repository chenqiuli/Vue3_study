<template>
  <div class="tabbar">
    <ul>
      <!-- router-link：custom 定制化渲染标签，在router-link插槽内直接写标签，会渲染成这种结构的dom结构 -->
      <router-link to="/films" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="isActive ? 'nikiActive' : ''">电影</li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="isActive ? 'nikiActive' : ''">影院</li>
      </router-link>
      <router-link to="/center" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="isActive ? 'nikiActive' : ''">我的</li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  z-index: 9999;
  ul {
    display: flex;
    height: 100%;
    li {
      flex: 1;
    }
  }
}
.nikiActive {
  color: red !important;
}
</style>
