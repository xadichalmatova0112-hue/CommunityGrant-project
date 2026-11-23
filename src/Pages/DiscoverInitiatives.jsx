import React from 'react'
import InitiativesHeader from '../Components/InitiativesHeader'
import Banner from '../Components/Banner'
import InitiativesList from '../Components/InitiativesList'

const DiscoverInitiatives = () => {
    return (
        <main className="min-h-screen bg-[#1C1C28]">
            <InitiativesHeader />
            <InitiativesList />
            <Banner />
        </main>
    )
}

export default DiscoverInitiatives
