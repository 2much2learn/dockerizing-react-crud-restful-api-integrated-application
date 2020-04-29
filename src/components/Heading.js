import React, { useState, useContext, useEffect, Fragment } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Heading = () => {

    const { t, i18n } = useTranslation();
    const { notification } = useContext(GlobalContext);
    const [notificationToDisplay, setNotificationToDisplay] 
        = useState({
            display: false,
            message: ''
        });
    
    const [language, setLanguage] = useState('en');

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        
        setLanguage(lng);
    };

    useEffect(() => {
        setNotificationToDisplay(notification);
    }, [notification]);

    return (
        <Fragment>
        <div className="mt-5">
            <button className={(language === 'en' ? 'bg-blue-500' : 'bg-blue-200') + ` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2`}
                onClick={() => changeLanguage('en')}>English</button>
            <button className={(language === 'de' ? 'bg-blue-500' : 'bg-blue-200') + ` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                onClick={() => changeLanguage('de')}>Dutch</button>
        </div>
        <div>
            {notificationToDisplay.display && 
                <div className={(notificationToDisplay.status === 'success' ? 'bg-green-200' : 'bg-red-200')  + ' mt-10 bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest px-4 py-3 shadow-md my-2" role="alert'}>
                    <div className="flex">
                        <svg className="h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                        <div>
                            <p className="font-bold">{t(notificationToDisplay.message)}</p>
                        </div>
                    </div>                    
                </div>                
            }
            <div className="flex items-center mt-10 mb-10">
                <div className="flex-grow text-left px-4 py-2 m-2">
                    <h5 className="text-gray-900 font-bold text-xl">{t('title')}</h5>
                </div>
                <div className="flex-grow text-right px-4 py-2 m-2">
                    <Link to="/add">
                        <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            <span className="pl-2">{t('controls.add')}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
