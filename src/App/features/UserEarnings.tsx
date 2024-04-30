import styled from "styled-components"
import ValueDescriptor from "../../Components/ValueDescriptor/ValueDescriptor"

export default function UserEarnings(){
    return <UserEarningsWrapper>
        <ValueDescriptor color="primary" description="ganhos no mês" value={560322.32} isCurrency={true}/>
        <ValueDescriptor color="primary" description="ganhos na semana" value={560322.32} isCurrency={true}/>
        <ValueDescriptor color="default" description="ganhos de sempre" value={560322.32} isCurrency={false}/>
        <ValueDescriptor color="default" description="total de palavras" value={560322.32} isCurrency={false}/>
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`