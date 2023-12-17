import toast from "react-hot-toast"


class ValidationHelper {
    isEmpty(value) {
        if(value.length === 0){
            return true
        } else {
            return false
        }
    }

    SuccessToast(msg) {
        toast.success(msg)
    }

    ErrorToast(msg) {
        toast.error(msg)
    }

}

export const {isEmpty, SuccessToast, ErrorToast} = new ValidationHelper()
