import React from 'react';
import styles from './CategoryButton.module.css'

const CategoryButton = (props) => {
    return (
        <button className={styles.button}>
            <h1>{props.name}</h1>
        </button>
    );
};

export default CategoryButton;