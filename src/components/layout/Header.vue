<template>
  <header class="header">
    <nav>
      <ul class="logo">
        <li>
          <router-link to="/">
            <img src="../../assets/logo.png" alt>
          </router-link>
        </li>
      </ul>
      <ul class="menu">
        <li>
          <a href="#about">about us</a>
        </li>
        <li>
          <a href="#form">write comment</a>
        </li>
        <li>
          <router-link to="/comments">comments</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
.header {
  flex: 0 0 auto;
  padding-top: 50px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  .logo {
    img {
      width: 120px;
      height: 65px;
    }
  }
  .menu {
    display: flex;
    li {
      margin-right: 35px;
      &:last-child {
        margin-right: 0;
      }
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #111518;
      }
    }
  }
}
</style>
