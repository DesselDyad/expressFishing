module.exports = app => {
    require('./private/contact')(app);
    require('./private/navigation')(app);
    require('./private/newsletter')(app);
    require('./private/role')(app);
    require('./private/security')(app);
    require('./private/user')(app);
    require('./private/validation')(app);
    require('./private/authentication')(app);
    require('./private/fish_species')(app);
    require('./private/fish')(app);
    require('./private/location')(app);
    require('./private/search')(app);
}