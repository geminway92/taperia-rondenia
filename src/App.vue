<template>
  <NavbarBase @triggerMenu="triggerMenu"/>
  <ListNav :toggleList="toggleList" :isActiveList="isActiveList"/>
  <router-view/>
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
      toggleList: false,
      isActiveList: '',
      
    }
  },

  methods:{
    triggerMenu(){
      this.toggleList = !this.toggleList;
      (this.toggleList ? this.isActiveList = 'active' : this.isActiveList = 'none')
    }
  }
}

</script>

<style>

body{
  margin: 0;
  overflow: hidden;
}

button{
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

</style>
