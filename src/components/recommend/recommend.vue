<template>
  <div>
      推荐页面
  </div>
</template>

 <script type="text/ecmascript-6">
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'

  export default {
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.slider)
          }
        })
      }
    }
  }
  
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>