import React, { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { TransactionContext } from "../../TransactionContext";
import { Container } from "./styles";
import Swal from 'sweetalert2'
export function TransactionTable() {

 async function deleteFinance(id:number){
    Swal.fire({
      title: 'Você deseja Deletar ?',
      text: "Você Vai deletar Um registro, Tem Certeza Disso?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#33cc95',
      cancelButtonColor: '#e52e4d',
      confirmButtonText: 'Sim, Deletar!'
    }).then(async(result) => {
      if (result.isConfirmed) {
     await   Swal.fire(
          'Deletado!',
          'O Registro foi Deletado Com Sucesso .',
          'success'
        )
        DeleteTransaction({ _id:id  })
      }
    })
  }
  




  const { transaction, DeleteTransaction } = useContext(TransactionContext);

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
          {transaction.map((transactions) => (
            <tr key={transactions._id}>
              <td className="Text-title">{transactions.title}</td>
              <td className={transactions.type}>
                {new Intl.NumberFormat("pt-bt", {
                  style: "currency",
                  currency: "BRL",
                }).format(transactions.amount)}
              </td>
              <td>{transactions.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-bt").format(
                  new Date(transactions.createdAt)
                )}
              </td>
              <td>
                <BiTrash
                  onClick={() => {
                    deleteFinance(transactions._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
