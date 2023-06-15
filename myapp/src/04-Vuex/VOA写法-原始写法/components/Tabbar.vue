<template>
  <div class="tabbar">
    <ul>
      <!-- 利用锚点，切换url不能自动高亮，要自己监听onhasechange事件 -->
      <!-- <li>
        <a href="#/films">电影</a>
      </li>
      <li>
        <a href="#/cinemas">影院</a>
      </li>
      <li>
        <a href="#/center">我的</a>
      </li> -->
      <!-- router-link：被渲染成a标签，不可定制化 -->
      <!-- <li>
        <router-link to="/films" active-class="nikiActive">电影</router-link>
      </li>
      <li>
        <router-link to="/cinemas" active-class="nikiActive">影院</router-link>
      </li>
      <li>
        <router-link to="/center" active-class="nikiActive">我的</router-link>
      </li> -->
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
