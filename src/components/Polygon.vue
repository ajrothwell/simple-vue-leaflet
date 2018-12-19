<script>
  import { Polygon } from 'leaflet';
  export default {
    name: 'Polygon_',
    props: ['latlngs', 'color', 'weight', 'fillColor'],
    render(h) { return; },
    mounted() { const leafletElement = this.$leafletElement = this.createLeafletElement(); },
    methods: {
      createLeafletElement() {
        const { latlngs, ...options } = this.$props;
        return new Polygon(latlngs, options);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    }
  };

</script>
