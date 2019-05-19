<template>
  <main class="main">
    <Banner/>
    <About/>
    <Form/>
  </main>
</template>
<script>
import Banner from "../Banner";
import About from "../About";
import Form from "../Form";

export default {
  name: "Content",
  components: {
    Banner,
    About,
    Form
  }
};
</script>
<style lang="scss">
.main {
  flex: 1 1 auto;
}
</style>

