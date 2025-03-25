import { Post } from 'pages/home/ui/Home'

export const filteredPostsOnNewest = (
	posts: Post[],
	setPosts: (posts: Post[]) => void
) => {
	const sortedPosts = [...posts].sort((a: Post, b: Post) => b.id - a.id)
	setPosts(sortedPosts)
	localStorage.setItem('savedPosts', JSON.stringify(sortedPosts))
}
