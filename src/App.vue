<template>
  <div id="nav">
    <div class="container">
    <navbar />
    <router-view/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

