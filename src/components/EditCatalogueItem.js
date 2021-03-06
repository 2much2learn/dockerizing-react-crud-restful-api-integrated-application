import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Select from 'react-select'
import { categoryOptions } from '../constants'

export const EditCatalogueItem = (route) => {
    const { t } = useTranslation();

    let history = useHistory();
    const { catalogueItems, getCatalogueItem, editcatalogueItem } = useContext(GlobalContext);
    const [selectedCatalogueItem, setSeletedCatalogueItem] 
        = useState({
            sku: '',
            name: '',
            description: '',
            category: '',
            price: '',
            inventory: ''
        });

    const sku = route.match.params.sku;

    useEffect(() => {
        const catalogueItemSku = sku;

        getCatalogueItem(sku);

        const selectedCatalogueItem = catalogueItems.find(catalogueItem => catalogueItem.sku === catalogueItemSku);
        setSeletedCatalogueItem(selectedCatalogueItem);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editcatalogueItem(selectedCatalogueItem);
        history.push('/');
    }

    const updateCategoryChange = selectedOption => {
        setSeletedCatalogueItem({ 
            ...selectedCatalogueItem,
            category: selectedOption.value
        });
    };

    const updateField = e => {
        setSeletedCatalogueItem({
            ...selectedCatalogueItem,
            [e.target.name]: e.target.value
        });
    };

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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedCatalogueItem.sku} 
                            onChange={updateField} 
                            type="text" 
                            placeholder={t('forms_placeholder.sku')} />
                    </div>
                    <div className="w-full mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="name">
                            {t('form.name')}
                        </label>
                        <input 
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedCatalogueItem.name} 
                            onChange={updateField} 
                            type="text" 
                            placeholder={t('forms_placeholder.name')} />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                        {t('form.description')}
                        </label>
                        <input 
                            name="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedCatalogueItem.description} 
                            onChange={updateField} 
                            type="text" 
                            placeholder={t('forms_placeholder.description')} />
                    </div>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                            {t('form.category')}
                        </label>
                        <div className="relative">
                            <Select 
                                name="category"
                                className="block appearance-none w-full rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                value={categoryOptions.filter(option => option.value === selectedCatalogueItem.category)}
                                onChange={updateCategoryChange}
                                placeholder={t('forms_placeholder.category')}
                                options={categoryOptions}
                                getOptionLabel={option =>
                                    t(`${option.label}`)
                                }>
                            >
                            </Select>                            
                        </div>
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                        {t('form.price')}
                        </label>
                        <input 
                            name="price"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedCatalogueItem.price}
                            onChange={updateField}
                            type="number" 
                            placeholder={t('forms_placeholder.price')} />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inventory">
                        {t('form.inventory')}
                        </label>
                        <input 
                            name="inventory"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedCatalogueItem.inventory}
                            onChange={updateField}
                            type="text" 
                            placeholder={t('forms_placeholder.inventory')} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            {t('controls.editItem')}
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>{t('controls.cancel')}</Link></div>
                </form>
            </div>
        </Fragment>
    )
}