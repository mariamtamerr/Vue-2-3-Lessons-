<script>
export default {
    data () {
        

        return {
            volume: 0,
            movie: 'batman',

            // nested
            movieInfo: {
                title: 'incento',
                actor: 'none',
            },

            // array
            movielist: ['the hunger games', 'titanic', 'batman']

        }
    },

    watch: {
        // normal watcher
        volume(newValue, oldValue) {
            if (newValue === 16 && newValue > oldValue) {
                alert("You have reached maximum level")
            }
        }, 

        // immediate watcher
        movie: {
             handler(newValue) {
            console.log('movie name', newValue); 
        },
        immediate: true,
        },


        // deep watcher for nested values aka object
        movieInfo: {
             handler(newValue) {
            console.log('movie info', newValue.title, newValue.actor); 
            },
            deep: true,
            immediate: true,
        }, 
       


        // deep watcher for array
        movielist: {
            handler(newValue){
            console.log('updated list', newValue)
        }, 
        deep: true,
        },
        
       
    }
}
</script>




<template >
    <!-- <br/>
    <br/> -->
   
        <h2 style="font-weight: bold; margin-top: 3rem;">
       Watchers Content & RULES : 
     </h2> 

     <br/>
<br/>
     <h2>
        1) watchers are used to check if a property has changed to a certain value to know you're ready to perform an action <br/>
        2) aka to do an action in response to a change in data value <br/>
        3) example is an api response to a certain change in application data  <br/>
        4) example is transitions <br/>
        5) it's written as a property like data, methods, computed <br/>
        6) the methods inside it are the same returned data values in script .. if a value is firstname then : watch: { firstname() {} } <br/>
        7) it gives you 2 arguments : (newValue, oldValue) <br/>
        8) syntax defers on the data property you're watching (single value - nested values aka object - array) <br/>
        9) Immediate and Deep watchers <br/>
        10) Immediate is when you want a watcher to to be applied on page load , such as api calls when u load/refresh the page <br/>
        11) Deep watchers is when you want to to watch for nested data objects or arrays since normal watchers only watch single value properties <br/>
        12) to apply the immediate watcher, you first change the property to an object , then you apply 2 things inside it .. 1 is the function of new value , and 2 is the immediate or deep watcher <br/>
        example :insetad of watch: { movie(newValue) {} } .. it'll be 
         watch: {
          movie: {
              handler(newValue) {

              },
              immediate:true,
          }
        } <br/> 
        13) NOTE : USING DEEP/IMMEDIATE IS FOR MUTATING THE ORIGINAL VALUE, not refrencing or creating a new one,, because  u can easily create a new one and return it without them <br/>
        
     </h2>
     <br/>
     <br/>



    <h4 style="color:red">************** watchers .. when volume reachers 16, give me an alert ************** </h4>
          <br/>

          


          <div>
            <h3>{{ volume }}</h3>
          <button @click="volume+=2">increase by 2</button>
          <button @click="volume-=2">decrease by 2</button>

          </div>

          <br/>
          <br/>



          <input type="text" v-model="movie" style="margin-bottom: 2rem;"/> <br/> <br/> 


          <input type="text" v-model="movieInfo.title" style="margin-bottom: 1rem;"/> <br/> 
          <input type="text" v-model="movieInfo.actor" style="margin-bottom: 2rem;"/> <br/> 

          <textarea v-model="movielist"></textarea> <br/>
          <button @click="movielist.push('Wonderland')">Add a new movie</button> <br/>
          
          <!-- to reference/ create a new array and just return it , not the mutated original one using deep or immediate watchers -->
          <!-- <button @click="movielist = movielist.concat('superman')">Add a new movie</button> <br/> -->



    
<br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>


</template>

