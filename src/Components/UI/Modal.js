import React from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.css';


const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onHideCart}>

        </div>
    );
};


const ModelWindow = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};


const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal((<Backdrop onHideCart={props.onHideCart}/>), portalElement)}
            {ReactDOM.createPortal((<ModelWindow>{props.children}</ModelWindow>), portalElement)}
        </React.Fragment>
    );
};

export default Modal;