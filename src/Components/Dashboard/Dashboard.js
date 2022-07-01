import React from 'react';
import ItemModal from './ItemModal/ItemModal';
import Items from './Items/Items';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <ItemModal/>
            <Items/>
        </div>
    );
};

export default Dashboard;