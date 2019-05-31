import mainConfigs from "../configs";

class UsersService {
    constructor () {
        this.data = {};
    }

    getUserList = (params, callBack) => {
        fetch(mainConfigs.url + params)
            .then(res => res.json())
            .then(res => {
                this.data.usersList = res;
                callBack && callBack(res);
            })
    };

    addUser = (params, data, callBack = () => {}) => {
        fetch(mainConfigs.url + params, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(callBack)
    }
}

export default new UsersService();