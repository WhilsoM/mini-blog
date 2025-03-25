import { Post } from 'pages/home/ui/Home'
import initialPosts from 'shared/data/posts.json'

export const loadData = async (
	setPosts: (posts: Post[]) => void
): Promise<Post[]> => {
	try {
		const savedPosts = localStorage.getItem('savedPosts')

		if (savedPosts) {
			const parsedPosts = JSON.parse(savedPosts) as Post[]

			setPosts(parsedPosts)
			return parsedPosts
		} else {
			const posts = initialPosts as Post[]
			setPosts(posts)
			return posts
		}
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error)
		const posts = initialPosts as Post[]
		setPosts(posts)
		return posts
	}
}
