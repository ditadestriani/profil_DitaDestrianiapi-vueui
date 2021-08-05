<template>
<div class="row">
    <div class="col-lg-4 mt-3" v-for="(pengalaman, index) in pengalamans" :key="index">
<div class="card">
  <div class="card-header">{{pengalaman.kerja}}</div>
  <div class="card-body">
    <h5 class="card-title">{{pengalaman.usaha}}</h5>
    
  </div>
  <div class="card-footer text-muted">
    <router-link class="btn btn-primary" :to="{name:'Detailpengalamans', params:{id:pengalaman.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["pengalamans"],
};
</script>
