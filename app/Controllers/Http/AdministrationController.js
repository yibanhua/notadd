'use strict';

class AdministrationController {
    async handle({ view }) {
        return view.render('welcome');
    }
}

module.exports = AdministrationController;
