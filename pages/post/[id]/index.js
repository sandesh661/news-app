import { server } from '../../../config';
import Link from 'next/link';

const post = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <strong>
        <Link href="/">Go Back</Link>
      </strong>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/posts/${context.params.id}`);

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/posts`);

  const posts = await res.json();

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default post;
