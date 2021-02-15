import { Avatar, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { ArrowForwardIos } from '@material-ui/icons';

export default class SingleDoctor extends Component {
    constructor() {
        super()
        this.state = {
            name: this.props.detail.name,
            qual: this.props.detail.qual,
            info: this.props.detail.info
        }
    }
    render() {
        console.log('single doctor list: ', this.state)
        const { name, qual, info } = this.state
        return (
            <React.Fragment>
                <Grid conatiner spacing={3} style={{ display: 'flex' }}>
                    <Grid item xs={2}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Grid>
                    <Grid item xs={8}>
                        <h3>{name}</h3>
                        <h6>{qual}</h6>
                        <p>{info}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <ArrowForwardIos onClick={"need to go to next page"} />
                    </Grid>

                </Grid>
            </React.Fragment>
        )
    }
}
