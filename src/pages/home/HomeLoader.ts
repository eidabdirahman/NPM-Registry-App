import { PackageDetails } from "../../api/types/PackageDetails";
import { getFeaturesPackage } from "../../api/quiries/getFeaturesPackages";

export interface homeLoaderResults {
    Featuredpackage: PackageDetails[]
}

export async function homeLoader(): Promise<homeLoaderResults> {

const Featuredpackage = await getFeaturesPackage();
return {
    Featuredpackage,
}
    
}