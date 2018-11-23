<template>
    <div class="box">

        <!-- header -->
       <div class= "navbarBox">
           <van-nav-bar title= "主页"
                        @click-left="onClickLeft"
                        fixed
                        class= "navbarTitle"
           >
               <van-icon name= "wap-nav" slot= "left" class= "navbarLeft"/>
           </van-nav-bar>
       </div>

        <!-- button组件 -->
        <div class="homeButtonBox">
            <HomeButton :buttonData= "buttonData" :numberData= "numberData"/>
        </div>

        <!-- 弹出层 -->
        <div class="popupBox">
            <van-popup v-model= "popupShow" position= "left" >
                <PopupPage :PopupData="PopupData"  @popupCellClick= cellClick></PopupPage>
            </van-popup>
        </div>

    </div>
</template>

<script>
    import HomeButton from 'Com/HomeButton'
    import PopupPage from 'Com/PopupPage'
    export default {
        name: "Upcoming",
        components:{
            HomeButton,
            PopupPage
        },
        data() {
            return {
                popupShow: false, // popup弹窗显示显示隐藏
                PopupData:[ // 弹出层数据
                    {title: "流程管理", linkname: "Upcoming"},
                    {title: "设备状态监控", linkname: "EqMonitoring"},
                    {title: "商业智能", linkname: "Upcoming"},
                    {title: "知识库", linkname: "Knowledge"},
                    ],
                buttonData:[ // button组件数据
                    {
                        iconname: "iconfont icon-tubiaolunkuo_huaban",
                        title: "在途申请",
                        linkname: "Application"
                    },{
                        iconname: "iconfont icon-renwujihua",
                        title: "待办任务",
                        linkname: "Upcoming"
                    }, {
                        iconname: "iconfont icon-gongkai",
                        title: "公开/参半",
                        linkname: "Upcoming"
                    }, {
                        iconname: "iconfont icon-jieshushijian",
                        title: "完成流程",
                        linkname: "Upcoming"
                    }, {
                        iconname: "iconfont icon-kaishishijian",
                        title: "发起流程",
                        linkname: "ProcessStart"
                    }, {
                        iconname: "iconfont icon-ic_opt_feature",
                        title: "外出设置",
                        linkname: "Upcoming"
                    }, {
                        iconname: "iconfont icon-zhanghaoguanli",
                        title: "账号信息",
                        linkname: "Upcoming"
                    }, {
                        iconname: "iconfont icon-zuzhijiegou",
                        title: "组织结构",
                        linkname: "Upcoming"
                    }, {
                        iconname: "iconfont icon-huiyikaihuitaolun",
                        title: "讨论流程",
                        linkname: "Upcoming"
                    }
                ],
                numberData:[1,2,3,4] // 信息通知栏的

            }
        },
        methods: {
            onClickLeft(){
               this.popupShow = true;
            },
            cellClick(obj){
                this.popupShow = false;
                switch (obj.index) {
                    case 0:
                        this.$router.push({name:obj.name});
                        break;
                    case 1:
                        this.$router.push({name:obj.name});
                        break;
                    case 2:
                        this.$router.push({name:obj.name});
                        break;
                    case 3:
                        this.$router.push({name:obj.name});
                        break;
                }
            }
        }

    }
</script>

<style scoped  lang="less">
    .box {
        width: 100%;
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
        .homeButtonBox {
            padding: 80px 5% 0 5%;
        }
        .van-popup--left {
            width: 65%;
            height: 100%;
            background-color: #fafafa;
        }
    }

</style>