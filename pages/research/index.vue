<template>
  <section class="container">
 
  <h1>{{index.title}}</h1>
<p>{{index.description}}</p>
      <div v-html="index.__content"></div>
      <div  v-for="post in posts" :key="post.title">
        {{post.title}}
      </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import fm from 'front-matter'
//import FirstPost from '/content/research/index.md'
export default {
  components: {
    AppLogo
  },
  asyncData(context) {
    // Using webpacks context to gather all files from a folder
    
    const context2 = require.context('~/content/', true, /\.md$/);

    const posts = context2.keys().map(key => ({
      ...context2(key),
      _path: `/${key.replace('.md', '').replace('./', '')}`
    }));
     //const FirstPost = require('/content/research/index.md');
      const index = require('~/content/research/index.md');
       console.log(posts,'first')
      //const front=fm(FirstPost)
      //console.log(index,'indexxx',context)
   // console.log('post',params,post)
    //post.body=  post.body.replace(/\n/g, "<br />");
   // return post;
    return { posts,index };
  }
};
</script>x

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
