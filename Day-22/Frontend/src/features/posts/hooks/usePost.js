import { useContext, useEffect } from "react"
import { createPost, getFeed, likePost, unlikePost } from "../services/post.api"
import { PostContext } from "../post.context"


export const usePost = () => {
    const context = useContext(PostContext)

    const { post, setPost, feed, setFeed, loading, setLoading } = context

    const handleGetFeed = async () => {
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts.reverse())
        setLoading(false)
    }

    const handleCreatePost = async (imageFile, caption) => {
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...feed])
        setLoading(false)
    }

    const handleLike = async (post) => {
        const data = await likePost(post)
        await handleGetFeed()
    }

    const handleUnlike = async (post) => {
        const data = await unlikePost(post)
        await handleGetFeed()
    }

    useEffect(() => {
        handleGetFeed()
    }, [])

    return { post, feed, loading, handleGetFeed, handleCreatePost, handleLike, handleUnlike }
}
