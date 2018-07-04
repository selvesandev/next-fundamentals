import React, {Component} from 'react';
import Layout from './../src/Components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from "../src/Components/Price";

class Home extends Component {
	render() {
		console.log(this.props.bpi);
		return (
			<Layout>
				<h1>Welcome to next js</h1>
				<hr/>
				<br/>
				<p>Check current bitcoin rate.</p>
				<Prices bpi={this.props.bpi}/>
				<br/>
				<br/>
				<hr/>

				<h2>Blogs</h2>


			</Layout>
		);
	}
}

Home.getInitialProps = async function () {
	const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const data = await res.json();
	// console.log(data);
	return {
		bpi: data.bpi
	};

};


export default Home;