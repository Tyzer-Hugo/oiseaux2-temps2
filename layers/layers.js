var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_parcourstemps2oiseaux_1 = new ol.format.GeoJSON();
var features_parcourstemps2oiseaux_1 = format_parcourstemps2oiseaux_1.readFeatures(json_parcourstemps2oiseaux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcourstemps2oiseaux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcourstemps2oiseaux_1.addFeatures(features_parcourstemps2oiseaux_1);
var lyr_parcourstemps2oiseaux_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcourstemps2oiseaux_1, 
                style: style_parcourstemps2oiseaux_1,
                interactive: true,
                title: '<img src="styles/legend/parcourstemps2oiseaux_1.png" /> parcours temps 2 oiseaux'
            });
var format_pointoiseaux_2 = new ol.format.GeoJSON();
var features_pointoiseaux_2 = format_pointoiseaux_2.readFeatures(json_pointoiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointoiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointoiseaux_2.addFeatures(features_pointoiseaux_2);
var lyr_pointoiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointoiseaux_2, 
                style: style_pointoiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/pointoiseaux_2.png" /> point oiseaux'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_parcourstemps2oiseaux_1.setVisible(true);lyr_pointoiseaux_2.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_parcourstemps2oiseaux_1,lyr_pointoiseaux_2];
lyr_parcourstemps2oiseaux_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_pointoiseaux_2.set('fieldAliases', {'oiseaux': 'oiseaux', 'nombre': 'nombre', 'type_conta': 'type_conta', });
lyr_parcourstemps2oiseaux_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_pointoiseaux_2.set('fieldImages', {'oiseaux': 'TextEdit', 'nombre': 'Range', 'type_conta': 'TextEdit', });
lyr_parcourstemps2oiseaux_1.set('fieldLabels', {'name': 'header label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_pointoiseaux_2.set('fieldLabels', {'oiseaux': 'inline label', 'nombre': 'inline label', 'type_conta': 'inline label', });
lyr_pointoiseaux_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});