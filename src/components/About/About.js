import React, { Component } from 'react';
import { muirWoods } from '../../assets/images';
import './About.css';


export default class Project extends Component {


    render() {

        return (

            <section className="App__section" id="About">
                <h2 className="App__section__heading">About</h2>
                <img className="About__picture" src={muirWoods} alt="Alex Fukui standing in Muir Woods." />
                <p className="App__p About__p">
                    I am a full-stack developer and designer based in Minneapolis, with a focus on front-end, user experience and design. My past work has included web sites for small business, poster designs and comics.
                </p>
                <p className="App__p About__p">
                    As a graduate of the Thinkful Web Engineering cohort, I have also created multiple full-stack apps using React and Express in solo and collaborative settings. My favorite tools for design include Adobe Photoshop, Illustrator and Moqups.
                </p>
                <p className="App__p About__p">
                    In my free time, I go to karaoke, cook and play Civilization 6. I love figuring out systems, learning about design trends, trying out curry recipes and playing with my cat Beef.
                </p>
            </section>
        )
    }
}