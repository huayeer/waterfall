<template>
  <div ref="box">
  </div>
</template>

<script>
  import waterfall from '@/assets/waterfall'
  import axios from 'axios'
  export default {
    name: "Waterfall",
    data () {
      return {
        clientWidth: document.body.clientWidth,
        list: []
      }
    },
    mounted () {
      let box = this.$refs.box;
      let boxItems = box.children;

      axios.get('/api/list')
        .then((res) =>  {
          let datas = res.data.list
          datas.forEach((v) => {
            let html = "<div class='item'><img src='" + v.img_src + "' /></div>"
            box.innerHTML += html
          });

          let imgList = datas.map((v) => {
            return v.img_src
          });

          let promiseAll = [], img = [], imgTotal = imgList.length;
          for(let i = 0 ; i < imgTotal ; i++){
            promiseAll[i] = new Promise((resolve, reject)=>{
              img[i] = new Image()
              img[i].onload = function(){
                //第i张加载完成
                resolve(img[i])
              }
              img[i].src = imgList[i]
            })
          }
          let self = this
          Promise.all(promiseAll).then((img)=>{
            // 初始状态
            waterfall.init(box, boxItems, self.clientWidth)

            // 浏览器尺寸改变
            window.onresize = function () {
              self.clientWidth = document.body.clientWidth
            }

            // 滚动后状态
            window.onscroll = function () {
              waterfall.afterScroll(box, boxItems, datas)
            }
          })
        })
    },
    watch: {
      clientWidth (v) {
        let box = this.$refs.box;
        let boxItems = box.children;
        if (!this.timer) {
          let self = this
          setTimeout(function () {
            waterfall.waterfall(box, boxItems, v)
            self.timer = false
          }, 400)
        }

      }
    }
  }
</script>
<style>
  img {
    width: 220px;
    display: block;
  }
  .item {
    box-shadow: 2px 2px 2px #999;
    position: absolute;
  }
</style>
