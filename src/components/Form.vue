<template>
  <div id="form" class="form">
    <div class="container">
      <div class="col-l">
        <h2>
          Write
          <br>comment
        </h2>
      </div>
      <div class="col-r">
        <form>
          <input type="text" placeholder="Title">
          <textarea placeholder="Your comment"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form"
};
</script>
<style lang="scss">
.form {
  padding-top: 140px;
  padding-bottom: 140px;
  background-color: #1d1e25;
  border-bottom: 1px solid #2b2c36;
  .container {
    display: flex;
    .col-l {
      width: 100%;
      h2 {
        font-size: 55px;
        line-height: 45px;
        color: #fff;
        font-weight: bold;
        &::after {
          content: "";
          display: block;
          background-image: url("../assets/line.jpg");
          height: 4px;
          width: 70px;
          margin-top: 40px;
        }
      }
    }
    .col-r {
      flex: 0 0 38rem;
      form {
        display: flex;
        flex-direction: column;
        input {
          padding: 20px 17px;
          margin-bottom: 15px;
          border: 1px solid #60e3a1;
          color: #60e3a1;
          background: transparent;
          &::placeholder {
            font-size: 16px;
            color: #60e3a1;
          }
        }
        textarea {
          overflow: auto;
          resize: none;
          height: 140px;
          margin-bottom: 15px;
          border-color: #60e3a1;
          color: #60e3a1;
          padding-left: 17px;
          padding-top: 20px;
          background: transparent;
          &::placeholder {
            font-size: 16px;
            color: #60e3a1;
          }
        }
        button {
          align-self: baseline;
          padding: 20px 57px;
          border: 0;
          font-size: 16px;
          border-radius: 5px;
          background: #60e3a1;
        }
      }
    }
  }
}
</style>
