<template>
  <article>

    <div v-html="$md.render(post)"></div>
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
console.log(params.slug ,'post')
    const post = await import('~/content/research/' + params.slug + '.md');
   // console.log('post',params,post)
    //post.body=  post.body.replace(/\n/g, "<br />");'
    console.log(post,'post')
    return {post};
  }
};
</script>
