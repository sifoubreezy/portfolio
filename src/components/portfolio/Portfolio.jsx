import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import ME2 from '../../assets/portfolio2.jpg'
import ME3 from '../../assets/portfolio3.jpg'
import ME4 from '../../assets/portfolio4.jpg'
import ME5 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={Img1} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com/" className="btn" target='_blank'>Github</a>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={ME2} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com/" className="btn" target='_blank'>Github</a>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={ME3} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com/" className="btn" target='_blank'>Github</a>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={ME4} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com/" className="btn" target='_blank'>Github</a>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={ME5} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com/" className="btn" target='_blank'>Github</a>
            </article>
        </div>
    </section>
  )
}

export default Portfolio