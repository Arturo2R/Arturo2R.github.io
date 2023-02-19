import React, { useState } from "react";
import cx from "clsx";

export const Navbar = props => {
	const [open, setOpen] = useState(false);
	return (
		<header
			id="navbar"
			className="fixed min-h-[60px] z-30 w-full text-gray-700 bg-glass dark-mode:text-gray-200 dark-mode:bg-gray-800"
		>
			<div className="flex flex-col px-4 mx-auto max-w-screen-xl md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
				<div className="flex flex-row justify-between items-center p-4">
					<a
						href="#"
						className="text-lg font-semibold tracking-widest uppercase rounded-lg dark:text-sky-100 text-royal-red dark-mode:text-white focus:outline-none focus:shadow-outline"
					>
						Arturo Rebolledo
					</a>
					<button
						onClick={() => setOpen(!open)}
						title="toggle nav"
						type="button"
						className="rounded-lg dark:text-sky-600 md:hidden focus:outline-none focus:shadow-outline"
					>
						<svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
							{!open && (
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							)}
							{open && (
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							)}
						</svg>
					</button>
				</div>
				<nav
					className={cx(
						"flex flex-col flex-grow pb-4 md:flex md:pb-0 md:justify-end md:flex-row",
						{ hidden: !open },
					)}
				>
					{props.links.map((item, k) => (
						<a
							key={k}
							className="p-1 px-4 py-2 mt-2 h-full text-2xl rounded-lg button-glass font-secondary text-good-gray hover:text-hueso hover:bg-red-200 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode: dark-mode:text-gray-200 md:mt-0 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
							href={item.link}
						>
							{item.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
};
