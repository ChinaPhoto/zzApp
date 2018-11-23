<template>
    <div class="EqMonitoring">
        <div class= "navbarBox" >
            <van-nav-bar title= "实时监控"

                         @click-left="onClickLeftArrow"
                         @click-right="onClickRight"
                         fixed
                         class= "navbarTitle"
            >
                <van-icon name= "arrow-left" class= "navbarLeft" slot= "left"/>
                <span class= "navbarLeft" slot= "right"> {{rightText}} </span>
            </van-nav-bar>
        </div>
        <div class="EqMonitoringCon">
            <van-checkbox-group v-model="result" @change="selected">
                <div class= "MonitoringListboxTop "
                     v-for= "(item,index) in monitoringData"
                     :key= "index"
                     :class= "[
                     item.status== '生产中'? Green:'',
                     item.status== '停机中'? Red:'',
                     item.status== '未开机'? Gray:''
                     ]"
                     @click="listClick(index,item)">
                    <div class="top">
                        <div class="eqname">
                           {{item.eqName}}
                        </div>
                        <div class="status">
                            {{ item.status }}
                        </div>
                        <div class="speed" v-if= "item.speedNum">
                            生产速度
                            <span class="speedspan">({{ item.speedUnit }})</span>
                            :
                            <span>{{ item.speedNum }}</span>
                        </div>
                    </div>
                    <div class="border">
                    </div>
                    <div class="porname" >
                       <span v-if="item.proName">
                            {{ item.proName }}
                       </span>
                    </div>
                    <div class="bottom">
                        <div class="Bleft">
                            累计产量
                            <span class="bottomspan">({{ item.outputUnit }})</span>

                        </div>
                        <span class="bottomNumber">{{ item.outputNum }}</span>
                    </div>
                    <van-checkbox
                            v-if= "isFalse"
                            :name= item.id
                            class= "checkbox"
                            ref= "checkbox"
                    >

                    </van-checkbox>

                </div>
            </van-checkbox-group>
            <div class="MonitoringListboxBottom" v-if="isFalse">
                <div class="ListLeft" @click="aidJudge">
                    <van-checkbox v-model= "isSelectAll" @change="selectAll">
                        全选
                    </van-checkbox>
                </div>
                <div class="ListRight"  @click="reportClick">
                    <van-button type="default" size="small" >报表查看</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "EqMonitoring",
        data() {
            return {
                    rightText:'对比选择',
                    isFalse: false, // 对比状态 和取消状态的切换
                    isSelectAll: false, //全选选中
                    isAid: false,    //辅助判断
                    result:[], // 选中后的设备id;
                    resultAll: [], // 所有设备 id
                    monitoringData:  [
                            {
                                eqName: '米克朗400数控机床',
                                status: '生产中',
                                speedUnit: '包/分',
                                proName:'小饼干小饼干小饼干小饼干',
                                speedNum: 90,
                                outputUnit: '包',
                                outputNum: 999999,
                                id:'1'
                            },{
                                eqName: '米克朗500数控机床',
                                status: '未开机',
                                outputUnit: '包',
                                outputNum: 1,
                                id:'6'
                            },{
                                eqName: '罗德斯数控机床',
                                status: '停机中',
                                outputUnit: '包',
                                outputNum: 2,
                                id:'2'
                            },{
                                eqName: '罗德斯数控机床',
                                status: '停机中',
                                outputUnit: '件',
                                outputNum: 1,
                                id:'3'
                            },  {
                                eqName: '米克朗500数控机床',
                                status: '未开机',
                                outputUnit: '件',
                                outputNum: 2,
                                id:'4'
                            },  {
                                eqName: '米克朗400数控机床',
                                status: '生产中',
                                proName:'大饼干大饼干大饼干大饼干',
                                speedUnit: '件/分',
                                speedNum: 0.1,
                                outputUnit: '件',
                                outputNum: 999999,
                                id:'5'
                            }],
                    Green: "MonitoringListboxTopGreen",
                    Red: "MonitoringListboxTopRed",
                    Gray: "MonitoringListboxTopGray",
                }
            },
        methods: {
            onClickLeftArrow() {
                this.$router.go(-1);
            },
            onClickRight() {
               this.isFalse? this.comparedStatus() : this.cancelStatus()
            },

            // 对比选择时修改的状态
            comparedStatus() {
                this.rightText= "对比选择";
                this.isFalse= !this.isFalse
            },

            // 取消时的状态
            cancelStatus() {
                this.rightText= "取消";
                this.result = [];
                this.isFalse= !this.isFalse
            },
            // 选中的状态
            selected(data) {
                if(data.length == this.resultAll.length) {
                    this.isSelectAll = true;
                    this.isAid = true;
                }else {
                    this.isSelectAll = false;
                }
                console.log(this.result)
            },
           // 辅助事件
            aidJudge () {
                this.isAid = !this.isAid;
            },
            // 全选 全不选状态
            selectAll() {
                if (this.isSelectAll) {
                    this.result = this.resultAll
                }else if( !this.isSelectAll&& !this.isAid) {
                   this.result = [];
                }
            },
            // 非对比状态对比
            listClick(index,item) {
                if(this.isFalse) {
                    this.$refs.checkbox[index].toggle()
                }else {
                    this.$router.push({
                        name:'Report',
                        params:{
                            reportPage: '效率OEE',
                            id: item.id
                        }
                    })
                }

            },
            //对比状态 数据
            reportClick (){
                this.$router.push({
                    name: 'Report',
                    params: {
                        reportPage: '损失分析',
                        data:this.result
                    }
                })
            }
        },
        created () {
            this.monitoringData.forEach((val)=> {
                this.resultAll.push(val.id);
            });
        }
    }
