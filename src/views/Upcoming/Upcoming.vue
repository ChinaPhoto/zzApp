<template>
    <div class="application">
        <div class= "navbarBox" >
            <van-nav-bar title= "待办任务"
                         @click-left="onClickLeftArrow"
                         fixed
                         class= "navbarTitle"
            >
                <van-icon name= "arrow-left" slot= "left" class= "navbarLeft"/>
            </van-nav-bar>
        </div>
        <van-search placeholder="请输入搜索关键词" v-model="value" />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    @load="onLoad"
            >
                <TaskList @taskList= "taskList" :listData= "listData"/>
            </van-list>
        </van-pull-refresh>

    </div>
</template>

<script>
    import TaskList from 'Com/TaskList'
    export default {
        name: "Application",
        components:{
            TaskList
        },
        data () {
            return {
                value: '',
                listData:[  // list 列表数据
                    {
                        title: '我是测试数据1',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据2',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据3',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '提出'
                    },{
                        title: '我是测试数据4',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '实施'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    }
                ],
                loading: false,
                finished: false,
                isLoading: false
            }
        },
        methods: {
            // 返回上一级的路由配置
            onClickLeftArrow (){
                this.$router.go(-1);

            },
            // list 组件 点击传递的参数
            taskList(data) {
                let  target = data.event.target;
                while(target != data.ul) {
                    if(target.tagName.toLowerCase() == 'li'){
                        console.log(target);
                        break;
                    }
                    target = target.parentNode;
                }
            },

            // 上拉加载
            onLoad(){
                setTimeout(() => {
                    this.listData.forEach((value) =>{
                        this.listData.push(value)
                    });
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.listData.length >= 18) {
                        this.finished = true;
                    }
                }, 2000);
            },
            //下拉刷新
            onRefresh(){
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.finished =false;
                    this.listData = [{
                        title: '我是测试数据1',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据2',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据3',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '提出'
                    },{
                        title: '我是测试数据4',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '实施'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    },{
                        title: '我是测试数据5',
                        time: '10月9日 2:49',
                        id: 'REQ2016030030',
                        name: 'B11-生产经理',
                        status: '改善报告'
                    }]
                    this.onLoad()
                },1000)

            }
        }
    }
</script>

<style scoped lang="less">
    .application{
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