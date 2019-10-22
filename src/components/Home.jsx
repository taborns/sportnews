import React from 'react'
import MainApp from './mainApp';
import Api from '../api/api';
import { BackTop, Icon } from 'antd';

export default class Home extends React.Component {

    constructor(props) {
        
        super(props)

        this.state = {
            news : [],
            news_count : 0,
            current : 1,
            news_loading : false,
            leagues : [],
            predictions : []
        }

    }

    retrieveNews = (page) => {

        this.setState({
            news_loading : true
        })

        Api.getData(`news`, `?page=${page}`)
            .then( response => {
                this.setState({
                    news : response.results,
                    news_count : response.count,
                    news_loading : false
                })
            }, err => this.setState({news_loading : false}))

    }

    retrieveLeagues = () => {
        Api.getData(`leagues`)
            .then( response => {
                this.setState({
                    leagues : response.results,
                })
            })

    }

    retrievePredictions = () => {
        Api.getData(`predictions`)
            .then( response => {
                this.setState({
                    predictions : response.results
                })
            })
    }


    componentDidMount() {
        this.retrieveNews(1)
        this.retrieveLeagues()
        this.retrievePredictions()
    }

    render() {

        return (
            <div>
            <MainApp 
                {...this.state}
                onRetrieveNews = {this.retrieveNews}
            />
            <BackTop>
                <Icon className='back-to-top' type="up-circle" theme="filled" />
            </BackTop>
            </div>
        )
    }
}