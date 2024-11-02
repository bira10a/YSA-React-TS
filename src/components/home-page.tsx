import React from "react";
import '../style/homePage.scss';
import videoBackground from '../images/homePage/homePageBackground.webm';

const HomePage: React.FC = () => {
    return (
        <section className="homePage">
            <div className="homePage__background">
                <video autoPlay muted loop>
                    <source src={videoBackground} type="video/webm" />
                </video>
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