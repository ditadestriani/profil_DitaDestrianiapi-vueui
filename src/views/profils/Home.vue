<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createprofils">Add profils</router-link>

      <Cardprofils :profils="profils" />

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">Tempat Tanggal lahir</th>
      <th scope="col">alamat</th>
      <th scope="col">jk</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(profil, index) in profils" :key="index">
      <td>{{ profil.nama}}</td>
      <td>{{ profil.ttl}}</td>
      <td>{{ profil.alamat }}</td>
      <td>{{ profil.jk }}</td>
      
      <td>
        <router-link class="btn btn-success" :to="{name:'Editprofils', params:{id:profil.id}}">Edit</router-link>
        <button @click.prevent="profilDelete(profil.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardprofils from "@/components/Cardprofils.vue";
import { ref, onMounted } from 'vue';
export default {
  name: "Home",
  components: {
    Slider,
    Cardprofils,
  },
  setup(){
    let profils = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/profils')
      .then(response => {
        profils.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function profilDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/profils/${id}`)
      .then(()=>{
        let z = this.profils.map(profils => profils.id).indexOf(id);
        this.profils.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }
      return {
      profils,
      profilDelete
    }
  }
};
</script>