<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">我的笔记列表</h3>
                    </div>
                    <div class="panel-body">
                        <vnote-show></vnote-show>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    </div>
                    <div class="panel-body">
                        <vmark></vmark>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vmark from './Vmark.vue'
    import VnoteShow from './VnoteShow.vue'
    export default {
        name:"Vnote", 
        data(){
            return {
            }
        },
        components:{
            Vmark,
            VnoteShow
        }
    }
</script>

<style scoped>

</style>