<template>
   <div class="questionPage">
      <p class="pageTitle">问答</p>
      <div class="swipper">
         <span v-if="dataObj.homeType != 1">轮播位</span>
         <img v-else :src="dataObj.homeTopImgUrl " alt="">
      </div>


      <div class="recommendWrap">
         <p class="label">今日推荐</p>
         <div class="list">
            <div class="recommendItem" v-if="dataObj.recommendType && dataObj.recommendType == 4">
               <img :src="dataObj.brand" alt="">
               <p class="title">{{dataObj.title}}</p>
            </div>
            <div class="recommendItem" v-else>
               <img src="../assets/people@2x.png" alt="">
               <p class="title">广告位招租</p>
            </div>
            <div class="recommendItem">
               <img src="../assets/people@2x.png" alt="">
               <p class="title">广告位招租</p>
            </div>
            <div class="recommendItem">
               <img src="../assets/people@2x.png" alt="">
               <p class="title">广告位招租</p>
            </div>
         </div>
      </div>

      <div class="questionsWrap">
         <p class="label">问答</p>
         <div class="item">
            <div class="wrap">
               <div class="brand">
                  <img v-if="dataObj.type && dataObj.type == 8" :src="dataObj.homeTopImgUrl" alt="" srcset="">
               </div>
               <div class="content">
                  <p class="title" v-if="dataObj.type && dataObj.type == 8">{{dataObj.title ? dataObj.title : '问答广告示例'}}</p>
                  <p class="title" v-if="!dataObj.type">问答广告示例</p>
                  <div class="tags">
                     <div class="tegItem" style="background-color: #999">未读</div>
                     <div class="tegItem" style="background-color: orange">附近</div>
                     <div class="tegItem" style="background-color: #987345">兴趣</div>
                     <div class="tegItem" style="background-color: green">可得</div>
                  </div>
                  <p class="info">
                     <span class="time">用时: 5s</span>
                     <span class="money">收入(元): <em>0.20</em></span>
                  </p>
               </div>
            </div>
         </div>
      </div>

      <div class="dialogBox" v-if="dataObj.homeType && dataObj.homeType == 3">
         <div class="wrap">
            <img :src="dataObj.homeTopImgUrl" alt="">
            <div class="close"><span class="closeIcon"></span></div>
         </div>
      </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   data() {
      return {
         dataObj: {}
      }
   },
   created () {
      if(this.$route.query){
         this.dataObj = this.$route.query
      }
      window.addEventListener('message',(event)=>{
         this.dataObj = {}
         if(event.data.recommendType){
            this.dataObj = event.data
         }else
         if(event.data.homeTopImgUrl){
            this.dataObj = event.data
         } 
      })
   },
   methods: {

   },
   components: {

   }
}
</script>

<style scoped>
.pageTitle{
   font-size: .16rem;
   text-align: center;
   line-height: .5rem;
   background-color: #fff;
}
.swipper{
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   height: 1.875rem;
   background-color: blueviolet;
}
.swipper span{
   color: #fff;
   font-size: .24rem;
}
.swipper img{
   width: 100%;
   height: 100%;
   background-color: blueviolet;
}
.label{
   font-size: .16rem;
   line-height: .5rem;
   padding: 0 .16rem;
}
.recommendWrap{
   padding-bottom: .2rem;
   background-color: #fff;
}
.recommendWrap .list{
   display: flex;
   padding: 0 .16rem;
}
.recommendWrap .list .recommendItem{
   width: 1.01rem;
   cursor: pointer;
}
.recommendWrap .list .recommendItem img{
   width: 100%;
   height: 1.01rem;
}
.recommendWrap .list .recommendItem .title{
   text-align: center;
   text-overflow: -o-ellipsis-lastline;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   line-clamp: 2;
   -webkit-box-orient: vertical;
}
.recommendWrap .list .recommendItem:nth-child(2){
   margin: 0 .20rem;
}
.recommendWrap .list .recommendItem:last-child{
   margin-right: 0;
}
.questionsWrap{
   margin-top: .14rem;
   background-color: #fff;
}
.questionsWrap .item{
   cursor: pointer;
   padding: 0 .16rem;
   margin-bottom: .2rem;
}
.questionsWrap .item:last-child{
   margin-bottom: 0;
}
.questionsWrap .item:last-child .wrap{
   border: none;
}
.questionsWrap .item .wrap{
   display: flex;
   padding-bottom: .2rem;
   border-bottom: .01rem solid #e3e3e3;
}
.questionsWrap .item .brand{
   width: .8rem;
   height: .8rem;
   background: yellow;
   border-radius: .06rem;
   overflow: hidden;
}
.questionsWrap .item .brand img{
   width: 100%;
   height: 100%;
}
.questionsWrap .item .content{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   flex: 1;
   padding-left: .1rem;
}
.questionsWrap .item .content .title{
   font-size: .14rem;
   line-height: .2rem;
   height: .4rem;
   text-overflow: -o-ellipsis-lastline;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   line-clamp: 2;
   -webkit-box-orient: vertical;
}
.questionsWrap .item .content .tags{
   display: flex;
}
.questionsWrap .item .content .tags .tegItem{
   display: flex;
   width: .34rem;
   height: .18rem;
   color: #fff;
   align-items: center;
   justify-content: center;
   border-radius: .02rem;
   margin-right: .1rem;
}
.questionsWrap .item .content .info{
   text-align: right;
}
.dialogBox{
   position: fixed;
   top: .5rem;
   bottom: .5rem;
   left: 0;
   right: 0;
   background-color: rgba(0,0,0, .5);
}
.dialogBox .wrap{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 80%;
   height: 100%;
   margin: 0 auto;
}
.dialogBox .wrap img{
   width: 100%;
   height: 60%;
   /* border-radius: .08rem; */
}
.dialogBox .wrap .close{
   width: .4rem;
   height: .4rem;
   margin: .2rem auto;
   border: .01rem solid #fff;
   border-radius: 50%;
}
.dialogBox .wrap .close .closeIcon{
   display: inline-block;
   width: .24rem;
   height: .24rem;
   margin: .08rem;
   background: url('../assets/close.png') no-repeat center center;
   background-size: cover;
}
</style>
