<template>
  <NavbarBase @triggerMenu="triggerMenu"/>
  <ListNav :toggleList="toggleList" :isActiveList="isActiveList" @triggerMenu="triggerMenu"/>
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
      isActiveList: 'none',
      
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
  overflow-x:hidden;
  min-height: 100vh;
  background: #2b2b2b;
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
