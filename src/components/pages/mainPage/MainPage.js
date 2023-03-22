import {useNavigate} from "react-router-dom";

export default function MainPage() {

    const navigate = useNavigate();
    const goToBack = () => {
        navigate(-1)
    }
    return (

        <>
            <button onClick={goToBack}>back</button>
            <h1>Main Page</h1>

        </>
    )
}