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
                            <a target="_blank" href="">
                                <span class="fab fa-github"></span>
                            </a>
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
