import Link from 'next/link';

export default () => <nav className="navbar navbar-expand-lg navbar-light bg-light">
	<a className="navbar-brand" href="#">NEXT.JS</a>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
			aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"/>
	</button>
	<div className="collapse navbar-collapse" id="navbarNav">
		<ul className="navbar-nav">
			<li className="nav-item active">
				<Link href={'/'}><a  style={{fontSize: 18}} className="nav-link">Home <span
					className="sr-only">(current)</span></a></Link>
			</li>
			<li className="nav-item">
				<Link href={'/about'}><a className="nav-link">About</a></Link>
			</li>
			<li className="nav-item">
				<Link href={'/blogs'}><a className="nav-link">Blog</a></Link>
			</li>
			<li className="nav-item">
				<Link href={'/shows'}><a className="nav-link">TV Shows</a></Link>
			</li>
		</ul>
	</div>
</nav>
