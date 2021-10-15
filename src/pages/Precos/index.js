import React from "react";
import { CardPrecos } from "../../components/CardPrecos";
import { PrecosContainer } from "../../components/PrecosContainer";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/SubmitButton";
import { FiArrowLeft } from "react-icons/fi";


export function Precos() {
    return(
        <PrecosContainer>
            <div className="backButtonContainer">
                    <Link to="/" label="homepage"><FiArrowLeft className="backButton"/></Link>
            </div>
            <h1 className="precosTitle">Preços</h1>
            <div className="cards">
            <CardPrecos>
                <h2 className="roomType">Standart</h2>
                <p className="preco">R$1,025</p>
                <p className="subtitleText">Pernoite</p>
                <SubmitButton>                
                        <Link to="/" label="Homepage" className="loginButtonStyle">Ver Mais</Link>                
                </SubmitButton>
            </CardPrecos>
            <CardPrecos className="cardPreco">
                <h2 className="roomType">Premium</h2>
                <p className="preco">R$1,479</p>
                <p className="subtitleText">Pernoite</p>
                <SubmitButton>                
                        <Link to="/" label="Homepage" className="loginButtonStyle">Ver Mais</Link>                
                </SubmitButton>
            </CardPrecos>
            <CardPrecos className="cardPreco">
                <h2 className="roomType">Deluxe</h2>
                <p className="preco">R$1,982</p>
                <p className="subtitleText">Pernoite</p>
                <SubmitButton>                
                        <Link to="/" label="Homepage" className="loginButtonStyle">Ver Mais</Link>                
                </SubmitButton>
            </CardPrecos>
            </div>
            <div className="leaves"></div>
            <div className="leaves2"></div>
            <div className="leaves3"></div>
            <div className="leaves4"></div>
        </PrecosContainer>
    );
}