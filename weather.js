const request = require("request");

module.exports = function(location){
    return new Promise(function(resolve, reject){
        let encodedLocation = encodeURIComponent(location);
        let apiKey = "c7661ecdbb149eb496a79b51a9e2be22";
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation + "&appid=" + apiKey + "&units=metric";

        if(!location){
            return reject("Lokosyan bilgisi girilmedi.");
        }
        request({
            url  : url,
            json : true
        }, function(error, response, body){
            if(error){
                reject("Hava durumu alınamadı!!!");
            }else{
                resolve(body.name + " hava sıcaklığı : " + body.main.temp);
            }
        });
    })
}