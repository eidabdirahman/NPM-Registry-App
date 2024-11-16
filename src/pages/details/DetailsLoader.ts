import type { Params } from "react-router-dom"
import { getPackage } from "../../api/quiries/getPackage"
import type { PackageDetails } from "../../api/types/PackageDetails"

interface LoaderArgs{
    params : Params
}

export interface DetailsLoaderResults {
    Details : PackageDetails
}
export default async function DetailsLoader ({params}: LoaderArgs): Promise<DetailsLoaderResults>{
    const {name}= params
    if(!name){
        throw new Error('name must be provided')
    }
    const Details=  await getPackage(name)
  return {
     Details
  }
}