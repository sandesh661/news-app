import PostItem from './PostItem';
import postStyles from '../styles/Post.module.css';

const PostsList = ({ posts }: { posts: any }) => {
  return (
    <div className={postStyles.grid}>
      {posts.map((post: any, ind: any) => (
        <PostItem post={post} key={ind} />
      ))}
    </div>
  );
};

export default PostsList;
