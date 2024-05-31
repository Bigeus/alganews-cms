import styled from "styled-components"
import ValueDescriptor from "../../Components/ValueDescriptor/ValueDescriptor"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { User, UserService } from "bigeus-sdk";
import useUser from "../../Core/Hooks/useUser";


export default function UserEarnings() {
    /* const [user, setUser] = useState<User.Detailed>(); */

    /* useEffect(() => {
        UserService.getDetailedUser(7)                    //id do editor carlos lima, built in
            .then(setUser)
    }, []) */

    const { user, fetchUser } = useUser();

    useEffect(() => {
        fetchUser();
    }, [fetchUser])

    if (!user) {
        return <UserEarningsWrapper>
            <Skeleton height={40} width={150} />
            <Skeleton height={40} width={150} />
            <Skeleton height={40} width={150} />
            <Skeleton height={40} width={150} />
        </UserEarningsWrapper>
    }

    return <UserEarningsWrapper>
        <ValueDescriptor color="primary" description="ganhos no mês" value={user?.metrics.monthlyEarnings} isCurrency={true} />
        <ValueDescriptor color="primary" description="ganhos na semana" value={user?.metrics.weeklyEarnings} isCurrency={true} />
        <ValueDescriptor color="default" description="ganhos de sempre" value={user?.metrics.lifetimeEarnings} isCurrency={false} />
        <ValueDescriptor color="default" description="total de palavras" value={user?.metrics.lifetimeWords} isCurrency={false} />
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`