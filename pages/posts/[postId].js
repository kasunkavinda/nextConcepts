const Post = ({ post }) => {
  return <div>{post.title}</div>;
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: "1" } }, { params: { postId: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      post: data,
    },
  };
}
