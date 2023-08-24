import React from 'react';
import "./pageNotFound.css";
import FormArrowSvg from '../../svg/formArrowSvg';

const PageNotFround = () => {

    return (
        <section id='notFound'>
            <div className='text'>
                <h2>Ошибка</h2>
                <h1>404</h1>
                <p>Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.</p>
                <button onClick={() => { window.location.href = '/'}}>На главную <FormArrowSvg color="#E76B47" /></button>
            </div>
        </section>
    )
}

export default PageNotFround