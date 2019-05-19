<template>
  <div class="banner">
    <div class="container">
      <h1 class="title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
    </div>
    <div class="banner-img"></div>
  </div>
</template>
<script>
export default {
  name: "Banner"
};
</script>
<style lang="scss">
.banner {
  .title {
    flex: 0 0 52rem;
    font-size: 70px;
    margin-top: 75px;
    margin-bottom: 75px;
    font-weight: 500;
    color: #111518;
  }
  .banner-img {
    background-image: url("../assets/banner.jpg");
    height: 470px;
    background-size: cover;
  }
}
</style>

