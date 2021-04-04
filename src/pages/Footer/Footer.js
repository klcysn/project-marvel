import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <hr>
                </hr>
                <div className="foobar">
                    <div className="column">
                        <section class="contact">
                            <header>
                                <h4>A TEAM</h4>
                            </header>
                            <p>You can find all Marvel Projects on this website !</p>
                            <ul className="icons">
                                <li><a href="http://facebook.com/marvel" className="fab fa-facebook-f"></a></li>
                                <li><a href="http://twitter.com/marvel" className="fab fa-twitter"></a></li>
                                <li><a href="http://instagram.com/marvel" className="fab fa-instagram"></a></li>
                                <li><a href="http://youtube.com/marvel" className="fab fa-youtube"></a></li>
                            </ul>
                        </section>
                        <div className="copyright">
                            <ul className="menu">
                                <li>© A-Team. All rights reserved.</li>
                                <li>
                                    <a href="https://www.marvel.com/corporate/about">About MARVEL</a>
                                </li>
                                <li>{"You can check this project on GitHub. "}
                                    <a href="https://github.com/klcysn/project-marvel" className="fab fa-github"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
