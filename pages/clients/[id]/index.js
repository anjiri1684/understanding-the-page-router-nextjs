import { useRouter } from "next/router";

function ClientsProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/projects/[...slug]",
      query: {
        slug: ["project-1"],
      },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Clients</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
