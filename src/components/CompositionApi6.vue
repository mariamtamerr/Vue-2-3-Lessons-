<!-- replacing props Parent && emit custom events -->

<script>
import { ref } from 'vue';
import CompositionApi7 from './CompositionApi7.vue'
    export default {
  components: { CompositionApi7 },
        
        // composition api
       setup() {

        const c_firstname = ref('')
        const c_lastname = ref('')


        function callHeroes(hero) {
            alert(`calling ${hero}`)
        }

        return {
            c_firstname,
            c_lastname,
            callHeroes,
        }
       },
        


// *******************************************************
        // options api
        data() {
            return {
                firstname:'',
                lastname: '', 
            }
        }
    }
</script>


<template>
    <div>

        <h4 style="color: blue; margin-top: 3rem">
      ******** replacing props with setup(props) **********
    </h4>
    <br />

    <input type="text" placeholder="parent options firstname" v-model="firstname" /> <br/>
    <input type="text" placeholder="parent options lastname" v-model="lastname" /> <br/>

    
  <!-- CHILD component to send props to using OPTIONS api-->
    <composition-api-7 :firstname="firstname" :lastname="lastname"/>

<br/>
<br/>

    <input type="text" placeholder="parent composition firstname" v-model="c_firstname" /> <br/>
    <input type="text" placeholder="parent composition lastname" v-model="c_lastname" /> <br/>
    <!-- CHILD component to send props to using COMPOTISION api-->
    <composition-api-7 :c_firstname="c_firstname" :c_lastname="c_lastname" @callHeroes="callHeroes"/>



    </div>
</template>


<style scoped>

</style>