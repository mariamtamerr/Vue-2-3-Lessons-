<script>
    export default {
       
            beforeCreate() {
                console.log("child beforeCreate");
            },
            created() {
                console.log("child created");
            },
            beforeMount() {
                console.log("child beforeMount");
            },
            mounted() {
                console.log("child mounted");
            },
            beforeUpdate() {
                console.log("child beforeUpdate");
            },
            updated() {
                console.log("child updated");
            },
            beforeUnmount() {
                console.log("child beforeUnmount");
            },
            unmounted() {
                console.log("child unmounted");
            },
      
    }
</script>



<template>
    <div>
        <h2 v-bind="$attrs" style="font-weight: bold">Life Cycle Hooks Content & RULES :</h2>
    <br />

    <!-- <h4 style="color: red; margin-top: 3rem">**************HTTP REQUETSS **************</h4> -->
    <br />

    <h2>
      1)we have 4 life cycle hooks which contains 13 methods  <br />
      
            2) creation : beforeCreate(), created() <br />
            3) mounting : beforeMounting(), mounted() <br />
            4) updating : beforeUpdate(), updated() <br />
            5) unmounting : beforeUnmount(), unmounted() <br />
            6) MISC : activated(), deactivated(), errorCaptured(), renderTracked(), renderTriggered() <br/>

      6) beforecreation is before creating the element, created is when it's created .. after y3ny .. USED created() in fetching apis when the page loads  <br />
      7) beforeMOunting is when the element is still in the process to be mouted to DOM , mounted is after being mounted to DOM .. so mounted is a place to ACCESS the DOM directly .. USED with focusing input fields when the page loads 3latol <br/>
      8) beforeUpdate is when the update is made but not applied or changed in DOM , updated is after changed in DOM <br/>
      9) beforeUnmount is when the DOM is still fully functional and you can edit or cancel requests and so on , unmounted is after being deleted from DOM <br/>
     10) all is mostly using in the after stated , except the unmount is mostly used in the beforeUnmount state .. <br/>
      
     11) MISC is for miscllenous 
     12) (activated & deactivated) --> related to keep alive component used when working with dynamic components .. called when any kept alive component is activated/deactiaved <br/>
     13) errorCaptured hook -->  called when an error from any descendant component is captured .. you can use this hook to modify your data properties .. for example : set an erorr flag to true <br/>
     14) (renderTracked & renderTriggered) --> used for debugging puproses ,, for example you can identify what caused ur component to rerender <br/> <br/> 

     15) I've made another component called LIfeCYcleParent that contains this child .. both contains all 8 method of before and after and consolled.logged .. of course the parent all were console logged first but not all .. order is : <br/>
            parent beforeCreate <br/>
            parent created <br/>
            parent beforeMount <br/>
            child beforeCreate <br/>
            child created <br/>
            child beforeMount <br/>
            child mounted <br/>
            parent mounted <br/>
        when clicking on the toggle child button which is considered an update : <br/>
            parent beforeUpdate <br/>
            child beforeUnmount <br/>
            child unmounted <br/>
            parent updated <br/>
        because of course a parent can't be mounted unless it sees what the child contains and updated and deleted, then the parent can mount to DOM freely <br/>
     

    </h2>

    <br />

    <br />

    <div>
        child component
    </div>

    <br />
    <br />
    <h5 style="margin-top: 3.5rem">
      ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </h5>
    <br />
    <br />
    <br />

    </div>
</template>



<style scoped>

</style>