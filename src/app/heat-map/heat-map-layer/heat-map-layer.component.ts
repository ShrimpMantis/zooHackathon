import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heat-map-layer',
  templateUrl: './heat-map-layer.component.html',
  styleUrls: ['./heat-map-layer.component.css']
})
export class HeatMapLayerComponent implements OnInit {

  constructor() {
  
   }

  ngOnInit() {
   // this.addDataLayer();
  }

  // getPoints(): any {
  //   return [
  //     new google.maps.LatLng(37.782551, -122.445368),
  //     new google.maps.LatLng(37.782745, -122.444586),
  //     new google.maps.LatLng(37.782842, -122.443688),
  //     new google.maps.LatLng(37.782919, -122.442815),
  //     new google.maps.LatLng(37.782992, -122.442112),
  //     new google.maps.LatLng(37.783100, -122.441461),
  //     new google.maps.LatLng(37.783206, -122.440829),
  //     new google.maps.LatLng(37.783273, -122.440324),
  //     new google.maps.LatLng(37.783316, -122.440023),
  //     new google.maps.LatLng(37.783357, -122.439794),
  //     new google.maps.LatLng(37.783371, -122.439687),
  //     new google.maps.LatLng(37.783368, -122.439666),
  //     new google.maps.LatLng(37.783383, -122.439594),
  //     new google.maps.LatLng(37.783508, -122.439525),
  //     new google.maps.LatLng(37.783842, -122.439591),
  //     new google.maps.LatLng(37.784147, -122.439668),
  //     new google.maps.LatLng(37.784206, -122.439686),
  //     new google.maps.LatLng(37.784386, -122.439790),
  //     new google.maps.LatLng(37.784701, -122.439902),
  //     new google.maps.LatLng(37.784965, -122.439938),
  //     new google.maps.LatLng(37.785010, -122.439947),
  //     new google.maps.LatLng(37.785360, -122.439952),
  //     new google.maps.LatLng(37.785715, -122.440030),
  //     new google.maps.LatLng(37.786117, -122.440119),
  //     new google.maps.LatLng(37.786564, -122.440209),
  //     new google.maps.LatLng(37.786905, -122.440270),
  //     new google.maps.LatLng(37.786956, -122.440279),
  //     new google.maps.LatLng(37.800224, -122.433520),
  //     new google.maps.LatLng(37.800155, -122.434101),
  //     new google.maps.LatLng(37.800160, -122.434430),
  //     new google.maps.LatLng(37.800378, -122.434527),
  //     new google.maps.LatLng(37.800738, -122.434598),
  //     new google.maps.LatLng(37.800938, -122.434650),
  //     new google.maps.LatLng(37.801024, -122.434889),
  //   ]
  // };

  addDataLayer() {
    // var test=this.getPoints();
    // console.log("test",test);
    // var newLayer= new google.maps.visualization.HeatMapLayer({
    //   data:this.getPoints()
    // });
    // newLayer.setMap();
  }
}
