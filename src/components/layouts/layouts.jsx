import React, { useState, useEffect } from 'react';
import "./layouts.css";
// import LayoutImg from "../../images/layout.png";
import Animation from "../../components/animation/animation";
import OneRoom from "../../images/oneRoom.png";
// import TwoRoom1 from "../../images/twoRoom1.png";
import TwoRoom2 from "../../images/twoRoom2.png";
import TwoRoom3 from "../../images/twoRoom3.png";
import TwoRoom4 from "../../images/twoRoom4.png";
import TwoRoom5 from "../../images/twoRoom5.png";
import TwoRoom6 from "../../images/twoRoom6.png";
import ThreeRoom1 from "../../images/threeRoom1.png";
import ThreeRoom2 from "../../images/threeRoom2.png";
import ThreeRoom3 from "../../images/threeRoom3.png";
import ThreeRoom4 from "../../images/threeRoom4.png";
import ThreeRoom5 from "../../images/threeRoom5.png";
import ThreeRoom6 from "../../images/threeRoom6.png";
import ThreeRoom7 from "../../images/threeRoom7.png";
import ThreeRoom8 from "../../images/threeRoom8.png";
import Duplex1 from "../../images/duplex1.png";
import Duplex2 from "../../images/duplex2.png";

const Layouts = () => {
    const oneRoom = [
        {
            img: OneRoom,
            room: 1,
            area: 33.8,
        }

    ]
    const duplex = [
        {
            img: Duplex1,
            room: 0,
            area: 106.1,
        },
        {
            img: Duplex2,
            room: 0,
            area: 95,
        }
    ]
    const twoRoom = [
        // {
        //     img: TwoRoom1,
        //     room: 2,
        //     area: 95,
        // },
        {
            img: TwoRoom2,
            room: 2,
            area: 57.5,
        },
        {
            img: TwoRoom3,
            room: 2,
            area: 49.8,
        },
        {
            img: TwoRoom4,
            room: 2,
            area: 58.5,
        },
        {
            img: TwoRoom5,
            room: 2,
            area: 58.4,
        },
        {
            img: TwoRoom6,
            room: 2,
            area: 57.7,
        },
    ]
    const threeRoom = [
        {
            img: ThreeRoom1,
            room: 3,
            area: 83.3,
        },
        {
            img: ThreeRoom2,
            room: 3,
            area: 90.7,
        },
        {
            img: ThreeRoom3,
            room: 3,
            area: 83.3,
        },
        {
            img: ThreeRoom4,
            room: 3,
            area: 81.4,
        },
        {
            img: ThreeRoom5,
            room: 3,
            area: 118,
        },
        {
            img: ThreeRoom6,
            room: 3,
            area: 108.3,
        },
        {
            img: ThreeRoom7,
            room: 3,
            area: 82.9,
        },
        {
            img: ThreeRoom8,
            room: 3,
            area: 108.6,
        },
    ]
    const all = [...oneRoom, ...twoRoom, ...threeRoom, ...duplex];

    const [isMobile, setIsMobile] = useState(false);
    const [currentFilter, setCurrentFilter] = useState(1);
    const [currentArray, setCurrentArray] = useState(all);

    const arrays = [all, oneRoom, twoRoom, threeRoom, duplex];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const handleFilterChange = (val) => {
        setCurrentFilter(val);
    }

    useEffect(() => {
        setCurrentArray(arrays[currentFilter - 1]);
    }, [currentFilter])

    return (
        <section id="layouts">
            <Animation className="header">
                <h2>
                    Планировки
                </h2>
                <div className="filter">
                    <button onClick={() => handleFilterChange(1)} className={currentFilter === 1 ? "current" : ""}>Все</button>
                    <button onClick={() => handleFilterChange(2)} className={currentFilter === 2 ? "current" : ""}>{windowWidth > 768 ? "1-комнатные" : "1"}</button>
                    <button onClick={() => handleFilterChange(3)} className={currentFilter === 3 ? "current" : ""}>{windowWidth > 768 ? "2-комнатные" : "2"}</button>
                    <button onClick={() => handleFilterChange(4)} className={currentFilter === 4 ? "current" : ""}>{windowWidth > 768 ? "3-комнатные" : "3"}</button>
                    <button onClick={() => handleFilterChange(5)} className={currentFilter === 5 ? "current" : ""}>Дуплекс</button>
                </div>
            </Animation>
            <div className="layouts-flex">
                {currentArray.map((layout, index) => (
                    <div key={index} className="layout-item">
                        <img src={layout.img} alt="" />
                        <hr />
                        <div className="info">
                            {
                                layout.room > 0 &&
                                <div>
                                    <p>количество комнат</p>
                                    <hr />
                                    <span>{layout.room}</span>
                                </div>
                            }
                            <div>
                                <p>общая площадь</p>
                                <hr />
                                <span>{layout.area}</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Layouts;