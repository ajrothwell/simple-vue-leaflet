<script>
  import { featureLayer as FeatureLayer } from 'esri-leaflet';

  export default {
    name: 'EsriFeatureLayer',
    props: [
      'url',
      'minZoom',
      'maxZoom',
      'zIndex',
      'layerName',
      'color',
      'fillColor',
      'fillOpacity',
      'weight',
      'style_',
      'markerType',
      'radius',
      'interactive',
    ],
    created() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
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
        // const map = this.$store.state.map.map;
        // const layerName = props.layerName
        // // if (!map.getPane(layerName)) {
        // //   map.createPane(layerName);
        // // }
        // // remove underscore from style_ prop. `style` is a vue reserved word.
        // const { style_ } = props;
        // delete props.style_;
        // props.style = style_;

        // if (props.markerType === 'circleMarker') {
        //   let pointToLayer = function (geojson, latlng) {
        //     return L.circleMarker(latlng, {
        //       pane: layerName,
        //       color: props.color,
        //       fillColor: props.fillColor,
        //       fillOpacity: props.fillOpacity,
        //       weight: props.weight,
        //       radius: props.radius,
        //       interactive: props.interactive,
        //     });
        //   }
        //   props.pointToLayer = pointToLayer;
        // }

        return new FeatureLayer(props);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>

<style>


</style>
