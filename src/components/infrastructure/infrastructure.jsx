import React from 'react'
import "./infrastructure.css";
import MapSvg from '../../svg/mapSvg';
import Animation from '../animation/animation';

const Infrastructure = () => {
    return (
        <section id="infrastructure">
            <div className='text'>
                <Animation>
                    <h2>Инфраструктура</h2>
                </Animation>
                <Animation>
                    <p>Уникальный микроклимат RAMS City создан самой природой. Чистый воздух, набережная реки Большая Алматинка и Ботанический сад – слагаемые гармонии природы и города.</p>
                </Animation>
            </div>
            <div className="svg">
                <MapSvg width="100%" height="100%" />
            </div>
        </section>
    )
}

export default Infrastructure;