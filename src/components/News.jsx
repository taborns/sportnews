import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import {Pagination, Spin, Icon} from 'antd'
import NewsCard from './NewsCard';
import React from 'react';


export default class News extends React.Component{

    constructor(props) {
        super(props)
       
    }

    handlePagination = (page) => {
        
        this.props.onRetrieveNews(page)
    }

    render() {
        let news_count = this.props.news_count
        const antIcon = <Icon  type="loading" style={{ fontSize: 54 }} spin />;
        console.log('newsloading', this.props)
        return (
            <Container>
                    <Spin  indicator={antIcon} spinning={this.props.news_loading}>

                        { this.props.news.map( news => (<Grid
                            item
                            direction="row"
                            justify="center"
                            alignItems="center"
                            lg={10}
                            >
                                <NewsCard news={news} />
                            </Grid>)
                        )}
                    </Spin>

                <Pagination pageSize={5} onChange={this.handlePagination} defaultCurrent={1} total={news_count} />
                </Container>
        
        )
    }
}