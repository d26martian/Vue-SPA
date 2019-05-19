<template>
  <div class="main">
    <div class="container">
      <h1 class="title">{{name}}</h1>
      <div class="comments">
        <div class="group-comments" v-bind:key="DataComment.id" v-for="DataComment in DataComments">
          <Comment v-bind:DataComment="DataComment"/>
          <router-link class="btnComment" to="/comment">Read more</router-link>
        </div>
      </div>
      <div class="back">
        <span>Lorem Ipsum is text of the typesetting industry</span>
        <router-link to="/" class="btn">Back to homepage</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from "../components/Comment";

import axios from "axios";

const URL = "https://5cbef81d06a6810014c66193.mockapi.io/api/comments";
const LIMIT = "?_limit=3";

export default {
  name: "Comments",
  components: {
    Comment
  },
  // computed: {
  //   DataComments() {
  //     return this.$store.DataComments;
  //   }
  // },
  data() {
    return {
      name: "Comments",
      DataComments: [],
      methods: {}
    };
  },
  created() {
    axios
      .get(URL + LIMIT)
      .then(res => (this.DataComments = res.data))
      .catch(err => err);
  }
};
</script>
<style lang="scss">
.container {
  display: block;
  .title {
    font-size: 70px;
    margin-top: 70px;
    margin-bottom: 140px;
  }
  .comments {
    /* display: flex; */
    column-count: 2;
    /* flex-wrap: wrap;
    justify-content: space-between; */
    .group-comments {
      /* flex: 1 1 1; */
      width: 30rem;
      padding: 20px;
      box-shadow: 10px 10px 10px #f8f9f9;
      margin-bottom: 60px;
      &:last-child {
        margin-bottom: 0;
      }
      .btnComment {
        align-self: baseline;
        padding: 20px 30px;
        border: 0;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        background: #60e3a1;
        color: #111518;
      }
    }
  }
  .back {
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-top: 110px;
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
</style>

