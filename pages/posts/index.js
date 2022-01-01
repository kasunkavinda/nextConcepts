const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
