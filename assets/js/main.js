'use strict';

require('../css/main.css');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('@fortawesome/fontawesome-free');
require('@fortawesome/fontawesome-free/css/all.css');
const $ = require('jquery');
global.$ = $;
require('select2');
require('select2/dist/css/select2.css');

//For Select2
$(document).ready(function() {
    $('.select_tags').select2();
});
