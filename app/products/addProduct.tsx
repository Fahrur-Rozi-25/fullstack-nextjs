'use client'
import { useState } from "react"
import type {Brand} from "@prisma/client"

const AddProduct = ({brands}: {brands: Brand[]}) => {
    const [isOpen , setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div>

    <button className="btn" onClick={handleModal}>Add New</button>


      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Product</h3>
            <form action="">
                <div className="form-control w-full">
                    <label htmlFor="" className="label font-bold">Nama Product</label>
                    <input type="text" name="" id="" className="input input-bordered" placeholder="Nama Product"/>
                </div>
                <div className="form-control w-full">
                    <label htmlFor="" className="label font-bold">Price</label>
                    <input type="text" name="" id="" className="input input-bordered" placeholder="Masukkan Harga"/>
                </div>
                <div className="form-control w-full">
                    <label htmlFor="" className="label font-bold">Brand</label>
                    <select name="" id="" className="select select-bordered">
                        <option value="" disabled>Pilih Brand</option>
                        {brands.map((brand) => (
                            <option value={brand.id} key={brand.id}>{brand.name}</option>
                        ))}
                    </select>
                </div>
                <div className="modal-action">
                    <button type="button" className="btn" onClick={handleModal}>Close</button>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
