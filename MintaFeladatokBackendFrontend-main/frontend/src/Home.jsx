
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Home() {
    const [products, setProducts] = useState([]);

    // Termékek lekérése
    async function getProducts() {
        try {
            const response = await fetch(
                "http://localhost:3001/api/products"
            );

            console.log("GET státusz:", response.status);

            const data = await response.json();

            if (response.ok) {
                setProducts(data);
            } else {
                console.error("Lekérési hiba:", data);
            }

        } catch (error) {
            console.error("GET hiba:", error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-2">
                Termékeink
            </h1>

            <p className="text-center text-muted mb-5">
                Tekintsd meg kínálatunkat!
            </p>

            <div className="row g-4">
                {products.map(product => (
                    <div
                        className="col-12 col-md-6 col-lg-4"
                        key={product.id}
                    >
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body className="d-flex flex-column p-4">

                                <Card.Title className="fw-bold mb-3">
                                    {product.name}
                                </Card.Title>

                                <Card.Text className="text-muted">
                                    {product.description}
                                </Card.Text>

                                <div className="mt-auto pt-3">
                                    <hr />
                                    <h5 className="text-primary mb-0">
                                        {product.price} Ft
                                    </h5>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
