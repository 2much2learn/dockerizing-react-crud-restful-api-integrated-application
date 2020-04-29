import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { useTranslation } from 'react-i18next';
import { categoryOptions } from '../constants'

export const AddCatalogueItem = () => {
    const { t } = useTranslation();

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

    const updateCategoryChange = selectedOption => {
        setState({ 
            ...form,
            category: selectedOption
        });
    };

    const onSubmit = e => {
        e.preventDefault();

        const newcatalogueItem = {
            sku: form.sku,
            name: form.name,
            description: form.description,
            category: form.category.value,
            price: form.price,
            inventory: form.inventory
        }

        console.log("==> Catalogue item being submitted :: ", newcatalogueItem);

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
                            {t('form.sku')}
                        </label>
                        <input 
                            name="sku"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.sku} 
                            onChange={updateField} 
                            type="text"
                            placeholder={t('forms_placeholder.sku')}/>
                    </div>
                    <div className="w-full mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="name">
                            {t('form.name')}
                        </label>
                        <input 
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.name} 
                            onChange={updateField} 
                            type="text" 
                            placeholder={t('forms_placeholder.name')} />
                    </div>
                    <div className="w-full  mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="description">
                            {t('form.description')}
                        </label>
                        <input 
                            name="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={form.description} 
                            onChange={updateField} 
                            type="text" 
                            placeholder={t('forms_placeholder.description')} />
                    </div>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                            {t('form.category')}
                        </label>
                        <Select 
                            name="category"
                            className="block appearance-none w-full rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={form.category} 
                            onChange={updateCategoryChange}
                            placeholder={t('forms_placeholder.category')}
                            options={categoryOptions}
                            getOptionLabel={option =>
                                t(`${option.label}`)
                            }>
                        >
                        </Select>
                    </div>
                    <div className="w-full  mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="price">
                            {t('form.price')}
                        </label>
                        <input 
                            name="price"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.price} 
                            onChange={updateField}
                            type="number" 
                            placeholder={t('forms_placeholder.price')} />
                    </div>
                    <div className="w-full  mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="inventory">
                            {t('form.inventory')}
                        </label>
                        <input 
                            name="inventory"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.inventory} 
                            onChange={updateField} 
                            type="number" 
                            placeholder={t('forms_placeholder.inventory')} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            {t('controls.addItem')}
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>{t('controls.cancel')}</Link></div>
                </form>
            </div>
        </Fragment>
    )
}