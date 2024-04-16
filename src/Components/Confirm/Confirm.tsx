import styled from "styled-components";
import Button from "../Button/Button";

export interface ConfirmProps {
    title: string
    onConfirm: () => any
    onCancel: () => any
}

export default function Confirm(props: ConfirmProps) {
    return <ConfirmComponent>
        <ConfirmTitle>{props.title}</ConfirmTitle>
        <ConfirmButtonsArea>
            <Button variant="danger" label="Não" onClick={props.onCancel}></Button>
            <Button variant="primary" label="Sim" onClick={props.onConfirm}></Button>
        </ConfirmButtonsArea>
    </ConfirmComponent>
}
const ConfirmComponent = styled.div`
    width: 229px;
    height: 106px;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 24px;
    gap: 12px;
    align-items: center;
    justify-content: center;
    background-color: #F3F8FA;
`
const ConfirmTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;

  color: #274060;
`
const ConfirmButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`