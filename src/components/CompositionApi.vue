<!--  replacing data , methods , v-model inputs -->

<script>
import { reactive, ref, toRefs } from 'vue';
    export default {

        // options api
        data() {
            return {
                o_name: 'Mariam',
                options_fname:'',
            }
        },


        // composition api
        setup() {

            // ref()
           const c_name = ref('Clark');
           console.log(c_name)  // 
                                // RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 'Clark', _value: 'Clark'}
                                // dep
                                // : 
                                // Map(1) {ReactiveEffect => 1}
                                // __v_isRef
                                // : 
                                // true
                                // __v_isShallow
                                // : 
                                // false
                                // _rawValue
                                // : 
                                // "Clark"
                                // _value
                                // : 
                                // "Clark"
            
            // to access Clark & mutate it, 
            c_name.value = 'Menna';



            // replacing methods using ref
            const count = ref(0);

            const incrementCount = () => {
                count.value++; 
            }




            // reactive()
            const state = reactive({
                c_firstname: 'Clark',
                c_lastname: 'Kent',
                c_heroname: 'Superman',
            })

            const stateMsg = `Hello, ${state.c_firstname} ${state.c_lastname} aka ${state.c_heroname} `


            // replacing methods using reactive & toRefs
            const names = reactive({
                firstname: 'Lara',
                lastname: 'ALi',
            })

          
            const changeName = () => {
                names.firstname = 'Mariam';
                names.lastname = 'Tamer';
            }


            // using compoisition api with INPUT V-MODEL using ref
            const lname = ref('') //It should be EMPTY STRINGS !! Don't forget ya ema kda you're giving it a DEFAULT VALUE

             
            // using compoisition api with INPUT V-MODEL using reactive
            const middleName = reactive({
                middleName: '',
                reactivefirstname:'',
            })

          

           return {
            c_name,
            state,
            stateMsg,
            count,
            incrementCount,      
            ...toRefs(names),
            changeName,
            lname,
            ...toRefs(middleName),
           }
        }
    }
</script>


<template>
    <div>
        <h2  style="font-weight: bold">COMPOSITION API Content & RULES :</h2>
    <br />


    <h4 style="color: red; margin-top: 3rem">******** ref() **********</h4>
    <!-- <br /> -->
    <h2>
      1) You can write both options & compositions api in the same vue file <br />
      2) data in options api is called setup in composition api and is also a function that returns an object/value .. BUT YOU INITIALIZE the value in setup not in return .. in return you just return the value you initialized it .. unlike in data()  <br />
      3) data here is : ref() which is a ractive function that contains an object , and you can access its value using objectName.value in script, but in template, you can access it directly without the .value<br />
      4) It's used with primitive data types (boolean, number, string, ..) , while reactive is used with objects only. <br/>
    </h2>

    <!-- <br/> -->
    <h4 style="color: red; margin-top: 3rem">******** reactive () **********</h4>
    <!-- <br /> -->
    <h2>
        1) used with objects <br/>
        2) used with a group of the same primitve types to avoid repeition of ref() in the same setup function .. like :  <br/>
        const profile = reactive({
            firsname: '',
            lastname: '',
            heroname: '',
        })
    </h2>

    <br />


    
    <br />
    <br />

    <h4 style="color: blue; margin-top: 3rem">******** replacing DATA using ref and reactive **********</h4>
    <br />
    <h2>options api : {{ o_name }}</h2> <br/>
    <h2>REF composition api : {{ c_name }}</h2> <br/>

    <h2> REACTIVE composition api :  {{ stateMsg }}</h2> <br/> <br/><br/>


    <h4 style="color: blue; margin-top: 3rem">******** replacing METHODS using ref and reactive **********</h4>
    <br />
    <h2>ref method count : {{ count }} </h2> <br/>
    <button @click="incrementCount">increment count</button>

    <br />
    <br />
    <h2>reactive method  : {{ firstname }} {{ lastname }} </h2> <br/>
    <button @click="changeName">Change name</button>



    <br />
    <br />

    <h4 style="color: blue; margin-top: 3rem">******** replacing INPUTS V-MODEL  using ref and reactive **********</h4>
    <br />

    <input type="text" placeholder="options firstname" v-model="options_fname"/> <br/> <br/>
    <input type="text" placeholder="ref lastname" v-model="lname"/> <br/> <br/>
    <input type="text" placeholder="reactive middlename" v-model="middleName"/>
    <input type="text" placeholder="reactive firstname" v-model="reactivefirstname"/>
   

    <br/> <br/> <br/> <br/>
   
   
   </div>
</template>



<style scoped>

</style>