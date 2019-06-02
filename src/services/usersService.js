import DataFetcher from "../helpers/dataFetcher";

class UsersService {

    getUsersList = async query => {
        const data = await DataFetcher.getData(query);
        return Promise.resolve(data);
    };

    getUserById = async (query, params) => {
        const data = await DataFetcher.getData(query, params);
        return Promise.resolve(data);
    };

    addUser = async (query, params) => {
        const data = await DataFetcher.postData(query, params);
        return Promise.resolve(data);
    };

    updateUser = async (query, params) => {
        const data = await DataFetcher.postData(query, params);
        return Promise.resolve(data);
    }
}

export default new UsersService();