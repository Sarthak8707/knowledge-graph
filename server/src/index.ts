import {db } from './db/client';
import { posts, users } from './db/schema';
//import { posts, users } from './db/schema';


const name: string = "NEw user..."
console.log("HEllo: ", name);
console.log("hi")

//const port = PORT

const fn = async () => {
    
//const result = await db.insert(users).values({name: "First KG user", email: "abc@gmail.com"})
await db.insert(posts).values({title: "!st title", content: "KG is great", userId: 1})

}

fn();

