<template>
  <div id="exercise_02">
    <h2>Exercise 3 (Photos|Components,Props)</h2>
    <div class="container">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input
          v-model="phone"
          type="text"
          class="form-control"
          id="age"
          name="age"
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'exercise_03'
}
</script>
