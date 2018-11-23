<template>
    <div class="ApplicationProcess">
        <div class= "navbarBox" >
            <van-nav-bar title= "xx流程申请"
                         @click-left="onClickLeftArrow"
                         fixed
                         class= "navbarTitle"
            >
                <van-icon name= "arrow-left" slot= "left" class= "navbarLeft"/>
            </van-nav-bar>
        </div>
        <div >
            <iframe src="https://www.baidu.com" :height= "height"></iframe>
        </div>
    </div>
</template>

<script>
    // import $http
    export default {
        name: "ApplicationProcess",

        data() {
            return {
                height: 100,
            }
        },
        methods: {
            onClickLeftArrow() {
                this.$router.go(-1);
            }
        },
        created() {
        this.height = window.innerHeight
        }
    }
</script>

<style scoped lang= "less">
    .ApplicationProcess{
        margin-top: 50px;
        .navbarBox {
            .navbarTitle {
                height: 50px;
                line-height:  50px;
                background-color: #323542;
                color: #fff;
                .navbarLeft {
                    color: #fff;
                }
            }
        }
        iframe {
            width: 100%;
        }
    }
</style>