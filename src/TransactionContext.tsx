import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";


interface Transaction {
  _id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}
type DeleteTransctions = Pick<Transaction, "_id">;
type TransactionsInput = Omit<Transaction, "_id" | "createdAt">;

interface TransactioncontexData {
  transaction: Transaction[];
  createTransaction: (transaction: TransactionsInput) => Promise<void>;
  DeleteTransaction: ({ _id }: DeleteTransctions) => Promise<void>;
}

export const TransactionContext = createContext<TransactioncontexData>(
  {} as TransactioncontexData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [att, setatt] = useState(0);
  const [transaction, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    console.log("mudou algo aqui");
    api("financeConsult").then((reponse) => {
      setTransactions(reponse.data.Account);
    });

    // api('http://localhost/financeConsult').then((data)=> setTransactions(data.data)).catch(err => console.log(err))
  }, []);

  async function createTransaction(transactionInput: TransactionsInput) {
    const reponse = await api.post("NecessaryExpenses", {
      ...transactionInput,
    });
    const { Save } = reponse.data;
    if (Save) {
      api("financeConsult").then((reponse) => {
        setTransactions(reponse.data.Account);
      });
    }
  }

  async function DeleteTransaction({ _id }: DeleteTransctions) {
    await api.delete(`DeleteFinance/${_id}`).then((data) => {

      api("financeConsult").then((reponse) => {
        setTransactions(reponse.data.Account);
      });    
    });
  }
  return (
    <TransactionContext.Provider
      value={{ transaction, createTransaction, DeleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
