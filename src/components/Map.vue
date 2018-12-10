<template>
  <div>
    <div class="map"
         ref="map"
         id="map"
    >
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import { Map } from 'leaflet';

  export default {
    name: 'Map_',
    props: [
      'center',
      'zoom',
    ],
    mounted() {
      const map = this.$leafletElement = this.createLeafletElement();
      // put map object in state
      this.$store.commit('setMap', { map });

      // signal children to mount
      for (let child of this.$children) {
        // REVIEW it seems weird to pass children their own props. trying to
        // remember why this was necessary... binding issue?
        child.parentMounted(this, child.$props);
      }

      // TODO warn if trying to bind an event that doesn't exist
      // bindEvents(this, this.$leafletElement, this._events);
      // if (this.$config.map.clickToIdentifyFeatures) {
      //   map.on('click', this.identifyFeatures);
      // }
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
