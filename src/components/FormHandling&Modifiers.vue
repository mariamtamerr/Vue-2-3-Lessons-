<script>
export default {
    
   data() {
    return {
        
        // form handling
        formValues: {
            name:'',
            country:'usa',
            allCountries: [], 
            agree: "no", 
            skillsSet: [],
            age: null, 
        } , 

        // modifier
        count: 0,
    
    }
   },

   methods: {
        // form handling
        submitForm(e) {
            e.preventDefault();
            console.log('form values', this.formValues)
        }

       
        
    },


}

</script>







<template>
    <!-- ------------------------------------------------------------------------------------------------------------------ -->

<!-- ================ Form Handling ================================= -->


<h2 style="font-weight: bold">
       Form Handling Content & RULES : 
     </h2> 

     <br/>
<br/>
     <h2>
        1) 2-way binding using v-model ... meaning value in input is in sync with data value in script <br/>
        2) syntax ... v-model="" <br/>
        3) you can stringfiy script data so you could see your 2 way binding in sync on site <br/>
        4) you can put all your form values in one data object that contains all the form data properties like this : {
            data() 
            .
            .
            formValues: {
                name:'',
                age: null,
            } 
        } <br/>
        5) text <br/>
        6) drop down <br/>
        7) multi dropdown values ( array in script & multiple attribute in html input tag) <br/>
        8) single checkbox ... data value is false aka -- > isSelected: false<br/>
        9) multi checkbox value <br/>
        10) you can change the 'false' and 'true' names using the input attributes : true-value='yes' and false-value='no' for any value u want <br/>
        11) YOU MUST ASSIGN A VALUE ATTRIBUTE TO THE CHECKBOX DON'T FORGET <br/>
        12) submit form using EVENT BINDING v-on:submit='' or @submit='' <br/>
        
       

     </h2>
     <br/>
     <br/>



    <h4 style="color:red">************** form handling  ************** </h4>
          <br/>


          <!-- stringfiy data so you could see your 2 way binding in sync on site -->
          <div>
            <pre>
                {{  JSON.stringify(formValues, null, 3) }}
            </pre> 
            <!-- output : {
                    "name": "mariam"
                    } -->
          </div>


        // v-on:submit='' or @submit=''

        <form @submit="submitForm">
           
          <!-- text -->
          <div>
            <label for="name">Name</label>
            <input v-model="formValues.name" type="text" id="name" />
          </div>

<br/>
<br/>
          <!-- select drop down one value  -->
          <div>
            <label for="country">country</label>
            <select v-model="formValues.country" id="country">
                <option value="usa">usa</option>
                <option value="uk">uk</option>
                <option value="africa">africa</option>
            </select>
          </div>


          <br/>
<br/>
          <!-- select drop down multiple values  -->
          <div>
            <label for="countries">all countries</label>
            <select multiple v-model="formValues.allCountries" id="countries">
                <option value="usa">usa</option>
                <option value="uk">uk</option>
                <option value="africa">africa</option>
            </select>
          </div>

          <br/>
<br/>

            <!-- single checkbox & changed true and false names to yes and no -->
            <div>
            <input v-model="formValues.agree" type="checkbox" id="accept" true-value="yes" false-value="no" />
            <label for="accept">agree to all conditions</label>
          </div>

          <br/>
          <br/>

          <!-- multiple checkboxs -->
          <div>
                <label>Skills set</label> <br/>

                <!-- YOU MUST ASSIGN A VALUE ATTRIBUTE TO THE CHECKBOX DON'T FORGET -->
                <input v-model="formValues.skillsSet" type="checkbox" id="html" value="html" />
                <label for="html">html</label>

                <input v-model="formValues.skillsSet" type="checkbox" id="css" value="css" />
                <label for="css">css</label>

                <input v-model="formValues.skillsSet" type="checkbox" id="js" value="js" />
                <label for="js">js</label>

                <input v-model="formValues.skillsSet" type="checkbox" id="db" value="db"  />
                <label for="db">db</label>

          </div>


    <br/>
    <br/>


          <!-- submit button -->
        <button>submit</button>


    </form>



          <br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>

<!-- ------------------------------------------------------------------------------------------------------------------ -->

<!-- ================ Modifiers ================================= -->

<h2 style="font-weight: bold">
       Modifiers Content & RULES : 
     </h2>
<br/>
<br/>
     <h2>

        1) modifier is a suffix used with v-on or v-model <br/>
        2) trim modifier .. to trim spaces <br/>
        3) number modifier  .. to make the data type in script always be number and not stringified as js makes it<br/>
        4) lazy modifier .. to make syncing happens after we type the data like our name and not letter by letter syncing .. so syncing happens only when we focus with the mouse outside of the input field  <br/>
        5) you can add more than one modifier in the same v-model or v-on .. ex : v-model.trim.lazy  <br/>
        6) v-once modifier ... to make condition be applied only once then act as static <br/>
        7) v-pre modifier ... to write html code or string with double curly braces as string without being considered as mustache script <br/>
     </h2>

     <h4 style="color:red">************** trim & lazy ************** </h4>
          <br/>


        <!-- trim -->
        <div>
            <label for="name">Name</label>
            <input v-model.trim.lazy="formValues.name" type="text" id="name" />
          </div>

<br/>
<br/>

        <h4 style="color:red">************** number  ************** </h4>
        <br/>


        <!-- number -->
        <div>
            <label for="age">age</label>
            <input v-model.number="formValues.age" type="number" id="age" />
          </div>



<br/>
<br/>

        <h4 style="color:red">************** v-once  ************** </h4>
        <br/>


        <!-- v-once -->
        <div>
            <label v-once for="age">{{count}}</label>
           <button   @click="count+=1">increment age</button>
          </div>



          <br/>
<br/>

        <h4 style="color:red">************** v-pre  ************** </h4>
        <br/>

        <h2 v-pre>{{ hiiiii as a string with double curly braces }}</h2>

        <br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>


</template>