</script>

<style scoped lang="less">
    .EqMonitoring {
        margin: 50px 0 60px;
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
        .EqMonitoringCon {
            padding:1px 15px;
            .MonitoringListboxTop {
                width: 100%;
                height: 99px;
                margin-top: 15px;
                padding-left: 3%;
                position: relative;
                .top {
                    display: flex;
                    flex: 1;
                    font-size: 14px;
                    color: #fff;
                    padding-top: 6px;
                    line-height:24px;
                    .eqname {
                        margin-left:1%;
                    }
                    .status {
                        margin-left:2%;
                        width: 50px;
                        height: 15px;
                        font-size: 12px;
                        line-height: 16px;
                        box-sizing: border-box;
                        border-radius: 6px;
                        text-align: center;
                        margin-top: 4px;
                    }

                    .speed {
                        margin-left: 3%;
                        .speedspan{
                            font-size: 12px;
                        }
                    }
                }
                .border {
                    width: 68%;
                    height: 2px;
                    position: relative;
                }
                .border:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    background: #fff;
                    width: 100%;
                    height: 1px;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
                    -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
                }
                .porname {
                    display: flex;
                    flex: 1;
                    font-size: 12px;
                    color: #fff;
                    padding-top:3px;
                    height: 20px;
                    line-height: 20px;

                }
                .bottom {
                    display: flex;
                    flex: 1;
                    font-size: 15px;
                    color: #fff;
                    margin-top: 4px;
                    .Bleft {
                        margin-top: 14px;
                        .bottomspan {
                            font-size: 13px;
                        }
                    }

                    .bottomNumber {
                        margin-left: 5%;
                        font-size: 34px;
                    }
                }
                .checkbox {
                    position: absolute;
                    top: 70px;
                    right: 15px;
                }
            }
            .MonitoringListboxTopRed {
                background-image: url(../../assets/images/red.png);
                background-size:100% 100%;
                .status {
                    background-color: #ffc4b9;
                    color: #ae280e;

                }
            }
            .MonitoringListboxTopGreen {
                background-image: url(../../assets/images/green.png);
                background-size:100% 100%;
                .status {
                    background-color: #efffbc;
                    color: #83aa0b;

                }
            }
            .MonitoringListboxTopGray {
                background-image: url(../../assets/images/gray.png);
                background-size:100% 100%;
                .status {
                    background-color: #efefef;
                    color: #969696;

                }
            }
            .MonitoringListboxBottom {
                width: 100%;
                height: 50px;
                background-color: #fff;
                border-top: 1px solid #ccc;
                position: fixed;
                left: 0;
                bottom: 0;
                display: flex;
                line-height: 50px;
                justify-content: space-between;
                margin-top:10px ;
                .ListLeft {
                    margin-left: 10%;
                    font-size: 12px;
                }
                .ListRight {
                    margin-right: 10%;
                }
            }
        }
    }
</style>