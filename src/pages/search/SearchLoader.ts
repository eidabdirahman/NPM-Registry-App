 import { PackageSummery } from "../../api/types/PackageSummary";
 import { SearchPackage } from "../../api/quiries/SearchPackages";

 export interface searchResponseResult {
  searchResults: PackageSummery[]
}
 export async function SearchLoader({request} : {request : Request}) : Promise<searchResponseResult>{

    const {searchParams}= new URL(request.url)
    const term = searchParams.get('term');
    if(!term){
      throw new Error('term must be provided');
      
    }
   
  const results = await SearchPackage(term);
  
  return {
    searchResults : results
  }
  }