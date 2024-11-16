import type { homeLoaderResults } from "./HomeLoader";
import { useLoaderData, Link } from "react-router-dom";

export default function HomePage() {
  const { Featuredpackage } = useLoaderData() as homeLoaderResults;

  const renderedPackages = Featuredpackage.map((p) => {
    return (
      <div
        key={p.name}
        className="flex flex-col justify-between gap-3 border rounded shadow p-4"
      >
        <div className="flex flex-col gap-1 border-bottom border-gray-400">
          <div className="font-bold text-center">{p.name}</div>
          <div className="text-sm text-gray-500">{p.description}</div>
          <div className="text-sm text-gray-500">
            {p.maintainers.length} Maintainers
          </div>
        </div>
        <Link
          to={`/packages/${p.name}`}
          className="border rounded border-gray-900 text-center"
        >
          View
        </Link>
      </div>
    );
  });

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The NPM Registry</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
        The npm registry is a public database of JavaScript packages
         that are available for use in Node.js and web applications. 
         It serves as a central repository where developers can 
         publish, share, and manage their code packages, making it 
         easier to reuse code and collaborate on projects.
         Here are some key points about the npm registry.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
}
