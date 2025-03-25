const technologies = ['react', 'typescript', 'nextjs', 'tailwindcss']

export const Profile = () => {
	return (
		<div className='profile'>
			<h2>Профиль</h2>

			<div className='info-user'>
				<p>Имя: Артур</p>
				<p>Фамилия: Ахметов</p>
				<p>Возраст: 17</p>
				<p>Пол: Мужской</p>
				<p>Технологии: {technologies.join(', ')}</p>
			</div>
		</div>
	)
}
