import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import "./gallery.css";
import RightArrowSvg from "../../svg/rightArrowSvg";
import LeftArrowSvg from '../../svg/leftArrowSvg';
import Gallery1Img from "../../images/gallery1.jpg";
import Gallery2Img from "../../images/gallery2.jpg";
import Gallery3Img from "../../images/gallery3.jpg";
import Gallery4Img from "../../images/gallery4.jpg";
import Gallery5Img from "../../images/gallery5.jpg";
import Gallery6Img from "../../images/gallery6.jpg";
import Gallery7Img from "../../images/gallery7.jpg";
import Gallery8Img from "../../images/gallery8.jpg";
import Gallery9Img from "../../images/gallery9.jpg";
import Animation from '../animation/animation';

const Gallery = () => {
    const slider = useRef(null);
    const imgList = [
        Gallery1Img,
        Gallery2Img,
        Gallery3Img,
        Gallery4Img,
        Gallery5Img,
        Gallery6Img,
        Gallery7Img,
        Gallery8Img,
        Gallery9Img,
    ]
    const [currentImage, setCurrentimage] = useState(1);

    const handleCarouselChange = (current) => {
        setCurrentimage(current + 1);
    };

    return (
        <section id="gallery">
            <div className="inner">
                <div className="text">
                    <Animation>
                        <h2>Галерея</h2>
                    </Animation>
                    <Animation>
                        <p>Для создания дизайна экстерьера компания RAMS Qazaqstan привлекла одно из лучших международных архитектурных бюро - DOME+Partners.</p>
                    </Animation>
                </div>
                <div>
                    <Carousel
                        afterChange={handleCarouselChange}
                        ref={slider}
                        className='carousel'
                        dots={false}
                    >
                        {
                            imgList.map((img, i) => (
                                <div key={i} className='img-con'>
                                    <img src={img} alt="" />
                                </div>
                            ))
                        }
                    </Carousel>
                    <div className='flex'>
                        <div className="controls">
                            <button onClick={() => slider.current.prev()}><LeftArrowSvg></LeftArrowSvg></button>
                            <button onClick={() => slider.current.next()}><RightArrowSvg /></button>
                        </div>
                        <div>
                            {currentImage.toString().padStart(2, '0')} / {imgList.length.toString().padStart(2, '0')}
                        </div>
                    </div>
                    <div className='media'>
                        <div className="controls">
                            <button onClick={() => slider.current.prev()}><LeftArrowSvg></LeftArrowSvg></button>
                            {currentImage.toString().padStart(2, '0')} / {imgList.length.toString().padStart(2, '0')}
                            <button onClick={() => slider.current.next()}><RightArrowSvg /></button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Gallery;