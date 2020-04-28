import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
                            {t('form.sku')}
                        </label>
                        <input 
                            name="sku"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.sku} 
                            onChange={updateField} 
                            type="text"
                            placeholder={t('form_placeholders.sku_placeholder')}/>
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
                            placeholder={t('form_placeholders.name_placeholder')} />
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
                            placeholder={t('form_placeholders.description_placeholder')} />
                    </div>
                    <div className="w-full  mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="category">
                            {t('form.category')}
                        </label>
                        <input 
                            name="category"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={form.category} 
                            onChange={updateField} 
                            type="text" 
                            placeholder={t('form_placeholders.category_placeholder')} />
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
                            placeholder={t('form_placeholders.price_placeholder')} />
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
                            placeholder={t('form_placeholders.inventory_placeholder')} />
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