import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'FlauFly | Digital Garden',
    description: 'My digital garden',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      startDate: post.data.startDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}