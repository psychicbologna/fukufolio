import React, { Component } from 'react';

import './Project.css';


export default class Project extends Component {


    static defaultProps = {

        project: {

            title: '',

            authors: [],

            tech: '',

            imgUrl: '',

            imgAlt: '',

            githubUrl: '',

            demoUrl: '',

            description: [],

        }

    }


    render() {

        const { project } = this.props;

        const { title, authors, tech, imgUrl, imgAlt, githubUrl, demoUrl, description } = project;


        return (

            <section className="Project">

                <h3 className="Project__title"><a href={demoUrl} target="__blank" rel="noopener">{title}</a></h3>

                <div className="Project__author">

                    By {authors.join(', ')}

                </div>

                <img className="Project__image" src={imgUrl} alt={imgAlt} />


                <div className="Project__info">

                    {

                        description.map((paragraph, index) => {

                            return <p className="Project__description" key={index}>{paragraph}</p>

                        })

                    }

                    <h4 className="Project__header">Tech Stack</h4>

                    <p className="Project__p">{

                        tech.join(', ')

                    }</p>

                    <ul className="Project__links">

                        <a href={demoUrl} target="__blank" rel="noopener"><li>See Demo</li></a>

                        <a href={githubUrl} target="__blank" rel="noopener"><li>Visit on Github</li></a>

                    </ul>

                </div>

            </section>

        )

    }

}