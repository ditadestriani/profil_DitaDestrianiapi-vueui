<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit pengalaman</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">kerja</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pengalamans.kerja" />
      <div class="alert alert-danger" v-if="validation.kerja">
        {{ validation.kerja[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">usaha</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pengalamans.usaha"/>
    <div class="alert alert-danger" v-if="validation.usaha">
        {{ validation.usaha[0] }}
      </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const pengalamans = reactive({
      kerja: '',
      usaha: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/pengalamanss/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.kerja)
        pengalamans.kerja = response.data.data.kerja
        pengalamans.usaha = response.data.data.usaha
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let kerja = pengalamans.kerja
      let usaha = pengalamans.usaha
      axios.put(`http://127.0.0.1:8000/api/pengalamanss/${route.params.id}`, {
        kerja: kerja,
        usaha: usaha
      })
      .then(() => {
        router.push({
          name:'Pengalamans'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      pengalamans,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>