<template>
<div class="row">
    <div class="col-lg-4 mt-3" v-for="(history, index) in historys" :key="index">
<div class="card">
  <div class="card-header">{{history.sd}}</div>
  <div class="card-body">
    <h5 class="card-title">{{history.smp}}</h5>
     <h5 class="card-title">{{history.sma}}</h5>
      <h5 class="card-title">{{history.perguruan_tinggi}}</h5>

  </div>
  <div class="card-footer text-muted">
    <router-link class="btn btn-primary" :to="{name:'Detailhistorys', params:{id:history.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["historys"],
};
</script>
