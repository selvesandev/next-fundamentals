import Layout from "../src/Components/Layout";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

class Shows extends React.Component {
	render() {
		return (
			<Layout>
				<h2>Tv Shows</h2>
				{this.props.shows.map(({show}) => (
						<li key={show.id}>
							<Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
								<a href="">{show.name}</a>
							</Link>
						</li>
					)
				)}

				<style jsx>{`
					li{list-style:none}
				`}
				</style>

			</Layout>
		);
	}
}

Shows.getInitialProps = async function () {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();
	console.log(data);
	return {
		shows: data
	}
};
export default Shows;