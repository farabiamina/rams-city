import React from 'react';
import "./footer.css";
import "../../svg/footerLogoSvg";
import FooterLogoSvg from '../../svg/footerLogoSvg';

const Footer = () => {
    return (
        <footer>
            <div className="inner">
                <div className="info">
                    <FooterLogoSvg className="logo" />
                    <span className='phone'>
                        +7 707 212 4444
                    </span>
                </div>
                <div className="adresses">
                    <div className="adress">
                        <span>г. Алматы, <br />
                            ул. Тимирязева, 37
                        </span>
                        <span>
                            Пн-Пт 10:00-20:00 <br />
                            Сб-Вс 10:00-19:00
                        </span>
                        <a href='https://go.2gis.com/ako301' target='blank'>Проложить маршрут</a>
                    </div>
                    <div className="adress">
                        <span>г. Алматы, <br />
                            ул. Жандосова, 94a
                        </span>
                        <span>
                            Пн-Пт 10:00-20:00 <br />
                            Сб-Вс 10:00-19:00
                        </span>
                        <a href='https://go.2gis.com/ajpzb' target='blank'>Проложить маршрут</a>
                    </div>
                    <div className="adress">
                        <span>г. Алматы, <br />
                            ул. Айманова, 120
                        </span>
                        <span>
                            Пн-Пт 10:00-20:00 <br />
                            Сб-Вс 10:00-19:00
                        </span>
                        <a href='https://go.2gis.com/w0d86' target='blank'>Проложить маршрут</a>
                    </div>
                    <div className="adress">
                        <span>г. Алматы, <br />
                            ул. Суюнбая, 15б
                        </span>
                        <span>
                            Пн-Пт 10:00-20:00 <br />
                            Сб-Вс 10:00-19:00
                        </span>
                        <a href='https://go.2gis.com/3g2bpa' target='blank'>Проложить маршрут</a>
                    </div>
                </div>
                <p>Архитектура проекта, изображения благоустройства, фасадов, интерьера, применяемых материалов, их нумерация, инфраструктура комплекса являются условными и могут быть изменены в ходе проектирования, строительства и эксплуатации в рамках положительного заключения государственной экспертизы. Настоящая реклама, в соответствии со ст. 395 ГК РК не является публичной офертой.</p>
            </div>
        </footer>
    )
}

export default Footer;