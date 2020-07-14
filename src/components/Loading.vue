<template>
  <div>
    <transition name="fade">
      <div class='mask' v-if="counter" >
        <div class="loader">{{ message }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'

export default {
  name: 'loading',
  props: {
    message: {
      type: String,
      default () { return 'Loading...' }
    }
  },
  data () {
    return {
      loading: false,
      requesting: false,
      closing: false,
      counter: 0
    }
  },
  methods: {
    startRequesting () {
      this.counter++
    },
    stopRequesting () {
      if (this.counter <= 0) {
        return
      }
      setTimeout(() => {
        this.counter = Math.max(this.counter - 1, 0)
      }, 500)
    }
  },
  mounted () {
    EventBus.$on('module_loading_startLoading', this.startRequesting)
    EventBus.$on('module_loading_stopLoading', this.stopRequesting)
  }
}
</script>

<style lang="scss" scoped>
  .mask {
    background-color: rgba(0, 0, 0, 0.45);
    color: #fff;
    font-family: sans-serif;
    font-size: 14px;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
  }

  .loader {
    width: 150px;
    height: 150px;
    line-height: 150px;
    margin: 20% auto;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    z-index: 0;
  }

  .loader:before,
  .loader:after {
    opacity: 0;
    box-sizing: border-box;
    content: "\0020";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: 5px solid #fff;
    box-shadow: 0 0 50px #fff, inset 0 0 50px #fff;
  }

  .loader:after {
    z-index: 1;
    animation: gogoloader 2s infinite 1s;
    -webkit-animation: gogoloader 2s infinite 1s;
  }

  .loader:before {
    z-index: 2;
    animation: gogoloader 2s infinite;
    -webkit-animation: gogoloader 2s infinite;
  }

  .fade-enter, .fade-enter-active {
    animation: fade-in .8s;
  }
  .fade-leave-to, .fade-leave-active {
    animation: fade-out .3s;
  }

  @keyframes fade-in {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.45);
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.45);
    }
  }

  @keyframes fade-out {
    0% {
      background-color: rgba(0, 0, 0, 0.45);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @-webkit-keyframes fade-out {
    0% {
      background-color: rgba(0, 0, 0, 0.45);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @keyframes gogoloader {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @-webkit-keyframes gogoloader {
    0% {
      -webkit-transform: scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }
</style>
