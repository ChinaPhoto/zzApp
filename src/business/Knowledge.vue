<template>
    <div class="Knowledge">
        <div class= "navbarBox"  >
            <van-nav-bar title= "知识库"
                         @click-left="onClickLeftArrow"
                         fixed
                         class= "navbarTitle"
                         ref="navbarBox"
            >
                <van-icon name= "arrow-left" slot= "left" class= "navbarLeft"/>
            </van-nav-bar>
        </div>
        <div >
            <iframe src="http://192.168.0.186:85/doku.php" :height="height"></iframe>
        </div>
    </div>
</template>

<script>
    // import $http
    export default {
        name: "Knowledge",

        data() {
            return {
                height: 100,
            }
        },
        methods: {
            onClickLeftArrow() {
                this.$router.push("Homepage");
            }
        },
        created() {
            this.height = window.innerHeight-65

        }
    }
</script>

<style scoped lang= "less">
    .Knowledge{
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
            overflow: hidden;
        }
    }
</style>