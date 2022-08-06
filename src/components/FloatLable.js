
import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import  { Button, Form, Input } from 'antd';
import Edit2Icon from 'assets/media/edit-2.svg';
const FloatLable = (props) => {
    const [focus, setFocus] = useState(false);
    let { label, value, placeholder, type, required } = props;
    const labelClass = focus || (value && value.length !== 0) ? "label label-float" : "label";
    const isActive = props.isActivedColor && (focus || (value && value.length !== 0)) ? true : false;

    return (
        <div
            className="float-label"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            
            <Input 
                defaultValue={value}
                className="main-input" 
                onChange={props.onChange}
                disabled={props.disabled ? true : false}
            />
            {props.editable ? <EditableIcon src={Edit2Icon}/> : null}
            <label style={{color: isActive ? '#DB2B36' : '#000', opacity: isActive ? 1 : .6}} className={labelClass}>{label}</label>
        </div>
    )
}
const EditableIcon = styled.img `
    @media only screen and (min-width:300px) and (max-width:768px){
        top: 17px;
        right: 16px;
    }
    position: absolute;
    top: 30px;
    right: 30px;
`
export default FloatLable;