import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { CatalogueItemlist } from './CatalogueItemlist';

export const Home = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="container mx-auto">
                    <Heading />
                    <CatalogueItemlist />
                </div>
            </div>
        </Fragment>
    )
}