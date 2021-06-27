const axios = require('axios');
const fs = require('fs');
const path = require('path');

const URL = 'https://www.tutscoder.com';
const SITEMAP_LOCATION = path.join(process.cwd(), 'src/sitemap.xml');

const ROUTES = [
  '/',
  '/posts',
];

 axios.get('https://nodeblog-api.herokuapp.com/api/v1/posts')
  .then(resp => {
    
    resp.data.data.forEach(post => {
      ROUTES.push(`/post/${post.slug}`);
    }); 
    main();
  }); 

function main() {

   const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${ROUTES.map(route => {
      return `<url>
      <loc>${URL}${route}</loc>
    </url>
    `
    }).reduce((acc, item) => {
      return acc + item;
    }, '')}
  </urlset>
  `;
  fs.writeFileSync(SITEMAP_LOCATION, sitemap); 
  console.log('Sitemap Generated......');
}