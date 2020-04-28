import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const AddCatalogueItem = () => {
    const [form, setState] = useState({
        sku: '',
        name: '',
        description: '',
        category: '',
        price: '',
        inventory: ''
    })
    
    
    const { addcatalogueItem } = useContext(GlobalContext);
    let history = useHistory();

    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();

        const newcatalogueItem = {
            sku: form.sku,
            name: form.name,
            description: form.description,
            category: form.category,
            price: form.price,
            inventory: form.inventory
        }

        //console.log("==> Catalogue item being submitted :: ", newcatalogueItem);

        addcatalogueItem(newcatalogueItem);
        history.push("/");
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                <div className="w-full mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="sku">
                            SKU
                        </label>
                        <input 
                            name="sku"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.sku} 
                            onChange={updateField} 
                            type="text"
                            placeholder="Enter name" />
                    </div>
                    <div className="w-full mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="name">
                            Name
                        </label>
                        <input 
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.name} 
                            onChange={updateField} 
                            type="text" 
                            placeholder="Enter name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="description">
                            Description
                        </label>
                        <input 
                            name="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={form.description} 
                            onChange={updateField} 
                            type="text" 
                            placeholder="Enter description" />
                    </div>
                    <div className="w-full  mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="category">
                            Category
                        </label>
                        <input 
                            name="category"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.category} 
                            onChange={updateField} 
                            type="text" 
                            placeholder="Enter category" />
                    </div>
                    <div className="w-full  mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="price">
                            Price
                        </label>
                        <input 
                            name="price"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.price} 
                            onChange={updateField}
                            type="number" 
                            placeholder="Enter price" />
                    </div>
                    <div className="w-full  mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="inventory">
                            Inventory
                        </label>
                        <input 
                            name="inventory"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.inventory} 
                            onChange={updateField} 
                            type="number" 
                            placeholder="Enter inventory" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Item
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}