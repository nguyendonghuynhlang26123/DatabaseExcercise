'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
            "name": "Services"
        }, {
            "name": "Marketing"
        }, {
            "name": "Support"
        }, {
            "name": "Legal"
        }, {
            "name": "Marketing"
        }, {
            "name": "Human Resources"
        }, {
            "name": "Legal"
        }, {
            "name": "Accounting"
        }, {
            "name": "Product Management"
        }, {
            "name": "Marketing"
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Categories', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};