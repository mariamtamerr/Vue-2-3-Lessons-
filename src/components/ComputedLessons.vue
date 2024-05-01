<script>
    export default {
        data() {
            return {
                firstName: 'Mariam',
                lastName: 'Tamer',

                items: [
                    {id:1, title:'bag', price:200 },
                    {id:2, title:'pen', price:100 },
                    {id:3, title:'notebook', price: 145 },
                ]
            }
        },

        methods: {

        }, 


        computed: {
            fullName() {
                // you're writing js DON'T FORGET THE $ and {}
                return `fullname - ${this.firstName} ${this.lastName}`
            },

            total() {
                return this.items.reduce(( acc, curr) => acc = acc + curr.price , 0 );
            },

            expensiveItems() {
                return this.items.filter( item => item.price > 100 )
            },

            // getter and setter
            NewFullName: {
                get() {
                    return `fullname - ${this.firstName} ${this.lastName}`
                },

                set(value) {
                    const split = value.split(''); // this is a new array : ['firstName','lastName']
                    this.firstName = split[0];
                    this.lastName = split[1];

                }
            }

        }
        
    }
</script>



<template>
    

        <h2 style="font-weight: bold">
       Computed Properties Content & RULES : 
     </h2> 

     <br/>
<br/>
     <h2>
        1) computed properties are used to compose new data from existing data values.  <br/>
        2) computed properties are also used to reduce the ledth of a variable, and avoid repitition  <br/>
        3) highly performant as they are cached and only update/load with their dependencies change , unlike normal methods <br/>
        4) they're added as properties like data and methods  <br/>
        5) most popular usage in in calculations or tables , ... <br/>
        6) used with conditional rendering .. you first filter data using it , then u can take these data and loop over them like in tables and so on , and they won't be recalculated after filtering because they're cached <br/>
        7) cpmputed setter (aka getter and setter functions) .. your computed function that contains both is written as an obkect that contains 2 functions get() and set ... aka : fullName: { get(){} , set(value) {} } <br/>
        
     </h2>
     <br/>
     <br/>



    <h4 style="color:red">************** computed properties  ************** </h4>
          <br/>

         
        <h3> {{ fullName }}</h3>

        <br/>


        <h3> total using normal data  : 
            {{ 
            
            // it's like : items.reduce ( func , 0 )
            items.reduce( 
                (acc, curr) => acc + curr.price, 
                0
            )
            }}
        </h3>
       
        <br/>

        <h3>total using computed :
            {{ total }}
        </h3>  <br/>

        <h3>
            Expensive items Data : {{expensiveItems}}
        </h3>
        <br/>

        <h3 v-for="item in expensiveItems" :key="item.id">
            {{ item.title }} - {{ item.price }}
        </h3> <br/>


        <h3>full name using computed setter : {{ NewFullName }}</h3>




<br/> <br/><h5 style="margin-top: 3.5rem;"> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> <br/> <br/> <br/>


</template>


<style  scoped>

</style>