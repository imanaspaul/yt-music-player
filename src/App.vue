<template>
  <div id="app" class="container py-5">
    <div class="row">
      <div class="col-sm-12 player">
        <video-wrapper :height="auto" :width="width" ref="player" :player="'youtube'" :videoId="videoId" @play="Yplaying" />
        <div class="placeholder">
          <!-- <img  src="https://www.flaticon.com/svg/vstatic/svg/2907/2907253.svg?token=exp=1615639655~hmac=4b7023a5210e57edf4bb5116d73fe5e1" width="100%" height="200" alt="placeholder"> -->
           <img width="200" class="thumnail" :src="thumnail">
        </div>
      </div>
      <div class="col-sm-12">
        <input type="url" v-model="url" class="form-control" placeholder="Enter YouTube URL">
        <div class="container py-5">
          <div class="row py-5">
            <div class="controls text-center">
              <i class="far fa-play-circle" v-if="!playing" @click="play"></i>
              <i class="fas fa-pause-circle" v-else @click="pause"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      videoId: "8wzTafXWtLE",
      width: "100%",
      url: "",
      thumnail: `https://img.youtube.com/vi/8wzTafXWtLE/0.jpg`,
      playing: false
    }
  },
  watch: {
    url() {
      const url = new URL(this.url)
      const id = url.pathname.split("/")[1]
      this.videoId = id
      this.thumnail = `https://img.youtube.com/vi/${id}/0.jpg`
    }
  },
  methods: {
    play(){
      this.$refs.player.player.playVideo();
    },
    pause() {
      this.$refs.player.player.pauseVideo();
      this.playing = false
    },
    Yplaying() {
      this.playing = true
    }
  }
}
</script>

<style>
button.btn.btn-danger.mr-4.play {
  margin-right: 20px;
}
.col-sm-12.player {
  position: relative;
}

/* .col-sm-12.player::after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: -1px;
  left: 0;
} */
.placeholder {
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: -1px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa, .far, .fas {
  font-family: "Font Awesome 5 Free";
  font-size: 42px;
  margin: 0px 20px;
}
.thumnail {
  border-radius: 60%;
  height: 200px;
}
</style>
