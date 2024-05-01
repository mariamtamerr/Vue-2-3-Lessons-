<script>
export default {
    
   data() {
    return {
        baseMultiplier: 5,
        anotherMultiplier: 3, 
        
       
    }
   },

   methods: {
        add() {
            return 2 +3 ; 
        },
        add2(a,b) {
            return a +b ; 
        },
        multiply(num) {
            return num * this.baseMultiplier
        },


        // event handling
        changeName(event) {
            this.name= 'Menna'
            console.log(event)
        },
        


        // form handling
        submitForm(e) {
            e.preventDefault();
            console.log('form values', this.formValues)
        }

       
        
    },


}

</script>



<template>

     <!-- ========= RULES ================= -->
    <!--1) Methods : functions   <br/>
        2) Methods are written inside script export as objects <br/>
        2) You can call a data value inside methods using this.dataValueName , and that's way you can't use arrow functions on methods here since arrow functions  don't support this method <br/>
        3) If your passing the data value as an argument, you don't have to write the this keyword <br/>
         -->
   
        <h2 style="font-weight: bold">
        List Rendering  Content & RULES : 
     </h2>
<br/>
<br/>
     <h2>
        1) Methods : functions   <br/>
        2) Methods are written inside script export as objects <br/>
        3) You can call a data value inside methods using this.dataValueName , and that's way you can't use arrow functions on methods here since arrow functions don't support this method <br/>
        4) If your passing the data value as an argument, you don't have to write the this keyword <br/>
     </h2>
     <br/>
     <br/>



    <h4 style="color:red">************** first trying double curly braces as js  ************** </h4>
          <br/>
        
    <h4> {{  2 + 3 + 4  }}</h4>
      

    <br/>
    <br/>
    <h4 style="color:red">************** using methods without arguments  ************** </h4>
    <br/>

    <h4> Add method without arguments {{ add() }}</h4>


    <br/>
    <br/>
    <h4 style="color:red">************** using methods with arguments  ************** </h4>
    <br/>

    <h4> Add method with arguments - {{ add2(10,12) }}</h4>
    <h4> Multiply method with arguments - {{ multiply(10) }}</h4>
    <h4> Multiply method with data value as the argument - {{ multiply(anotherMultiplier) }}</h4>
      

    <br/>
<br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>






</template>