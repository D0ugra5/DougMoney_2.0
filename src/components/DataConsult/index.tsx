import { Container } from "./styles";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";

interface NewDataConsultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const DataConsult = ({
  isOpen,
  onRequestClose,
}: NewDataConsultModalProps) => {


  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >  
    <h1>Filtar Por:</h1>
    <Container>
  
      <input type="text" />
      <input type="text" />
    </Container>
  </Modal>
    
  );
};
