import React, { Fragment, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const CatalogueItemlist = () => {
    const { catalogueItems, removecatalogueItem, getCatalogueItems } = useContext(GlobalContext);

    useEffect(() => {
        getCatalogueItems();
    }, []);

    return (
        <Fragment>
            <div className="flex items-center bg-gray-200 mb-10 shadow" >
                <div className="flex-auto text-left">
                    <div class="grid grid-cols-6 divide-x divide-gray-400 mr-3 py-2 px-4">
                        <div class="col-span-1 text-gray-600">SKU</div>
                        <div class="col-span-1 ">Category</div>
                        <div class="col-span-2 text-left">
                            <div class="">Name</div>
                        </div>                                    
                        <div class="col-span-1 text-center">Price</div>
                        <div class="col-span-1 text-center">Inventory</div>
                    </div>
                </div>
                <div className="flex text-right px-4 py-2 m-2">
                <Link>
                    <button
                        className="cursor-not-allowed bg-gray-100 text-gray-400 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                </Link>
                <button
                    className=" cursor-not-allowed block bg-gray-100 text-gray-400 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
                </div>
            </div>      
            {catalogueItems.length > 0 ? <Fragment>
                {catalogueItems.map(catalogueItem => (
                    <div className="flex items-center bg-gray-100 mb-4 shadow" key={catalogueItem.sku}>
                        <div className="flex-auto text-left">
                            <div class="grid grid-cols-6 divide-x divide-gray-400 mr-3 py-2 px-4">
                                <div class="col-span-1 text-gray-600">{catalogueItem.sku}</div>
                                <div class="col-span-1 ">{catalogueItem.category}</div>
                                <div class="col-span-2 text-left">
                                    <div class="">{catalogueItem.name}</div>
                                    <div class="text-sm font-semibold mt-1">{catalogueItem.description}</div>
                                </div>                                    
                                <div class="col-span-1 text-center">$ {catalogueItem.price}</div>
                                <div class="col-span-1 text-center">{catalogueItem.inventory}</div>
                            </div>
                        </div>
                        <div className="flex text-right px-4 py-2 m-2">
                            <Link to={`/edit/${catalogueItem.sku}`}>
                                <button
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </button>
                            </Link>
                            <button 
                                onClick={() => removecatalogueItem(catalogueItem.sku)} 
                                className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>}
        </Fragment>
    )
}