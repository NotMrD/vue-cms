<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
				<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
				<input id="test" class="mui-input-numbox" type="number" value="1" 
                @change="countChanged" ref="numberbox"/>
				<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
    </div> 
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js"
export default {
    data(){
        return{

        }
    },
    mounted(){
        mui(".mui-numbox").numbox()
    },
    methods:{
        countChanged(){
            this.$emit("getCount",parseInt(this.$refs.numberbox.value))
        }
    },
    props:["max"],
    watch:{
        max:function(newval,oldval){
            mui(".mui-numbox").numbox().setOption("max",newval)
        }
    }
    
}
</script>