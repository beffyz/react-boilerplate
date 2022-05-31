import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.scss';

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div className={`center-md ${styles.error_page}`}>
            <h1>Page Not Found</h1>
            <h3>Navigating back to home...</h3>
            {setTimeout(() => { navigate('/'); }, 3000)}
        </div>
    );
};

export default Page404;
