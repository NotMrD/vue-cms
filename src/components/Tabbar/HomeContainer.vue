<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img class="swipe-images" src="../../images/swipe1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="swipe-images" src="../../images/swipe2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="swipe-images" src="../../images/swipe3.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 六宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                            <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                     <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                     <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
    </div>
</template>

<script>
    import {Toast}from "mint-ui"
    export default{
        data(){
            return{
                lunboList:[]
            };
        },
        // created(){
        //     this.getLunbotu()
        // },
        methods:{
            // getLunbotu(){
            //     this.$http.get("api/getlunbotu").then(result=>{
            //         if(result.body.status===0){
            //             this.lunboList=result.body.message
            //         }else{
            //             Toast("加载轮播图失败")
            //         }
            //     }
                
            //     );
            // }
        }
    }
   
</script>

<style lang="scss" scoped>
     .mint-swipe{
         height: 200px;
         .mint-swipe-item{
             &:nth-child(1){
                background-color: red;
             }
             &:nth-child(2){
                background-color: blue;
             }
             &:nth-child(3){
                background-color: green;
             }
       
         }
        .swipe-images{
            width: 100%;
            height: 100%;
        }
    }
    .mui-grid-view.mui-grid-9{ 
        background-color: white;
        border: none;
        img{
            width: 50%;
            height:50%;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0px;
        .mui-media-body{
        font-size: 12px;
        }
    }
    
</style>