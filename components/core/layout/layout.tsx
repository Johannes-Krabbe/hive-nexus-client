import React, { ReactNode } from 'react';
import { useRouter } from "next/router";

import { NavBar } from './nav-bar';
import { CustomHead } from './custom-head';
import { Footer } from './footer';

interface LayoutProps {
	children: ReactNode;
};

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Layout = ({children}: LayoutProps) => {
	const router = useRouter()

	let headTitle = router.pathname

	if (headTitle === "/") {
		headTitle = "Home"
	}

	headTitle = headTitle.replace('/', '')
	headTitle = capitalizeFirstLetter(headTitle)

	return (
		<>
			<NavBar />
			<CustomHead title={headTitle}/>
			<main className="container">
				{children}
			</main>
			<Footer />
		</>
	);
}
