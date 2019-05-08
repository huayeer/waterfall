var gap = 10;
export default {
  // 初始状态
  init: function (box, boxItems) {
    this.waterfall(box, boxItems, this.getClient().width)
  },
  // 页面滚动后
  afterScroll: function (box, boxItems, datas) {
    if (this.getClient().height + this.getScrollTop() >= boxItems[boxItems.length - 1].offsetTop) {
      for (var i = 0; i < datas.length; i++) {
        var div = document.createElement("div");
        div.className = "item";
        div.innerHTML = '<img src="' + datas[i].img_src + '" alt="">';
        box.appendChild(div);
      }
      this.waterfall(box, boxItems, this.getClient().width);
    }
  },

  waterfall: function (box, boxItems, clientWidth) {
    // 1- 确定列数  = 页面的宽度 / 图片的宽度
    var pageWidth = clientWidth;
    var itemWidth = boxItems[0].offsetWidth;
    var columns = parseInt(pageWidth / (itemWidth + gap));

    var arr = [];
    for (var i = 0; i < boxItems.length; i++) {
      if (i < columns) {
        // 2- 确定第一行
        boxItems[i].style.top = 0;
        boxItems[i].style.left = (itemWidth + gap) * i + 'px';
        arr.push(boxItems[i].offsetHeight);
      } else {
        // 其他行
        // 3- 找到数组中最小高度  和 它的索引
        var minHeight = arr[0];
        var index = 0;
        for (var j = 0; j < arr.length; j++) {
          if (minHeight > arr[j]) {
            minHeight = arr[j];
            index = j;
          }
        }
        // 4- 设置下一行的第一个盒子位置
        // top值就是最小列的高度 + gap
        boxItems[i].style.top = arr[index] + gap + 'px';
        // left值就是最小列距离左边的距离
        boxItems[i].style.left = boxItems[index].offsetLeft + 'px';

        // 5- 修改最小列的高度
        // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
        arr[index] = arr[index] + boxItems[i].offsetHeight + gap;
      }
    }
  },

  getClient: function () {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  },
  getScrollTop: function () {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
}

