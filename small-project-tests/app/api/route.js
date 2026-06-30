import {NextRequest, NextResponse} from "next/server"
import { promises as fs } from "fs";
import path from "path";
/* 
Step 1: Read the json file as string
Step 2: Convert String to json object/array
Step 3: Manipulate the array (posting, patching, deleting items)
Step 4: Convert JSON object/array to string.
Step 5: Write updated JSON object/array as text to the JSON file


*/


// async function getData() {
//   const path = process.cwd() + "/app/data/myfile.json"
//   const file = await fs.readFile(path, "utf8");
//   const data = JSON.parse(file);
//   return data;
// }
let urlsDatabasePath = path.join(process.cwd(), 'public/mocks/data.json')

export async function GET() {
    //   const path = process.cwd() + "/public/mocks/data.json"
      const file = await fs.readFile(urlsDatabasePath, "utf8")
      const data = JSON.parse(file)
    return NextResponse.json(data)
    // return NextResponse.json({message:"Hello"})
}
export async function PATCH() {
    const urls = await fsPromises.readFile(urlsDatabasePath, 'utf-8')
    console.log("PATCH", urls)
}