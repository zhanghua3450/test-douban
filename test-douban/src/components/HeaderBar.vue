<template>
  <div class="header-bar">
    <h1>
      <router-link :to="{name:'HomeView'}">
        豆瓣
      </router-link>
    </h1>
    <ul class="nav">
      <li>
        <router-link :to="{name:'MovieView'}">
          电影
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'BookView'}">
          图书
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'StatusView'}">
          广播
        </router-link>
      </li>
       <li>
        <router-link :to="{name:'GroupView'}">
          小组
        </router-link>
      </li>
    </ul>
    <span class="talion" @click="showTalion"></span>
  </div>
</template>

<script>
export default {
  name:'HeaderBar',
  methods:{
      showTalion:()=>{
          this.$emit('showTalion')
      }
  }
}
</script>

<style lang="less">
// Common style
.header-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.8rem;
  background: #fff;
  border-bottom: 0.1rem solid #f3f3f3;
}
</style>
