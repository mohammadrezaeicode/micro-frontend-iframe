<template>
  <!-- <v-row justify="center" align="center" class="full"> -->
  <iframe
    :src="src"
    id="iframe"
    class="responsive-iframe"
    frameborder="0"
  ></iframe>

  <!-- </v-row> -->
</template>

<script>
import { setEvent, parentToChild } from "../../massagechannle";
export default {
  name: "IndexPage",
  computed: {
    src() {
      if (process.env.MODE == "production"||process.env.NODE_ENV === 'production') {
        return "../nextjs/";
      } else {
        return "http://localhost:3010/";
      }
    },
  },
  // mounted() {
  //   setEvent(this.messagePassListenner);
  // },
  // methods: {
  //   messagePassListenner(message) {
  //     console.log(message);
  //   },
  // },
};
</script>
<style>
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
