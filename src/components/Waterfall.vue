<template>
  <div ref="box">
    <div class="item"><img src="/static/images/timg1.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg2.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg3.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg4.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg5.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg6.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg7.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg8.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg9.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg10.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg11.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg12.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg13.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg14.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg15.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg16.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg17.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg18.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg19.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg1.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg2.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg3.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg4.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg5.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg6.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg7.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg8.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg9.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg10.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg11.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg12.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg13.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg14.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg15.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg16.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg17.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg18.jpeg" alt=""></div>
    <div class="item"><img src="/static/images/timg19.jpeg" alt=""></div>
  </div>
</template>

<script>
  import waterfall from '../assets/waterfall'
  export default {
    name: "Waterfall",
    data () {
      return {
        clientWidth: document.body.clientWidth,
      }
    },
    mounted () {
      let box = this.$refs.box;
      let item = box.children;
      let self = this
      waterfall.init(box, item, this.clientWidth)
      window.onresize = function () {
        self.clientWidth = document.body.clientWidth
      }
      window.onscroll = function () {
        waterfall.afterScroll(box, item)
      }
    },
    watch: {
      clientWidth (v) {
        let box = this.$refs.box;
        let item = box.children;
        if (!this.timer) {
          let self = this
          setTimeout(function () {
            waterfall.waterfall(box, item, v)
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
