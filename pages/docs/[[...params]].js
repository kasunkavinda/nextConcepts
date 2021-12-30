import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length === 2) {
    return (
      <div>
        viewing feature {params[0]} and concept {params[1]}
      </div>
    );
  } else if (params.length === 1) {
    return <div>viewing concept {params[0]}</div>;
  }
  return <div>Docs Home page</div>;
};

export default Doc;
