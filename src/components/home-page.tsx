import React from "react";

import '../style/homePage.scss';

import Logo from '../images/aboutUs/staff.jpg';

const HomePage = () => {
    return (
        <section className="homePage">
            <div className="homePage__background">
                {/* <video autoPlay muted loop>
                    <source src={`${process.env.PUBLIC_URL}/images/homePage/homePageBackground.webm`} type="video/webm" />
                    Ваш браузер не поддерживает встроенные видео
                </video> */}
            </div>

            <div className="homePage__container">
                <h1 className="homePage__title">
                    <span>ООО «Югспецавтоматика»</span>
                    Строительство, техперевооружение, реконструкция, пусконаладка на объектах энергетического и нефтегазового комплекса
                </h1>
            </div>
        </section>
    )
}

export {HomePage};