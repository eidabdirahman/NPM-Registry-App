import  type { PackageDetails } from "../types/PackageDetails";
const FEATURES_PACKAGES =[
    'react',
    'typescript',
    'sbuild',
    'vite'
]

export async function getFeaturesPackage(){

    const promises= FEATURES_PACKAGES.map(async (name )=>{
        
    const res = await fetch(`http://registry.npmjs.org/${name}`);
             return res.json();
    });
    const data = await Promise.all(promises)
    return data as PackageDetails[];
}