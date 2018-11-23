<template>
    <div class="processBox">
        <div class= "navbarBox" >
            <van-nav-bar title= "发起流程"
                         @click-left="onClickLeftArrow"
                         fixed
                         class= "navbarTitle"
            >
                <van-icon name= "arrow-left" slot= "left" class= "navbarLeft"/>
            </van-nav-bar>
        </div>
        <div class="">
            <Collapse :collapseDate= "collapseDate"></Collapse>
        </div>
    </div>
</template>

<script>
    import Collapse from "Com/Collapse"
    export default {
        name: "ProcessStart",
        components: {
            Collapse
        },
        data(){
            return {
                collapseDate: [
                    {
                        title: '我是测试1数据',
                        name:'1',
                        array: [{name:'那是谁',id:'11'}, {name:'那是谁',id:'12'}, {name:'那是谁',id:'13'}]
                    }, {
                        title: '我是测试2数据',
                        name:'2',
                        array: [{name:'那是谁',id:'22'}, {name:'那是谁',id:'21'}, {name:'那是谁',id:'23'}]
                    }, {
                        title: '我是测试3数据',
                        name:'3',
                        array: [{name:'那是谁',id:'31'}, {name:'那是谁',id:'32'}, {name:'那是谁',id:'33'}]
                    }
                ]
            }
        },
        methods: {
            onClickLeftArrow() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="less">
    .processBox{
        margin: 50px 0 60px;
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
    }
</style>