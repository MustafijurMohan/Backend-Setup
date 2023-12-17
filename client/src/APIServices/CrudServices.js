import axios from 'axios'


// Create Product

export const Create = (ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice) => {
    const URL = '/api/v1/create-product'
    const PostBody = {
        ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice
    }

        return axios.post(URL, PostBody)
        .then((res) => {
            if(res.status === 201) {
                return true
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err)
            return false
        })
}

// Read Product

export const Read = () => {
    const URL = 'api/v1/read-product'

    return axios.get(URL)
        .then((res) => {
            if (res.status === 200) {
                return res.data['data']
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err)
            return false
        })
}

// Read Product By ID

export const ReadByID = (id) => {
    const URL = '/api/v1/read-by-id/'+id

    return axios.get(URL)
        .then((res) => {
            if (res.status === 200) {
                return res.data['data']
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err)
            return false
        })
}

// Update Product

export const Update = (id, ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice) => {
    const URL = '/api/v1/update-product/'+id
    const PostBody = {
        ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice
    }

        return axios.post(URL, PostBody)
        .then((res) => {
            if(res.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err)
            return false
        })
}

// Delete Product
export const Delete = (id) => {
    const URL = '/api/v1/delete-product/'+id

    return axios.delete(URL)
        .then((res) => {
            if(res.status === 200) {
                return true
            }else {
                return false
            }
        })
        .catch((err) => {
            console.log(err)
            return false
        })
}