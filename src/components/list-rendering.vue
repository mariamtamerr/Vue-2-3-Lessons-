<script>
export default {
    data() {
        return {
            // array of elements
            names: ['mariam', 'menna', 'omar'],

            // array of objects
            fullnames: [
                {
                    firstname: 'mariam', lastname: 'tamer'
                },
                {
                    firstname: 'menna', lastname: 'tamer'
                },
                {
                    firstname: 'omar', lastname: 'tamer'
                }
            ],

            // array of arrays
            actors: [
                { 
                    name: 'leonardo',
                    movies: ['titanic', 'incento'], 
             } ,
             { 
                    name: 'christan bale',
                    movies: ['batman', 'the prestige'], 
             } 
               
            ],

            // object of elements
            info : { 
                name: 'mariam',
                age: 23,
                job: 'Frontend Developer'
            }
            

        }
    }
}
</script>


<template>
    <!-- ========= RULES ================= -->
    <!--1) Array of elements <br/>
        2) Array of objects <br/>
        3) Array of Arrays <br/>
        4) object of elements <br/>
        5) CONDITIONAL LIST RENDERING <br/> -->
   
    <h2 style="font-weight: bold">
        List Rendering  Content & RULES : 
     </h2>
<br/>
<br/>
     <h2>
        1) Array of elements <br/>
        2) Array of objects <br/>
        3) Array of Arrays <br/>
        4) object of elements <br/>
        5) CONDITIONAL LIST RENDERING .. to render only a specific element from the loop <br/>
     </h2>
     <br/>
     <br/>



    <h4 style="color:red">************** v-for array of elements ************** </h4>
          <br/>
      


          <!-- -v-for array of elements -->
          <h2 v-for="name in names" v-bind:key="name">{{ name }}</h2>


          <br/>
          <br/>
          <br/>

          <h4 style="color:red">************** v-for array of objects ************** </h4>
          <br/>

            <!-- -v-for array of objects -->
          <h2 v-for="(fullname, index) in fullnames" :key="fullname">{{ index+1 }} {{ fullname.firstname }} {{ fullname.lastname }}</h2>
      

          <br/>
          <br/>
          <br/>

          <h4 style="color:red">************** v-for array of arrays ************** </h4>
          <br/>


          <!-- -v-for array of arrays -->
          <h2 v-for="actor in actors" :key="actor">
            
            {{ actor.name }}
            <p v-for="(movie, index) in actor.movies" :key="movie" style="font-size: 15px;">
                {{  index + 1 }}
                {{ movie }}

            </p>

          </h2>


          <br/>
          <br/>
          <br/>

          <h4 style="color:red">************** v-for object of elements ************** </h4>
          <br/>


          <!-- -v-for object of elements -->
          <h2 v-for="(value,key, index) in info" :key="key">{{index+1 }} ) {{ key }} : {{ value }}</h2>



          <br/>
          <br/>
          <br/>

          <h4 style="color:red">************** v-for v-if CODITIONAL list rendering .. to render only a specific element from the loop ************** </h4>
          <br/>

          <!-- -v-for v-if CODITIONAL list rendering .. to render only a specific element from the loop -->
          <template v-for="name in names" :key="name">
               
                <h2 v-if=" name === 'mariam' ">{{ name }}</h2>

          </template>


          <br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>



</template>