import React from 'react';
import "./panorama.css";
import Animation from "../../components/animation/animation";
import PanoramaImg from "../../images/panorama.jpg";
import ReactPannellum, { getConfig } from "react-pannellum";

const Panorama = () => {
    const config = {
        autoRotate: -2,
        autoLoad: true,
    };
    return (
        <section id="panorama">
            <div className="inner">
                <Animation>
                    <h2>Панорама</h2>
                </Animation>
                <div>
                    <ReactPannellum
                        id="1"
                        sceneId="firstScene"
                        imageSource={PanoramaImg}
                        className="panorama"
                        autoload
                        style={{ width: "100%" }}
                        config={config}
                    />
                    {/* <iframe title='panorama' width="100%" height={720} allowFullScreen={true} style={{ border: "none" }}
                        src="https://momento360.com/e/u/3e250f9f0a7048009d46d7ef0b149da1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"></iframe> */}
                </div>
                {/* <iframe width="100%" height={720} allowFullScreen={true} style={{ border: "none" }} src={PanoramaImg}></iframe> */}

            </div>
        </section>
    )
}

export default Panorama;