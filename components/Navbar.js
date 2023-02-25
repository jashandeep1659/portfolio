import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <section id="Navbar">
            <div className="title">
                <Link href="/">
                    <a>
                        <h1>Jashandeep Singh </h1>
                    </a>
                </Link>
            </div>
            <div>
                <ul>
                    <Link href="/">
                        <a>
                            <li className="link">Home</li>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <li className="link">Contact</li>
                        </a>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1Sa2cs1CspJRT8sSdU9yhPnyb-GD2d4no/view?usp=sharing">
                        <a target="_blank">
                            <li>
                                <button>Resume</button>
                            </li>
                        </a>
                    </Link>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;
