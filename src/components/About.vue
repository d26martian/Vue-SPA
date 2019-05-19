<template>
  <div id="about" class="about">
    <div class="container">
      <div class="about-item" v-for="todo in todos" v-bind:key="todo.id">
        <img :src="todo.icon" alt>
        <h3>{{todo.title}}</h3>
        <ul>
          <li>{{todo.text[0]}}</li>
          <li>{{todo.text[1]}}</li>
          <li>{{todo.text[2]}}</li>
          <li>{{todo.text[3]}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      todos: [
        {
          icon: "../assets/icon-a1.png",
          title: "Who we are",
          text: [
            "It is a long established fact that a reader will be distracted",
            "The readable content of a page when looking at its layout",
            "The point of using Lorem Ipsum",
            "As opposed to using 'Content here, content here'."
          ]
        },
        {
          icon: "../assets/icon-a2.png",
          title: "What we do",
          text: [
            "Many desktop publishing packages and web page",
            "There are many variations of passages of Lorem Ipsum available, but the majority have ",
            "Various versions have evolved over the years, sometimes by accident",
            "As opposed to using 'Content here, content here'."
          ]
        },
        {
          icon: "../assets/icon-a3.png",
          title: "Technology",
          text: [
            "The point of using Lorem Ipsum",
            "As opposed to using 'Content here, content here'",
            "Contrary to popular belief, Lorem Ipsum is not simply random text",
            "A Latin professor at Hampden-Sydney College in Virginia"
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.about {
  padding-bottom: 120px;
  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    .about-item {
      margin-top: 120px;
      flex: 0 0 17rem;
      &:nth-child(1n) {
        &:before {
          content: "";
          display: block;
          background-image: url("../assets/icon-a1.png");
          height: 24px;
          width: 40px;
          position: absolute;
          top: 90px;
        }
      }
      &:nth-child(2n) {
        &:before {
          content: "";
          display: block;
          background-image: url("../assets/icon-a2.png");
          height: 27px;
          width: 40px;
          position: absolute;
          top: 90px;
        }
      }
      &:nth-child(3n) {
        &:before {
          content: "";
          display: block;
          background-image: url("../assets/icon-a3.png");
          height: 37px;
          width: 36px;
          position: absolute;
          top: 85px;
        }
      }
      h3 {
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 40px;
      }
      ul {
        li {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
          &:before {
            content: "\2022";
            padding-right: 5px;
          }
        }
      }
    }
  }
}
</style>
