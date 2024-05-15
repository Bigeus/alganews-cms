import { Suspense, useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { ROUTES } from ".."
import GlobalStyles from "../Core/GlobalStyles"
import info from "../Core/Utils/info"

export default function App() {

    useEffect(() => {
        window.onunhandledrejection = function () {
            info({ description: 'Deu erro', title: 'Erro' })
        }
    }, [])

    return <Suspense>
        <RouterProvider router={ROUTES} />
        < GlobalStyles />
    </Suspense>
}