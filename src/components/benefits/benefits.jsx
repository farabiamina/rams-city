import React from 'react';
import "./benefits.css";
import Benefit1Img from "../../images/benefit1.jpg";
import Benefit2Img from "../../images/benefit2.jpg";
import Benefit3Img from "../../images/benefit3.jpg";
import Benefit4Img from "../../images/benefit4.jpg";
import Benefit5Img from "../../images/benefit5.jpg";
import BenefitsHeader from "../../images/5.png";
import Animation from '../animation/animation';

const Benefits = () => {
    return (
        <section id="benefits">
            <div className="inner">
                <Animation className="header">
                    <img src={BenefitsHeader} alt="" />
                    <h2>
                        причин переехать в
                        RAMS City</h2>
                </Animation>
                <div className="columns">
                    <div className="column">
                        <Animation className="card">
                            <img src={Benefit3Img} alt="" />
                            <p>Уникальный европейский формат</p>
                        </Animation>
                    </div>
                    <div className="column">
                        <Animation className="card">
                            <img src={Benefit1Img} alt="" />
                            <p>Перспективный семейный район</p>
                        </Animation>
                        <Animation className="card">
                            <img src={Benefit4Img} alt="" />
                            <p>Гармония с природой</p>
                        </Animation>
                    </div>
                    <div className="column">
                        <Animation className="card">
                            <img src={Benefit2Img} alt="" />
                            <p>Привлекательные условия для покупки</p>
                        </Animation>
                        <Animation className="card">
                            <img src={Benefit5Img} alt="" />
                            <p>Близость к крупнейшим ТРЦ</p>
                        </Animation>
                    </div>
                </div>
                <div className="columns media">
                    <div className="column">
                        <div>
                            <Animation className="card">
                                <img src={Benefit3Img} alt="" />
                            </Animation>
                            <p>Уникальный европейский формат</p>
                        </div>
                        <div>
                            <Animation className="card">
                                <img src={Benefit1Img} alt="" />
                            </Animation>
                            <p>Перспективный семейный район</p>
                        </div>
                    </div>
                    <div className="column">
                        <div>
                            <Animation className="card">
                                <img src={Benefit4Img} alt="" />
                            </Animation>
                            <p>Гармония с природой</p>
                        </div>
                        <div>
                            <div className="card">
                                <img src={Benefit2Img} alt="" />
                            </div>
                            <p>Привлекательные условия для покупки</p>
                        </div>
                        <div style={{ marginBottom: 0 }}>
                            <Animation className="card">
                                <img src={Benefit5Img} alt="" />
                            </Animation>
                            <p>Близость к крупнейшим ТРЦ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits