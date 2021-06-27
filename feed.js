const axios = require('axios');
const fs = require('fs');
const path = require('path');
const Feed = require('feed').Feed;

const URL = 'https://www.tutscoder.com';
const FEED_LOCATION = path.join(process.cwd(), 'src/rss/rssfeed.xml');

const ROUTES = [
  '/',
  '/posts',
];

let feed = new Feed({

  title: 'TutsCoder',

  description: 'Programming & Web Development Tutorials',

  author: {

    name: 'TutsCoder',

    link: 'https://www.tutscoder.com/'

  }

})

axios.get('https://nodeblog-api.herokuapp.com/api/v1/posts')
  .then(resp => {

    const result = resp.data.data;

    for (var i = 0; i < result.length; i++) {

      if (result[i]['updatedAt']) {

        var myFormattedDate = new Date(result[i]['updatedAt']).toISOString().substring(0, 10);

        var newarr = myFormattedDate.split('-');

        var year = newarr[0];

        var month = newarr[1];

        var day = newarr[2];

        feed.addItem({

          title: result[i]['title'],

          link: "https://www.tutscoder.com/post/" + result[i]['slug'],

          description: result[i]['excerpt'],

          author: [{

            name: 'tutscoder',

            email: 'tutscoder@gmail.com',

            link: 'https://www.tutscoder.com'

          }],

          date: new Date(year, month, day),

        });



        var rssdoc = feed.rss2();

        fs.writeFile(FEED_LOCATION, rssdoc, function (err) {

          if (err) {

            return console.log(err);

          }

        });

      }
    }

    console.log('RSS feed generated');
  });
