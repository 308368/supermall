<template>
    <div class="check-button" :class="{check:isChecked}">
        <img src="@/assets/img/cart/tick.png" alt="">
    </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
.check-button{
    /* width: 70px;
    height: 20px; */
    border-radius: 50%;
    border: 2px solid #aaa;
    /* line-height: 40px; */
}
.check{
    background-color: red;
    border-color:red ;
}
</style>