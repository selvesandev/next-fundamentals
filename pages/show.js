import Layout from "../src/Components/Layout";
import fetch from 'isomorphic-unfetch';

class Show extends React.Component {
	render() {
		return (
			<Layout>
				<h2>Show</h2>
				<hr/>
				<div className="row">
					<div className="col-md-10">
						<div className="row">
							<div className="col-md-8">
								<h1>{this.props.show.name}</h1>
								<p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
							</div>
							<div className="col-md-4">
								<img src={this.props.show.image.medium}/>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}


Show.getInitialProps = async function (context) {
	const {id} = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();
	return {show};
};


export default Show;