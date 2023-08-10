import { PrismaClient } from "@prisma/client"
import AddProduct from "./addProduct";
const prisma = new PrismaClient();

const getProducts = async () => {
    const response = await prisma.product.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        BrandId: true,
        brand: true
      }
    });
    return response;
}

const getBrands =async () => {
  const res = await prisma.brand.findMany();
  return res;
  
}


const Products = async () => {
    const [products , Brand] = await Promise.all([
      getProducts(),
      getBrands()
    ])
    
  return (
    <div>


    <div className="mb-2">
      <AddProduct brands={Brand}/>
    </div>

      <table className="table w-full">
        <thead>
            <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th className="text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
          {products.map((product , index)=> (
            <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.brand.name}</td>
                <td></td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products
