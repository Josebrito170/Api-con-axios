<template>
<div>
<nav class="navbar navbar-dark bg">
  <span class="navbar-brand mb-0 h1">Menu</span>
  <button class="btn btn-outline-light" v-on:click="nuevo()">Nuevo usuario</button>
</nav>
</div> 
</template>

<script>
export default {
  methods:{
    nuevo(){
      this.$router.push('Nuevo')
    }
  }
}

</script>

<style scope>
.bg{
  background-color: #27ae60;
}
</style>