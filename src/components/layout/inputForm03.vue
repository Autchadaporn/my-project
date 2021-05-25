<template>
  <div id="inputForm03">
    <div class="container">
      <div>{{title}}</div>
      <div class="form-group">
        <label for="userName">Name:</label>
        <input
          v-model="userName"
          type="text"
          class="form-control"
          id="userName"
          name="userName"
          value= userName
        />
      </div>
      <div class="form-group">
        <label for="userAge">Age:</label>
        <input
          v-model="userAge"
          type="text"
          class="form-control"
          id="userAge"
          name="userAge"
          value= userAge
        />
      </div>
      <div class="form-group">
        <label for="imageUrl">Image Url:</label>
        <input
          v-model="adress"
          type="text"
          class="form-control"
          id="imageUrl"
          name="imageUrl"
        />
      </div>
      <div id="userComponent" class="my-4 py-3" style="background: rgb(238, 238, 238);">
        <h2>User Component</h2>
        <label>Name: {{userName}} </label>
        <br>
        <label>Age: {{userAge}}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputForm03',
  props: [
    'title'
  ],
  data () {
    return {
      userName: '',
      userAge: ''
    }
  }
}
</script>
