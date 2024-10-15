import { Link } from "gatsby"
import React, { FC } from "react"

import "./navbar.scss"

export const Navbar: FC = () => (
    <div className="navbar">
        <ul>
            <li>
                <Link to="/">Allgemein</Link>
            </li>
            <li>
                <Link to="/what-is-a-hackathon">Was ist ein Hackathon?</Link>
            </li>
            <li>
                <Link to="/challenges">Challenge</Link>
                <ul>
                    <li>
                        <Link to="/challenge-erfassung-dachflaechen">Dachflächen</Link>
                    </li>
                    <li>
                        <Link to="/challenge-reparatur-kultur">Reparatur-Kultur</Link>
                    </li>
                    <li>
                        <Link to="/challenge-hitzeprobleme">Hitzeprobleme</Link>
                    </li>
                    <li>
                        <Link to="/challenge-gruenflaechen">Grünflächen</Link>
                    </li>
                </ul>
            </li>
            {/*<li>*/}
            {/*    <Link to="/results">*/}
            {/*        <strong>Ergebnisse</strong>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            <li>
                <p>Sponsoring</p>
                <ul>
                    <li>
                        <Link to="/sponsors">Unsere Sponsoren</Link>
                    </li>
                    <li>
                        <Link to="/sponsoring">Sponsor werden</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/participate">Teilnehmen</Link>
            </li>
            <li>
                <Link to="/support">Unterstützen</Link>
            </li>
        </ul>
        <div className="archive">
            <p>Archiv</p>
            <ul>
                <li>
                    <a href="https://hackathon2023.digitale-oberlausitz.eu">2023</a>
                </li>
                <li>
                    <a href="https://hackathon2022.digitale-oberlausitz.eu">2022</a>
                </li>
            </ul>
        </div>
    </div>
)
