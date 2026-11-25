import { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Products() {
    const [products, setProducts] = useState([])
    const [selectedId, setSelectId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    //termék lekérése
    async function getProducts() {
        try {
            const response = await fetch("http://localhost:3001/api/products")

            console.log("GET státusz:", response.status)

            const data = await response.json()

            console.log("GET adatok:", data)

            if (response.ok) {
                setProducts(data)
            } else {
                console.error("Lekérési hiba:", data)
            }

        } catch (error) {
            console.error("GET hiba:", error)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    //Termék kiválasztása
    function selectProduct(id) {
        setSelectId(id)
        const product = products.find(p => String(p.id) === id)
        if (product) {
            setName(product.name)
            setPrice(product.price)
            setDescription(product.description || "")
        } else {
            setName("")
            setPrice("")
            setDescription("")
        }
    }
    //Feltöltés vagy módosítás
    async function saveProduct(e) {
        e.preventDefault()

        const url = selectedId ? `http://localhost:3001/api/products/${selectedId}` :
            "http://localhost:3001/api/insertProducts"

        try {
            const response = await fetch(url, {
                method: selectedId ? "PUT" : "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
                body: JSON.stringify({ name, price, description })
            })
            const data = await response.json()
            alert(data.message)

            if (response.status === 401) {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                window.location.href = "/login"
                return
            }
            if (response.ok) {
                selectProduct("")
                await getProducts()
            }
        } catch (error) {
            alert("Szerverhiba!")
        }
    }
    //Termék törlése
    async function deleteProducts() {
        if (!window.confirm("Biztosan törlöd a terméket?")) return
        try {
            const response = await fetch(`http://localhost:3001/api/products/${selectedId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            const data = await response.json()
            alert(data.message)

            if (response.status === 401) {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                window.location.href = "/login"
                return
            }
            if (response.ok) {
                selectProduct("")
                getProducts()
            }
        } catch (error) {
            alert("Szerverhiba!")
        }
    }
    return (
        <div className="container mt-4">
            <h1>Termékek</h1>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <h2>Termék kiválasztása</h2>
                    <Form.Select value={selectedId} onChange={e => selectProduct(e.target.value)}>
                        <option value="">Új termék</option>
                        {products.map(product => (<option key={product.id}
                            value={product.id}>{product.name}</option>))}
                    </Form.Select>
                </div>
                <div className="col-md-8">
                    <h2>{selectedId ? "Termék módosítása" : "Új termék hozzáadása"}</h2>
                    <Form onSubmit={saveProduct}>
                        <Form.Group className="mb-3">
                            <Form.Label>Termék neve</Form.Label>
                            <Form.Control value={name}
                                onChange={e => setName(e.target.value)} placeholder="Termék neve" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Ár</Form.Label>
                            <Form.Control type="number" min="1" step="1" value={price}
                                onChange={e => setPrice(e.target.value)} placeholder="Termék ára" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Leírás</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description}
                                onChange={e => setDescription(e.target.value)} placeholder="Termék leírása" required />
                        </Form.Group>

                        <Button type="submit" variant="primary">
                            {selectedId ? "Módosítás" : "Feltöltés"}
                        </Button>
                        {selectedId && (<Button type="button" variant="danger"
                            className="ms-2" onClick={deleteProducts}>Törlés</Button>)}
                    </Form>
                </div>
            </div>
        </div>
    )
}