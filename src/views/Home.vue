<template>
  <Content/>
</template>

<script>
import Content from "../components/layout/Content";

export default {
  name: "Home",
  components: {
    Content
  },
  methods: {
    handleScroll: function(e, h) {
      e.preventDefault();
      let top = document.getElementById(h).offsetTop;
      window.scrollTo(0, top);
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  width: 1000px;
  display: flex;
  margin: 0 auto;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
