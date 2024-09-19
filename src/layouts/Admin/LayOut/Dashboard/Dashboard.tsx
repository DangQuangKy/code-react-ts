import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../../../types/product.type";
import { Button } from "@mui/material";

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="dashboard">
      <table>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Ảnh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}{" "}
              </td>
              <td>{product.description}</td>
              <td>
                <img src={product.image} alt="" className="w-16 h-16" />
              </td>
              <td>
                <Button variant="contained" color="success">
                  Edit
                </Button>
                <Button variant="outlined" color="error">
                  Del
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
