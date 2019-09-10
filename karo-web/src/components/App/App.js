import React from 'react';
import './App.css';
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
                            <li className="list-inline-item"><a href="https://github.com/iKeirNez" target="_blank"><i className="fa fa-github-alt"/></a>
                            </li>
                            <li className="list-inline-item"><a href="https://uk.linkedin.com/in/ikeirnez" target="_blank"><i className="fa fa-linkedin"/></a>
                            </li>
                            <li className="list-inline-item"><a href="https://twitter.com/iKeirNez" target="_blank"><i className="fa fa-twitter"/></a>
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
                        <div className="section-inner">
                            <h2 className="heading">Work Experience</h2>
                            <div className="content">
                                <div className="item">
                                    <h3 className="title">Service Developer <span className="place"> <a href="https://www.cubecraft.net">CubeCraft Games</a></span> <span className="year">(December 2016 - Present)</span></h3>
                                    <p>Hired by CubeCraft to develop various services for their large Minecraft
                                        multiplayer server.</p>
                                </div>
                                <div className="item">
                                    <h3 className="title">Software Engineer <span className="place"> <a href="http://mineplex.com">Mineplex, LLC</a></span> <span className="year">(October 2015 - November 2016)</span></h3>
                                    <p>Worked on mostly backend server solutions for one of the largest Minecraft
                                        multiplayer networks, these solutions occasionally had to be capable of
                                        communicating across multiple server instances (accomplished using Redis).
                                        I spent most of my time there working on non-games/player lobby features.
                                        I also had to design and implement a backend database structure and create
                                        PHP scripts to dynamically generate web pages to fetch, process and display
                                        data from said database.</p>
                                </div>
                                <div className="item">
                                    <h3 className="title">Lead Developer <span className="place"> <a href="https://minecraftly.com">Minecraftly</a></span> <span className="year">(October 2012 - April 2016)</span></h3>
                                    <p>Worked as lead developer of a highly ambitious project to allow massive
                                        amounts of players to host their own Minecraft worlds and invite their
                                        friends to join them in their world. The backend servers were designed
                                        to be infinitely scalable by using multiple Google Compute instances to
                                        distribute the load, these would dynamically scale up or down depending
                                        on server traffic. This allowed the system to be effectively limitless.</p>
                                </div>
                                <div className="item">
                                    <h3 className="title">Software Developer <span className="place">Puzl Inc.</span> <span className="year">(August 2015 - November 2015)</span></h3>
                                    <p>Developed server-side applications based on specification provided by
                                        clients which had been sourced by Puzl Inc. These projects mainly made
                                        use of Java, MySQL and the <a href="http://bukkit.org">Bukkit API</a>. This
                                        involved working directly with the client and ensuring they were satisfied
                                        with the end product by implementing requested changes and additions in
                                        a timely manner.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="secondary col-lg-4 col-md-12 col-12">
                    <aside className="info aside section">
                        <div className="section-inner">
                            <h2 className="heading sr-only">Basic Information</h2>
                            <div className="content">
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-fw fa-map-pin"/><span className="sr-only">Location: </span>Dunfermline, UK</li>
                                    <li><i className="fa fa-fw fa-briefcase"/><span className="sr-only">Company:</span><a href="https://www.cubecraft.net" target="_blank">CubeCraft Games</a></li>
                                    <li><i className="fa fa-fw fa-key"/><span className="sr-only">PGP: </span><a href="https://keybase.io/keir_nellyer" target="_blank">279B 64A7 971B 4FF4</a></li>
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
