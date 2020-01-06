(function() {


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA-nIC6QIHhjM86nTwr7mzezJ9e3gWOKb8",
        authDomain: "smart-city-6207b.firebaseapp.com",
        databaseURL: "https://smart-city-6207b.firebaseio.com",
        projectId: "smart-city-6207b",
        storageBucket: "smart-city-6207b.appspot.com",
        messagingSenderId: "902075439488"
      };
      firebase.initializeApp(config);

    //Get getElementsByClassName

    //Altitude
    const preAltitude = document.getElementById('Altitude');

    //Humidity
    const preHumidity = document.getElementById('Humidity');

    //Pressure
    const prePressure = document.getElementById('Pressure');

    //Temperature
    const preTemperature = document.getElementById('Temperature');

    //create referances
 
    const dbRefWeatherStation = firebase.database().ref().child('Weather Station');

    const dbRefAltitude = dbRefWeatherStation.child('Altitude');

    const dbRefHumidity = dbRefWeatherStation.child('Humidity');

    const dbRefPressure = dbRefWeatherStation.child('Pressure');

    const dbRefTemperature = dbRefWeatherStation.child('Temperature');


    // sync object changes
    //dispalys on the webpage

    //Altitude data
    dbRefAltitude.on('value', snap => {
        preAltitude.innerText = JSON.stringify(snap.val(), null, 3)+" m"
    });

    // temperature data
    dbRefTemperature.on('value', snap => {
        preTemperature.innerText = JSON.stringify(snap.val(), null, 3)
    });
    // Humidity data 
    dbRefHumidity.on('value', snap => {
        preHumidity.innerText = JSON.stringify(snap.val(), null, 3)+" %"
    });

    //Pressure data  
    dbRefPressure.on('value', snap => {
        prePressure.innerText = JSON.stringify(snap.val(), null, 3)+" Pa"
    });


}());