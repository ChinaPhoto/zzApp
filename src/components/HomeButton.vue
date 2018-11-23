<template>
    <div class="ProcessButtonBox">
        <ul class="clearfix">
           <li class="fl"  v-for= "(item,index) in buttonData" :key="index">
               <router-link tag ="li" :to= "{name: item.linkname}">
                   <div class="ProcessLi">
                       <i :class= item.iconname ></i>
                       <h1> {{ item.title }} </h1>
                       <div class="ProcessButtonTag" v-if="numberData[index]">
                           <van-tag round type="danger"> {{ numberData[index] }} </van-tag>
                       </div>
                   </div>
              </router-link>
           </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProcessButton",
        props:{
            buttonData: {
                type: Array,
                default() {
                    return []
                }
            },
            numberData: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .ProcessButtonBox {
        width: 100%;
        li {
            width: 32%;
            margin-top: 20px;
            .ProcessLi{
                width: 108px;
                height: 108px;
                border: 1px solid #ccc;
                border-radius: 108px;
                position: relative;
                .iconfont {
                    display: block;
                    line-height: 100px;
                    text-align: center;
                    font-size: 36px;
                }
                h1 {
                    position: absolute;
                    bottom: 10px;
                    left: 24px;
                    font-size: 14px;
                }
                .ProcessButtonTag {
                    position: absolute;
                    top: 10px;
                    right: 0;
                }
            }

        }
        li:nth-child(2),li:nth-child(5),li:nth-child(8) {
           margin-left: 2%;
            margin-right: 2%;
        }
    }
</style>