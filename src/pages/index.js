import Link from "next/link";
import { useState } from "react";

export default function Index() {
	// console.log("Hello");
	const [articles, setArticles] = useState(["believemy", "test", "lol"]);
	const [projects, setProjects] = useState(["believemy", "test", "lol"]);

	return (
		<>
			<h1>Hello World !</h1>
			<br />
			<Link href="/">Home</Link>
			<br />
			<br />
			<Link href="/articles">Articles</Link>
			<ul>
				{articles.map(article => (
					<li>
						<Link href={`/articles/${article}`}>{article}</Link>
					</li>
				))}
			</ul>
			<Link href="about">about</Link>
			<br />
			<br />
			<Link href="projects">Project</Link>
			<ul>
				{projects.map(project => (
					<li>
						<Link
							href={{
								pathname: "/projects/[slug]",
								query: { slug: project },
							}}
						>
							{project}
						</Link>
					</li>
				))}
			</ul>
			<br />
			<Link href="projects/portfolio">Portfolio</Link>
		</>
	);
}
