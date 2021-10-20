import React, { useEffect, useState } from "react";
import { AdminDContainer } from "../../components/AdminDContainer";
import { AdminTable } from "../../components/AdminDContainer/AdminTable";
import { DivPedido } from "../../components/AdminDContainer/DivPedido";
import userServices from "../../services/userServices";

export function AdminDelivery({userRole}) {

    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
      async function getServicos(){
        try {
          const res = (await userServices.getServicos()).data

          console.log(res)
  
          setPedidos(res)
        } catch (error) {
          console.log(error)
        }
      }
 
      getServicos()
    }, [])
    
    return(
      <AdminDContainer>
        <div className="leaves2" />
          <h1 className="title">Gerenciamento de Serviços</h1>
          <AdminTable>
            <div className="adminTableHeader">
              <h3 className="headerText">Pedido</h3>
              <h3 className="headerText">Nº Quarto</h3>
              <h3 className="headerText">Quantidade</h3>
              <h3 className="headerText">Concluído</h3>
            </div>

            {
              pedidos ?
                  pedidos.map((pedido, index) => (
                      <>
                      {
                        pedidos ?
                            pedidos.map((pedido, index) => (
                                <>
                                    {
                                      pedido.comidas.length > 0 &&
                                        <>
                                              {
                                                  pedido.comidas.map(comida => (
                                                      <DivPedido>
                                                        <p className="serviceTitle">{comida.nome}</p>
                                                        <div className="verticalLine" />
                                                        <p className="serviceRoomNumber">{(Math.random()  * (700 - 100) + 100).toFixed()}</p>
                                                        <div className="verticalLine3" />
                                                        <p className="serviceRoomNumber">{(Math.random()  * (10 - 1) + 1).toFixed()}</p>
                                                        <div className="verticalLine3" />
                                                        <input type="checkbox" className="serviceCheckBox" />
                                                      </DivPedido>  
                                                  ))
                                              }
                                        </>
                                    }
                                </>
                            )) :
                            <p>Não Há Pedidos</p>
                    }
                          {/* {
                              pedido.tipo === "Delivery" &&
                              <DivPedido>
                                <p className="serviceTitle">02 Refigerantes</p>
                                <div className="verticalLine" />
                                <p className="serviceRoomNumber">{(Math.random()  * (700 - 100) + 100).toFixed()}</p>
                                <div className="verticalLine3" />
                                <input type="checkbox" className="serviceCheckBox" />
                              </DivPedido>  
                          } */}
                      </>
                  )) :
                  <p>Não Há Pedidos</p>
              }
          
          </AdminTable>

          <div className="leaves1" />
      </AdminDContainer>
    );
}