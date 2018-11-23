<template>
    <div>
        <ul @click= "lists" class= "listbox" ref="listUl">
            <li v-for="(item, index) in listData" :key="index" :data-id="item.id">
               <div>
                   <van-row class= "listRow listRow1">
                       <van-col span= "18">
                           <div class= "listLeft">
                               <span> {{ item.title }} </span>
                           </div>
                       </van-col>
                       <van-col span= "6">
                           <div  class= "listRight">
                               <span> {{item.time }} </span>
                           </div>
                       </van-col>
                   </van-row>
                   <van-row class= "listRow listRow2">
                       <van-col span= "24">
                           <div class= "listLeft">
                               <span> {{item.id}} </span>
                           </div>
                       </van-col>

                   </van-row>
                   <van-row class= "listRow listRow3">
                       <van-col span= "16">
                           <div class= "listLeft">
                               <span> {{ item.name }} </span>
                           </div>
                       </van-col>
                       <van-col span= "8">
                           <div  class= "listRight">
                               <span> {{item.status}} </span>
                           </div>
                       </van-col>
                   </van-row>
               </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TaskList",
        props:{
            listData: {
                type:Array,
                default () {
                    return []
                }
            }
        },
        methods:{
            lists(event) {
                let ul = this.$refs.listUl;
                this.$emit('taskList', {event, ul})
            }
       }
    }
</script>

<style scoped lang="less">
    .listbox {
        width: 100%;
        li {
            padding: 8px 10px;
            font-size: 12px;
            border-bottom: 1px solid #ccc;
            .listRow {
                line-height: 22px;
                .listLeft {
                    text-align: left;
                    color: #000;

                }
                .listRight {
                    text-align: right;
                    color: #939393;

                }
            }
            .listRow1 {
                .listLeft {
                    font-size:16px;
                }
            }
            .listRow2 {
                .listLeft {
                    color: #939393;
                }
            }
            .listRow3 {
                .listLeft {
                    color: #939393;
                }
                .listRight {
                    font-size: 14px;
                    font-weight: 600;
                    color: #009600;
                }
            }

        }
    }
</style>