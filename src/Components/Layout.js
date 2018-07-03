import React, {Component} from 'react';
import Nav from './Nav';
import Head from 'next/head';

class Layout extends Component {
	render() {
		const {children} = this.props;
		return (<div>
			<Head>
				<title>Selvesan Next Docs</title>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
					  integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
					  crossorigin="anonymous"/>
			</Head>
			<Nav/>
			{children}
		</div>);
	}
}

export default Layout;