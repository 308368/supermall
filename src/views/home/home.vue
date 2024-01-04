<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <tab-control class="tab-control"  :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"></tab-control>
        <scroll 
        class="content" 
        ref="scroll" 
        :probe-type="3" 
        @scroll="contentScroll"
        :pull-up-load="true"
        @pullingUp="loadMore"
        >
                <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
                <recommend-view :recommends="recommends"></recommend-view>
                <feature-view></feature-view>
                <tab-control class="tab-control"  :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
                <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'


import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'


import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
import {debounce} from '@/common/utils.js'
import {itemListenerMixin,backTopMixin} from '@/common/mixin.js'







export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
    },
    mixins:[itemListenerMixin,backTopMixin],
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                "pop":{page:0 ,list:[]},
                "new":{page:0 ,list:[]},
                "sell":{page:0 ,list:[]}
            },
            currentType:'pop',
            tabOffsetTop:0,
            isTabFixed:false,
            saveY:0,
            
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    destroyed(){
        console.log("destroyed");
    },
    activated(){
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()
    },
    deactivated(){
        this.saveY=this.$refs.scroll.getScrollY()
        this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    created(){
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    mounted(){
        // const refresh=debounce(this.$refs.scroll.refresh,200)
        // this.itemImgListener=()=>{
        //     refresh()
        // }
        // this.$bus.$on('itemImageLoad',this.itemImgListener)
        // console.log(this.$refs.TabControl.$el.offsetTop);
    },
    methods:{
        //时间监听相关的方法
        
        tabClick(index){
            switch (index) {
                case 0:
                    this.currentType='pop'
                    break;
                case 1:
                    this.currentType='new'
                    break
                case 2:
                    this.currentType='sell'
                    break
            }
            this.$refs.tabControl1.currentIndex=index;
            this.$refs.tabControl2.currentIndex=index;
        },
        contentScroll(position){
            // position.y<1000
            this.listenShowBack(position)

            this.isTabFixed=(-position.y)>this.tabOffsetTop
        },
        loadMore(){
            this.getHomeGoods(this.currentType) 
        },
        swiperImageLoad(){
            this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
        },

        // 网络请求相关的方法
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
            // this.result=res;
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
        })
        },
        getHomeGoods(type){
            const page=this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page+=1
                this.$refs.scroll.finishPullUp()
        })
        },

        
    }
}
</script>

<style scoped>
    #home{
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .tab-control{
        background-color: aliceblue;
        position: relative;
        z-index: 9;
    }
    .content{
        overflow: hidden;
        position: absolute;
        top:44px;
        bottom: 49px;
        left: 0;
        right: 0;
        /* height: calc(100%-93px);
        overflow: hidden;
        margin-top: 44px; */
    }

</style>