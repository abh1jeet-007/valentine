import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'; 
import { Menubar } from 'primereact/menubar';
import './navbar.css'


export const Navbar = () => {
    const items = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
    ];

    const start = <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/1337X_logo.svg/2560px-1337X_logo.svg.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="p-inputgroup flex-1">
            <InputText placeholder="Keyword" />
            <Button icon="pi pi-search" className="p-button-warning" />
        </div>  
    );

    return (
        <div className="card">
            <Menubar start={start} end={end} />
            <TabMenu model={items}/>
        </div>
    )
}
