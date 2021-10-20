<template>
  <div class="">
    <Navbar />
      <div class="container mt-3">
        <form action="" class="form-horizontal">
          <div class="form-group left">
            <label for="" class="control-label col-sm-2">Nombre</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.name">
            </div>
          </div>

            <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Correo</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="direccion" id="direccion" v-model="form.email">
                       </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Ciudad</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="correo" id="correo" v-model="form.city">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">Web</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="codigopostal" id="codigopostal" v-model="form.website">
                          </div>
                        </div> 
                    </div>
                    <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2">Calle</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="genero" id="genero" v-model="form.street">
                            </div>
                          </div>
                         <div class="col">
                              <label for="" class="control-label col-sm-2">Telefono</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="telefono" id="telefono" v-model="form.phone">
                              </div>
                        </div>
                    </div>
                    <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Codigo Postal</label>
                       <div class="col-sm-4">
                          <input type="text" class="form-control" name="fechanacimineto" id="telefono" v-model="form.zipcode">
                       </div>
                    </div>


                    <div class="form-group left ml-3">
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-danger mx-3" v-on:click="eliminar()" >Eliminar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
        </form>
      </div>
    <!--<Footer />--> 
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import axios from 'axios'
export default {
    name:"Editar",

    components:{
      Navbar,

    },
    data:function(){
      return {
      form:{
      "id": "",
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "city": "",
      "zipcode": ""
    },
    "phone": "",
    "website": "",
    "token": ""
    }
      }
    },
    methods:{
      editar(){
        axios.put("https://jsonplaceholder.typicode.com/users", this.form)
        .then(data => {
          console.log(data)
        })
      },
      salir(){
        this.$router.push('/inicio')
      },
      eliminar(){
        var enviar = {
          "id" : this.form.id,
          "token" : this.form.token
        };
        axios.delete("https://jsonplaceholder.typicode.com/users", {headers : enviar})
        .then(datos =>{
          console.log(datos)
        })
      }
    },
    mounted:function(){
      this.form.id = this.$route.params.id;
      
      axios.get("https://jsonplaceholder.typicode.com/users?id=" + this.form.id)
      .then(datos =>{
        
        this.form.name = datos.data[0].name;
        this.form.username = datos.data[0].username;
        this.form.email = datos.data[0].email;
        this.form.street = datos.data[0].address.street;
        this.form.city = datos.data[0].address.city;
        this.form.zipcode = datos.data[0].address.zipcode;
        this.form.phone = datos.data[0].phone;
        this.form.website = datos.data[0].website;
        this.form.token = localStorage.getItem("token")

        console.log(this.form)
      })
    }
}
 
</script>

<style scope>
  .left{
    text-align: left;
  }
</style>