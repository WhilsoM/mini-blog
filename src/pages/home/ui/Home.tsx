import { createPost } from 'features/create-post/createPost'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { filteredPostsOnNewest } from 'features/filtered-posts-on-newest/filteredPostsOnNewest'
import { filteredPostsOnOldest } from 'features/filtered-posts-on-oldest/filteredPostsOnOldest'
import { loadData } from 'features/load-data-from-json/loadDataFromJson'
import { motion } from 'motion/react'
import { useSearch } from 'shared/context/SearchContext'
import { Button } from 'shared/ui/button/Button'
import styles from './Home.module.css'
export type Post = {
	id: number
	author: string
	avatar: string
	date: string
	content: string
}

export const Home = () => {
	const [posts, setPosts] = useState<Post[]>([])
	const [postText, setPostText] = useState('')
	const [nickname, setNickname] = useState('')
	const { searchInputText } = useSearch()

	useEffect(() => {
		const fetchData = async () => {
			const loadedPosts = await loadData(setPosts)
			setPosts(loadedPosts)
		}

		fetchData()
	}, [])

	useEffect(() => {
		if (!searchInputText) {
			setPosts(posts)
			return
		}

		const filtered = posts.filter(
			(post) =>
				post.content.toLowerCase().includes(searchInputText.toLowerCase()) ||
				post.author.toLowerCase().includes(searchInputText.toLowerCase())
		)
		setPosts(filtered)
	}, [searchInputText, posts])

	return (
		<div className={styles.home}>
			<h1 className={styles.title}>Лента постов</h1>

			<div className='flex gap-2 mb-4'>
				<Button
					variant='blue'
					onClick={() => filteredPostsOnOldest(posts, setPosts)}
				>
					Сначала старые
				</Button>
				<Button
					variant='purple'
					onClick={() => filteredPostsOnNewest(posts, setPosts)}
				>
					Сначала новые
				</Button>
			</div>

			{searchInputText && (
				<div className={styles.searchResults}>
					Результаты поиска по запросу:{' '}
					<span className={styles.searchQuery}>{searchInputText}</span>
					{posts.length === 0 && (
						<div className={styles.noResults}>Ничего не найдено</div>
					)}
				</div>
			)}

			<div className={styles.createPost}>
				<motion.input
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					type='text'
					placeholder='Ваше имя:'
					value={nickname}
					className='border border-gray-300 rounded-md p-2 mb-2 w-full'
					onChange={(e) => setNickname(e.target.value)}
				/>

				<motion.textarea
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					className={styles.postInput}
					placeholder='Что у вас нового?'
					value={postText}
					onChange={(e) => setPostText(e.target.value)}
				/>
				<button
					onClick={() =>
						createPost(postText, nickname, posts, setPosts, setPostText)
					}
					className={styles.postButton}
					disabled={!postText.trim()}
				>
					Опубликовать
				</button>
			</div>

			<div className={styles.posts}>
				{posts.length === 0 ? (
					<div className={styles.noPosts}>
						{searchInputText
							? 'По вашему запросу ничего не найдено'
							: 'Пока нет постов. Будьте первым!'}
					</div>
				) : (
					posts.map((post) => (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							key={post.id}
							className={styles.post}
						>
							<div className={styles.postHeader}>
								<img
									src={post.avatar}
									alt={post.author}
									className={styles.avatar}
								/>
								<div className={styles.postInfo}>
									<div className={styles.author}>{post.author}</div>
									<div className={styles.date}>{post.date}</div>
								</div>
							</div>
							<div className={styles.postContent}>{post.content}</div>
							<Link to={`post/${post.id}`}>Читать далее</Link>
						</motion.div>
					))
				)}
			</div>
		</div>
	)
}
