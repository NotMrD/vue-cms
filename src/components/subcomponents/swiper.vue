<template>
    <div>
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.id" >
                <img :src="item.img" alt="" :class="{full:isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{

    },
    props:["lunboList","isfull"]
}
</script>

<style lang="scss" scoped>
  .mint-swipe{
         height: 200px;
        .mint-swipe-item{
            text-align:center;
         }
        img{
            height: 100%;
            
        }
        .full{
            // 确定是否自适应宽度
             width: 100%;
        }
    }

</style>