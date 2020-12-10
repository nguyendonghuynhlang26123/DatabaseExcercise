'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
            "title": "Vivamus metus arcu",
            "imagepath": "/images/templatemo_image_01.jpg",
            "author": "Larry Aleksich",
            "summary": "In congue. Etiam justo. Etiam pretium iaculis justo.",
            "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
            "categoryId": 3,
            "createdAt": new Date("6/6/2019")
        }, {
            "title": "Nunc purus",
            "imagepath": "/images/templatemo_image_02.jpg",
            "author": "Nerty Riccio",
            "summary": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "categoryId": 2,
            "createdAt": new Date("4/15/2019")
        }, {
            "title": "Maecenas tristique est et tempus semper",
            "imagepath": "/images/templatemo_image_01.jpg",
            "author": "Mitchel McPike",
            "summary": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
            "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "categoryId": 4,
            "createdAt": new Date("10/20/2019")
        }, {
            "title": "Nam tristique tortor eu pede",
            "imagepath": "/images/templatemo_image_02.jpg",
            "author": "Kora McConnel",
            "summary": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "categoryId": 4,
            "createdAt": new Date("12/16/2018")
        }, {
            "title": "Donec dapibus",
            "imagepath": "/images/templatemo_image_01.jpg",
            "author": "Ernestine Kirkham",
            "summary": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "categoryId": 4,
            "createdAt": new Date("3/27/2019")
        }, {
            "title": "Nullam sit amet turpis elementum ligula vehicula consequat",
            "imagepath": "/images/templatemo_image_02.jpg",
            "author": "Pattie Blackmoor",
            "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "categoryId": 5,
            "createdAt": new Date("3/1/2019")
        }, {
            "title": "Maecenas pulvinar lobortis est",
            "imagepath": "/images/templatemo_image_01.jpg",
            "author": "Constantina Johananov",
            "summary": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
            "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "categoryId": 6,
            "createdAt": new Date("4/29/2019")
        }, {
            "title": "Lorem ipsum dolor sit amet",
            "imagepath": "/images/templatemo_image_02.jpg",
            "author": "Mikel Jancar",
            "summary": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
            "categoryId": 4,
            "createdAt": new Date("5/17/2019")
        }, {
            "title": "Quisque arcu libero, rutrum ac",
            "imagepath": "/images/templatemo_image_02.jpg",
            "author": "Jose Dufall",
            "summary": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
            "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "categoryId": 10,
            "createdAt": new Date("3/19/2019")
        }, {
            "title": "Nam tristique tortor eu pede",
            "imagepath": "/images/templatemo_image_01.jpg",
            "author": "Barbara Ties",
            "summary": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "categoryId": 9,
            "createdAt": new Date("12/8/2018")
        }];
        var months = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        data.map(item => {
            item.day = item.createdAt.getDate();
            item.month = months[item.createdAt.getMonth()];
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Blogs', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Blogs', null, {});
    }
};