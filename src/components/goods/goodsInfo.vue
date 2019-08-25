<template>
    <div class="goodsinfo-container">

        <!-- 小球 -->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
         <div class="ball" v-show="ballflag" id="ball"></div>
        </transition>
       

            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<Swiper :lunboList="lunboList" :isfull="false"></Swiper>
					</div>
				</div>
			</div>
    
			<div class="mui-card">
				<div class="mui-card-header">{{goodsInfo.title}}</div>
				    <div class="mui-card-content">
					    <div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价:
                            <span class="now_price">￥{{goodsInfo.sell_price}}</span>
                        </p>
                        <p>购买数量：
                            <numberBox @getCount="getSelectedCount" :max="goodsInfo.stock_quantity"></numberBox> 
                        </p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        </p>
                        </div>
				    </div>
            </div>       

            
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>商品货号:{{goodsInfo.goods_no}}</p>
                        <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
                        <p>上架时间：{{goodsInfo.add_time|dateFormat}}</p>   
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="getDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="getGoodsComment(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>

<script>
import Swiper from '../subcomponents/swiper.vue'
import numberBox from '../subcomponents/numberBox.vue'

         
export default {
    data(){
        return{
            lunboList:[],
            id:this.$route.params.id,
            goodsInfo:[],
            ballflag:false,
            selectedCount:1
        }
    },
    created(){
        this.getLunbotu()
        this.getGoodsInfo()
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status===0){
                    result.body.message.forEach(element => {
                        element.img=element.src
                    });
                     this.lunboList=result.body.message
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.goodsInfo=result.body.message[0]
                }
            })
        },
        getDesc(id){
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        getGoodsComment(id){
             this.$router.push({name:'goodscomment',params:{id}})
        },
        addToShopCar(){
            // 添加购物车
            this.ballflag=!this.ballflag
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)"
        },
        enter(el){
            const ballPosition=document.getElementById("ball").getBoundingClientRect()
            const badgePosition=document.getElementById("badge").getBoundingClientRect()
            const xDist=badgePosition.left-ballPosition.left
            const yDist=badgePosition.top-ballPosition.top

            el.offsetWidth;
            el.style.transform=`translate(${xDist}px,${yDist}px)`
            el.style.transition="all 1s cubic-bezier(.44,-0.25,.55,1.32)"
        },
        afterEnter(el){
            this.ballflag=!this.ballflag
        },
        getSelectedCount(count){
            this.selectedCount=count
            console.log(this.selectedCount)
        }
    },
    components:{
        Swiper,
        numberBox  
    }
}
</script>

<style lang="scss" scoped>
    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;
    }
    .now_price{
        font-size:14px;
        color: red;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin:15px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index:99;
        top:390px;
        left:146px;

    }
</style>