import React from "react"
import Logo from "../../Resources/logo.png"
import styles from "./Header.module.css";
import buttonSearch from "../../Resources/search.svg"
import CartButton from "./CartButton";
import CategoryButton from "./CategoryButton";

const Header = (props) => {
    return(
        <React.Fragment>
                 <div className={styles.header}>

                        <div className={styles.logoLong}>
                            <img alt={"Logo"} src={Logo}  className={styles.logo}/>
                        </div>

                        <div className={styles.logoLong}>
                            <h1 >ВелоМото</h1>
                        </div>

                     <input className={styles.input}/>
                         <img alt={"search"} src={buttonSearch} />

                    <CartButton onClick={props.onShowCart}/>
                </div>

                <div className={ styles.category}>
                    <CategoryButton name={"Главная"}/>
                    <CategoryButton name={"Товары"}/>
                    <CategoryButton name={"Самовывоз"}/>
                    <CategoryButton name={"Доставка"}/>
                </div>

        </React.Fragment>
    )
}
export  default  Header;