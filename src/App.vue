<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
/* @font-face {
  font-family: "Sofia Pro";
  src: url("./assets/fonts/SofiaProBlack.woff2") format("woff2"),
    url("./assets/fonts/SofiaProBlack.ttf") format("truetype"),
    url("./assets/fonts/SofiaProBlack.woff") format("woff");
  font-weight: normal;
  font-style: normal;
} */
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap");
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
h1,
h3,
p {
  margin: 0;
  padding: 0;
}
</style>
