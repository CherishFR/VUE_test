<template>
    <header class="header">
        <div class="nav">
            <div class="logo">
                <img :src="imgSrc">
            </div>
            <div class="info">
                <button>注册</button>
                <button>登陆</button>
            </div>
        </div>
    </header>
    
</template>

<script>
    import imgSrc from '../assets/logo.png'
    export default{
        name:"Vheader",
        data(){
            return{
                imgSrc:imgSrc
            }
        }
        
    }
</script>

// scoped让当前的样式属性只对当前的标签起作用
<style scoped>
    .header{
        width: 100%;
        height: 48px;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 #c9c9c9
    }
    .header .nav{
        width: 1440px;
        height: 48px;
        margin: 0 auto;
        background-color: transparent;
    }
    .logo{
        width: 100px;
        height: 48px;
        float: left;
    }
    .logo img{
        width: 48px;
        height: 48px;
    }
    .nav .info{
        float: right;
        width: 200px;
        height: 48px;
    }
    .info button{
        width: 80px;
        height: 48px;
        float: left;
    }
</style>

