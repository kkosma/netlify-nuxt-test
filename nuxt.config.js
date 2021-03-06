var glob = require('glob');
var path = require('path');
var fm = require('front-matter');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var saveMD =function(param){
  module.exports.env.sourcemd=param
  console.log(param,'param',module.exports.env)
}
var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json',
  '/research': 'research/projects/*.json'
});


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Netlify CMS project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Route config for pre-rendering
  */
  generate: {
    routes: dynamicRoutes
  },
  modules: [
    //['nuxtent']
    //'@nuxtjs/markdownit',
   
  ],
  markdownit: {


    injected: true,

    /*
    preprocess: function (markdownIt, parser, source) {
      // do any thing
     //console.log('source', this)
     //saveMD(parser)
      markdownIt.fm={}
      markdownIt.fm=fm(source)
     // console.log('source',  markdownIt)
      return source
    },*/
    
  },
  /*
  ** Build configuration
  */
  build: {
    vendor:['front-matter'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
          test: /\.md/,
          loader: 'markdown-with-front-matter-loader', 
      });
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env:{
    dude:true,
    sourcemd:''
  }
}


/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
