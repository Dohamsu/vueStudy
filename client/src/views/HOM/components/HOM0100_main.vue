<template>
  <div class="hello">
    <h3>{{ msg }}</h3>

    <h3>ddd</h3>
   이너 컴포넌트입니다
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
