<template>
  <div class="map" ref="map">
    <slot />
  </div>
</template>

<script>
  import { Map } from 'leaflet';
  export default {
    name: 'Map_',
    props: ['center','zoom'],
    mounted() {
      const map = this.$leafletElement = this.createLeafletElement();
      // for (let child of this.$children) {
      //   child.parentMounted(this, child.$props);
      // }
    },
    methods: {
      createLeafletElement() {
        return new Map(this.$refs.map, this.$props);
      },
    }
  };
</script>

<style>
  .map {
    height: 400px;
    width: 400px;
  }
</style>
