import React, { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { TransactionContext } from "../../TransactionContext";
import { Container } from "./styles";

export function TransactionTable() {
const {transaction, DeleteTransaction} = useContext(TransactionContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
        {transaction.map(transactions=>(
            <tr key={transactions._id}>
            <td className="Text-title">{transactions.title}</td>
            <td className={transactions.type}>
             {new Intl.NumberFormat('pt-bt',{
               style:'currency',
              currency:'BRL'

             }).format(transactions.amount)}
             </td>
            <td>{transactions.category}</td>
            <td>{new Intl.DateTimeFormat('pt-bt').format(
              new Date(transactions.createdAt)
            )}
       
            </td>
            <td><BiTrash onClick={()=>{
                 DeleteTransaction({_id:transactions._id})
            }}/></td>
          </tr>
        ))}
      
       
       
        
        </tbody>
      </table>
    </Container>
  );
}
