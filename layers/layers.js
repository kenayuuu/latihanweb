var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_masjid_1 = new ol.format.GeoJSON();
var features_masjid_1 = format_masjid_1.readFeatures(json_masjid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjid_1.addFeatures(features_masjid_1);
var lyr_masjid_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjid_1, 
                style: style_masjid_1,
                popuplayertitle: 'masjid',
                interactive: true,
                title: '<img src="styles/legend/masjid_1.png" /> masjid'
            });
var format_pepohonan_2 = new ol.format.GeoJSON();
var features_pepohonan_2 = format_pepohonan_2.readFeatures(json_pepohonan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pepohonan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pepohonan_2.addFeatures(features_pepohonan_2);
var lyr_pepohonan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pepohonan_2, 
                style: style_pepohonan_2,
                popuplayertitle: 'pepohonan',
                interactive: true,
                title: '<img src="styles/legend/pepohonan_2.png" /> pepohonan'
            });
var format_lapangan_3 = new ol.format.GeoJSON();
var features_lapangan_3 = format_lapangan_3.readFeatures(json_lapangan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_3.addFeatures(features_lapangan_3);
var lyr_lapangan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_3, 
                style: style_lapangan_3,
                popuplayertitle: 'lapangan',
                interactive: true,
                title: '<img src="styles/legend/lapangan_3.png" /> lapangan'
            });
var format_taman_4 = new ol.format.GeoJSON();
var features_taman_4 = format_taman_4.readFeatures(json_taman_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_taman_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_taman_4.addFeatures(features_taman_4);
var lyr_taman_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_taman_4, 
                style: style_taman_4,
                popuplayertitle: 'taman',
                interactive: true,
                title: '<img src="styles/legend/taman_4.png" /> taman'
            });
var format_tugu_5 = new ol.format.GeoJSON();
var features_tugu_5 = format_tugu_5.readFeatures(json_tugu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tugu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tugu_5.addFeatures(features_tugu_5);
var lyr_tugu_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tugu_5, 
                style: style_tugu_5,
                popuplayertitle: 'tugu',
                interactive: true,
    title: 'tugu<br />\
    <img src="styles/legend/tugu_5_0.png" /> Perumahan Indah Permai<br />'
        });
var format_rumahh_6 = new ol.format.GeoJSON();
var features_rumahh_6 = format_rumahh_6.readFeatures(json_rumahh_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahh_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahh_6.addFeatures(features_rumahh_6);
var lyr_rumahh_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahh_6, 
                style: style_rumahh_6,
                popuplayertitle: 'rumahh',
                interactive: true,
    title: 'rumahh<br />\
    <img src="styles/legend/rumahh_6_0.png" /> Tipe 1<br />\
    <img src="styles/legend/rumahh_6_1.png" /> Tipe 2<br />'
        });
var format_jalan_7 = new ol.format.GeoJSON();
var features_jalan_7 = format_jalan_7.readFeatures(json_jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_7.addFeatures(features_jalan_7);
var lyr_jalan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_7, 
                style: style_jalan_7,
                popuplayertitle: 'jalan',
                interactive: true,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_7_0.png" /> Jl. Manggis<br />\
    <img src="styles/legend/jalan_7_1.png" /> Jl. Mangga<br />\
    <img src="styles/legend/jalan_7_2.png" /> Jl. Melon<br />\
    <img src="styles/legend/jalan_7_3.png" /> Jl. Markisa<br />\
    <img src="styles/legend/jalan_7_4.png" /> Jl. Mengkudu<br />\
    <img src="styles/legend/jalan_7_5.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_masjid_1.setVisible(true);lyr_pepohonan_2.setVisible(true);lyr_lapangan_3.setVisible(true);lyr_taman_4.setVisible(true);lyr_tugu_5.setVisible(true);lyr_rumahh_6.setVisible(false);lyr_jalan_7.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_masjid_1,lyr_pepohonan_2,lyr_lapangan_3,lyr_taman_4,lyr_tugu_5,lyr_rumahh_6,lyr_jalan_7];
lyr_masjid_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_pepohonan_2.set('fieldAliases', {'id': 'id', });
lyr_lapangan_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_taman_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_tugu_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_rumahh_6.set('fieldAliases', {'id': 'id', 'luas': 'luas', 'nama': 'nama', });
lyr_jalan_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_masjid_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_pepohonan_2.set('fieldImages', {'id': 'TextEdit', });
lyr_lapangan_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_taman_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_tugu_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_rumahh_6.set('fieldImages', {'id': 'TextEdit', 'luas': 'TextEdit', 'nama': 'TextEdit', });
lyr_jalan_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_masjid_1.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_pepohonan_2.set('fieldLabels', {'id': 'hidden field', });
lyr_lapangan_3.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_taman_4.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_tugu_5.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_rumahh_6.set('fieldLabels', {'id': 'hidden field', 'luas': 'inline label - always visible', 'nama': 'inline label - always visible', });
lyr_jalan_7.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_jalan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});