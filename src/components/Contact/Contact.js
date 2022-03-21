import React, { Component } from 'react';


export default class Project extends Component {


    render() {

        return (

            <section id="Contact">

                <h2 className="App__section__heading">Contact</h2>

                <address>

                    <ul>

                        <li className="contact-item">email: <a href="mailto:alex@alexfukui.com" rel="noopener">alex@alexfukui.com</a></li>

                        <li className="contact-item">github: <a href="https://github.com/psychicbologna" rel="noopener">psychicbologna</a></li>

                        <li className="contact-item">linkedin: <a href="https://www.linkedin.com/in/alex-fukui-49a56116/" rel="noopener">alex-fukui</a></li>

                    </ul>

                </address>

            </section>

        )

    }

}