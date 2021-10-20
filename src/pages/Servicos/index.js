import React from "react";
import { CardDelivery } from "../../components/CardsServicos/CardDelivery";
import { CardLimpeza } from "../../components/CardsServicos/CardLimpeza";
import { CardOutros } from "../../components/CardsServicos/CardOutros";
import { ServicosContainer } from "../../components/PaginaServicos/ServicosContainer";
import { Link } from "react-router-dom";
import "../../components/SideBar/index"

export function Servicos() {
    
    return(
        <ServicosContainer>
            <div className="leaves6"></div>
            <div className="contentAjust">
                <h1 className="servicosTitle">Serviços</h1>
                <div className="cards">
                <Link to="/serviços-delivery" style={{textDecoration: "none"}}>
                    <CardDelivery>
                        <div className="leaves1"></div>
                        <img src="https://i.imgur.com/fklWtf4.png" alt="Fork and Knife" className="deliveryCardPng"/>
                        <h1 className="cardTitle">Delivery</h1>
                        <div className="leaves2"></div>
                    </CardDelivery>
                  </Link>
                    
                    <Link to="serviços-limpeza" style={{textDecoration: "none"}}>
                      <CardLimpeza>
                          <div className="leaves1"></div>
                          <img src="https://i.imgur.com/4HdoMuR.png" alt="Fork and Knife" className="deliveryCardPng"/>
                          <h1 className="cardTitle">Limpeza</h1>
                          <div className="leaves2"></div>
                      </CardLimpeza>
                    </Link>

                    <Link to="/outros" style={{textDecoration: "none"}}>
                      <CardOutros>
                          <div className="leaves1"></div>
                          <img src="https://i.imgur.com/7aHGEs7.png" alt="Fork and Knife" className="deliveryCardPng"/>
                          <h1 className="cardTitle">Outros</h1>
                          <div className="leaves2"></div>
                      </CardOutros>
                    </Link>  
                </div>
            </div>
            <div className="leaves7"></div>
            <div className="leaves8"></div>
        </ServicosContainer>
    );
}