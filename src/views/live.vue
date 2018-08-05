<template>
  <div class="liveView">
    <h3>Vue Video.js 播放hls 示例</h3>
    <div class="inputWrapper">
      <div class="form-group row">
        <label for="" class="col-sm-4 col-form-label">输入自定义Hls url(默认地址为https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8): </label>
        <div class="col-sm-8">
          <input class="form-input" type="text" placeholder="HLS url here" v-model="streams.hls">
          <button class="btn btn-primary" type="button" @click="enterStream">确定</button>
        </div>
      </div>
    </div>
    <video-player 
      class="vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      @ready="onPlayerReadied"
      @timeupdate="onTimeupdate">
    </video-player>
  </div>
</template>

<script>
export default {
  name: "live",
  data() {
    return {
      initialized: false,
      streams: {
        hls: ""
      },
      playerOptions: {
        overNative: true,
        autoplay: false,
        controls: true,
        height: 600,
        techOrder: ["html5"],
        sourceOrder: true,
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8"
          }
        ],
        poster: "/vue-videojs-demo/static/images/logo.png"
        // controlBar: {
        //   timeDivider: false, // 时间分割线
        //   durationDisplay: false, // 总时间
        //   progressControl: true, // 进度条
        //   customControlSpacer: true, // 未知
        //   fullscreenToggle: true // 全屏
        // },
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    onPlayerReadied() {
      if (!this.initialized) {
        this.initialized = true;
      }
    },
    onTimeupdate(e) {
      console.log("currentTime", e.cache_.currentTime);
    },
    enterStream() {
      this.playerOptions.sources[0].src = this.streams.hls;
      this.playerOptions.autoplay = true;
    }
  }
};
</script>

<style scoped>
.liveView {
  position: relative;
}
.inputWrapper {
  width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.form-input {
  width: 450px;
}
</style>
