<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add pengalaman</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">kerja</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pengalaman.kerja" />
      <div class="alert alert-danger" v-if="validation.kerja">
        {{ validation.kerja[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">usaha</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan usaha"
    v-model="pengalaman.usaha" />
    <div class="alert alert-danger" v-if="validation.usaha">
        {{ validation.usaha[0] }}
      </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const pengalaman = reactive({
      kerja: '',
      usaha: '',
    })
    const validation = ref([])
    const router = useRouter()
    function store(){
      let kerja = pengalaman.kerja
      let usaha = pengalaman.usaha
      axios.post('http://127.0.0.1:8000/api/pengalamans', {
        kerja: kerja,
        usaha: usaha,
      }).then(() => {
        router.push({
          name:'Pengalamans'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      pengalaman,
      validation,
      router, 
      store
    }
  },
}
</script>