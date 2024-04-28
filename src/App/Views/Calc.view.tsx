import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import UsePageTitle from "../../Core/Hooks/UsePageTitle"


function useQuery(){
    return new URLSearchParams(useLocation().search)
}


export default function CalcView(){
    UsePageTitle('x + y Calculator')
    
    const params = useParams<{ a: string, b: string }>()
    const query = useQuery()

    useEffect(() => {
        console.log(query.get('operation'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div>
        <h1>SOMAR</h1>
        <h1>Soma: { Number(params.a) + Number(params.b) }</h1>
    </div>
}