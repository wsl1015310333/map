 //var hostName = getQueryString('host') + '';


function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return '';
}
var tmapHost = getQueryString('host');
var lmapHostIp=getQueryString('api');

//var params = {
//  map: {                                // 地图配置
//    type: 'leaflet',                    // 地图类型
//    center: '[118.06856, 36.94853]',    // 默认中心点
//    zoom: 14,                           // 默认缩放等级
//    minZoom: 3,                         // 最小等级
//    maxZoom: 15,                        // 最大等级，leaflet不能超过17
//    host: '127.0.0.1:3000',             //
//    mapTileHost: '10.48.1.227:9080/PGIS_S_TileMapServerA', // 地图瓦片服务器地址
//    mapTileType: 'pgis',                                  // 地图瓦片类型
//    mapName: 'sl2018',                                    // 使用的地图名称
//  },
//  lmapHost: '192.168.0.112:3305',                  // 接口地址
//  load: false,                                      // 懒加载
//  pageSize: 100                                     // 懒加载每次的条数
//}


var params = {
  map: {                                // 地图配置
    type: 'leaflet',                    // 地图类型
    center: '[118.298645,36.8282]',    // 默认中心点
    zoom: 15,                           // 默认缩放等级
    minZoom: 14,                         // 最小等级
    maxZoom: 15,
zoomControl: false,

                           // 最大等级，leaflet不能超过17
    host: '127.0.0.1:3000',             //
    mapTileHost: tmapHost, // 地图瓦片服务器地址  20.11.64.253:8188/multi_app_zibo/social_app/appmap
    mapTileType: 'pgis',                                  // 地图瓦片类型
    mapName: 'sl2018',                                    // 使用的地图名称
  },
  lmapHost: lmapHostIp,                  // 接口地址 20.11.64.253:8188/multi_app_zibo/social_app
  load: false,                                      // 懒加载
  pageSize: 100                                     // 懒加载每次的条数
}