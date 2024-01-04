<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{length}})</div>
        </nav-bar>
        <cart-list></cart-list>

        <cart-bottom-bar></cart-bottom-bar>

    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
    name:'Cart',
    components:{
        NavBar,
        CartList,
        CartBottomBar
    },
    computed:{
        // ...mapGetters(['cartLength','cartList'])
        ...mapGetters({
            length:'cartLength',

        })
    }
}
</script>

<style scoped>
.cart{
    height: 100vh;
}
.nav-bar{
    color: aliceblue;
    font-weight: 700;
    background-color: var(--color-tint);
}
</style>