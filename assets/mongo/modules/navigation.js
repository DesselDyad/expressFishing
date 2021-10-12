const user = require('../db/user');
const fish = require('../db/fish');
const location = require('../db/location');

const res_loader = require('../../services/res_loader');

module.exports = {
	loadIndexPage: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Home';
			res.render('pages/index', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadFishPage: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Fish';
			res.render('pages/fish', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadSingleFish: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.singleFish = await fish.getSingle(req.params.id);
			obj.title = 'Fish';
			res.render('pages/fish', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadFishSpeciesPage: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Fish Species';
			res.render('pages/fish_species', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadSingleFishSpecies: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.singleFishSpecies = await fish.getAllFromSpecies(req.params.id);
			obj.title = 'Fish Species';
			res.render('pages/fish_species', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadLocationPage: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Locations';
			res.render('pages/locations', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadSingleLocation: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			//both all pictures of this location and all fish caught in this location (respectively ordered by species & weight)
			obj.singleLocation = await location.loadSingleLocation(req.params.id);
			obj.title = 'Locations';
			res.render('pages/locations', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadRecordsPage: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Records';
			res.render('pages/records', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	getSingleSpeciesRecords: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.singleSpeciesRecords = await fish.getSingleSpeciesRecords(req.params.id);
			obj.title = 'Records';
			res.render('pages/records', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadDatesPage: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Dates';
			res.render('pages/dates', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadSingleDate: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.singleDate = await fish.loadSingleDate(req.params.date);
			obj.title = 'Dates';
			res.render('pages/dates', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadContactPage: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Contact';
			res.render('pages/contact', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadStatsPage: async (req, res, next) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Stats';
			res.render('pages/stats', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadLoginPage: async (req, res) => {
		try {
			if(!req.user) {
				let obj = await res_loader.data(req.ip.toString());
				obj.title = 'Login';
				res.render('pages/login', obj)
			} else {
				res.redirect('profile')
			}
		}
		catch (err) {
			console.log(err);
		} 
	},
	loadRegisterPage: async (req, res) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Register';
			res.render('pages/register', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadProfilePage: async (req, res) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			//for later, check if you can't just use req.user and save yourself the extra call
			obj.user = await user.getSingle(req.session.passport.user);
			obj.title = 'Profile';
			res.render('pages/profile', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
    myFish: async (req, res) => {
        try {
			let obj = await res_loader.data(req.ip.toString());
            obj.myFish = await user.myFish(req.session.passport.user);
			obj.title = 'My Fish';
			res.render('pages/profile/my_fish', obj);
        } catch (e) {
            console.log(e);
        }
    },
    loadSocialNetworkingPage: async (req, res) => {
        try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Social Networking';
			res.render('pages/profile/social', obj);
        } catch (e) {
            console.log(e);
        }
    },
    loadSecurityPage: async (req, res) => {
        try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Security';
			res.render('pages/profile/security', obj);
        } catch (e) {
            console.log(e);
        }
    },
    loadPreferencesPage: async (req, res) => {
        try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Preferences';
			res.render('pages/profile/preferences', obj);
        } catch (e) {
            console.log(e);
        }
    },
    loadEditPersonalInfoPage: async (req, res) => {
        try {
			let obj = await res_loader.data(req.ip.toString());
			obj.title = 'Edit Personal Information';
			res.render('pages/profile/edit_info', obj);
        } catch (e) {
            console.log(e);
        }
    },
	loadTargetProfilePage: async (req, res) => {
		try {
			let obj = await res_loader.data(req.ip.toString());
			//for later, check if you can't just use req.user and save yourself the extra call
			obj.user = await user.getSingle(req.params.id);
			obj.title = 'Profile';
			res.render('pages/profile', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadAdminPage: async (req, res) => {
		try {
			let obj = await res_loader.admin_data();
			obj.title = 'Admin';
			res.render('pages/admin', obj);
		}
		catch (err) {
			console.log(err);
		}
	}
}