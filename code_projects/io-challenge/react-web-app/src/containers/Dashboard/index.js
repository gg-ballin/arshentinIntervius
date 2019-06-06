import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MapContainer } from '..';

import { Container, TicketsList } from '../../components';

import { fetchTickets } from '../../redux/actions/tickets'

import './style.css'

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.dispatch = this.props.dispatch;

        this.state = {

        }
    }

    componentDidMount(){

        this.dispatch(fetchTickets())

    }

    render(){
        return(
            <Container extraClass="dashboard">
                <div className="tickets-box">
                    <div className="title">
                        Tickets
                    </div>
                    <div className="title-line" />
                
                    <TicketsList tickets={this.props.tickets} />
                
                </div>
                <div className="map">
                    <MapContainer />
                </div>
            </Container>
        )
    }

}

const mapStateToProps = (state) =>({
    ...state,
    tickets :  state.tickets
})


export default connect(mapStateToProps) (Dashboard);


