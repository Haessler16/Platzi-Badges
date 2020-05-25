import React, { Component } from 'react'
import "./styles/BadgeDetails.css"
import PageLoading from "../components/PageLoading"
import PageError from "../components/PageError"
import BadgeDetail from "./BadgeDetail"
import api from "../api"


export default class BadgeDetailsContainer extends Component {
    state= {
        loading: false,
        error: null,
        modalIsOpen: false,
        data: {}
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async ()=>{
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, data: data})
        }catch(error){
            this.setState({loading: false, error: error})
        }
    }

    handleCloseModal = ()=>{
        this.setState({modalIsOpen: false})
    }

    handleOpenModal = ()=>{
        this.setState({modalIsOpen: true})
    }

    handleDeteleBadge= async()=>{
        this.setState({loading:true, error:null})
        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.setState({loading:false})
            this.props.history.push("/badges")
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError/>
        }
        return (
            <BadgeDetail 
                badge ={this.state.data} 
                onClose={this.handleCloseModal}
                onOpen={this.handleOpenModal}
                isOpen={this.state.modalIsOpen}
                DeleteBadge={this.handleDeteleBadge} />
        )
    }
}
