const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b4d7d720e5d176f0d1814351b614d770/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) +'?units=si';

    request({
        url,
        json: true
    }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, 
                body.daily.data[0].summary +
                ' It is currently ' + 
                body.currently.temperature + 
                ' degrees out. There is a ' + 
                body.currently.precipProbability + 
                '% chance of rain. The high today is ' +
                body.daily.data[0].temperatureMax +
                '°C and the low is ' +
                body.daily.data[0].temperatureMin +
                '°C.'
            );
        }
    })
};

module.exports = forecast;