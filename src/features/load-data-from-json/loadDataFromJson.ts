import { Post } from 'pages/home/ui/Home'
import initialPosts from 'shared/data/posts.json'

export const loadData = async (setPosts: (posts: Post[]) => void) => {
	try {
		const savedPosts = localStorage.getItem('savedPosts')

		if (savedPosts) {
			setPosts(JSON.parse(savedPosts))
		} else {
			setPosts(initialPosts as Post[])
		}
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error)
		setPosts(initialPosts as Post[])
	}
}
