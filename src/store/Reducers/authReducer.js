
const initialState = {
    isAuthenticated:false,
    user:{},
    usersList:[],
    menuList:[],
    customerList:[],
    orderList:[],
    ordersCount:0,
    menuStatus:[],
    customerCount:0,
    orderDiff:{}
}


export default function authReducer(state=initialState,action){
    switch(action.type){
        case "SET_CURRENT_USER":
        return {
            isAuthenticated: true,
            user:action.payload
        }
        case "LOGOUT":
            return {
                isAuthenticated: false,
                user:{}
            }
            case "SET_USERS":
                return {
                    ...state,
                    usersList:action.payload
                }
            case "SET_EMPLOYEE":
                return {
                    ...state,
                     usersList:action.payload
                }
                case "SET_MENU":
                return {
                    ...state,
                     menuList:action.payload
                }
                case "GET_MENU":
                return {
                    ...state,
                     menuList:action.payload
                }
                case "SET_CUSTOMER":
                return {
                    ...state,
                    customerList:action.payload
                }
                case "SET_ORDERS":
                return {
                    ...state,
                    orderList:action.payload
                }
                case "SET_ORDERS_COUNT":
                    return {
                        ...state,
                        ordersCount:action.payload
                    }
                case "SET_MENU_STATUS":
                   return {
                        ...state,
                            menuStatus:action.payload
                        }
                case "SET_CUSTOMER_COUNT"://SET_ORDER_DIFF
                     return {
                         ...state,
                         customerCount:action.payload
                        }
                 case "SET_ORDER_DIFF"://
                       return {
                         ...state,
                         orderDiff:action.payload
                        }
        default:
        return state;
    }
}

