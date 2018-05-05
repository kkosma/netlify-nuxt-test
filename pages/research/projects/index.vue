<template>
  <section class="container">
    <h2>research Index</h2>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <nuxt-link :to="post._path">
          {{ post.title }}
        </nuxt-link>
      
      </li>
            <nuxt-link 
          to="/blog" 
          class="button--green">See Your First Post</nuxt-link>
    </ul>

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  components: {
    AppLogo
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/research/', false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/research/projects/${key.replace('.json', '').replace('./', '')}`
    }));
     // const index = require('~/content/research/index.json');
     // console.log(index,'indexxx')
   // console.log('post',params,post)
    //post.body=  post.body.replace(/\n/g, "<br />");
   // return post;
    return { posts };
  }
};
</script>

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
