import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransactionContext";

import { DataConsult } from "./components/DataConsult";

Modal.setAppElement("#root");
export function App() {
  const [isNewtransactionModalOpen, setisNewtransactionModalOpen] = useState(
    false
  );

  const [isNewDataConsult,setIsNewDataConsult]= useState(false)
  function handleOpenNewTransactionModal() {
    setisNewtransactionModalOpen(true);
  }

  function closeOpenNewTransactionModal() {
    setisNewtransactionModalOpen(false);
  }


  function handleOpenNewDataConsult() {
    setIsNewDataConsult(true);
  }

  function closeOpenNewDataConsult() {
    setIsNewDataConsult(true);
  }
  return (
    <TransactionProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
      <DataConsult
        isOpen={true}
        onRequestClose={closeOpenNewDataConsult}
      />
      <NewTransactionModal
        isOpen={isNewtransactionModalOpen}
        onRequestClose={closeOpenNewTransactionModal}
      ></NewTransactionModal>
      <GlobalStyle />
    </TransactionProvider>
  );
}
