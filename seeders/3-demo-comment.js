'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
            "fullname": "Louisa Emmot",
            "email": "lemmot0@prweb.com",
            "blogId": 2,
            "comment": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            "fullname": "Cass Wellbank",
            "email": "cwellbank1@tumblr.com",
            "blogId": 5,
            "comment": "Praesent id massa id nisl venenatis lacinia."
        }, {
            "fullname": "Jasmina Craker",
            "email": "jcraker2@moonfruit.com",
            "blogId": 6,
            "comment": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy."
        }, {
            "fullname": "Myrtice Balding",
            "email": "mbalding3@behance.net",
            "blogId": 1,
            "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla."
        }, {
            "fullname": "Ryon Zannini",
            "email": "rzannini4@cafepress.com",
            "blogId": 1,
            "comment": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem."
        }, {
            "fullname": "Zacharias Ellick",
            "email": "zellick5@tumblr.com",
            "blogId": 2,
            "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
        }, {
            "fullname": "Welsh Malpas",
            "email": "wmalpas6@wunderground.com",
            "blogId": 1,
            "comment": "Nulla tellus."
        }, {
            "fullname": "Ashien Richt",
            "email": "aricht7@narod.ru",
            "blogId": 10,
            "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
        }, {
            "fullname": "Colleen Ashman",
            "email": "cashman8@cargocollective.com",
            "blogId": 5,
            "comment": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
        }, {
            "fullname": "Bette-ann Tanswill",
            "email": "btanswill9@booking.com",
            "blogId": 4,
            "comment": "Suspendisse accumsan tortor quis turpis. Sed ante."
        }, {
            "fullname": "Bartram Mahody",
            "email": "bmahodya@usa.gov",
            "blogId": 2,
            "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt."
        }, {
            "fullname": "Zondra Goldney",
            "email": "zgoldneyb@diigo.com",
            "blogId": 1,
            "comment": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."
        }, {
            "fullname": "Charlotta Coogan",
            "email": "ccooganc@plala.or.jp",
            "blogId": 5,
            "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
        }, {
            "fullname": "Malena Gantlett",
            "email": "mgantlettd@wordpress.com",
            "blogId": 5,
            "comment": "In hac habitasse platea dictumst."
        }, {
            "fullname": "Timmie Denizet",
            "email": "tdenizete@gnu.org",
            "blogId": 7,
            "comment": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio."
        }, {
            "fullname": "Johannah Dahlen",
            "email": "jdahlenf@eepurl.com",
            "blogId": 8,
            "comment": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante."
        }, {
            "fullname": "Dorie Cooling",
            "email": "dcoolingg@spiegel.de",
            "blogId": 2,
            "comment": "Aliquam non mauris. Morbi non lectus."
        }, {
            "fullname": "Ceciley Crownshaw",
            "email": "ccrownshawh@amazon.de",
            "blogId": 7,
            "comment": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum."
        }, {
            "fullname": "Husein Rogerson",
            "email": "hrogersoni@ebay.com",
            "blogId": 2,
            "comment": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
            "fullname": "Dianemarie Atger",
            "email": "datgerj@economist.com",
            "blogId": 5,
            "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Comments', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});
    }
};