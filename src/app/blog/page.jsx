import { revalidatePath } from "next/cache"
import Link from "next/link"

async function getData() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {revalidate: 60}
    })

    return responce.json()
}

export const metadata = {
    title: 'BLOG'
}

export default async function Blog() {

    const post = await getData()

    return(
        <>
            <h1>BLOG</h1>
        <ul>
            {post.map(post => 
               <li key={post.id}>
                 <Link href={`/blog/${post.id}`}>{post.title}</Link>
               </li>
            )}
        </ul>
        </>
        
    )
}