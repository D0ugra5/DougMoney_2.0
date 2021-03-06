
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";


interface handleOpenNewTransactionModal{
    handleOpenNewTransactionModal:()=>void
}
export function Header(props:handleOpenNewTransactionModal) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Doug Money"  />
        <button onClick={props.handleOpenNewTransactionModal} type="button">Nova Transação</button>
      
      </Content>
    </Container>
  );
}
