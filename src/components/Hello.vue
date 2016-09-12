<template>
<div>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
