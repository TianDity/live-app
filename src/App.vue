<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useCityStore } from '@stores/city'
import { onBeforeMount } from 'vue'

const cityStore = useCityStore();

cityStore.$subscribe((mutation, state) => {
  console.log('cityStore changed')

  localStorage.setItem('cityStore', JSON.stringify(state))
}, { detached: true });


onBeforeMount(() => {
  const city = localStorage.getItem('cityStore')

  if (city) {
    cityStore.$state = JSON.parse(city);
  } else {
    localStorage.setItem('cityStore', JSON.stringify(cityStore.$state))
  }
})
</script>

<template>
  <div>
      <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Inter,Apple System,"SF Pro SC","SF Pro Display","Helvetica Neue","Arial","PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  font-size: 16px;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

a {
  text-decoration: none;
  color: #333;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}


</style>
