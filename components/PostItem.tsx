import Link from 'next/link';
import postStyles from '../styles/Post.module.css';

const PostItem = ({ post }: { post: any }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <div className={postStyles.card}>
        <h3>{post.title} &rarr;</h3>
        <p>{post.body}</p>
      </div>
    </Link>
  );
};

export default PostItem;
