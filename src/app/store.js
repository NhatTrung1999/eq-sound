import { configureStore} from '@reduxjs/toolkit'
import eqReducer from '../features/eqSound/eqSlice'

export default configureStore({
    reducer: {
        eq: eqReducer
    }
})