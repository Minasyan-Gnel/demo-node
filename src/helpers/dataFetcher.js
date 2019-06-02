import Configs from "../configs";

class DataFetcher {
    getData = async (query, params) => {
        const request = params
            ? Object.keys(params).reduce((arr, curr) => arr + `&${curr}=${params[curr]}`, `${query}?`)
            : query;
        const response = await fetch(Configs.main.url + request);
        const data = await response.json();
        return Promise.resolve(data);
    };
    postData = async (query, params) => {
        const response = await fetch(Configs.main.url + query, {
            method: "POST",
            body: JSON.stringify(params),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return Promise.resolve(data);
    }
}

export default new DataFetcher();