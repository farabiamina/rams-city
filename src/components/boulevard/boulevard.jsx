import React from 'react';
import BoulevardImg from "../../images/boulevard2.jpg";
import "./boulevard.css";
import BTextFillSvg from '../../svg/bTextFillSvg';
import BTextStrokeSvg from '../../svg/bTextStrokeSvg';
import { Parallax} from 'react-scroll-parallax';
import Animation from '../animation/animation';

const Boulevard = () => {
  return (
    <section id="boulevard">
      <div className="inner">
        <Animation>
          <h2>RAMS Бульвар</h2>
        </Animation>
        <Animation className="p-con">
          <p>“ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Абсолютный эксклюзив от RAMS City – зеленый променад в самом сердце жилого комплекса протяженностью более полукилометра. RAMS бульвар продолжает лучшие традиции европейских жилых комплексов, где подобный формат – не редкость, но для Алматы это модное ноу-хау!</p>
        </Animation>
        <div className="pics">
          <Parallax
            className='small-pic'
            speed={10}
          >
            <img src={BoulevardImg} alt="" />
          </Parallax>
          <div className="main-pic">
            <div className="main-pic-inner">
              <Parallax translateX={[-40, -10]} height="100%" className="stroke">
                <BTextStrokeSvg height="100%" />
              </Parallax>
            </div>
            <Parallax translateX={[-40, -10]} className="fill">
              <BTextFillSvg height="100%" />
            </Parallax>
          </div>
        </div>
        <Animation className="p-con-2">
          <p>Сверкающие витрины бутиков, стильный ландшафтный дизайн, удобные места для отдыха, яркие игровые площадки, уютные кофейни и рестораны. Вы ощутите вкус яркой городской жизни, зарядитесь энергией новых впечатлений и открытий, не покидая пределов вашего жилого комплекса.</p>
        </Animation>
      </div>
    </section>
  );
};

export default Boulevard;
