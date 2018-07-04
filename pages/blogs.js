import Layout from "../src/Components/Layout";
import Link from 'next/link';

class Blogs extends React.Component {
	render() {
		return (
			<Layout>
				<h1>Blogs</h1>
				<li>
					<Link href={`/blog?title=nepal-world-cup`}>
						<a>Nepal world cup.</a>
					</Link>
				</li>

				<li>
					<Link href={`/blog?title=taja-khabar`}>
						<a>Taja khabar</a>
					</Link>
				</li>

				<hr/>
				<h4>Nice URLs</h4>
				<li>
					<Link as={'/blog/clean-url'} href={'/blog?title=welcome-clean-url'}><a>Clean url</a></Link>
				</li>
			</Layout>
		);
	}
}

export default Blogs;