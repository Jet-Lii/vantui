<template>
    <div class="Button">
        <button :class="$attrs.type">{{ $attrs.value }}</button>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    /* 默认按钮样式 */
    button,.default{
        height: 44px;
        padding: 0 15px;
        font-size: 14px;
        color: #323233;
        background-color: #fff;
        border: 1px solid #ebedf0;
    }
    /* 主要按钮样式 */
    .primary{
        color: #fff;
        background-color: #07c160;
        border: 1px solid #07c160;
    }
    /* 信息按钮样式 */
    .info{
        color: #fff;
        background-color: #1989fa;
        border: 1px solid #1989fa;
    }
    /* 警告按钮样式 */
    .warning{
        color: #fff;
        background-color: #ff976a;
        border: 1px solid #ff976a;
    }
    /* 危险按钮样式 */
    .danger{
        color: #fff;
        background-color: #ee0a24;
        border: 1px solid #ee0a24;
    }
  </style>
  