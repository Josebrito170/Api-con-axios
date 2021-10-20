<template>
  <div>
    <Navbar />
        <h2 class="my-2 text-center">Lista de Usuarios</h2>
      <div class="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">telefono</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in listaUsuario" :key="usuario.name" v-on:click="editar(usuario.id)">
              <th scope="row">{{usuario.id}}</th>
              <td>{{usuario.name}}</td>
              <td>{{usuario.username}}</td>
              <td>{{usuario.email}}</td>
              <td>{{usuario.phone}}</td>

            </tr>
           
          </tbody>
        </table>
      </div>
     <Footer /> 
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import axios from 'axios'
export default {
    name: "Inicio",
    data() {
      return {
        listaUsuario: null,
        pagina:1
      }
    },
    components:{
      Navbar,
      Footer
    },
    methods:{
      editar(id){
        this.$router.push('/editar/' + id)
      }
    },
    mounted:function(){
      const direccion = "https://jsonplaceholder.typicode.com/users";
      axios.get(direccion)
      .then(data => this.listaUsuario = data.data)
    }
}
</script>

<style>

</style>