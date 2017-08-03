<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Vue Music</h1>
     <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 8px
      width: 28px
      height: 30px
      margin-right: 9px
      background-image: url('./logo.png')
      background-size: 28px 30px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>