let APIURL ='';

switch (window.location.hostname){
    case 'localhost' || '127.0.1':
    APIURL='http://localhost:3001';
    break;
    case 'skatepark-client.herokuapp.com':
        APIURL=" https://gentle-caverns-75365.herokuapp.com"
}

export default APIURL;