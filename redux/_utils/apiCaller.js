import axios from 'axios';

const API_ENPOINT = "https://924e-14-226-224-177.ngrok.io";
export var callApi = function (endpoint, method = 'GET', body) {
    console.log(`${API_ENPOINT}/${endpoint}`);
    return axios({
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer`
        },
        url: `${API_ENPOINT}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    });
};

