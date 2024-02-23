const { DateTime } = require('luxon');
const { v4: uuidv4 } = require('uuid');

const items = [
    {
        id: '1',
        image: "witcher-3.jpg",
        title: "The Witcher 3",
        condition: 'Broken',
        console: 'Nintendo Switch',
        price: '9.99',
        offers: '2',
        content: 'I accidently had the cartridge for this game run through the washing machine... it might work...',
        seller: 'Alanah Nalewaja',
        listedAt: DateTime.local(2021, 8, 10, 12, 0).toLocaleString(DateTime.DATETIME_SHORT),
        active: true
    },
    {
        id: '2',
        image: "Minecraft_game_cover.jpeg",
        title: "Minecraft",
        condition: 'Poor',
        console: 'Xbox Series X',
        price: '19.99',
        offers: '0',
        content: 'This game has been through the ringer. The disc is pretty scratched but should work fine if put in a resurfacer.',
        seller: 'Sidney Nalewaja',
        listedAt: DateTime.local(2023, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT),
        active: true
    },
    {
        id: '3',
        image: "dying-light-cover.jpg",
        title: "Dying Light 2",
        condition: 'New',
        console: 'Playstation 5',
        price: '29.99',
        offers: '4',
        content: 'I bought this game when it released and never played it. The game is sealed.',
        seller: 'Noah Nalewaja',
        listedAt: DateTime.local(2022, 2, 5, 18, 0).toLocaleString(DateTime.DATETIME_SHORT),
        active: true
    },
    {
        id: '4',
        image: "halo-infinite-gamecover.jpg",
        title: 'Halo Infinite',
        condition: 'Good',
        console: 'Xbox One X',
        price: '49.99',
        offers: '10',
        content: 'I have had this game for a few years now and only touched it a handful of times. Great condition.',
        seller: 'Landon Nalewaja',
        listedAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        active: true
    },
    {
        id: '5',
        image: "Baldur's_Gate_3_cover_art.jpg",
        title: "Baldur's Gate 3",
        condition: 'Fair',
        console: 'Playstation 5',
        price: '59.99',
        offers: '16',
        content: 'This game is in fair condition. It been used a decent amount.',
        seller: 'Caden Nalewaja',
        listedAt: DateTime.local(2024, 1, 11, 18, 0).toLocaleString(DateTime.DATETIME_SHORT),
        active: true
    },
    {
        id: '6',
        image: "metroid-dread.png",
        title: "Metroid Dread",
        condition: 'Good',
        console: 'Nintendo Switch',
        price: '59.99',
        offers: '8',
        content: 'Amazing Game! I have had many play throughs and the cartridge works well!',
        seller: 'Gregory Nalewaja',
        listedAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT),
        active: true
    }
];

exports.find = function() {
    return items;
};

exports.search = function(value) {
    let searchItems = items.filter(item => item.title.includes(value) || item.content.includes(value));
    return searchItems;
}

exports.findById = function(id) {
    return  items.find(item => item.id === id);
};

exports.save = function(item) {
    item.id = uuidv4();
    item.listedAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    item.offers = 0;
    item.active = true;

    items.push(item);
    items.sort((itemA, itemB) => parseFloat(itemA.price) - parseFloat(itemB.price));
}

exports.sortList = function() {
    items.sort((itemA, itemB) => parseFloat(itemA.price) - parseFloat(itemB.price));
}

exports.updateById = function(id, newItem) {
    let item = items.find(item => item.id === id);
    if (item) {
        item.image = newItem.image;
        item.title = newItem.title;
        item.console = newItem.console;
        item.condition = newItem.condition;
        item.price = newItem.price;
        item.content = newItem.content
        return true;
    } else {
        return false;
    }
}

exports.deleteByID = function(id) {
    let index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    } else {
        return false;
    }
}
