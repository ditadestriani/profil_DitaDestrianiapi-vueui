<template>
    <div class="card text-center mt-4">
  <div class="card-header">
    Detail Profils
  </div>
  <div class="card-body">
    <h5 class="card-title">{{profil.nama}}</h5>
    <p class="card-text">{{profil.ttl}}</p>
    <p class="card-text">{{profil.alamat}}</p>
      <p class="card-text">{{profil.jk}}</p>

  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editprofils', params:{id:profil.id}}">Edit</router-link>
        <button @click.prevent="profilDelete(profil.id)" class="btn btn-danger">Delete</button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let profil = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/profils/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);
        profil.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });
    function profilDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/profils/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }
    
    return {
      profil,
      router, 
      profilDelete,
      route
    }
  },
}
</script>
