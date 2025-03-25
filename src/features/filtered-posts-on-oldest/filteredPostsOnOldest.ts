import { Post } from 'pages/home/ui/Home'

export const filteredPostsOnOldest = (
	posts: Post[],
	setPosts: (posts: Post[]) => void
) => {
	const sortedPosts = [...posts].sort((a: Post, b: Post) => {
		return a.id - b.id
	})
	setPosts(sortedPosts)
	localStorage.setItem('savedPosts', JSON.stringify(sortedPosts))
}
