import React from 'react';
import Header from './Header';
import ItemModal from './ItemModal/ItemModal';
import Items from './Items/Items';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <ItemModal/>
            <Items/>
        </div>
    );
};

export default Dashboard;