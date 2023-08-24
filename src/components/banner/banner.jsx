import React, { useState } from 'react';
import BuildingImg from "../../images/building1.png";
import BannerImg from "../../images/building2.png";
import FullBuildingImg from "../../images/building.jpg";
import "./banner.css";
import SlideSvg from '../../svg/slideSvg';
import TreeSvg from '../../svg/treeSvg';
import CarouselSvg from '../../svg/carouselSvg';
import FieldSvg from '../../svg/fieldSvg';
import Animation from '../animation/animation';
import Modal from '../modal/modal';

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(true);
    }

    return (
        <section id="banner">
            <div className="top-inner">
                <div className="header-text">
                    <p className='animate'>Рассрочка до ввода в эксплуатацию</p>
                    <h1>
                        <span className='animate'>Ваше семейное</span>
                        <span className='animate'>пространство</span>
                    </h1>
                </div>
                <img className='full' src={FullBuildingImg} alt="" />
                <div className="banner-img">
                    <img className='top' src={BuildingImg} alt="Building" />
                    <img className='bottom' src={BannerImg} alt="" />
                </div>
                <div onClick={handleModal} className='circle'>
                    <span>Оставить заявку</span>
                </div>
            </div>
            <div className="cards">
                <Animation className="card-wrapper">
                    <div className="card">
                        <SlideSvg />
                        <p className="text">Современные детские площадки и места для отдыха всех домочадцев</p>
                    </div>
                </Animation>
                <Animation className="card-wrapper">
                    <div className="card">
                        <TreeSvg />
                        <p className="text">Аллеи для прогулок с зонами для пикников</p>
                    </div>
                </Animation>
                <Animation className="card-wrapper">
                    <div className="card">
                        <CarouselSvg />
                        <p className="text">Набережная Большой Алматинки и близость к самым большим ТРЦ Алматы</p>
                    </div>
                </Animation>
                <Animation className="card-wrapper">
                    <div className="card">
                        <FieldSvg />
                        <p className="text">Уникальный многофункциональный современный RAMS бульвар для незабываемого отдыха с близкими и родными.</p>
                    </div>
                </Animation>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} id="pop-up"/>
        </section>
    )
}

export default Banner