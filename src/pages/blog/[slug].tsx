export async function getServerSideProps() {
  return { props: { data: "test" } };
}

export default function BlogPost(props) {
  return <>BlogPost</>;
}
