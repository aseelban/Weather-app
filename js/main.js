'use strict';

const log = console.log;

let cObj;
let fObj;
let zObj;
var _city;
var _country;


//! GET THE CONDITIONS
const weatherConditions = async () => {

    try{
        //! get user location
        const req_location = await fetch("//ipinfo.io/json?token=d4bfd8974aedae")
        zObj = await req_location.json();
        _city = await zObj.city;
        _country = await zObj.country;

        const req = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${_city},${_country}&appid=43d2faad6ff934ab2c8b736939e7d695&units=imperial`)

         cObj = await req.json();

        document.querySelector('#location').innerHTML = cObj.name;
        document.querySelector('#weather').innerHTML = cObj.weather[0].description;
        document.querySelector('#temperature').innerHTML = cObj.main.temp;
        document.querySelector('#desc').innerHTML = 'Wind speed '+cObj.wind.speed;

    }catch(err){
        log(err)
    }

}
weatherConditions()



// !GET THE FORECARST
const forecarst = async () => {

    try{

        //! get user location
        const req_location = await fetch("//ipinfo.io/json?token=d4bfd8974aedae")
        zObj = await req_location.json();
        _city = await zObj.city;
        _country = await zObj.country;


        const req = await fetch(`//api.openweathermap.org/data/2.5/forecast?q=${_city},${_country}&appid=d22082e41329a80a63316b0d28f898ec&units=imperial`)

        fObj = await req.json();


        //! day 1
        var date_raw = fObj.list[0].dt_txt;
        date_raw = date_raw.substring(5,11);
        document.getElementById('r1c1').innerHTML=`<span class="d-title">Date: </span>${date_raw}`;
        
        //* set img icon
        var iconcode = fObj.list[0].weather[0].icon;
        var icon_path = `//openweathermap.org/img/w/${iconcode}.png`;
        document.getElementById('r1c2').src = icon_path;

        document.getElementById('r1c3').innerHTML = fObj.list[0].main.temp_min+'&deg';
        document.getElementById('r1c4').innerHTML = fObj.list[0].main.temp_max+'&deg';


        //! day 2
        var date_raw = fObj.list[8].dt_txt;
        date_raw = date_raw.substring(5,11);
        document.getElementById('r2c1').innerHTML=`<span class="d-title">Date: </span>${date_raw}`;
        
        //* set img icon
        var iconcode = fObj.list[8].weather[0].icon;
        var icon_path = `//openweathermap.org/img/w/${iconcode}.png`;
        document.getElementById('r2c2').src = icon_path;

        document.getElementById('r2c3').innerHTML = fObj.list[0].main.temp_min+'&deg';
        document.getElementById('r2c4').innerHTML = fObj.list[0].main.temp_max+'&deg';
        
        
        //! day 3
        var date_raw = fObj.list[16].dt_txt;
        date_raw = date_raw.substring(5,11);
        document.getElementById('r3c1').innerHTML=`<span class="d-title">Date: </span>${date_raw}`;
        
        //* set img icon
        var iconcode = fObj.list[16].weather[0].icon;
        var icon_path = `//openweathermap.org/img/w/${iconcode}.png`;
        document.getElementById('r3c2').src = icon_path;

        document.getElementById('r3c3').innerHTML = fObj.list[0].main.temp_min+'&deg';
        document.getElementById('r3c4').innerHTML = fObj.list[0].main.temp_max+'&deg';
        

    }catch(err){
        log(err)
    }
}

forecarst();