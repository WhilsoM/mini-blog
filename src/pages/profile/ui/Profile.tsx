const technologies = ['react', 'typescript', 'nextjs', 'tailwindcss']

export const Profile = () => {
	return (
		<div className='profile'>
			<h2 className='text-2xl font-bold mb-4'>Профиль</h2>

			<div className='info-user bg-gray-200 p-4 rounded-sm '>
				<p>Имя: </p>
				<p>Фамилия: </p>
				<p>Возраст: 17</p>
				<p>Пол: Мужской</p>
				<p>Технологии: {technologies.join(', ')}</p>
			</div>
		</div>
	)
}
