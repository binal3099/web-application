import { Add, Delete, EDITEMP, Update } from "../ActionType/Actiontype";


const initialstate = ({
    employees : [],
    employee : null,
    islord : false,
    isIndex : null
})

const ReducerData = (state = initialstate, action) => {

    // console.log("Action type", action.type);

    switch(action.type){

        case Add :
            return {
                ...state,
                employees : ([...state.employees, action.payload])
            }

        case EDITEMP :
            return{
                ...state,
                employee : action.payload.data,
                isIndex : action.payload.index
            }

        case Update:

            let stu = state.employees;

            stu[action.payload.index] = action.payload.data;

            return{
                ...state,
                employees: stu,
                employee: null,
                isIndex: null
            }
            
        case Delete:

            let de_emp = state.employees;
            let del_emp = de_emp.filter((del)=>{
                return(
                    del.id != action.payload
                )
            })

            return{
                ...state,
                employees: del_emp
            }

        default : 
        return state
    }
}

export default ReducerData;