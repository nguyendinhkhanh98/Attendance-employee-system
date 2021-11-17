<template>
  <div class="app-wrapper">
    <div class="app" id= "app-wrap">
      <Header v-on:open-navigation="marginLeftApp" v-on:close-app-wrap="noneMarginLeftApp"/>
      <Content />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
  },
  methods: {
    marginLeftApp(){
      document.getElementById("app-wrap").style.marginLeft = "250px";
    },
    noneMarginLeftApp() {
      document.getElementById("app-wrap").style.margin = "auto";
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  transition: .5s linear;
}


.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
</style>
