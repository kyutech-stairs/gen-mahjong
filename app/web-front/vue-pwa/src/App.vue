<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">家</router-link> |
      <router-link to="/setting">設定</router-link> |
			<router-link to="/haipai">配牌</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./html5reset-1.6.1";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
