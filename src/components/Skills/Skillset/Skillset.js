import React, { Component } from 'react';

import './Skillset.css';


export default class Project extends Component {


    render() {


        const { skillset } = this.props;

        const { title, skillsList } = skillset;


        return (

            <div className="Skills__skillset">

                <h3 className="Skills__title">{title}</h3>

                <ul className="Skills__list">

                    {skillsList.map((skillset, index) => {

                        return <li key={index}>{skillset}</li>

                    })}

                </ul>

            </div>

        )

    }

}