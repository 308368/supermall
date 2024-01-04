import {debounce} from '@/common/utils.js'
import BackTop from '@/components/content/backTop/BackTop.vue'
export const itemListenerMixin = {
    data(){
        return{
            itemImgListener :null,
            refresh:null
        } 
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 200)
        this.itemImgListener = () => {
            this.refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)
        // console.log('我是混入的内容');
    }
}

export const backTopMixin={
    components:{
        BackTop
    },
    data(){
        return{
            isShowBackTop:false
        }
    },
    methods:{
    backClick(){
            this.$refs.scroll.scrollTo(0,0,500)
        },
        listenShowBack(position){
        this.isShowBackTop=(-position.y)>1000
    }
    }
    
}