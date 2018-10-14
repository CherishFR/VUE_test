<template>
    <li>
        <h2>{{data.title}}</h2>
        <p>{{data.content}}</p>
    </li>
</template>

<script>
    export default {
        name:"Vnote",
        data(){
            return {

            }
        },
        props:{
            data:Object
        }
    }
</script>

<style scoped>

</style>