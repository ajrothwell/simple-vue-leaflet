<script>
  import { tiledMapLayer as TiledMapLayer } from 'esri-leaflet';

  export default {
    name: 'EsriTiledMapLayer',
    props: [
      'url',
    ],
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      // console.log('this:', this, 'this.$store.state.map.map:', this.$store.state.map.map, 'map:', map);

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
      }
    },
    render(h) {
      return;
    },
    methods: {
      createLeafletElement() {
        const props = Object.assign({}, this.$props);
        const mapLayer = new TiledMapLayer(props);
        return mapLayer;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>
