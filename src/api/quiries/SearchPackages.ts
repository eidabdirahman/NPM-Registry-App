import { PackageSummery } from "../types/PackageSummary";
interface SearchResponse {
   objects: {
       package: {
           name: string;
           version: string;
           description: string;
           keywords: string[];
        }
           
   }[];
}

export async function SearchPackage(term: string): Promise<PackageSummery[]> {
   const res = await fetch(
       `http://registry.npmjs.org/-/v1/search?text=${term}`
   );
   const data: SearchResponse = await res.json();

   return data.objects.map(({ package: { name, description, version, keywords } }) => {
       return {
           name,
           version,
           description,
           keywords 
       };
   });
}