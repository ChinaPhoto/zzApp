<template>
    <div class="report">
        <div class= "navbarBox" >
            <van-nav-bar title= "现在报表"

                         @click-left="onClickLeftArrow"
                         fixed
                         class= "navbarTitle"
            >
                <van-icon name= "arrow-left" class= "navbarLeft" slot= "left"/>
            </van-nav-bar>
        </div>
        <div>
            <iframe src="https://www.baidu.com" :height= "height"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Report",
        data () {
            return {
                data: {},
                height: 1000
            }
        },
        methods: {
            getRouterData() {
                this.data = this.$route.params;
                console.log(this.data)
            },
            onClickLeftArrow() {
                this.$router.go(-1);
            }
        },
        created() {
            this.getRouterData();
            this.height =  window.innerHeight-50
        }
    }
</script>

<style scoped lang="less">
    .report {
        margin-top: 50px;
        .navbarBox {
            .navbarTitle {
                height: 50px;
                line-height: 50px;
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