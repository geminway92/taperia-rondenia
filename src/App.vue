<template>
  <NavbarBase @triggerMenu="triggerMenu"/>
  <ListNav :toggleList="toggleList"/>
</template>

<script>
import NavbarBase from './components/NavbarBase.vue'
import ListNav from './components/ListNav.vue';

export default {
  name: 'App',
  components: {
    NavbarBase,
    ListNav
  },
  data(){
    return{
      toggleList: false
    }
  },

  methods:{
    triggerMenu(){
      this.toggleList = !this.toggleList
      console.log(this.toggleList)
    }
  }
}

</script>

<style>
body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}
</style>
