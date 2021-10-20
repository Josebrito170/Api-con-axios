<template>
   <div>
       <Navbar />
            <div class="container pt-4">
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
                      <button type="button" class="btn btn-primary mr-3" v-on:click="guardar()" >Guaedar</button>
                      
                      <button type="button" class="btn btn-danger margen" v-on:click="salir()"  >Salir</button>
                    </div> 
        </form>
            </div>
       <Footer />
   </div>
</template>

<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import axios from 'axios'
export default {
    name: "Nuevo",
    components:{
        Navbar, Footer
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
        guardar(){
            this.form.token = localStorage.getItem("token");
            axios.post("https://jsonplaceholder.typicode.com/users", this.form)
            .then(data => {
                console.log(data);
            })
            console.log(this.form)
        },
        salir(){
            this.$router.push('/inicio')
        }
    }
}
</script>

<style>

</style>