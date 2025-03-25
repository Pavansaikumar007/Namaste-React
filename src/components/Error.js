import { useRouteError } from "react-router-dom"

export const Error = () => {
    const routeError = useRouteError();
    console.log(routeError)
    return(
        <div> 
            <h1>Error</h1>
            <h1>{routeError.status}</h1>
        </div>
    )
}