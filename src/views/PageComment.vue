<template>
  <div class="main">
    <div class="container">
      <div class="pageComment">
        <div class="back-c">
          <router-link to="/comments" class="btn">
            <span>Back to Comments</span>
          </router-link>
        </div>
        <div class="comment">
          <h3
            class="title"
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
          <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.</span>
        </div>
        <div class="back">
          <span>Lorem Ipsum is text of the typesetting industry</span>
          <router-link to="/" class="btn">Back to homepage</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.main {
  .pageComment {
    flex-direction: column;
    margin-top: 80px;
    .back-c {
      .btn {
        position: relative;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        padding: 20px 25px;
        color: #1d1e25;
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 22px;
          left: 0px;
          background-image: url("../assets/arrow.png");
          height: 12px;
          width: 11px;
        }
        span {
          border-bottom: 1px solid #a8a8a9;
          display: inline-block;
          line-height: 0.85;
        }
      }
    }
    .comment {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 48px;
        margin-top: 50px;
        margin-bottom: 50px;
      }
      span {
        font-size: 16px;
        line-height: 28px;
        color: #a6a6a7;
        margin-bottom: 40px;
      }
    }
    .back {
      display: flex;
      flex-direction: column;
      display: flex;
      align-items: center;
      margin-top: 180px;
      margin-bottom: 100px;
      span {
        font-size: 24px;
        color: #a6a6a7;
        margin-bottom: 40px;
      }
      .btn {
        position: relative;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        padding: 20px 25px 20px 50px;
        color: #1d1e25;
        border: 2px solid #60e3a1;
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 22px;
          left: 22px;
          background-image: url("../assets/arrow.png");
          height: 12px;
          width: 11px;
        }
      }
    }
  }
}
</style>

