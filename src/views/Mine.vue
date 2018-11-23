<template>
    <div class="mian">
        <div class= "navbarBox">
            <van-nav-bar title= "admin" fixed  class= "navbarTitle"/>
        </div>
        <div class="mainBox">
            <van-cell title="修改密码" is-link to="ChangePassword" />
            <van-cell title="注销" is-link  />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mine"
    }
</script>

<style scoped lang="less">
 .mian {
     margin-top: 50px;
     .navbarBox {
         .navbarTitle {
             height: 50px;
             line-height:  50px;
             background-color: #323542;
             color: #fff;
         }
     }
     .mainBox {

     }
 }
</style>