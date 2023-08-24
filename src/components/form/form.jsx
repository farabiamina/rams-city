import React, { useState, useContext } from 'react';
import "./form.css";
import ArrowSvg from "../../svg/formArrowSvg";
import InputMask from 'react-input-mask';
import { AppContext } from '../../context/context';
import Request from '../request/request';

const Form = () => {
    return (
        <section id="form">
            <div className="inner">
                <div className="left">
                    <h2>Получите специальную цену</h2>
                    <p>Наши специалисты подберут для Вас лучшие условия приобретения квартиры за 10 минут.</p>
                </div>
                <div className="right">
                    <Request color="white" formId="footer"/>
                </div>
            </div>
        </section>
    )
}

export default Form;