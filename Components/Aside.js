import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
const Aside = () => {

    return(
		<div id="fh5co-aside" role="complementary" className="border js-fullheight">
			<h1 id="fh5co-logo">Marble</h1>
			<nav id="fh5co-main-menu" role="navigation">
				<ul>
                    <Router >
					<li className="fh5co-active"><Link >Home </Link></li>
					<li><Link >Create </Link></li>
					<li><Link >Update </Link></li>
					<li><Link >Delete </Link></li>
                    </Router>
                </ul>
			</nav>


		</div>
    )
}

export default Aside