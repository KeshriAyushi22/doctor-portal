import React, { Component } from 'react'
import SingleDoctor from './SingleDoctor'
import { getDoctorList, isNull } from "../service/commonUtil"

export default class DoctorList extends Component {
    constructor() {
        super()
        this.state = {
            list: null
        }
    }

    componentWillMount() {
        //call the api to get the doctorList
        const data = getDoctorList()
        console.log(data)
        if (!isNull(data)) {
            this.setState({ list: data.doctorList })
        }
    }

    render() {
        return (
            <React.Fragment>
                {!isNull(this.state.list) && this.state.list.map(data => console.log(data))}
            </React.Fragment>
        )
    }
}
