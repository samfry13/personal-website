import React from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
    return (
        <div className="App">
            <div className="card">
                <div className="card_inner">
                    <div className="card_front">
                        <div class="slide lazyloaded" />
                        <div class="image">
                            <img
                                class="lazyloaded"
                                src={profile}
                                alt="Samuel Fry"
                            />
                        </div>
                        <div class="title">Samuel Fry</div>
                        <div class="subtitle">Web Developer</div>
                        <div class="social">
                            <a target="_blank" href="https://github.com/samfry13"><span class="fab fa-github"></span></a>
                            <a target="_blank" href="https://www.linkedin.com/in/samuel-fry13/"><span class="fab fa-linkedin"></span></a>
                        </div>
                        <div class="links">
                            <a href="#">Download Resume <span class="fas fa-download"></span></a>
                            <a href="mailto:samuel.fry13@gmail.com">Contact Me <span class="fas fa-envelope"></span></a>
                            <a href="#">More Info <span class="fas fa-arrow-right"></span></a>
                        </div>
                    </div>
                    <div className="card_back">
                        <p>Card's back</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
