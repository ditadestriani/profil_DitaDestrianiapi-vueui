<template>
<div class="row">
    <div class="col-lg-4 mt-3" v-for="(kontak, index) in kontaks" :key="index">
<div class="card">
  <div class="card-header">{{kontak.no_tlp}}</div>
  <div class="card-body">
    <h5 class="card-title">{{kontak.email}}</h5>
    <p class="card-text">{{kontak.instagram}}</p>
    <p class="card-text">{{kontak.facebook}}</p>
  </div>
  <div class="card-footer text-muted">
    <router-link class="btn btn-primary" :to="{name:'Detailkontaks', params:{id:kontak.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["kontaks"],
};
</script>
