import React from 'react';
import FormArrowSvg from '../../svg/formArrowSvg';
import "./success.css";
import SuccessSvg from "../../svg/successSvg";
import SuccessBgSvg from '../../svg/successBgSvg';

const Success = ({toggleSuccessPage}) => {
    return (
        <section id='success'>
            <SuccessBgSvg className="bg"/>
            <div className="text">
                <SuccessSvg className="icon"/>
                <h1>Спасибо!</h1>
                <h2>заявка отправлена</h2>
                <p>Спасибо за проявленный интерес. Наши менеджеры свяжутся с вами в ближайшее время.</p>
                <button onClick={toggleSuccessPage}>На главную <FormArrowSvg color="#E76B47" /></button>
            </div>
        </section>
    )
}

export default Success;