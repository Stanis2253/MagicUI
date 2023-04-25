import React from 'react';
import styles from './CardFooter.module.css'

const CardFooter = (props) => {
    return (
        <div className={styles.block}>
            <h1 className={styles.title}>{props.Title}</h1>
        </div>
    );
};

export default CardFooter;