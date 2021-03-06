
import ShopActionTypes from './shop.types';
import shopActionTypes from './shop.types';





const INITIAL_STATE = {
      collections : null,
      isFetching: false,
      errorMessage:undefined
};


const ShopReducer = ( state= INITIAL_STATE,action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching:true,
                errorMessage: undefined

            }
        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                collections: action.payload,
                isFetching: false

            };

         case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
             return{
                 ...state,
                 isFetching: false,
                 errorMessage: action.payload

             }   

        default:  
        return state;

    }
}

export default ShopReducer;