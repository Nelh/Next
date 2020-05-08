///////////////////////////////////////////////////
// VECTOR MAPS
$(function(){
    //////////////////////////////
    // WORLDWIDE MAPS CONFIG
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#cce6ff'
            },
            selected: {
                fill: '#444'
            }
        },
        series: {
            regions: [{
                values: {
                    'CN': '#0080ff',
                    'US': '#0080ff',
                    'ZA': '#0080ff',
                    'FR': '#0080ff',
                    'DE': '#0080ff',
                },
                attribute: 'fill'
            }]
        },
        zoomOnScroll: false,
        markerStyle: {
            initial: {
                fill: '#0080ff',
                stroke: '#0080ff'
            }
        },
        markers: [
            {latLng: [35, 105], name: '10% Revenue'},
            {latLng: [38, -97], name: '40% revenue'},
            {latLng: [-29, 24], name: '75% Revenue'},
            {latLng: [46, 2], name: '25% Revenue'},
            {latLng: [51, 9], name: '30% Revenue'},
        ]
    });

    ///////////////////////////////
    // SA MAPS CONFIG
    $('#sa-map').vectorMap({
        map: 'za_mill',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#0080ff'
            }
        },
        zoomOnScroll: false,
    });

    ////////////////////////////////////////
    // US Preset Map Example
    $('#us-map').vectorMap({ 
        map: 'us_aea', 
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#0080ff'
            },
        },
        zoomOnScroll: false,
    });

    ////////////////////////////////////////
    // France Preset Map Example
    $('#fr-map').vectorMap({ 
        map: 'fr_mill', 
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#0080ff'
            },
        },
        zoomOnScroll: false,
    });

    ////////////////////////////////////////
    // China Preset Map Example
    $('#cn-map').vectorMap({ 
        map: 'cn_mill', 
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#0080ff'
            },
        },
        zoomOnScroll: false,
    });

    ////////////////////////////////////////
    // Germany Preset Map Example
    $('#de-map').vectorMap({ 
        map: 'de_mill', 
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#0080ff'
            },
        },
        zoomOnScroll: false,
    });
});