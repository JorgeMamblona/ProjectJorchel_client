import { useState } from "react"

const SignupForm = () => {

    const [signupData, setSignupData] = useState[{
        username: '',
        email: '',
        password: ''
    }]
    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }
    const handleFormSubmit = e => {
        e.preventDefault()
    }

    return (
        <h1>un form</h1>
    )
}

export default SignupForm