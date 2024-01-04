<template>
    <div class="wrapper" ref="aaa">
        <ul class="content">
            <button @click="btnClick">按钮</button>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
        </ul>
    </div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll';

export default {
    name:'Category',
    data(){
        return{
            scroll:null
        }
    },
    created(){
        
    },
    mounted(){
        this.scroll=new BScroll(document.querySelector('.wrapper'),{
            probeType:3,
            pullUpLoad:true
        })
        this.scroll.on('scroll',(position)=>{
            console.log(position);
        })
        this.scroll.on('pullingUp',()=>{
            console.log('上拉加载更多');
        })
    },
    methods:{
        btnClick(){
            console.log("btnClick");
        }
    }
    
}
</script>

<style scoped>
.wrapper{
    height: 150px;
    background-color: red;
    overflow: hidden;
    /* overflow-y: scroll; */

}
</style>