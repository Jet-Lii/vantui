<template>
    <div class="button">
      <!--3.使用组件-->
      <p class="title">按钮类型</p>
      <div class="flex">
        <Button type="primary" value="主要按钮"></Button>
        <Button type="info" value="信息按钮"></Button>
        <Button type="default" value="默认按钮"></Button>
        <Button type="warning" value="警告按钮"></Button>
        <Button type="danger" value="危险按钮"></Button>
      </div>
      <p class="title">朴素按钮</p>
    </div>
  </template>
  
  <script>
  // 1. 引入组件
  import Button from '../components/Button.vue'
  export default {
    // 2. 注册组件
    components: {
        Button,
    },
    data () {
      return {
        
      }
    }
  }
  </script>
  <style scoped>
    .title{
      font-size: 14px;
      color: rgba(69, 90, 100, 0.6);
      text-align: left;
    }
    .flex{
      display: flex;
      flex-wrap: wrap;
    }
    .flex div{
      width: 100px;
      margin-right: 12px;
      margin-bottom: 12px;
    }
  </style>
  