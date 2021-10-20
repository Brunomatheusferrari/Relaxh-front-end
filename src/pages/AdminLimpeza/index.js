import React, { useEffect, useState } from "react";
import { AdminLContainer } from "../../components/AdminLContainer";
import { AdminTable } from "../../components/AdminDContainer/AdminTable";
import { DivPedido } from "../../components/AdminDContainer/DivPedido";
import userServices from "../../services/userServices";

export function AdminLimpeza({userRole}) {
  const [pedidos, setPedidos] = useState([])

    useEffect(() => {
      async function getLimpeza(){
        try {
          const res = (await userServices.getServicos()).data

          setPedidos(res)
        } catch (error) {
          console.log(error)
        }
      }

      getLimpeza()
    },[])

    return(
      <AdminLContainer>
        <div className="leaves2" />
          <h1 className="title">Gerenciamento de Limpeza</h1>
          <AdminTable>
            <div className="adminTableHeader">
              <h3 className="headerText">Pedido</h3>
              <h3 className="headerText">Horário</h3>
              <h3 className="headerText">Nº Quarto</h3>
              <h3 className="headerText">Concluído</h3>
            </div>
            
            {
              pedidos ?
                pedidos.map(pedido => (
                  <>
                    {
                      pedido.tipo === "Limpeza" &&
                        <DivPedido key={pedido.id}>
                          <p className="serviceTitle">{pedido.descricao}</p>
                          <div className="verticalLine" />
                          <p className="serviceHorario">{`${pedido.horario[11]}${pedido.horario[12]}${pedido.horario[13]}${pedido.horario[14]}${pedido.horario[15]}`}</p>
                          <div className="verticalLine2" />
                          <p className="serviceRoomNumber">{(Math.random()  * (700 - 100) + 100).toFixed()}</p>
                          <div className="verticalLine3" />
                          <input type="checkbox" className="serviceCheckBox" />
                      </DivPedido>     
                      }
                  </>
       
                ))
              : 
              <p>Não ha pedidos</p>
            }

           
          </AdminTable>

          <div className="leaves1" />
      </AdminLContainer>
    );
}