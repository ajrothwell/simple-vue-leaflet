<template>
  <div>
    <map_ :center="[39.952218, -75.163604]"
          :zoom="17"
    >
      <!-- <tileLayer :url="'https://{s}.tile.osm.org/{z}/{x}/{y}.png'" /> -->

      <!-- <esri-tiled-map-layer :url="'//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2018_3in/MapServer/'" />
      <esri-tiled-map-layer :url="'//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer'" /> -->

      <!-- <circle-marker :latlng="[39.952218, -75.163604]"
                     :radius="8"
                     :color="'black'"
                     :weight="2"
                     :fillColor="'red'"
                     :fillOpacity="1"
                     :opacity="1"
      /> -->
      <!-- v-if="this.shouldShowCircleMarker" -->

      <!-- <polygon_ :latlngs="[[39.953229, -75.162204],[39.953110, -75.161308],[39.952830, -75.161373],[39.952941, -75.162301],[39.953229, -75.162204]]"
                :color="'red'"
                :weight="2"
                :fillColor="'blue'"
      /> -->

      <!-- <esri-feature-layer :url="'//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0'"
      :color="'black'"
      :weight="2"
      :fillColor="'blue'"
      :fillOpacity="0.25"
      /> -->

    </map_>
    <!-- <button @click="setShouldShowCircleMarker(true)">Add circleMarker</button>
    <button @click="setShouldShowCircleMarker(false)">Remove circleMarker</button> -->
  </div>
</template>

<script>
import Map_ from './components/Map.vue';
// import TileLayer from './components/TileLayer.vue';
// import EsriTiledMapLayer from './components/EsriTiledMapLayer.vue';
// import CircleMarker from './components/CircleMarker.vue';
// import Polygon_ from './components/Polygon.vue';
// import EsriFeatureLayer from './components/FeatureLayer.vue';
export default {
  name: 'app',
  components: {
    Map_,
    // TileLayer,
    // EsriTiledMapLayer,
    // CircleMarker,
    // Polygon_
    // EsriFeatureLayer,
  },
  // data() {
  //   const data = {
  //     shouldShowCircleMarker: false
  //   }
  //   return data;
  // },
  // methods: {
  //   setShouldShowCircleMarker(val) {
  //     this.shouldShowCircleMarker = val;
  //   }
  // }
}
</script>
