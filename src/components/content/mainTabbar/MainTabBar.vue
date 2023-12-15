<template>
    <tab-bar>
      <tab-bar-item path="/home" >
        <img src="~assets/img/tabbar/a1.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/b1.png" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <img src="~assets/img/tabbar/a2.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/b1.png" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <img src="~assets/img/tabbar/a3.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/b1.png" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img src="~assets/img/tabbar/a4.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/b1.png" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>