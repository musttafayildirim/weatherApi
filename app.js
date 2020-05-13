let argv = require("yargs")
    .option('location', {
        alias    : 'l',
        demand   : false,
        describe : 'Hava durumu için lokasyon bilgisi',
        type : 'string'
    })
    .help('help')
    .argv;

var weather = require("./weather");
var location = require("./location");

if(typeof argv.l === 'string' && argv.l.length > 0){
    console.log("Lokasyon bilgisi girildi.");

    weather(argv.l).then(function(currentWeather){
        console.log(currentWeather);
    }, function(error){
        console.log(error);
    })
} else{
    console.log("Lokasyon bilgisi girilmedi tahmin ediliyor.");

    location().then(function(location){
        return weather(location.city);
    }).then(function(currentWeather){
        console.log(currentWeather);
    }).catch(function(error){
        console.log(error);
    })
}