import Layout from "../src/Components/Layout";
import {withRouter} from 'next/router';

class Blog extends React.Component {
	render() {
		const {router} = this.props;
		console.log(router);
		return (
			<Layout>
				<h2>{router.query.title.replace('-', ' ').toUpperCase()}</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error fugit hic illo, itaque iure nam
					non, omnis pariatur.</p>
			</Layout>
		);
	}
}

export default withRouter(Blog);