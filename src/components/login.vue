<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="logo">
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
  .login_container{
    background-color: #2b4b6b;
    height: 100%;
    .login_box{
      background-color: white;
      height: 300px;
      width: 450px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      border-radius: 5px;
      .avatar_box{
        width: 130px;
        height: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow:0 0 10px #ddd;
        position: absolute;
        transform: translate(-50%,-50%);
        background-color: white;
        left: 50%;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #eee;
        }
      }
    }
  }
</style>
