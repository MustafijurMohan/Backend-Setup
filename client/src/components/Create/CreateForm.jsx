import React, { useRef } from 'react'
import { ErrorToast, SuccessToast, isEmpty } from '../../helper/ValidationHelper'
import { Create } from '../../APIServices/CrudServices'
import FullScreenLoader from '../Common/FullScreenLoader'
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {


    let ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice, Loader = useRef()
    const navigate = useNavigate()


    const SaveData = () => {
        let Product_Name = ProductName.value
        let Product_Code = ProductCode.value
        let Product_Img = Img.value
        let Unit_Price = UnitPrice.value
        let Product_Qty = Qty.value
        let Total_Price = TotalPrice.value

        if (isEmpty(Product_Name)) {
            ErrorToast('Product Name Required.')
        }
        else if(isEmpty(Product_Code)) {
            ErrorToast('Product Code Required.')
        }
        else if(isEmpty(Product_Img)) {
            ErrorToast('Product Image Required.')
        }
        else if(isEmpty(Unit_Price)) {
            ErrorToast('Product Unit Price Required.')
        }
        else if(isEmpty(Product_Qty)) {
            ErrorToast('Product Quantity Required.')
        }
        else if(isEmpty(Total_Price)) {
            ErrorToast('Product Total Price Required.')
        }
        else {
            Loader.classList.remove('d-none')
            Create(Product_Name, Product_Code, Product_Img, Unit_Price, Product_Qty, Total_Price)
            .then((res) => {
                Loader.classList.add('d-none')
                if(res === true) {
                    SuccessToast('Data Save Successfully.')
                    navigate('/')
                } else {
                    ErrorToast('Request Fail Try Again.')
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }



  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-2">
                    <label htmlFor="">Product Name</label>
                    <input ref={(input) =>ProductName=input} className='form-control' type="text" />
                </div>
                <div className="col-md-4 p-2">
                    <label htmlFor="">Product Code</label>
                    <input ref={(input) =>ProductCode=input} className='form-control' type="text" />
                </div>
                <div className="col-md-4 p-2">
                    <label htmlFor="">Image</label>
                    <input ref={(input) =>Img=input} className='form-control' type="text" />
                </div>
                <div className="col-md-4 p-2">
                    <label htmlFor="">Unit Price</label>
                    <input ref={(input) =>UnitPrice=input} className='form-control' type="text" />
                </div>
                <div className="col-md-4 p-2">
                    <label htmlFor="">Quantity</label>
                    <input ref={(input) =>Qty=input} className='form-control' type="text" />
                </div>
                <div className="col-md-4 p-2">
                    <label htmlFor="">Total Price</label>
                    <input ref={(input) =>TotalPrice=input} className='form-control' type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 p-2">
                    <button onClick={SaveData} className='btn btn-primary w-100' >Save</button>
                </div>
            </div>
        </div>
        <div className='d-none' ref={(div) => Loader=div} >
            <FullScreenLoader />
        </div>
    </>
  )
}

export default CreateForm