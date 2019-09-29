import React from 'react';
import './App.css';
import Jobs from "../Jobs/Jobs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
        <header className="header">
            <Container>
                <Row>
                    <Image src="profile.png" roundedCircle fluid className="profile-image float-left" alt="Keir Nellyer"/>
                    <div className="profile-content float-left">
                        <h1 className="full-name">Keir Nellyer</h1>
                        <h2 className="job-title">Software Engineer</h2>
                        <ul className="social list-inline">
                            <li className="list-inline-item"><a href="https://github.com/iKeirNez" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-alt"/></a>
                            </li>
                            <li className="list-inline-item"><a href="https://uk.linkedin.com/in/ikeirnez" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"/></a>
                            </li>
                            <li className="list-inline-item"><a href="https://twitter.com/iKeirNez" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"/></a>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto">
                        <Button variant="primary" className="email" href="mailto:keir@bad-domain.co.uk"><i className="fa fa-paper-plane" /> Contact Me</Button>
                    </div>
                </Row>
            </Container>
        </header>
        <Container className="sections-wrapper">
            <Row>
                <div className="primary col-lg-8 col-md-12 col-12">
                    <section className="about section">
                        <div className="section-inner">
                            <h2 className="heading">About Me</h2>
                            <div className="content">I&apos;m 20-year-old developer based in Dunfermline, Scotland, I
                                specialise
                                in developing back-end software solutions, the majority of these have been
                                solved using Java, PHP &amp; MySQL. I always enjoy expanding my knowledge
                                and skillset by learning new technologies, I can then use this new knowledge
                                to tackle more complex challenges. I&apos;ve always had a very deep interest
                                in technology from a young age, especially in the programming field.
                            </div>
                        </div>
                    </section>
                    <section className="experience section">
                        <Jobs className="section-inner" />
                    </section>
                </div>
                <div className="secondary col-lg-4 col-md-12 col-12">
                    <aside className="info aside section">
                        <div className="section-inner">
                            <h2 className="heading sr-only">Basic Information</h2>
                            <div className="content">
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-fw fa-map-pin"/><span className="sr-only">Location: </span>Dunfermline, UK</li>
                                    <li><i className="fa fa-fw fa-briefcase"/><span className="sr-only">Company:</span><a href="https://www.cubecraft.net" target="_blank" rel="noopener noreferrer">CubeCraft Games</a></li>
                                    <li><i className="fa fa-fw fa-key"/><span className="sr-only">PGP: </span><a href="https://keybase.io/keir_nellyer" target="_blank" rel="noopener noreferrer">279B 64A7 971B 4FF4</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </Row>
        </Container>
        <footer className="footer">
            <Container className="text-center">
                <div className="footer-content">Copyright &#xA9; 2019 Keir Nellyer</div>
            </Container>
        </footer>
    </div>
  );
}

export default App;
