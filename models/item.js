const { DateTime } = require('luxon');
const items = [
    {
        id: '1',
        image: "halo-infinite-gamecover.jpg",
        title: 'Halo Infinite',
        condition: 'Good',
        console: 'Xbox One X',
        price: '49.99',
        offers: '10',
        content: 'I have had this game for a few years now and only touched it a handful of times. Great condition.',
        author: 'Landon Nalewaja',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        image: "Baldur's_Gate_3_cover_art.jpg",
        title: "Baldur's Gate 3",
        condition: 'Fair',
        console: 'Playstation 5',
        price: '59.99',
        offers: '16',
        content: 'I have had this game for a few years now and only touched it a handful of times. Great condition.',
        author: 'Caden Nalewaja',
        createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.find = function() {
    return items;
}


