import { useRouter } from "next/router";

function PortfolioProjectPage({ projectId }) {
  const router = useRouter();

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <p>You're viewing {router.query.projectId}</p>
    </div>
  );
}

export default PortfolioProjectPage;
