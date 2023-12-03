import { addDoc, collection} from "firebase/firestore";
import { db } from "../FireBase";
import { Add, Delete, EDITEMP, Update } from "../ActionType/Actiontype";


export const EmpActionAsync = (data)=>{

    return async dispatch =>{
        // await setDoc(doc(db, "students", "2"), data); setDoc
        await addDoc(collection(db, "employees"), data);
        dispatch(EmpAction(data))
    }
}

const EmpAction = (Data) =>{

    console.log(Data);
    return{
        type : Add,
        payload : Data
    }

}

export const singleEmp = (data,index) =>{
    

    console.log("sd",data, index);
    return{
        type : EDITEMP,
        payload : {data,index}
    }
}

export const update = (data,index) =>{

    return{
        type: Update,
        payload: {data,index}
    }
}

export const delete_emp = (id) =>{

    return{
        type: Delete,
        payload: id
    }
}