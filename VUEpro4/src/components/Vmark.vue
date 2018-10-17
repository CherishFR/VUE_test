<template>
    <div class="warp">
        标题：<input type="text" name='' v-model="titleHandler">
        <button class="btn btn-success" @click="addOneNote">提交</button>
        <div class="mark">
            <textarea rows="10" cols="100" class="editor" v-model="markDownHandler"></textarea>
            <div class="show" v-html="currentValue" ref="t"></div>
        </div> 
    </div>
    
</template>

<script>
    import Marked from 'marked'
    import $ from 'jquery'
    export default{
        name:"Vcontent",
        data(){
            return{
            }
        },
        methods:{
           addOneNote(){
               var _this = this;
               var json = {
                    title:this.titleHandler,
                    markdown:this.markDownHandler,
                    content:this.$refs.t.innerText
               }
            // 触发mutation的方法，这个方法只限于同步操作
            //   this.$store.commit("addOneNote",json)
            this.$store.dispatch("addOneNote",json)
           }
        },
        computed:{
            titleHandler:{
                set:function(newValue){
                    this.$store.state.note.title = newValue;
                },
                get:function(){
                    return this.$store.state.note.title;
                }
            },
            markDownHandler:{
                 set:function(newValue){
                    this.$store.state.note.markdown = newValue;
                },
                get:function(){
                    return this.$store.state.note.markdown;
                }
            },
            currentValue(){
                return Marked(this.markDownHandler)
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
        width: 780px;
        height: 400px;
        margin: 0 auto
    }
    .editor,.show{
        float: left;
        width: 387px;
        height: 400px;
        border: 1px solid #666
    }
</style>