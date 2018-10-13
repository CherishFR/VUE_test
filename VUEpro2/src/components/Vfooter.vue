<template>
    <footer class="foot">
        我是footer
        <!-- 父子组件传值：3.子组件使用数据 -->
        <ul v-for="item in cityArray">
            {{item}}
        </ul>
    </footer>
    
</template>

<script>
    export default{
        name:"Vfooter",
        data(){
            return{

            }
        },
        // 父子组件传值：2.子组件验证数据类型
        props:{
            cityArray:Array,
        }
    }
</script>

<style scoped>

</style>