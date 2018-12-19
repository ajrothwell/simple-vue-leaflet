<script>
  import { featureLayer as FeatureLayer } from 'esri-leaflet';
  export default {
    name: 'EsriFeatureLayer',
    props: ['url', 'color', 'fillColor', 'fillOpacity', 'weight'],
    render(h) { return; },
    created() { const leafletElement = this.$leafletElement = this.createLeafletElement(); },
    methods: {
      createLeafletElement() {
        const { ...options } = this.$props;
        return new FeatureLayer(options);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>
