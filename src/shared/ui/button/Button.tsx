import React from 'react'

interface ButtonProps {
	onClick: () => void
	className?: string
	children: React.ReactNode
	variant: 'blue' | 'purple'
}

export const Button = ({
	onClick,
	className,
	variant,
	children,
}: ButtonProps) => {
	const buttonClassName = {
		blue: 'bg-blue-500 hover:bg-blue-600',
		purple: 'bg-purple-500 hover:bg-purple-600',
	}

	return (
		<button
			onClick={onClick}
			className={`cursor-pointer text-white font-medium py-2 px-4 rounded transition ${buttonClassName[variant]} ${className}`}
		>
			{children}
		</button>
	)
}
