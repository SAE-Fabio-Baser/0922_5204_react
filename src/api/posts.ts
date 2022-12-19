import config from '../config'

export interface Post {
    _id: string
    title: string
    slug: string
    authors: string[]
    createdAt: string
    content: PostContent[]
}

export interface PostContent {
    type: string
    content: string | PostContent | PostContent[]
    params: Record<string, any>
    id?: string
}

export async function getAllPosts(): Promise<Post[]> {
    const response = await fetch(config.backendURL + '/api/posts')
    return await response.json()
}

export async function getPostBySlug(slug: string): Promise<Post | false> {
    const response = await fetch(config.backendURL + '/api/posts/' + slug)
    const result = await response.json()
    if (result.success) {
        return result.data?.post
    }

    return false
}
