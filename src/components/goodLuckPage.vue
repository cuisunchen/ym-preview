<template>
   <div class="goodLuckPage">
      <p class="pageTitle">好运</p>
      <div class="tabs">
         <div class="tab" @click="tabChange(0)"><span :class="{'active': tabIndex == 0}">祝您好运</span></div>
         <div class="tab" @click="tabChange(1)"><span :class="{'active': tabIndex == 1}">同城好运</span></div>
         <div class="tab" @click="tabChange(2)"><span :class="{'active': tabIndex == 2}">附近好运</span></div>
      </div>

      <div class="recommendWrap">
         <div class="list">
            <div class="recommendItem" v-if="dataObj.recommendType && (dataObj.recommendType == 5 || dataObj.recommendType == 6 || dataObj.recommendType == 5)">
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
               <p class="title">广告位招租广告位招租广告位招租</p>
            </div>
         </div>
      </div>

      <div class="lists">
         <div class="listItem" v-if="dataObj.type == 9">
            <p class="title">{{dataObj.title}}</p>
            <div class="content">
               <p class="status"><span>未读</span><span>未完成</span></p>
               <img :src="dataObj.homeTopImgUrl" alt="">
               <p class="info">
                  中奖率: {{Number(dataObj.maxNum) + Number(dataObj.middleNum1)+ Number(dataObj.middleNum2)+ Number(dataObj.middleNum3) + Number(dataObj.minNum) / Number(dataObj.totalNum)*100}}% 
                  最高奖励:{{dataObj.maxReward}}元</p>
            </div>
         </div>
         <div class="listItem" v-else>
            <p class="title">这个星期的计划</p>
            <div class="content">
               <p class="status"><span>已读</span><span>未完成</span></p>
               <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587043185297&di=822a2dcbb6bb8f5c5d300ea3f7b9eaae&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180809%2F66eaa6e7152d457d8818b553d840ae99.jpg" alt="">
               <p class="info">中奖率: 24% 最高奖励:100.00元</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   data() {
      return {
         tabIndex: 0,
         dataObj:{}
      }
   },
   watch: {
      $route(val){
         if(val.query){
            this.dataObj = val.query
            this.tabIndex = val.query.rangeType-1
         } if(this.$route.query.recommendType == 5){
            this.tabIndex = 0
         }else if(this.$route.query.recommendType == 6){
            this.tabIndex = 1
         }else if(this.$route.query.recommendType == 7){
            this.tabIndex = 2
         }
      }
   },
   created () {
      if(this.$route.query){
         console.log(this.$route.query)
         this.dataObj = this.$route.query
         if(this.$route.query.rangeType){
            this.tabIndex = this.$route.query.rangeType-1
         }else if(this.$route.query.recommendType == 5){
            this.tabIndex = 0
         }else if(this.$route.query.recommendType == 6){
            this.tabIndex = 1
         }else if(this.$route.query.recommendType == 7){
            this.tabIndex = 2
         }
      }
   },
   methods: {
      tabChange(index){
         this.tabIndex = index
      }
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
.goodLuckPage{

}
.goodLuckPage .tabs{
   display: flex;
   height: .5rem;
   background-color: #fff;
}
.goodLuckPage .tabs .tab{
   cursor: pointer;
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
}
.goodLuckPage .tabs .tab span{
   display: inline-block;
   line-height: .5rem;
   color: #666;
}
.goodLuckPage .tabs .tab span.active{
   color: #000;
   border-bottom: 1px solid #333;
}

.recommendWrap{
   padding: .1rem 0;
}
.recommendWrap .list{
   display: flex;
   padding: 0 .16rem;
}
.recommendWrap .list .recommendItem{
   cursor: pointer;
   width: 1.1rem;
   padding-bottom: .06rem;
   background-color: #fff;
}
.recommendWrap .list .recommendItem img{
   width: 100%;
   height: 1.01rem;
}
.recommendWrap .list .recommendItem .title{
   padding: 0 .1rem;
   text-overflow: -o-ellipsis-lastline;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   line-clamp: 2;
   -webkit-box-orient: vertical;
}
.recommendWrap .list .recommendItem:nth-child(2){
   margin: 0 .10rem;
}
.recommendWrap .list .recommendItem:last-child{
   margin-right: 0;
}
.lists{
   padding: 0 .16rem;
   background-color: #fff;
}
.lists .listItem{
   cursor: pointer;
   padding-bottom: .24rem;
   border-bottom: .01rem solid #f3f3f3;
}
.lists .listItem:last-child{
   border: none;
}
.lists .listItem .title{
   color: #000;
   line-height: .5rem;
}
.lists .listItem .content{
   position: relative;
}
.lists .listItem .content .status{
   position: absolute;
   top: .1rem;
   left: 0;
   right: 0;
   text-align: right;
   color: #fff;
}
.lists .listItem .content .status span{
   display: inline-block;
   border-radius: .02rem;
   margin-right: .1rem;
   padding: 0 .06rem;
}
.lists .listItem .content .status span:first-child{
   background-color: rgba(1, 1, 1, .5);
}
.lists .listItem .content .status span:last-child{
   background-color: rgba(104, 104, 104, .5);
}
.lists .listItem .content .status{
   position: absolute;
   left: 0;
   right: 0;
   text-align: right;
   color: #fff;
}
.lists .listItem .content img{
   display: block;
   width: 100%;
   height: 1.4rem;
   border-radius: .04rem;
}
.lists .listItem .content .info{
   position: absolute;
   right: .1rem;
   bottom: .1rem;
   line-height: .24rem;
   text-align: right;
   padding: 0 .06rem;
   color: #fff;
   background: rgba(0, 0, 0, .5);
   border-radius: .02rem;
}
</style>
