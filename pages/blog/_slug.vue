<template>
  <article>
    <h1>{{ title }}</h1>
    <div v-html="body"></div>
  </article>
</template>

<script>
export default {
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    console.log('post',post)
    post.body=  post.body.replace(/\n/g, "<br />");
    return post;
  }
};
</script>
