<!-- replacing props Child && emit custom events-->

<script>
import { computed } from 'vue';

    export default {
        
        // composition api
        setup(props, context) { //context is for events emit

            const fullname =  computed(() => {
                // must be called with props. instead of this. 
                return `${props.c_firstname}  ${props.c_lastname}`
            }) 
          

            function sendEvent() {
                console.log('child ')
                context.emit('callHeroes', fullname)
            }

            return {
                fullname,
                sendEvent
        
            }

           
        },

        // BOTH options api & composition api 
        props: ['firstname', 'lastname', 'c_firstname', 'c_lastname'],
    }
</script>


<template>
    <div>
<h2>hello child options api : {{ firstname }} {{ lastname }}</h2> <br/>

<h2>hello child composition api : {{ fullname }}</h2>


<br/><br/>
<h4 style="color: blue; margin-top: 3rem">
      ******** replacing emits custom events with setup(context) and emit **********
    </h4>
    <br />

    <button @click="sendEvent">send event</button>>

    </div>
</template>


<style scoped>

</style>