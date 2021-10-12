const user = require('../db/user');
const location = require('../db/location');
const fish = require('../db/fish');
const fish_species = require('../db/fish_species');
const res_loader = require('../../services/res_loader');

module.exports = {
    getAll: (param, ip) => {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await res_loader.data(ip);
                result.title = "Search";
                result.search = {};
                result.search.users = await user.getAll(param);
                result.search.locations = await location.getAll(param);
                result.search.fish_species = await fish_species.getAll(param);
                result.param = param;
                resolve(result);
            } catch (e) {
                reject(e);
            }

        })
    }
}