<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Tambah Data history</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputsmp4" class="form-label">SD</label>
    <input type="text" class="form-control" id="inputsmp4" 
    v-model="historys.sd" />
      <div class="alert alert-danger" v-if="validation.sd">
        {{ validation.sd[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">SMP</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="historys.smp"/>
    <div class="alert alert-danger" v-if="validation.smp">
        {{ validation.smp[0] }}
        </div>
      </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">SMA</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="historys.sma"/>
    <div class="alert alert-danger" v-if="validation.sma">
        {{ validation.sma[0] }}
        </div>
  </div>
       <div class="col-12">
    <label for="inputAddress" class="form-label">PERGURUAN TINGGI</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="historys.perguruan_tinggi"/>
    <div class="alert alert-danger" v-if="validation.perguruan_tinggi">
        {{ validation.perguruan_tinggi[0] }}
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
    const historys = reactive({
      sd: '',
      smp: '',
      sma: '' ,
      perguruan_tinggi: '' 
      
    })
    const validation = ref([])
    const router = useRouter()
    function store(){
      let sd = historys.sd
      let smp = historys.smp
      let sma = historys.sma
      let perguruan_tinggi = historys.perguruan_tinggi
      axios.post('http://127.0.0.1:8000/api/historys', {
        sd: sd,
        smp: smp,
        sma: sma,
        perguruan_tinggi: perguruan_tinggi
        
      }).then(() => {
        router.push({
          name:'historys'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      historys,
      validation,
      router, 
      store
    }
  },
}
</script>