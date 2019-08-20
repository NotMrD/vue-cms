<template>
    <div class="photoInfo-container">
        <h3>{{photoInfo.title}}</h3>
        <p class="subtitle">
             <span>发表时间:{{photoInfo.add_time|dateFormat}}</span>
            <span>点击:{{photoInfo.click}}次</span>
        </p>
        <hr>

        <div class="thunmbs">
            <img class="preview-img" v-for="(item,i) in list" :src="item.src"
            height="100" @click="$preview.open(i,list)" :key="item.src">
        </div>

        <div class="content" v-html="photoInfo.content"></div>

        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<style lang="scss" scoped>
    .photoInfo-container{
        padding: 3px;
        h3{
        color: #26a2ff; 
        font-size:15px;

        margin:15px 0; 
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }  
        .thunmbs{
            img{
                margin: 10px;
                box-shadow: 0 0 8px;
            }
        }
    }


</style>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data(){ 
        return{
            id:this.$route.params.id,
            photoInfo:[],
            list:[]
        }
    },
    created(){
        this.getPhotoInfo(),
        this.getThunmbs()
    },
    methods:{
        getPhotoInfo(){
            this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.photoInfo=result.body.message[0]
                    console.log('ok')
                }else{
                    console.log('获取失败')
                }
            })
        },
        getThunmbs(){
            this.$http.get("api/getthumimages/"+this.id).then(result=>{
                if(result.body.status===0){
                    result.body.message.forEach(item => {
                        item.w=600
                        item.h=400
                        item.msrc=item.src
                    });
                   this.list=result.body.message
                   console.log(this.list)
                }
            })
        },
         handleClose () {
        console.log('close event')
      }
    },
    components:{
        'cmt-box':comment
    }
}
</script>