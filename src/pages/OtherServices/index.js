import React from "react";
import { OthersContainer } from "../../components/OthersContainer";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";


export function OtherServices() {
    return(
        <OthersContainer>
        <div className="divider">
            <div className="line-text">
                <p className="text">Psicina</p>
                <div className="line" />
            </div>
            <div className="card">
                <div className="card-container">
                    <h2 className="card-title">Psicina</h2>
                    <div className="card-white-line"></div>
                    <p className="card-text">Horário de Funcionamento: 9:00h - 19:00h <br />
                    <br />
                    Dias de Funcionamento: Seg, Ter, Qua, Qui, Sex, Sab, Dom</p>
                </div>
            </div>
            <img src="https://i.imgur.com/b3kKtet.png" className="card-photo" />
            <div className="white-line"></div>
        </div>

        <div className="divider">
            <div className="line-text2">
                <div className="line" />
                <p className="text2">Festa</p>
            </div>
            <div className="card-2">
                <div className="card-container">
                    <h2 className="card-title">Área de Festa</h2>
                    <div className="card-white-line"></div>
                    <p className="card-text">Aberto somente a horário de Reservados.</p>
                </div>
            </div>
            <img src="https://i.imgur.com/Ur5hdod.png" className="card-photo-2"/>
            <div className="white-line"></div>
        </div>
        
        <div className="divider">
            <div className="line-text3">
                <p className="text">Restaurante</p>
                <div className="line" />
            </div>
            <div className="card-3">
                <div className="card-container">
                    <h2 className="card-title">Restaurante</h2>
                    <div className="card-white-line"></div>
                    <p className="card-text">Horário de Funcionamento: 9:00h - 19:00h <br />
                    <br />
                    Dias de Funcionamento: Seg, Ter, Qua, Qui, Sex, Sab, Dom</p>
                </div>
            </div>
            <img src="https://i.imgur.com/KfqCJbJ.png" className="card-photo-3"  />
            <div className="white-line"></div>
        </div>
    </OthersContainer>
    );
}