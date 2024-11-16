import type { DetailsLoaderResults } from "./DetailsLoader"
import { useLoaderData } from "react-router-dom"

export default function DeatailsPage (){

    const {Details}= useLoaderData() as DetailsLoaderResults

    return (
       <div className="space-y-4">
           <h1 className="text-3xl font-bold my-4">{Details.name}</h1>
           <section>
               <h2 className="text-lg font-bold">Description</h2>
               <div className="p-3 bg-gray-200 rounded">{Details.description}</div>
           </section>
           <section>
               <h2 className="text-lg font-bold">License</h2>
               <div className="p-3 bg-gray-200 rounded">{Details.license}</div>
           </section>
           <section>
               <h2 className="text-lg font-bold">Author</h2>
               <div className="p-3 bg-gray-200 rounded">{Details.author?.name || "Unknown"}</div>
           </section>
       </div>
   );
}