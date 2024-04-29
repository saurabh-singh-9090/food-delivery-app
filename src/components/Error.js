import { useRouteError } from "react-router-dom";

const Error = () => {

    //below hook is used to get more information about the error
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Ooops!!!</h1>
            <h2>Something went wrong!!</h2>
            <h4>{err.status}: {err.statusText}</h4>
        </div>
    )
}

export default Error;