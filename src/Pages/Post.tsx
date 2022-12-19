import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostBySlug, Post, PostContent } from '../api/posts'

function genElement(block: PostContent) {
    const blockIsString = typeof block === 'string'
    const contentIsString = typeof block.content === 'string'
    const contentIsArray = block.content?.constructor.name === 'Array'

    let childContent
    if (blockIsString) {
        return block
    } else if (contentIsString) {
        childContent = block.content as string
    } else if (contentIsArray) {
        const cont = block.content as PostContent[]
        childContent = cont.map(genElement)
    } else {
        childContent = genElement(block.content as PostContent)
    }

    const element = React.createElement(block.type, { key: block.id || block.type }, childContent)
    return element
}

function Post() {
    const [postData, setPostData] = useState<null | Post>(null)
    const { slug = '' } = useParams()

    useEffect(() => {
        getPostBySlug(slug).then(result => result && setPostData(result))
    }, [])

    if (postData) {
        console.log({ postData })
        document.title = postData.title
    }

    const contentElements = postData?.content?.map(genElement)

    return <div>{contentElements}</div>
}

export default Post
