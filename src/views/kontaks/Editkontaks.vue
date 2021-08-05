<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Kontak</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">No Telepon</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="kontaks.no_tlp" />
      <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="kontaks.email" />
      <div class="alert alert-danger" v-if="validation.email">
        {{ validation.email[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Instagram</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="kontaks.instagram"/>
    <div class="alert alert-danger" v-if="validation.instagram">
        {{ validation.instagram[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Facebook</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="kontaks.facebook" />
    <div class="alert alert-danger" v-if="validation.facebook">
        {{ validation.facebook[0] }}
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
    const kontaks = reactive({
      no_tlp: '',
      email: '',
      instagram: '',
      facebook: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8001/api/kontaks/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.sd)
        kontaks.no_tlp = response.data.data.no_tlp
        kontaks.email = response.data.data.email
        kontaks.instagram = response.data.data.instagram
        kontaks.facebook = response.data.data.facebook
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let no_tlp = kontaks.no_tlp
      let email = kontaks.email
      let instagram = kontaks.instagram
      let facebook = kontaks.facebook
      axios.put(`http://127.0.0.1:8001/api/kontaks/${route.params.id}`, {
        no_tlp: no_tlp,
        email: email,
        instagram: instagram,
        facebook: facebook
      })
      .then(() => {
        router.push({
          name:'Kontaks'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      kontaks,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>