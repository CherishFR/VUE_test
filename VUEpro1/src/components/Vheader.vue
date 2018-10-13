<template>
    <header class="nav">
        我是header
        <h3>
            1111
        </h3>
    </header>
    
</template>

<script>
    export default{
        name:"Vheader",
        data(){
            return{

            }
        }
    }
</script>

// scoped让当前的样式属性只对当前的标签起作用
<style scoped>
    h3{
        color: red
    }
</style>

