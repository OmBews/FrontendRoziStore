
// import Transaction from "@/app/api/database/models/transaction";
import axios from "axios";

export const OrderDigiflazz = async (encryptedData: string, password: string , transactionID:any): Promise<any> => {

    // const url = `/api/ordersDigiflazz/${urls}`;
    const url = `https://rozistorebe.tokorozy.my.id/senddataordermmmsss`;

    const data = {
        data: encryptedData ,
        validation: "01_ROZISTORE_VALIDATION_CODE0899",
    };
    console.log(data);
    
    const passwords = "250106"

    // const trx = await Transaction.findOne({transaction_id : transactionID})
    
    if (password === passwords) {
        try {
            const response = await axios.post(url, data);
            const resData = response.data
            return resData;
        } catch (error:any) {
            return { error: "error", message: error };
        }
        
    } else {
        return "PASSWORD SALAH"
    }
};
