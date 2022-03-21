import React, { Component } from 'react';

import Skillset from './Skillset/Skillset';

import './Skills.css';


export default class Project extends Component {


    render() {



        const { skills } = this.props;


        return (

            <section className="App__section" id="Skills">

                <h2 className="App__section__heading">Skills</h2>

                {skills.map((skillset, index) => {

                    return <Skillset skillset={skillset} key={index} />

                })}

            </section>

        )

    }

}