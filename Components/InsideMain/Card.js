import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

const Card = () => {

    return(
        <div class="col-md-3 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft">
            <div class="blog-entry">   
                <div class="desc">
                    <Router>
                    <h3><Link>Inspirational Website</Link></h3>
                    <span><small>by Admin </small> / <small> Web Design </small> / <small> <i class="icon-comment"></i> 14</small></span>
                    <p>Design must be functional and functionality must be translated into visual aesthetics</p>
                    <Link class="lead">Read More <i class="icon-arrow-right3"></i></Link>
                    </Router>
                </div>
            </div>  
        </div>)
}

export default Card