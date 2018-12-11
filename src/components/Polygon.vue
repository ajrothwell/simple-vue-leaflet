<script>
  import { Polygon } from 'leaflet';

  export default {
    name: 'Polygon_',
    props: [
      'latlngs',
      'color',
      'weight',
      'fillColor',
    ],
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
    },
    render(h) {
      return;
    },
    methods: {
      createLeafletElement() {
        const newPolygon = new Polygon(this.$props.latlngs, {
          color: this.$props.color,
          weight: this.$props.weight,
          fillColor: this.$props.fillColor,
      });
        return newPolygon;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    }
  };

</script>
