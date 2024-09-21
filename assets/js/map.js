$('.main-map-container .ma-backdrop').on('click', function() {
    $('.main-map-container aside').addClass('left-100');
    $(this).addClass('d-none');
});

let farmersData;



// end of getting farmers data
function initMap() {

    //closing marker details

    $('.close-aside').on('click', function() {
        $(this).parent().parent().addClass('left-100');
        $('.ma-backdrop').addClass('d-none');
        // marker.setAnimation(null);
        removeMarkers();
    });



    //incident icon
    var warning = {
        url: "assets/images/map-assets/warning.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //service point
    var servicePoint = {
        url: "assets/images/map-assets/flag.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //active agent icon
    var activeAgent = {
        url: "assets/images/map-assets/active-agent.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //inactive agent icon
    var inactiveAgent = {
        url: "assets/images/map-assets/inactive-agent.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };



    //off street parking
    var street_parking = {
        url: "assets/images/map-assets/pin.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //bus park
    var bus = {
        url: "assets/images/map-assets/bus.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //street  icon
    var offStreet = {
        url: "assets/images/map-assets/street-parking.svg", // url
        scaledSize: new google.maps.Size(55, 55), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //city hall marker size styling
    var hall_icon = {
        url: "assets/images/map-assets/parliament.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //Approved sign applications
    var approved = {
        url: "assets/images/map-assets/approved.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //rejected sign applications
    var rejected = {
        url: "assets/images/map-assets/rejected.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //pending applications sign
    var ongoing = {
        url: "assets/images/map-assets/pending.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //clamped cars
    var clamped = {
        url: "assets/images/map-assets/clamped-a.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //rented plate
    var rentedPlate = {
        url: "assets/images/map-assets/rented.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //multiple sided plate

    var multiPlate = {
        url: "assets/images/map-assets/multiple-plates.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //available plate
    var availablePlate = {
        url: "assets/images/map-assets/available.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //damaged plate
    var damagedPlate = {
        url: "assets/images/map-assets/damaged.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //offline taxi
    var taxi_offline = {
        url: "assets/images/map-assets/offline-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //Available taxis
    var taxi_available = {
        url: "assets/images/map-assets/available-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //Booked taxis
    var taxi_booked = {
        url: "assets/images/map-assets/booked-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //On transit taxis
    var taxi_transit = {
        url: "assets/images/map-assets/ontransit-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

    //taxi incident
    var taxi_incident = {
        url: "assets/images/map-assets/warning-taxi.svg", // url
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }






    //the map options
    var options = {
        zoom: 13,
        center: { lat:  0.43495099828700357, lng: 34.24214897111555 }

    }


    //new map
    var map = new google.maps.Map(document.getElementById('map'), options);


    /*

    //add marker
    var marker=new google.maps.Marker({
        position:{lat:-1.2925606, lng:36.7809636},
        map: map,
        icon: hall_icon
    });

    var infowindow=new google.maps.InfoWindow({
        content:'<h1>City Hall</h1>'
    });

    marker.addListener('click', function(){
        infowindow.open(map,marker);
    });
    */

    var gmarkers = [];

    //listen for click on  map

    // the smooth zoom function not in use
    function smoothZoom(map, max, cnt) {
        if (cnt >= max) {
            return;
        } else {
            z = google.maps.event.addListener(map, 'zoom_changed', function(event) {
                google.maps.event.removeListener(z);
                smoothZoom(map, max, cnt + 1);
            });
            setTimeout(function() { map.setZoom(cnt) }, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
        }
    }


    google.maps.event.addListener(map, 'dblclick', function(event) {
        removeMarkers();

        //add marker

        addMarker({ coords: event.latLng });



        //get value of clicked coodinates

        //stores coodinates of selected area
        var newCoords = event.latLng;

        // return clicked area coods
        console.log(event.latLng);

        console.log(newCoords.toString());
        newCoords = newCoords.toString();
        var Latitude;
        var longitude;
        longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
        Latitude = newCoords.substring(0, newCoords.indexOf(','));
        Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);

        longitude = longitude.substring(0, longitude.indexOf(')'));
        // console.log("Lat:"+Latitude);
        // console.log("long:"+longitude);

        //reverse geocoding function
        //usses clicked coodinates to get the newly clicked llocation


        smoothZoom(map, 12, map.getZoom());


        map.setCenter(new google.maps.LatLng(Latitude, longitude));

        reverseGeocoding(Latitude, longitude);

        // alert(event.latLng);

        //get latitude
        // var theStreet=newCoords.results[0];
        // alert(theStreet);





        //opens the side bar form
        $('#newPoint').removeClass('left-100').siblings().addClass('left-100');

        // alert("ready");
        // $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
        // alert("ready");
    });

   



    //taxi on transit
    addMarker({
        coords: { lat: 0.4867, lng: 34.1146 },
        iconImage: taxi_transit,
        content: `<p class="d-none">approved|identifier</p><h6 class="d-flex align-items-center">
        <div class="card mb-0">
        <div class="card-body p-0 mb-2">
               <div class="d-flex">
             
               <div class="flex-shrink-0 align-self-center me-3 d-none">
                   <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="">
               </div>
               
               <div class="flex-grow-1 overflow-hidden pe-5">
                   <h5 class="text-truncate font-size-14 mb-1 text-capitalize">
                   Kelvin Kinoti
                    <div class="rating-star">
                            <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                        </div>
                   </h5>
                   <p class="text-truncate mb-0 text-uppercase">2 Ha</p>
               </div>

               <div class="font-size-11 text-right">
                    <p class="text-muted mb-2"><i class="mdi mdi-circle text-warning align-middle me-1"></i> On Transit</p>
                    <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> ETA 36 Min</p>
               </div>
               </div>
        </div>

        <div class="card-body bg-light p-1>                
            <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-warning align-middle me-1 font-18px"></i><span class="the-clicked-address">Unknown Location</span> </p>
        </div>

        <div class="card-body">
            <ul class="verti-timeline list-unstyled d-none">        
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-square font-size-18 text-black"></i>
                    </div>
                    <div class="d-flex">
                        
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Base Location
                        </span>
                            <div>
                            90 Degrees by TSAVO, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="mdi mdi-circle font-size-18 text-primary"></i>
                    </div>
                    <div class="d-flex">
                       
                        <div class="flex-grow-1">
                        <span class="text-muted">
                         Destination
                        </span>
                            <div>
                            Tulip House, Mombasa Road, Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
       
        `
    });

    //fetching data starts here
    // Use fetch to get the JSON data
    fetch('assets/js/data/5000Farmers.json')
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON data
    })
    .then(data => {
    farmersData = data; // Assign the data to the variable
    console.log(farmersData); // Log the data to the console
    console.log('Number of farmers:', farmersData.length); // Log the number of items

    // Loop through the first five farmers
    for (let i = 0; i < Math.min(250, farmersData.length); i++) {
        const farmer = farmersData[i];
        console.log(`Farmer ${i + 1}: GpsLatitude: ${farmer.GpsLatitude}, GpsLongitude: ${farmer.GpsLongitude}`);
       
        addMarker({
            coords: { lat: farmer.GpsLatitude, lng: farmer.GpsLongitude},
            iconImage: taxi_transit,
            content: `<p class="d-none">approved|identifier</p><h6 class="d-flex align-items-center">
            <div class="card mb-0">
            <div class="card-body p-0 mb-2">
                   <div class="d-flex">
                 
                   <div class="flex-shrink-0 align-self-center me-3 d-none">
                       <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="">
                   </div>
                   
                   <div class="flex-grow-1 overflow-hidden pe-5">
                       <h5 class="text-truncate fs-5 mb-1 text-capitalize">
                       ${farmer.FarmerName}
                        <div class="rating-star">
                                <input type="hidden" class="rating" data-filled="mdi mdi-star text-warning" data-empty="mdi mdi-star-outline text-muted" data-readonly value="3.5" />
                            </div>
                       </h5>
                       <p class="text-truncate mb-0 text-uppercase fs-7">Household Size: ${farmer.HouseholdSize}</p>
                   </div>
    
                   <div class="font-size-11 text-right">
                        <p class="text-muted mb-2"><i class="mdi mdi-circle text-warning align-middle me-1"></i> ${farmer.MaritalStatus}</p>
                        <p class="text-muted mb-0"><i class="mdi mdi-clock text-muted align-middle me-1"></i> Year of Birth:  ${farmer.YearOfBirth} </p>
                   </div>
                   </div>
            </div>
    
            <div class="card-body bg-light p-1>                
                <p class="text-muted mb-0"><i class="mdi mdi-map-marker text-warning align-middle me-1 font-18px"></i><span class="the-clicked-address">Unknown Location</span> </p>
            </div>

            <div class="card-body px-0 mb-0 pb-0">
                <div class="alert alert-success border border-success align-items-center" role="alert">
                   <i class="mdi-leaf mdi  fs-3 me-2"></i> <span>Crop Production: ${farmer.CropProduction}</span>
                </div>
            </div>

            <div class="card-body px-0 mb-0 pb-0">
                <div class="alert alert-danger border border-danger align-items-center" role="alert">
                   <i class="fas fa-kiwi-bird fs-3 me-2"></i> <span>Livestock Production: ${farmer.LivestockProduction}</span>
                </div>
            </div>

             <div class="card-body px-0 mb-0 pb-0">
                <div class="alert alert-info border border-info align-items-center" role="alert">
                   <i class="fas fa-fish  fs-3 me-2"></i> <span>Fish Farming: ${farmer.FishFarming}</span>
                </div>
            </div>

            <div class="specific-data d-none">
                <div class="subcounty">${farmer.Subcounty}</div>
                <div class="FarmerName">${farmer.FarmerName}</div>
                <div class="Ward2">Ward ${farmer.Ward}</div>
                <div class="ShoppingCenter">${farmer.ShoppingCenter}</div>
                <div class="CropProduction">${farmer.CropProduction}</div>
                <div class="FishFarming">${farmer.FishFarming}</div>
                <div class="LivestockProduction">${farmer.LivestockProduction}</div>
                <div class="HouseholdSize">${farmer.HouseholdSize}</div>
                <div class="Gender">${farmer.Gender}</div>
               <div class="year">${farmer.YearOfBirth}</div>
                <div class="phone">${farmer.FarmerMobileNumber}</div>
               
            </div>
    
            <div class="card-body">
                <ul class="verti-timeline list-unstyled d-none">        
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="mdi mdi-square font-size-18 text-black"></i>
                        </div>
                        <div class="d-flex">
                            
                            <div class="flex-grow-1">
                            <span class="text-muted">
                             Base Location
                            </span>
                                <div>
                                90 Degrees by TSAVO, Nairobi, Kenya
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="mdi mdi-circle font-size-18 text-primary"></i>
                        </div>
                        <div class="d-flex">
                           
                            <div class="flex-grow-1">
                            <span class="text-muted">
                             Destination
                            </span>
                                <div>
                                Tulip House, Mombasa Road, Nairobi, Kenya
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
           
            `
        });
    }
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });

    //fetching data ends here


  
   

    //add marker function
    function addMarker(props) {
        //add marker
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            animation: google.maps.Animation.DROP,
            // icon:props.iconImage             
        });

        if (!props.content) {
            gmarkers.push(marker);

        }

        if (props.iconImage) {
            //set icon image if its there
            marker.setIcon(props.iconImage);

        }

        // check if there is content
        if (props.content) {
            //set icon image if its there

            var infowindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('mouseover', function(e) {

                infowindow.open(map, marker);

                var newCoords = e.latLng;
                newCoords = newCoords.toString();
                // alert(newCoords);

                var Latitude;
                var longitude;
                longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
                Latitude = newCoords.substring(0, newCoords.indexOf(','));
                Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);
                longitude = longitude.substring(0, longitude.indexOf(')'));

                reverseGeocoding(Latitude, longitude);
                // alert("mouse hovered");

            });

            marker.addListener('click', function(e) {
                toggleBounce(marker);

                var newCoords = e.latLng;
                newCoords = newCoords.toString();
                // alert(newCoords);

                var Latitude;
                var longitude;
                longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
                Latitude = newCoords.substring(0, newCoords.indexOf(','));
                Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);
                longitude = longitude.substring(0, longitude.indexOf(')'));

                reverseGeocoding(Latitude, longitude);





                // alert(iconImage); 
                // alert( e.latLng);

                //position of the clicked marker . the longitude and latitude
                var pointPosition = e.latLng;

                //gettting the image

                //initializing image as empty
                var theImage = "assets/images/billboard-ads/no-add.jpg";

                //checking if the content has an image
                if (infowindow.content.includes("<img")) {
                    //if it has image assign mage to

                    theImage = infowindow.content.substring(infowindow.content.indexOf('src="') + 5);
                    //the image url
                    theImage = theImage.substring(0, theImage.indexOf('"'));


                }

                // farmers data

                var farmSub
                var farmersName
                var farmersWard
                var farmersCenter
                var farmersCrop
                var farmersLivestock
                var farmersFish
                var farmersHouse
                var farmersGender
                var farmersYear


                var theContent = infowindow.content.substr(18);
                var theContent = theContent.substring(0, theContent.indexOf('<'));
                var farmData=infowindow.content
                console.log(farmData)

                // Create a temporary DOM element to hold the farmData content
                var tempElement = document.createElement('div');
                tempElement.innerHTML = farmData;

                // Use querySelector to find the element with the class 'specific-data'
                var specificDataElement = tempElement.querySelector('.specific-data');

                // If the element is found, get its text content
                if (specificDataElement) {
                    var specificDataContent = specificDataElement.textContent.trim();
                    console.log(specificDataContent); // This will output the specific data content
                  //  alert(specificDataElement.querySelector(".FarmerName").text())
                  console.log(tempElement.querySelector(".ward2"))
                 // alert()
                 //$('.specific-data').children
                  farmersName=$('.specific-data').children(".FarmerName").text()
                  farmSub=$('.specific-data').children(".subcounty").text()
                  farmersWard=$('.specific-data').children(".ward2").text()
                  farmersCenter=$('.specific-data').children(".ShoppingCenter").text()
                  farmersCrop=$('.specific-data').children(".CropProduction").text()
                  farmersFish=$('.specific-data').children(".FishFarming").text()
                  farmersLivestock=$('.specific-data').children(".LivestockProduction").text()
                  farmersHouse=$('.specific-data').children(".HouseholdSize").text()
                  farmersGender=$('.specific-data').children(".Gender").text()
                  farmersYear=$('.specific-data').children(".year").text()
                  farmersPhone=$('.specific-data').children(".phone").text()
                 // alert($('.specific-data').children(".ward2").text())
                 // farmersName=$(".FarmerName").text()
                 console.log($('.specific-data').children(".ward2").text())

                 //updating data on click
                 //$('.offcanvas').children('.farmeers-name').text(farmersName)
                $('.farmeers-name').text(farmersName)
                $('.farmeers-sub').text(farmSub)
                $('.farmeers-ward').text(farmersWard)
                $('.farmeers-Center').text(farmersCenter)
                $('.farmeers-Crop').text(farmersCrop)
                $('.farmeers-Fish').text(farmersFish)
                $('.farmeers-Livestock').text(farmersLivestock)
                $('.farmeers-House').text(farmersHouse)
                $('.farmeers-Gender').text(farmersGender)
                $('.farmeers-Year').text(farmersYear)
                $('.farmeers-Phone').text(farmersPhone)
                // alert(farmersName)                  
                } else {
                    console.log('specific-data class not found.');
                }

               /// alert(farmData)

                //the group of markers eg car,incident,collection points etc
                var theGroup = theContent.substring(0, theContent.indexOf('|'));

                //the unique identifier of the clicked item eg number plate
                var uniqueIdentifier = theContent.substring(theContent.lastIndexOf("|") + 1);

                // alert(theGroup);

                //if else statements to bring out the correct side details depending on the groups category

                if (theImage != "") {
                    $('#plate .plateImg').attr("src", theImage);
                    $('.plateImg').removeClass('d-none');

                } else {
                    $('.plateImg').addClass('d-none');
                }

                if (theGroup == "multi-plate") {

                    $('#multi-plate .plateImg').removeClass('d-none');

                    $('#multi-plate').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "plate") {

                    $('#plate').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "plate-available") {

                    $('#plate .plate-application-plate').removeClass('d-none').prev().addClass('d-none');

                    $('#plate').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "application") {

                    $('#application .plateImg').attr("src", theImage);

                    $('#application').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }


                if (theGroup == "approved") {
                    $('#approved .plateImg').attr("src", theImage);

                    $('#approved').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }



                if (theGroup == "car") {
                    //functions related to cars goes here
                    $('#car-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");

                }

                if (theGroup == "incident") {
                    //functions for incidents

                    $('#incident-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");

                }

                if (theGroup == "collectionPoint") {
                    //functions for collection points
                    $('#collectionPoint-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "agent") {
                    //function for agents
                    $('#agents-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "offstreetParking") {
                    //function for off street parking
                    $('#offstreet-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                }

                if (theGroup == "street") {
                    //function for on street parking
                    $('#street-info').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");

                }

                // this shows the more details
                // alert('clicked');

                var theCanvas = new bootstrap.Offcanvas(offcanvasExample)
                theCanvas.show()





            });

            // close content when mouse exits
            marker.addListener('mouseout', function() {
                infowindow.close(map, marker);

            });

        }
    }
    searchAddress();


    //geo coding function
    //this function gets addresses and so on bassed on user input

    //call geo code
    //geocode()

    //get location form


    var locationForm = document.getElementById('location-form');

    //listen for submit
    locationForm.addEventListener('submit', geocode);

    function geocode(e) {
        e.preventDefault();
        var location = document.getElementById('location-input').value;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: location,
                    key: 'AIzaSyBl3dCvpVQUs04SOTCHgITw4Ts79-dRcfI'
                }


            })
            .then(function(response) {
                // log full response
                console.log(response);

                //formated address
                var formattedAddress = response.data.results[0].formatted_address;
                console.log(formattedAddress);

                var formattedAddressOutput = `
              <ul class="list-group">
                <li class="list-group-item">${formattedAddress}</li>
              </ul>
            `;

                // Address components
                var addressComponents = response.data.results[0].address_components;
                var addressComponentsOutput = '<ul class="list-group">'
                for (var i = 0; i < addressComponents.length; i++) {
                    addressComponentsOutput += `
                    <li class="list-group-item">
                        <strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}
                    </li>
                `;
                }
                addressComponentsOutput += '</ul>'

                //geometry
                var lat = response.data.results[0].geometry.location.lat;
                var lng = response.data.results[0].geometry.location.lng;

                var geometryOutput = `
              <ul class="list-group">
                <li class="list-group-item"><strong>Latitude:</strong> :${lat}</li>
                <li class="list-group-item"><strong>Longitude:</strong> :${lng}</li>
              </ul>
            `;

                //output to APP
                document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
                document.getElementById('address-components').innerHTML = addressComponentsOutput;
                document.getElementById('geometry').innerHTML = geometryOutput;
            })
            .catch(function(error) {
                console.log(response);
            });
    }
    var map;
    var infowindow;


    function searchAddress() {


        var input = document.getElementById("pac-input");
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // Bias the SearchBox results towards current map's viewport.

        map.addListener("bounds_changed", function() {
            searchBox.setBounds(map.getBounds());
        });

        //marker
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.

        //this function runs when the search box is clicked
        $('#pac-input').on('click', function() {
            $('.map-info-cont').addClass('left-100');
        });

        //shows the close button on the search box when someone starts to search for a new place
        $('#pac-input').on('keyup', function() {
            removeMarkers();
            $('.clear-map i').removeClass('d-none');
            $('.map-info-cont').addClass('left-100');
        });

        //this function is fired up when the close button is clicked
        // it clears the searched icons plus the search input box
        $('.clear-map').on('click', function() {

            $('.form-map-locations .clicked-subcounty').text("Not Selected").addClass('text-danger').removeClass('text-black');
            $('.form-map-locations .clicked-address').text("Not Selected").addClass('text-danger').removeClass('text-black');
            $('.form-map-locations .clicked-ward').text("Not Selected").addClass('text-danger').removeClass('text-black');
            $('.form-map-locations .clicked-street').text("Not Selected").addClass('text-danger').removeClass('text-black');


            const places = searchBox.getPlaces();
            console.log(places);
            $('.map-info-cont').addClass('left-100');
            $('#pac-input').val("");
            $('.clear-map i').addClass('d-none');
            removeMarkers();
            // Clear out the old markers.

            markers.forEach((marker) => {
                marker.setMap(null);
            });
        });

        searchBox.addListener("places_changed", () => {

            const places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach((marker) => {
                marker.setMap(null);



            });
            markers = [];


            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();

            places.forEach(function(place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                //the icons attributes for search results
                const icon = {
                    // url: place.icon,//adds unique marker depending on search results
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25),
                };

                // Create a marker for each place.
                var marker = new google.maps.Marker({
                    map: map,
                    title: place.name,
                    position: place.geometry.location,
                    icon: icon,
                    description: `<strong>` + place.name + `</strong><br><p class="text-info text-underline">Click Icon for more options</p>`
                })
                markers.push(marker);



                //creating markers for each place
                // markers.push(

                //     new google.maps.Marker({
                //     map,
                //     icon,
                //     title: place.name,
                //     position: place.geometry.location,
                //     draggable:true,

                //     })

                // );

                var infowindow = new google.maps.InfoWindow({
                    content: marker.description
                });



                marker.addListener('mouseout', function() {
                    infowindow.close(map, marker);

                });


                // add a hover event on the search results markers
                google.maps.event.addListener(marker, "mouseover", function(e) {
                    infowindow.open(map, marker);
                    infowindow.setContent(data.description);

                    var newCoords = e.latLng;
                    newCoords = newCoords.toString();
                    // alert(newCoords);

                    var Latitude;
                    var longitude;
                    longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
                    Latitude = newCoords.substring(0, newCoords.indexOf(','));
                    Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);
                    longitude = longitude.substring(0, longitude.indexOf(')'));

                    reverseGeocoding(Latitude, longitude);


                });
                toggleBounce(marker);

                //   adding marker click event
                let farmerData=""

                google.maps.event.addListener(marker, "click", function(e) {

                    var thePlace = place.name;
                    var newCoords = e.latLng;
                    

                    newCoords = newCoords.toString();

                    var Latitude;
                    var longitude;
                    longitude = newCoords.substring(newCoords.lastIndexOf(",") + 1);
                    Latitude = newCoords.substring(0, newCoords.indexOf(','));
                    Latitude = Latitude.substring(Latitude.lastIndexOf("(") + 1);
                    longitude = longitude.substring(0, longitude.indexOf(')'));

                    reverseGeocoding(Latitude, longitude);
                    $('#newPoint').removeClass('left-100').siblings().addClass('left-100');

                    var thePlaceHolder = $('.listview .selected-point-details');

                    thePlaceHolder = `
                    <p class="mb-0"><strong>The Place Name</strong></p>
                    <p class="clicked-place">${thePlace}</p>
                    `;
                    toggleBounce(marker);



                });

                //   marker click event ends here



                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);

            // console.log(places[0]);
            // console.log("address components");
            // console.log(places[0].address_components[0]);
            // console.log(places[0].geometry.location.lat);
        });

        // serching through the map
    }

    //make the marker bounce
    function toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null);
            }, 750);
        }
    }

    //remove marker function
    function removeMarkers() {
        for (i = 0; i < gmarkers.length; i++) {
            gmarkers[i].setMap(null);
        }
    }

    // reverse geo coding
    function reverseGeocoding(Latitude, longitude) {
        const KEY = "AIzaSyBl3dCvpVQUs04SOTCHgITw4Ts79-dRcfI";
        const LAT = -1.270102;
        const LNG = 36.8589333;
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${Latitude},${longitude}&key=${KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var reverseResultsOutput = '<ul class="list-group">';
                console.log(data);
                var numOfResults = data.results.length;

                var County;
                var County;
                var subCounty;
                var street;
                var address;
                var ward;
                var province;
                var constituency;


                for (var num = 0; num < numOfResults; num++) {
                    // let parts=data.results[i].address_components;
                    address = data.results[0].formatted_address;

                    // alert(num);
                    let parts = data.results[num].address_components;
                    parts.forEach(part => {
                        if (part.types.includes("administrative_area_level_2")) {
                            //we found subcounty inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            subCounty = part.long_name;


                        }
                        if (part.types.includes("country")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo

                            Country = part.long_name;

                        }

                        if (part.types.includes("administrative_area_level_1")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            County = part.long_name;


                        }
                        if (part.types.includes("administrative_area_level_4")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            ward = part.long_name;


                        }
                        if (part.types.includes("administrative_area_level_4")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            ward = part.long_name;


                        }
                        if (part.types.includes("sublocality_level_1")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            ward = part.long_name;


                        }

                        if (part.types.includes("route")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            street = part.long_name;


                        }
                        if (part.types.includes("sublocality_level_1")) {
                            //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                            constituency = part.long_name;


                        }

                    });



                }
                // alert("ward::"+ward);
                // alert("street: "+street);
                // alert("constituency: "+constituency);
                // alert("subcounty:"+subCounty);

                $('#newPoint .clicked-ward').text(ward);
                $('.form-map-locations .clicked-ward').text(ward).addClass('text-black').removeClass('text-danger');;

                $('#newPoint .clicked-street').text(street);
                $('.form-map-locations .clicked-street').text(street).addClass('text-black').removeClass('text-danger');;

                $('#newPoint .clicked-subcounty').text(subCounty);
                $('.form-map-locations .clicked-subcounty').text(subCounty).addClass('text-black').removeClass('text-danger');


                $('#newPoint .clicked-address').text(address);
                $('.form-map-locations .clicked-address').text(address).addClass('text-black').removeClass('text-danger');
                $('.form-map-locations .form-address').val(address);

                $('.form-map-locations .form-latitude').val(Latitude);
                $('.form-map-locations .form-longitude').val(longitude);

                $('.permits-asside .the-clicked-address').text(address);
                $('.the-clicked-address').text(address);

                //alert(address);

                $('#plate .plate-address').text(address);
                $('#application .plate-address').text(address);

                $('#plate .plate-street').text(street);
                $('#application .plate-street').text(street);

                $('#multi-plate .plate-street').text(street);
                $('#multi-plate .plate-address').text(address);



                let parts = data.results[0].address_components;
                reverseResultsOutput += `
            <li class="list-group-item"><strong>Address: </strong> :${data.results[0].formatted_address}</li> 
            `;
                parts.forEach(part => {
                    // if(part.types.includes("country")){
                    //     //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                    //     reverseResultsOutput+=`
                    //     <ul class="list-group">
                    //         <li class="list-group-item"><strong>Country:</strong> :${part.long_name}</li>
                    //     `;

                    //     document.getElementById('location-cods').innerHTML=reverseResultsOutput;
                    // }

                    if (part.types.includes("administrative_area_level_2")) {
                        //we found country inside the data.results[0].address_components[x].types.zmdi-view-arraydo
                        reverseResultsOutput += `
              
                    <li class="list-group-item"><strong>County: </strong> :${part.long_name}</li>
                `;

                        document.getElementById('location-cods').innerHTML = reverseResultsOutput;
                    }

                    reverseResultsOutput += "</ul>";
                })
            })
            .catch(err => console.warn(err.message));
    }

    //remove marker
    function removeMarkers() {
        for (i = 0; i < gmarkers.length; i++) {
            gmarkers[i].setMap(null);
        }
    }

}