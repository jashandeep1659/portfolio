import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Head from "next/head";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Welcome | Deep Developers</title>
                <meta name="description" content="freelancer web developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section id="banner1">
                <div className="text">
                    <h1>
                        Deep <br /> Developers
                    </h1>
                    <p>
                        I’m a software engineer specializing in building
                        responsive, attractive, and secure websites.
                    </p>
                    <div>
                        <Link href="/contact">
                            <a>
                                <button>Contact Now...</button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <img className="img1 " src="/new1.png" />
                    <img className="img2 " src="/new.png" />
                </div>
            </section>
            <section id="scrolling">
                <div className="scroller1 ">
                    <div className="page-head">
                        <div className="page-head__ticker">
                            <p className="msg">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>SCSS</span>
                                <span>Bootstrap 5</span>
                                <span>Tailwind CSS</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>SCSS</span>
                                <span>Bootstrap 5</span>
                                <span>Tailwind CSS</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>SCSS</span>
                                <span>Bootstrap 5</span>
                                <span>Tailwind CSS</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="scroller2 ">
                    <div className="scroller">
                        <div className="page-head">
                            <div className="page-head__ticker">
                                <p className="msg">
                                    <span>JavaScript</span>
                                    <span>React JS</span>
                                    <span>Next JS</span>
                                    <span>React Native</span>
                                    <span>JavaScript</span>
                                    <span>React JS</span>
                                    <span>Next JS</span>
                                    <span>React Native</span>
                                    <span>JavaScript</span>
                                    <span>React JS</span>
                                    <span>Next JS</span>
                                    <span>React Native </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroller3 ">
                    <div className="page-head">
                        <div className="page-head__ticker">
                            <p className="msg">
                                <span>Python</span>
                                <span>Django</span>
                                <span>Djnago Rest Framework</span>
                                <span>JWT authentaication</span>
                                <span>Python</span>
                                <span>Django</span>
                                <span>Djnago Rest Framework</span>
                                <span>JWT authentaication</span>
                                <span>Python</span>
                                <span>Django</span>
                                <span>Djnago Rest Framework</span>
                                <span>JWT authentaication</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="myprojects">
                <div className="header">
                    <h1>My Projects</h1>
                    <p className="info">
                        Some of the projects compelted by me are shown here with
                        some basic details.
                    </p>
                </div>
                <div className="project bg-[#FFC73A]">
                    <div className="text">
                        <h1>Ecommerce Store</h1>
                        <p>
                            Ecommerce store created using the Django Rest
                            Framework and React js.Where customers create their
                            account and can purchase the products by adding in
                            their cart.
                        </p>
                        <div>
                            <Link href="https://www.youtube.com/watch?v=F1kWGeWkYOc">
                                <a target="_blank">
                                    <button className="dark-button">
                                        Know more
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="img flex items-center ">
                        <img src="./banner4.png" className="shadow-lg" />
                    </div>
                </div>
                <div className="project bg-white">
                    <div className="text">
                        <h1>PC Build</h1>
                        <p>
                            PC Build website is website created in React js and
                            Django which can we used to configure the custom pc
                            by picking up the parts of the computer.
                        </p>
                        <div>
                            <Link href="https://www.youtube.com/watch?v=84KpqYu2iCY">
                                <a target="_blank">
                                    <button className="dark-button">
                                        Know more
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="img flex items-center ">
                        <img src="./banner1.png" className="shadow-lg " />
                    </div>
                </div>
                <div className="project bg-[#fc7557]">
                    <div className="text">
                        <h1>Blog Website</h1>
                        <p>
                            Blog website is the website created using the
                            Djnago. In this user can write his/her own blogs and
                            can earn money by google ads.
                        </p>
                        <div>
                            <Link href="https://www.youtube.com/watch?v=S32KuXUvqLQ">
                                <a target="_blank">
                                    <button className="dark-button">
                                        Know more
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="img flex items-center ">
                        <img src="./banner3.png" className="shadow-lg " />
                    </div>
                </div>
                {/* <p className="text-center font-bold  text-blue-600">See all</p> */}
            </section>

            <section id="pricing">
                <div className="header">
                    <h1>Our Pricing</h1>
                    <p className="info">
                        Pricing May change according to the project
                    </p>
                </div>
                <div className="cards">
                    <div className="card">
                        <h2>Landing Pages</h2>
                        <h1>$20</h1>
                        <Link href="/contact">
                            <button className="dark-button">Order Now</button>
                        </Link>
                        <ul>
                            <li>1 Landing Page</li>
                            <li>HTML, CSS JS</li>
                            <li>Newsletter</li>
                            <li>Responsive design</li>
                            <li>Custom design</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h2>Django Website</h2>
                        <h1>$170</h1>
                        <Link href="/contact">
                            <button className="dark-button">Order Now</button>
                        </Link>
                        <ul>
                            <li>3-4 Pages</li>
                            <li>HTML, CSS JS, Django</li>
                            <li>Newsletter</li>
                            <li>Responsive design</li>
                            <li>Custom design</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h2>React and Django</h2>
                        <h1>$350</h1>
                        <Link href="/contact">
                            <button className="dark-button">Order Now</button>
                        </Link>
                        <ul>
                            <li>5-6 Page</li>
                            <li>React JS , Django</li>
                            <li>Login / SignUp</li>
                            <li>Responsive design</li>
                            <li>Custom design</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
