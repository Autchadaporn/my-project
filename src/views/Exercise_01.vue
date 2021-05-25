<template>
  <div class="container-sm" align="center">
    <div id="exercise_01" class="row mt-2">
      <h1>{{title}}</h1>
      <h1>V-if V-else V-else-if</h1>
      <div class="col-3">
        <button type="button" class="btn btn-outline-success btn-sm" @click="green = !green">
        GREEN
        </button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-outline-danger btn-sm" @click="red = !red">
          RED
        </button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-outline-warning btn-sm" @click="yellow = !yellow">
          YELLOW
        </button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-outline-dark btn-sm" @click="black = !black">
          BLACK
        </button>
      </div>

      <div align="center" style="margin-top:1el;">
        <div v-if="green" class="card" style="width: 18rem;">
          <img src="../assets/green.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <p class="card-text">GREEN</p>
          </div>
        </div>
        <div v-else-if="red" class="card" style="width: 18rem;">
          <img src="../assets/red.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <p class="card-text">RED</p>
          </div>
        </div>
        <div v-else-if="yellow" class="card" style="width: 18rem;">
          <img src="../assets/yellow.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <p class="card-text">YELLOW</p>
          </div>
        </div>
        <div v-else-if="black" class="card" style="width: 18rem;">
          <img src="../assets/black.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <p class="card-text">BLACK</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--<script src='../App.js'></script>-->
<script>
// @ is an alias to /src
export default {
  name: 'exercise_01',
  data () {
    return {
      title: 'Exercise 1',
      green: false,
      red: false,
      yellow: false,
      black: false
    }
  },
  methods: {
  }
}
</script>
