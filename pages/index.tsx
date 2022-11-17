import Head from 'next/head';
import { server } from '../config';
import PostsList from '../components/Posts';

export default function Home({ posts }: { posts: any }) {
  return (
    <div>
      <Head>
        <title>News</title>
      </Head>
      <PostsList posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
