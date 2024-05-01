<script>
export default {
    
   data() {
    return {
        // event handling
        counter: 0,
        name: 'Mariam', 
        
    
    }
   },

   methods: {

        // event handling
        changeName(event) {
            this.name= 'Menna'
            console.log(event)
        },
     },


}

</script>


<template>
    
<!-- ------------------------------------------------------------------------------------------------------------------ -->

<!-- ================ Event Handling ================================= -->

<!-- rules -->
<!-- 1) syntax : v-on:event" "
     example  :  v-on: click" "" -->
<!-- 2) shorthand syntax : @method 3latol aka @click" " 3latol -->
<!-- 3) inline event handler -->
<!-- 4) event using methods -->
<!-- 5) event object as parameter (event) 
    and when used with another parameter, it's used with a dollar sign 
 example : @click="increment(1, $event)" -->




 <h2 style="font-weight: bold">
       Event Handling Content & RULES : 
     </h2> 

     <br/>
<br/>
     <h2>
        1) syntax : v-on:event" "  ..  example  :  v-on: click" "" <br/>
        2) shorthand syntax : @method 3latol aka @click" " 3latol <br/>
        3) inline event handler <br/>
        4)event using methods <br/>
        5)event object as parameter (event) 
    and when used with another parameter, it's used with a dollar sign 
 example : @click="increment(1, $event)" <br/>
     </h2>
     <br/>
     <br/>



    <h4 style="color:red">************** event handling  ************** </h4>
          <br/>

          <!-- click -->
        <h3>{{ counter }}</h3>
        <button v-on:click="counter+=1">Increment by 1</button>
        <button @click="counter-=1">Decrement by 1</button>


        <!-- mouse over -->
        <h3> {{ name }}</h3>
        <button @mouseover="changeName">Change Name</button>

    

    <br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>

</template>