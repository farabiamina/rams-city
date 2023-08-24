import React, { useState } from 'react';
import "./purchase.css";
import TradeinSvg from "../../svg/tradeinSvg";
import AutoTradeinSvg from "../../svg/autoTradein";
import InstallmentSvg from "../../svg/installmentSvg";
import PensionSvg from "../../svg/pensionSvg";
import MortgageSvg from "../../svg/mortgageSvg";
import Animation from '../animation/animation';
import Modal from '../modal/modal';

const Purchase = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    return (
        <section id="purchase">
            <div className="inner">
                <Animation>
                    <h2>Способы<br /> приобретения</h2>
                </Animation>
                <div className="cards">
                    <Animation>
                        <div onClick={openModal} className="card">
                            <InstallmentSvg />
                            <div>
                                <h3>Рассрочка</h3>
                                <p>До ввода в эксплуатацию</p>
                            </div>
                        </div>
                    </Animation>
                    <Animation>
                        <div onClick={openModal} className="card">
                            <MortgageSvg />
                            <div>
                                <h3>Ипотека</h3>
                                <p>от 20% первоначального взноса</p>
                            </div>
                        </div>
                    </Animation>
                    <Animation>
                        <div onClick={openModal} className="card">
                            <TradeinSvg />
                            <div>
                                <h3>Trade-in</h3>
                                <p>Обмен на Ваше старое жильё</p>
                            </div>
                        </div>
                    </Animation>
                    <Animation>
                        <div onClick={openModal} className="card">
                            <AutoTradeinSvg />
                            <div>
                                <h3>Auto Trade-in</h3>
                                <p>Обмен автомобиля на квартиру</p>
                            </div>
                        </div>
                    </Animation>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} id="pop-up" />
        </section>
    )
}

export default Purchase