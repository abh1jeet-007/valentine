
import React, {useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ListBox } from 'primereact/listbox';
import './style.css'

export const Table = () => {

    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];
    const [selectedItem, setSelectedItem] = useState(null);

    const products = [
        {
            code: "f230fh0g3",
            name: "Bamboo Watch",
            category: "Accessories",
            quantity: "12"
        },
        {
            code: "f230fh0g3",
            name: "Bamboo Watch",
            category: "Accessories",
            quantity: "12"
        },
        {
            code: "f230fh0g3",
            name: "Bamboo Watch",
            category: "Accessories",
            quantity: "12"
        },
        {
            code: "f230fh0g3",
            name: "Bamboo Watch",
            category: "Accessories",
            quantity: "12"
        }, 
        {
            code: "f230fh0g3",
            name: "Bamboo Watch",
            category: "Accessories",
            quantity: "12"
        },
        {
            code: "f230fh0g3",
            name: "Bamboo Watch",
            category: "Accessories",
            quantity: "12"
        }
    ]

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
    ];

    return (
        <div style={{display: "flex"}}>
            <div style={{margin: '30px 20px', width: "80%"}}>
                <DataTable value={products}  paginator rows={10} rowsPerPageOptions={[10, 25, 50]}   dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header} />
                    ))}
                </DataTable>
        
            </div>
            <div className="list card flex justify-content-center" style={{margin: '30px 20px',width: "20%"}}>  
                <ListBox style={{ margin: "0px 0px 10px 0", border: '0px solid red'}} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    className="w-full md:w-14rem p-invalid" />
                <ListBox style={{ border: '0px solid red'}} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    className="w-full md:w-14rem p-invalid" />
            </div>
        </div>
    )
}
