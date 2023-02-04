import { useRouteError } from "react-router-dom"

export default function Error() {
    const error:any = useRouteError();
    return (<div>
        <h1>Error</h1>
        <p>{error.statustext || error.message}</p>
    </div>
    );
}