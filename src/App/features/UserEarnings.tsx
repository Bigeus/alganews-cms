import styled from "styled-components"
import ValueDescriptor from "../../Components/ValueDescriptor/ValueDescriptor"
import { useEffect, useState } from "react"
import UserService from "../../sdk/Services/User.service";
import { User } from "../../sdk/@types";

export default function UserEarnings(){
   const [user, setUser] = useState<User.Detailed>();

   useEffect(() => {
    UserService.getDetailedUser(7)                       //id do editor carlos lima, built in
    .then(setUser)
   }, [])
   
   if(!user){
    return null
   }
   
   return <UserEarningsWrapper>
        <ValueDescriptor color="primary" description="ganhos no mês" value={user?.metrics.monthlyEarnings} isCurrency={true}/>
        <ValueDescriptor color="primary" description="ganhos na semana" value={user?.metrics.weeklyEarnings} isCurrency={true}/>
        <ValueDescriptor color="default" description="ganhos de sempre" value={user?.metrics.lifetimeEarnings} isCurrency={false}/>
        <ValueDescriptor color="default" description="total de palavras" value={user?.metrics.lifetimeWords} isCurrency={false}/>
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`