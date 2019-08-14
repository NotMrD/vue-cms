<template>
    <div class="newsinfoContainer">
        <h3 class="newsinfoTitle">{{newsinfo.title}}</h3>
        <p class="newsinfoSubtitle">
        <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
        <span>点击：{{newsinfo.click}}</span>
        </p>
        <hr>
        <div class="newsinfoContent" v-html="newsinfo.content"></div>
    </div>
</template>

<style lang="scss">
    .newsinfoContainer{
        padding: 0 4px;
        .newsinfoTitle{
            font-size: 14px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .newsinfoSubtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .newsinfoContent{
            img{
                width: 100%;
            }
        }
    }
</style>

<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:[]
        }
    },
    created(){
        this.getNewsinfo()
    },
    methods:{
        getNewsinfo(){
            this.$http.get("api/getnew/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.newsinfo=result.body.message[0]
                    console.log(this.newsinfo)
                }else{
                    Toast('获取新闻详情失败')
                }
            })
        }
    }
}
</script>
