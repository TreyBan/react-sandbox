import React, {useContext} from "react";
import StoreContext from "../store-context";
import ComponentsListItem from "./components-list-item";

export default function ComponentsList () {
    const store = useContext(StoreContext);

    const buildList = (data) => {
        return data.map((el) => {
            return <ComponentsListItem
                key={el.id}
                name={el.name}
                description={el.description}
                code={el.code}
                img={el.img}/>
        });
    };

    const Search = (data, text) => {
        if (text.length === 0) return data;

        return data.filter((el) => {
            return el.name.toLowerCase().indexOf(
                text.toLowerCase()) > -1;
        });
    };

    return (
        <div className='row'>
            {buildList(
                Search(store.getState().componentsData, store.getState().searchText)
            )}
        </div>
    );
}