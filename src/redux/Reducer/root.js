import {combineReducers, legacy_createStore } from 'redux'
import CategoryReducer  from './CategoryReducer';
import ProductReducer from './productReducer';
import ClickBtnCateReducer from './ClickBtnCateReducer'
import ModelReducer from './ModelReducer';

const RootReducer = combineReducers({
    // danh sách state lưu trữ trên store
    products:ProductReducer,
    categories : CategoryReducer,
    // trên nut nhấn nút áo thì dispatch type lưu lên store lưu lại trên biên clickBtnCate gì thì truyền xuống = action sang category và nó  check xem nếu cùng loại thì show ra
    clickBtnCate: ClickBtnCateReducer ,
    model: ModelReducer,

})
export const store = legacy_createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
