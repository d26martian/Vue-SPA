<template>
  <footer class="footer">
    <div class="col-l">
      <a href="#">mail@mailtest.com</a>
      <a href="#">+30-6977664062</a>
    </div>
    <div class="col-r">
      <span>Copyright © 2019 Test All Rights Reserved.</span>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  padding: 30px 40px;
  background: #1d1e25;
  .col-l {
    display: flex;
    flex-flow: column;
    h2 {
      font-weight: 500;
    }
    a {
      font-size: 16px;
      text-decoration: none;
      margin-bottom: 16px;
      color: #fff;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .col-r {
    span {
      font-size: 13px;
      color: #4a4d5e;
    }
  }
}
</style>
