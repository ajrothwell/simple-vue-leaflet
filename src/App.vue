<template>
  <div id="app">
    <map_ :center="[39.892648, -75.176704]"
          :zoom="17"
    >
      <esri-tiled-map-layer :url="'//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2018_3in/MapServer/'" />
      <esri-tiled-map-layer :url="'//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer'" />
      <esri-feature-layer :url="'//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0'"
                          :color="'black'"
                          :weight="2"
                          :fillColor="'blue'"
                          :fillOpacity="0.25"
      />

      <circle-marker :latlng="[39.893730, -75.177488]"
                     :radius="8"
                     :color="'black'"
                     :weight="2"
                     :fillColor="'red'"
                     :fillOpacity="1"
                     :opacity="1"
      />

    </map_>
  </div>
</template>

<script>

import Map_ from './components/Map.vue';
import EsriTiledMapLayer from './components/TiledMapLayer.vue';
import EsriFeatureLayer from './components/FeatureLayer.vue';
import CircleMarker from './components/CircleMarker.vue';

export default {
  name: 'app',
  components: {
    Map_,
    EsriTiledMapLayer,
    EsriFeatureLayer,
    CircleMarker,
  }
}
</script>

<style>

</style>
