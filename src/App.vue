<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style >
.content{
  margin-top:3.45rem;
  overflow-y: auto;
  z-index:-1;
}
</style>
