import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    async function register(e) {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3001/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            })
            const data = await response.json()

            if (response.ok) {
                setName("")
                setEmail("")
                setPassword("")
                navigate("/login")
            } else {
                setMessage(data.message)
            }
        } catch (error) {
            alert("Szerverhiba!")
        }
    }
    const navigate = useNavigate()
    return (
        <>
            <h1>Regisztráció</h1>
            {message && <p className="text-danger">{message}</p>}
            <Form onSubmit={register}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Név</Form.Label>
                <Form.Control type="text" placeholder="Teljes név" value={name} onChange={(e) => setName(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email cím</Form.Label>
                <Form.Control type="email" placeholder="Email cím" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Jelszó</Form.Label>
                <Form.Control type="password" placeholder="Jelszó" value={password} minLength={8} onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Regisztráció
            </Button>
        </Form>
        </>
    )
}