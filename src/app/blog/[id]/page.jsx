import Link from "next/link"

async function getDataId(id) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {revalidate: 60}
    })

    return responce.json()
}



export async function generateMetadata({params: {id}}) {
    const post = await getDataId(id)
    return {
        title: post.title
    }
}

export default async function Post({params: {id}}) {

    const post = await getDataId(id)
    return <>
        <Link href='/blog'>Go Back to Blog</Link>
        <h1>Post id: {id}</h1>
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    </>
}