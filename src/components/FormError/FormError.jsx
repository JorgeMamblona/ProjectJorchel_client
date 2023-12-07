import { Alert } from "react-bootstrap"
import './FormError.css'

const FormError = ({ children }) => {
    return (
        <>
            <Alert className="my-alert" variant="danger">
                {children}
            </Alert>
        </>
    )
}

export default FormError