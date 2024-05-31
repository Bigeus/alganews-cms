import { User, UserService } from "bigeus-sdk";
import { useCallback, useState } from "react";

export default function useUser() {
    const [user, setUser] = useState<User.Detailed>();

    const fetchUser = useCallback(async function () {
        UserService.getDetailedUser(7).then(setUser)            //id do editor carlos lima, built in
    }, [])


    return {
        user,
        fetchUser,
    }
}