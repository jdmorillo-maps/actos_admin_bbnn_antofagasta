var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleStreets_1 = new ol.layer.Tile({
            'title': 'Google Streets',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ACTOS_ADMIN_BBNN_20210831_3 = new ol.format.GeoJSON();
var features_ACTOS_ADMIN_BBNN_20210831_3 = format_ACTOS_ADMIN_BBNN_20210831_3.readFeatures(json_ACTOS_ADMIN_BBNN_20210831_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACTOS_ADMIN_BBNN_20210831_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACTOS_ADMIN_BBNN_20210831_3.addFeatures(features_ACTOS_ADMIN_BBNN_20210831_3);
var lyr_ACTOS_ADMIN_BBNN_20210831_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACTOS_ADMIN_BBNN_20210831_3, 
                style: style_ACTOS_ADMIN_BBNN_20210831_3,
                interactive: true,
                title: '<img src="styles/legend/ACTOS_ADMIN_BBNN_20210831_3.png" /> ACTOS_ADMIN_BBNN_20210831'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleStreets_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_ACTOS_ADMIN_BBNN_20210831_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleStreets_1,lyr_GoogleSatellite_2,lyr_ACTOS_ADMIN_BBNN_20210831_3];
lyr_ACTOS_ADMIN_BBNN_20210831_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PLANO': 'PLANO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ACTO': 'ACTO', 'LOTE': 'LOTE', 'COMUNA': 'COMUNA', 'PROVINCIA': 'PROVINCIA', 'REGION': 'REGION', 'ROL': 'ROL', 'CBR': 'CBR', 'Manzana': 'Manzana', 'OBS_1': 'OBS_1', 'FECHA': 'FECHA', });
lyr_ACTOS_ADMIN_BBNN_20210831_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'PLANO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ACTO': 'TextEdit', 'LOTE': 'TextEdit', 'COMUNA': 'TextEdit', 'PROVINCIA': 'TextEdit', 'REGION': 'TextEdit', 'ROL': 'TextEdit', 'CBR': 'TextEdit', 'Manzana': 'TextEdit', 'OBS_1': 'TextEdit', 'FECHA': 'TextEdit', });
lyr_ACTOS_ADMIN_BBNN_20210831_3.set('fieldLabels', {'OBJECTID': 'no label', 'PLANO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ACTO': 'no label', 'LOTE': 'no label', 'COMUNA': 'no label', 'PROVINCIA': 'no label', 'REGION': 'no label', 'ROL': 'no label', 'CBR': 'no label', 'Manzana': 'no label', 'OBS_1': 'no label', 'FECHA': 'no label', });
lyr_ACTOS_ADMIN_BBNN_20210831_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});