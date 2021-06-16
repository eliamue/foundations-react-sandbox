import React, { Component } from 'react';
import request from 'superagent';
// import { Link } from 'react-router-dom';
// import KpopItem from './KpopItem.js';

export default class KpopList extends Component {
    state = { 
        kpop: []
    }

    componentDidMount = async () => {
        const data = await request.get('https://kpop-group-api.herokuapp.com/kpop/');

        this.setState({ kpop: data.body });
    }

    // handleClick = async () => {
    //     const data = await request.get(`https://kpop-group-api.herokuapp.com/kpop/:id`)

    //     this.setState({ 
    //         kpop: data.body,
    //         id: Number(data.body.id)
    //     });
    // }

    render() {

        return (
            <div className="center">
                { this.state.kpop.map((kpop, i) => 
                    <p style={{'backgroundColor': `${kpop.color_1}`}}>
                        <button onClick={()=>window.location.href=`https://kpop-group-api.herokuapp.com/kpop/${kpop.id}`}>{kpop.name} </button>
                        <br></br>
                        Id: {kpop.id}<br></br>
                        Gender: {kpop.gender}<br></br>
                        Number of members: {kpop.members}<br></br>
                        Label: {kpop.label}<br></br>
                        Symbol: {kpop.symbol}<br></br>
                        Latest Single: '{kpop.newest_release}'<br></br>
                        Biggest Hit: '{kpop.biggest_hit}'<br></br>
                        Debut Year: {kpop.debut_year}<br></br>
                        Debut Song: '{kpop.debut_song}'<br></br>
                        Latest Single: '{kpop.newest_release}'<br></br>


                        {/* <Link key={kpop.id} to={`/kpop/${kpop.id}`} /> */}
                        
                        {/* <Link key={kpop.id} to={`/pokemon/${kpop.id}`}>
                    <KpopItem data={kpop} key={i} />
                </Link> */}
                    </p>)}
            </div>
        )
    }
}
