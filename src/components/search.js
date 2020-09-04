import React, {useContext} from "react";
import StoreContext from "../store-context";
import { changeSearchText } from '../actions';


export default function Search ({text}) {
    const store = useContext(StoreContext);

    const onSearch = (event) => {
        store.dispatch(changeSearchText(event.target.value));
        console.log(store.getState());
    };

    return (
        <input className='form-control search-input'
               placeholder='Search...'
               onChange={(event) => {onSearch(event)}}
               value={store.getState().searchText}
        />
    );
}