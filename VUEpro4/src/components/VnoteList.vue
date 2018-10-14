<template>
        <ul>
            <VnoteItem  v-for="(index,item) in getAllDatas" :data='item'></VnoteItem>
        </ul>
</template>

<script>
import VnoteItem from './VnoteItem'
    export default {
        name:"Vnote",
        data(){
            return {

            }
        },
        components:{
            VnoteItem
        },
        computed:{
            // vuex的使用: 5.使用store中的数据
            getAllDatas(){
                return this.$store.state.allList;
            }
        }
    }
</script>

<style scoped>

</style>