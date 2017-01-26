<template>
  <div class="font-preview">
    <overlay duration="2">
      <img src="../assets/test-new.png">
    </overlay>
  </div>
</template>

<script>
import Overlay from './Overlay'

export default {
  name: 'fontPreview',
  components: {
    Overlay
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .font-preview {
    height: 100%;
    width: 75%;
    display: table;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
</style>
