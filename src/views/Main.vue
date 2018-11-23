<template>
   <div>
       <div class="MainDiv">
           <router-view/>
       </div>
       <van-tabbar v-model="active"  @change="changeTabbar(active)" class= "tabbarFoot">
           <van-tabbar-item icon="setting">首页</van-tabbar-item>
           <van-tabbar-item icon="contact" >我的</van-tabbar-item>
       </van-tabbar>
   </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                active: 0
            }
        },
        methods: {
            changeTabbar(active) {
                switch(active){
                    case 0 :
                        this.$router.push({name:'Homepage'});
                        break;
                    case 1 :
                        this.$router.push({name:'Mine'});
                        break;
                }
            }
        },
        created() {
            this.changeTabbar(0);
            console.log(window.location.href)
        }
    }
</script>

<style scoped>
    .tabbarFoot {
        height: 60px;
        line-height: 60px;
        background-color: #f6f6f6;
    }
</style>