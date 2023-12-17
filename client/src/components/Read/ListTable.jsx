import React, { useEffect, useState } from 'react'
import { Delete, Read } from '../../APIServices/CrudServices'
import FullScreenLoader from '../Common/FullScreenLoader'
import { ErrorToast, SuccessToast } from '../../helper/ValidationHelper'
import { useNavigate } from 'react-router-dom'

const ListTable = () => {

  const [dataList, setDataList] = useState([])
  const navigate = useNavigate()
  
    useEffect(() => {
      Read()
      .then((res) => {
        setDataList(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }, [])
  
      // Product Delete Requiest
      const DeleteItem = (id) => {
        Delete(id)
        .then((res) => {
          if (res === true) {
            SuccessToast('Data Delete Successfull.')
            navigate(0)
          } else {
            ErrorToast('Request Fail Try Again.')
          }
        })
      }

        // Product Update Requiest
      const UpdateItem = (id) => {
        navigate('/update/'+id)
      }


    if (dataList && dataList.length > 0) {
      return (
        <>
          <table className='table table-dark table-hover'>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Code</th>
                  <th>Image</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                  {
                    dataList.map((item, i) => {
                      return (
                        <tr key={i.toString()}>
                          <td>{item.ProductName}</td>
                          <td>{item.ProductCode}</td>
                          <td><img className='list-img' src={item.Img} alt="" /></td>
                          <td>{item.UnitPrice}</td>
                          <td>{item.Qty}</td>
                          <td>{item.TotalPrice}</td>
                          <td>
                            <button onClick={UpdateItem.bind(this, item._id)} className='btn btn-light mx-1' >Update</button>
                            <button onClick={DeleteItem.bind(this, item._id)} className='btn btn-info mx-1' >Delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
          </table>
        </>
      )
    } else {
      <div>
        <FullScreenLoader />
      </div>
    }

  
}

export default ListTable