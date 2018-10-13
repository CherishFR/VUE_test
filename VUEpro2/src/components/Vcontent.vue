<template>
    <div class="warp">
        <div class="t">
            <button @click="addAreaHandler">
                添加一个区
            </button>
        </div>
        <div class="mark">
            <textarea rows="10" cols="100" class="editor" v-model="markValue"></textarea>
            <div class="show" v-html="currentValue"></div>
        </div> 
    </div>
    
</template>

<script>
import Marked from 'marked'
    export default{
        name:"Vcontent",
        data(){
            return{
                markValue:""
            }
        },
        methods:{
            addAreaHandler(){
                // 子组件向父组件传值：2.触发在父组件定义的自定义事件
                this.$emit("addarea")
            }
        },
        computed:{
            currentValue(){
                return Marked(this.markValue)
            }
        }
    }
</script>

<style scoped>
    .t{
        width: 300px;
        height: 100px;
    }
    .mark{
        width: 1210px;
        height: 600px;
        margin: 0 auto
    }
    .editor,.show{
        float: left;
        width: 603px;
        height: 600px;
        border: 1px solid #666
    }
</style>