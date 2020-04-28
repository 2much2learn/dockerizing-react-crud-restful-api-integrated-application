import _ from 'lodash';

export default (state, action) => {

    function prepareNotificationToDisplay(status, message) {
        return {
            display: true,
            status: status,
            message: message
        }
    }
    
    if(action.type === 'API_CALL_FAILED') {
        console.log(action.payload,action.error);
        return {
            ...state,
            notification: prepareNotificationToDisplay("failure", action.payload)
        };
    }
    else if(action.type === 'GET_CATALOGUE_ITEMS') {
        //console.log("===> GET_catalogueItemS_ITEMS received", action.payload);
        return {
            ...state,
            catalogueItems: action.payload
        };
    }
    else if(action.type === 'GET_CATALOGUE_ITEM') {
        //console.log("===> GET_catalogueItemS_ITEM received", action.payload);
        return {
            ...state,
            catalogueItems: [...state.catalogueItems, action.payload]
        };
    }
    else if(action.type === 'REMOVE_catalogueItem') {

        const updatedcatalogueItems = state.catalogueItems;

        _.remove(updatedcatalogueItems, (item) => item.sku === action.payload);

        return {
            ...state,
            catalogueItems: updatedcatalogueItems,
            notification: prepareNotificationToDisplay("success", 'notifications.success.itemRemoved')
        };
    }
    else if(action.type === 'ADD_catalogueItem') {
        //console.log("===> ADD_catalogueItem ::", state, action);
        return {
            ...state,
            catalogueItems: [...state.catalogueItems, action.payload],
            notification: prepareNotificationToDisplay("success", 'notifications.success.itemAdded')
        };
    }
    else if(action.type === 'EDIT_catalogueItem') {
        const updatedcatalogueItem = action.payload;

        const updatedcatalogueItems = state.catalogueItems.map(catalogueItem => {
            if (catalogueItem.sku === updatedcatalogueItem.sku) {
                return updatedcatalogueItem;
            }
            return catalogueItem;
        });

        return {
            ...state,
            catalogueItems: updatedcatalogueItems,
            notification: prepareNotificationToDisplay("success", 'notifications.success.itemUpdated')
        };
    }
    else {
        return state;
    }
}