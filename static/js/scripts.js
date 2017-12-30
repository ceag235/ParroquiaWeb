$(function(){
 
   initialize();
 
   function initialize() {
        //mostramos la variable navigator
        console.log(navigator.geolocation);
 
        if (!(navigator.geolocation == 'undefined')) {
            //verificamos que tenga soporte
            console.log('Geolocation supported');
            try {
                navigator.geolocation.getCurrentPosition(displayLocation, displayError, {
                    timeout: 10000
                });
 
            }
            catch(error){
                console.log(error);
            }
        }
        else {
            //una console.loga indicando que no tiene soporte
            console.log('Geolocation unsupported');
        }
    }
 
    function displayLocation(position) {
        try {
            var cords = position.coords;
            console.log("displayLocation, lat='"+cords.latitude+"'; long='"+cords.longitude+"'");
            //alert("displayLocation, lat='"+cords.latitude+"'; long='"+cords.longitude+"'");
            
            lat = cords.latitude
            lng = cords.longitude
 
            createMap(lat,lng)
        }
        catch(error){
                console.log(error);
        }
    }
 
 
    function displayError(error) {
         var errorstr = "Really unknown error";
 
        switch (error.code)
        {
            case error.PERMISSION_DENIED:
                errorstr = "Permission deined";
                break;
            case error.POSITION_UNAVAILABLE:
                errorstr = "Permission unavailable";
                break;
            case error.TIMEOUT:
                errorstr = "Timeout";
                break;
            case error.UNKNOWN_ERROR:
                error = "Unknown error";
                break;
        }
 
        console.log("GPS error: " + error + " - Message: " + errorstr);
 
        createMap(18.462812,-69.936075);
    }
 
    var marker;
 
    function createMap(lat,lng)
    {
        console.log(lat);
        console.log(lng);
 
        var latlng = new google.maps.LatLng(lat,lng);
 
        var mapSettings = {
            center:latlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
 
        var map = new google.maps.Map($('#mapa').get(0),mapSettings);
 
 
        //var marker = new google.maps.Marker({
            marker = new google.maps.Marker({
            position:latlng,
            map:map,
            draggable:true,
            title:"Arrastrame!"
        });
 
        getMarkerCoords(marker);
        
        loadMarkers(map);
         
        google.maps.event.addListener(marker,'position_changed',function(){
            getMarkerCoords(marker);
        });
        
        
        
    }
    
    function getMarkerCoords(marker){
        var markerCoords = marker.getPosition();
        $('#id_lat').val(markerCoords.lat());
        $('#id_lng').val(markerCoords.lng());
        console.log(markerCoords.lat() + '  ' + markerCoords.lng())
    }
    
}); 

