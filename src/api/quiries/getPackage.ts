import  type { PackageDetails } from "../types/PackageDetails";

export async function getPackage(name : string): Promise<PackageDetails>{

    const rest = await fetch(`http://registry.npmjs.org/${name}`);
    const data = await rest.json();

    return data as PackageDetails
}