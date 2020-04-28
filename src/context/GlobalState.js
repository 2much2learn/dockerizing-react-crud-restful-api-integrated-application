import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

import catalogueService from '../services/CatalogueService'

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {

    const initialState = {
        catalogueItems: [],
        notification: {
            display: false,
            status: '',
            message: ''
        }
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function dispatchAPICallFailure(message, e) {
        dispatch({
            type: 'API_CALL_FAILED',
            error: e,
            payload: message
        });
    }

    const getCatalogueItems = async () => {
        await catalogueService
        .getAll()
        .then(response => {
            //console.log("======> getCatalogueItems response :: ",response.data);
            dispatch({
                type: 'GET_CATALOGUE_ITEMS',
                payload: response.data.data
            });            
        })
        .catch(e => {            
            dispatchAPICallFailure("Error occurred while getting catalogue items", e);
        });
    };

    const getCatalogueItem = async (sku) => {
        state.notification.display = false;

        await catalogueService
        .get(sku)
        .then(response => {
            //console.log("======> getCatalogueItem response :: ",response.data);
            dispatch({
                type: 'GET_CATALOGUE_ITEM',
                payload: response.data
            });
        })
        .catch(e => {
            dispatchAPICallFailure("Error occurred while getting catalogue item", e);
        });
    };

    const removecatalogueItem = async (sku) => {
        state.notification.display = false;

        await catalogueService
        .remove(sku)
        .then(response => {
            //console.log("======> removecatalogueItem response :: ",response);
            dispatch({
                type: 'REMOVE_catalogueItem',
                payload: sku
            });
        })
        .catch(e => {
            dispatchAPICallFailure("Error occurred while removing catalogue item", e);
        });
    };

    const addcatalogueItem = async (catalogueItem) => {
        state.notification.display = false;

        await catalogueService
        .create(catalogueItem)
        .then(response => {
            //console.log("======> addcatalogueItem response :: ",response);
            dispatch({
                type: 'ADD_catalogueItem',
                payload: catalogueItem
            });            
        })
        .catch(e => {
            dispatchAPICallFailure("Error occurred while adding catalogue item", e);
        });
    };

    const editcatalogueItem = async (catalogueItem) => {
        state.notification.display = false;
        
        await catalogueService
        .update(catalogueItem.sku, catalogueItem)
        .then(response => {
            //console.log("======> editcatalogueItem response :: ",response);
            dispatch({
                type: 'EDIT_catalogueItem',
                payload: catalogueItem
            });
        })
        .catch(e => {
            dispatchAPICallFailure("Error occurred while updating catalogue item", e);
        });
    };

    return (<GlobalContext.Provider value={{
        catalogueItems: state.catalogueItems,
        notification: state.notification,
        removecatalogueItem,
        addcatalogueItem,
        editcatalogueItem,
        getCatalogueItems,
        getCatalogueItem
    }}>
        {children}
    </GlobalContext.Provider>);
}