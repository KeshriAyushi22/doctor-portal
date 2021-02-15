import React from 'react'
import DoctorList from './DoctorList'
import Header from './Header'

export default function Doctors() {
    return (
        <React.Fragment>
            <Header />
            <DoctorList />
        </React.Fragment>
    )
}
