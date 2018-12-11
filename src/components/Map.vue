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
      for (let child of this.$children) {
        child.parentMounted(this, child.$props);
      }
    },
    methods: {
      createLeafletElement() {
        const { ...options } = this.$props;
        return new Map(this.$refs.map, options);
      },
    }
  };
</script>

<style>
  .map {
    height: 400px;
    width: 600px;
  }
</style>
