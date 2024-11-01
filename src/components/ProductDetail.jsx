import { Link, useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();

    return (
        <div>
            <Link to="/products" className="underline">back to product list</Link>
            <h1 className="text-3xl font-bold underline">
                Product Details
            </h1>
            <p>Details for Product ID: {id}</p>
        </div>
    );
}

export default ProductDetail

// useParams จะไปดูว่าเราอยู่ที่ URL ไหน