import React, { Component } from 'react';

import Project from './Project/Project';

import './Projects.css';


export default class Projects extends Component {


    render() {

        const { projects } = this.props;


        return (

            <section className="Projects">

                <h2 className="App__section__heading">Projects</h2>

                {projects.map((project, index) => <Project project={project} key={index} />)}

            </section>

        )

    }

}