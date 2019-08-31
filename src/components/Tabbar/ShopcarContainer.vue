<template>
<div class="shopcar-container">
  
     <div class="good-list">
       <div class="mui-card" v-for="(item,i) in shopcarlist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <Shopcar :initCount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></Shopcar>
                                <!-- :initCount="$store.getters.getGoodsCount[item.id]" -->
                                <span class="price">￥{{item.sell_price}}</span>  
                                <a @click.prevent="remove(item.id,i)">删除</a>  
                            </p>
                        </div>
					</div>
				</div>
			</div>
    </div> 

      <div class="good-list">
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner total">
						<div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndTotal.count}}</span>件，
                            总价<span class="red">￥{{$store.getters.getGoodsCountAndTotal.total}}</span></p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
    </div>   


</div>
</template>

<script>
import Shopcar from "../subcomponents/shopcarBox.vue"
export default{
    data(){
        return{
            shopcarlist:[]
        }
    },
    created(){
        this.getShopcarList()
        // console.log(this.$store.getters.getGoodsCount)
    },
    methods:{
        getShopcarList(){
            var idArr=[]
            this.$store.state.car.forEach(element => {
                idArr.push(element.id)
            });
            if(idArr.length<=0){
                return
            }
            this.$http.get("api/goods/getshopcarlist/"+idArr.join(",")).then(result=>{
                if(result.body.status===0){
                    this.shopcarlist=result.body.message
                }
            })  
        },
        remove(id,i){
            this.shopcarlist.splice(i,1)
            this.$store.commit('removeGoodsInfo',id)
        },
        selectedChange(id,val){
            this.$store.commit('updateSelected',{id,selected:val})
        }
    },
    components:{
        Shopcar
    }
}

</script>

<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
    }
    .good-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size:13px;
        }
        .info{
            p{
                display: inline-block;
                 .price{
                    color: red;
                    font-weight: bold;
                }
            }

        }
        .total{
            display: left;
            justify-content: space-between;
            align-content: space-betweenl;
            .red{
                font-size: 16px;
                font-weight: bold;
                color: red;
            }
        }
    }
</style>