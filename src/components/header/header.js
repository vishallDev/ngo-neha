function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/">Bridge of Hope</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<a className="nav-link" href="/">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">About us</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Events</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Donate us</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Be a Volunteer</a>
					</li>
				</ul>
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item">
						<a className="nav-link" href="/register-login">Login</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/register-login">Signup</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
