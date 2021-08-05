<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Tambah Data Profil</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="profils.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Tempat Tanggal Lahir</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="profils.ttl"/>
    <div class="alert alert-danger" v-if="validation.ttl">
        {{ validation.ttl[0] }}
        </div>
      </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">alamat</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="profils.alamat"/>
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
        </div>
  </div>
       <div class="col-12">
    <label for="inputAddress" class="form-label">Jenis Kelamin</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="profils.jk"/>
    <div class="alert alert-danger" v-if="validation.jk">
        {{ validation.jk[0] }}
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
    const profils = reactive({
      nama: '',
      ttl: '',
      alamat: '' ,
      jk: '' 
      
    })
    const validation = ref([])
    const router = useRouter()
    function store(){
      let nama = profils.nama
      let ttl = profils.ttl
      let alamat = profils.alamat
      let jk = profils.jk
      axios.post('http://127.0.0.1:8000/api/profils', {
        nama: nama,
        ttl: ttl,
        alamat: alamat,
        jk: jk
        
      }).then(() => {
        router.push({
          name:'Profils'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      profils,
      validation,
      router, 
      store
    }
  },
}
</script>