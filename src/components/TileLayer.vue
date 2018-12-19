<script>
  import { tileLayer as TileLayer } from 'leaflet';
  export default {
    name: 'TileLayer',
    props: ['url'],
    render(h) { return; },
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      // const map = this.$parent.$leafletElement;
      // this.$leafletElement.addTo(map);
    },
    methods: {
      createLeafletElement() {
        const { ...options } = this.$props;
        return new TileLayer(options.url);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>
