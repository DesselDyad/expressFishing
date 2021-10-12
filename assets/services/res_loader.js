const user = require('../mongo/db/user');
const role = require('../mongo/db/role');
const global = require('../mongo/db/global');
const newsletter = require('../mongo/db/newsletter');
const crumbs = require('../JSON/json_modules/crumbs');
const css_loader = require('./css_loader');
const js_loader = require('./js_loader');
const fish = require('../mongo/db/fish');
const fish_species = require('../mongo/db/fish_species');
const locations = require('../mongo/db/location');

module.exports = {
    data : ip => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {};
                //page ressources
                //header data
                obj.latest = await fish.getLatest();
                obj.fish_species = await fish_species.getAll();
                obj.locations = await locations.getAll();
                obj.dates = await fish.getDistinctDates();
                obj.records = await fish.getFishRecordsData();
                //stat data
                obj.global = await global.update(ip);
                //page background data
                obj.sheets = await css_loader.read_css_sheets();
                obj.scripts = await js_loader.read_scripts();
                obj.crumbs = await crumbs.getAll();
                //admin resources (do i even need these here? tbd)
                obj.users = await user.getAll();
                obj.subscribers = await newsletter.getAll();
                obj.roles = await role.getAll();
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    },
    admin_data : () => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {};
                obj.fish_species = await fish_species.getAll();
                obj.fishes = await fish.getAll();
                obj.locations = await locations.getAll();
                obj.fishers = await user.getAll();
                obj.dates = await fish.getDistinctDates();
                //page ressources
                obj.sheets = await css_loader.read_css_sheets();
                obj.scripts = await js_loader.read_scripts();
                obj.crumbs = await crumbs.getAll();
                //admin resources
                obj.users = await user.getAll();
                obj.subscribers = await newsletter.getAll();
                obj.roles = await role.getAll();
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    }
}