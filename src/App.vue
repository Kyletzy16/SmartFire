<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" class="logo" />
      <h1>{{ title }}</h1>
    </header>
    <main>
      <!-- Including HelloWorld component -->
      <HelloWorld msg="Welcome to Your Gas Leak Detection App" />
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "Gas Leak Detection System",
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  width: 120px;
  height: auto;
}

main {
  margin: 20px;
}
</style>
