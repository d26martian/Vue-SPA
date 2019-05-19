<template>
  <div class="comment">
    <h3>{{DataComment.title}}</h3>
    <p>{{DataComment.body}}</p>
  </div>
</template>
<script>
export default {
  props: ["DataComment"]
};
</script>
<style lang="scss">
.container {
  .title {
    font-weight: 500;
  }
}
.comment {
  h3 {
    font-weight: 400;
  }
  p {
    font-size: 14px;
    color: #888888;
    margin-top: 27px;
    margin-bottom: 27px;
    font-weight: 300;
    line-height: 25px;
  }
}
</style>
