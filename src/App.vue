<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <div class="footer">
      <div class="item" :class="pageIndex == 0?'active':''">
        <img :src="pageIndex == 0 ? require('./assets/home_fill@2x.png') : require('./assets/home@2x.png')" alt="">
        <p class="label">问答</p>
      </div>
      <div class="item" :class="pageIndex == 0?'active':''">
        <img :src="pageIndex == 1 ? require('./assets/luck_fill@2x.png'): require('./assets/luck@2x.png')" alt="">
        <p class="label">好运</p>
      </div>
      <div class="item">
        <img src="./assets/group@2x.png" alt="">
        <p class="label">米圈</p>
      </div>
      <div class="item">
        <img src="./assets/people@2x.png" alt="">
        <p class="label">我的</p>
      </div>
    </div>
    <div class="defaultPage" v-if="defalutPageShow">
      <span>点击预览效果按钮,查看效果</span>
    </div>
    <div class="screenAD" v-if="dataObj.homeType == 2">
      <img :src="dataObj.homeTopImgUrl" alt="" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      pageIndex:0,
      defalutPageShow: true,
      dataObj: {}
    }
  },
  watch: {
    $route(val){
      switch (val) {
        case '/':
          this.pageIndex = 0
          break;
        case '/pre-goodLuck':
          this.pageIndex = 1
          break;
      
        default:
          break;
      }
    }
  },
  created () {
    window.addEventListener('message',(event)=>{
      if(event.data.recommendType && (event.data.recommendType == 5 || event.data.recommendType == 6 || event.data.recommendType == 7)){
        this.$router.push({name:'pre-goodLuck',query:event.data })
        this.pageIndex = 1
      }else
      if(event.data.type && event.data.type == 9){
        this.$router.push({name:'pre-goodLuck',query:event.data })
        this.pageIndex = 1
      }else{
        this.$router.push({path:'/',query:event.data })
        this.pageIndex = 0
      }
      // if(){}
      if(event.data.homeTopImgUrl){
        this.defalutPageShow = false
        this.dataObj = event.data
      } 
    })
  },
  methods: {
    goPage(index){
      this.pageIndex = index
      switch (index) {
        case 0:
          this.$router.push('/')
          break;
        case 1:
          this.$router.push('/pre-goodLuck')
          break;
      
        default:
          break;
      }
      
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: .12rem;
  background-color: #e6e6e6;
}
</style>
<style scoped>
.main{
  flex: 1;
  overflow-y: scroll;
}
.footer{
  height: .5rem;
  display: flex;
  background-color: #fcfcfc;
}
.footer .item{
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer .item.active .label{
  color: #333;
}
.footer .item img{
  width: .26rem;
  height: .26rem;
}
.footer .item .label{
  font-size: .12rem;
  color: #666;
}
.screenAD{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: blueviolet;
}
.screenAD img{
  width: 100%;
  height: 100%;
}
.defaultPage{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.defaultPage span{
  color: #333;
  font-size: .24rem;
}
</style>
