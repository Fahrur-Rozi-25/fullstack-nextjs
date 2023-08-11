'use client'
import { useState , SyntheticEvent } from "react"
import type {Brand} from "@prisma/client"
import { useRouter } from "next/navigation"
import axios from "axios"

type Product = {
    id: number;
    title: string;
    price: number;
    BrandId: number;
}

const UpdateProduct = ({brands , product}: {brands: Brand[]; product: Product}) => {
    const [title , setTitle] = useState(product.title);
    const [price , setPrice] = useState(product.price);
    const [brand , setBrand] = useState(product.BrandId);
    const [isOpen , setIsOpen] = useState(false);

    const router = useRouter()

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    const handleSubmit = async (e:SyntheticEvent) => {
        e.preventDefault();
        await axios.post('/api/products' , {
            title: title,
            price: Number(price),
            BrandId: Number(brand)
        })
        router.refresh()
        setIsOpen(false);
    }
  return (
    <div>

    <button className="btn btn-info btn-sm" onClick={handleModal}>Edit</button>


      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Product</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-control w-full">
                    <label htmlFor="" className="label font-bold">Nama Product</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="" id="" className="input input-bordered" placeholder="Nama Product"/>
                </div>
                <div className="form-control w-full">
                    <label htmlFor="" className="label font-bold">Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(Number(e.target.value))} name="" id="" className="input input-bordered" placeholder="Masukkan Harga"/>
                </div>
                <div className="form-control w-full">
                    <label htmlFor="" className="label font-bold">Brand</label>
                    <select value={brand} onChange={(e) => setBrand(Number(e.target.value))} name="" id="" className="select select-bordered">
                        {brands.map((brand) => (
                            <option value={brand.id} key={brand.id}>{brand.name}</option>
                        ))}
                    </select>
                </div>
                <div className="modal-action">
                    <button type="button" className="btn" onClick={handleModal}>Close</button>
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct
