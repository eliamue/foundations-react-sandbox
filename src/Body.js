import React, { Component } from 'react'
import KpopList from './KpopList.js';
// import { Link } from 'react-router-dom';
// import { data } from 'browserslist';

export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                <div>

                        <KpopList />

                </div>
                </section>
            </main>
        )
    }
}
