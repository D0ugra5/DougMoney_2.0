import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { useEffect, useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransactionContext";
import { api } from "./services/api";
import { DataConsult } from "./components/DataConsult";

Modal.setAppElement("#root");
export function App() {
  const [isNewtransactionModalOpen, setisNewtransactionModalOpen] = useState(
    false
  );
  function handleOpenNewTransactionModal() {
    setisNewtransactionModalOpen(true);
  }

  function closeOpenNewTransactionModal() {
    setisNewtransactionModalOpen(false);
  }
  return (
    <TransactionProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
      <DataConsult
        isOpen={true}
        onRequestClose={closeOpenNewTransactionModal}
      />
      <NewTransactionModal
        isOpen={isNewtransactionModalOpen}
        onRequestClose={closeOpenNewTransactionModal}
      ></NewTransactionModal>
      <GlobalStyle />
    </TransactionProvider>
  );
}
