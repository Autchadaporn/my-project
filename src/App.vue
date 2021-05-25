<template>
  <div id="app">
    <div id="header">
       <router-link to="/">Home</router-link>
    </div>
    <div id="nav">
      <router-link to="/exercise_01">{{title}}</router-link> |
      <router-link to="/exercise_02">Exercise 2</router-link> |
      <router-link to="/exercise_03">Exercise 3</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Exersice 1'
    }
  },
  methods: {
    onClickAdd () {
      this.count = this.count + 1
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #46a2ff;
}

#nav {
  padding: 30px;

}
</style>
