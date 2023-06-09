import React from 'react';
import {Button} from "react-bootstrap";

const FilterItem = (props) => {
    return (
        <div>
            <p className={"Id"}>{props.id}</p>
            <Button onClick={propsChangeHandler}>
                {props.Name}
            </Button>
        </div>
    );
};

export default FilterItem;