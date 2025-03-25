import { Link, useParams } from 'react-router-dom'

import { Post } from 'pages/home/ui/Home'

export const PostById = () => {
	const { id } = useParams()
	const posts = localStorage.getItem('savedPosts')
	const post: Post = JSON.parse(posts as string).find(
		(post: Post) => post.id === Number(id)
	)
	return (
		<div className='bg-gray-200 p-4 rounded-sm'>
			<Link className='text-gray-500 hover:text-gray-700 mb-4 block' to='/'>
				Назад
			</Link>
			<h3>{post.author}</h3>
			<p>{post.date}</p>
			<p>{post.content}</p>
		</div>
	)
}
