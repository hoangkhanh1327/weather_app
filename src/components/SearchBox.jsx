import { useContext } from 'react';
import QueryContext from '../contexts/QueryContext';
const SearchBox = () => {
    const { query, setQuery, handleSearch } = useContext(QueryContext);
    return (
        <input
            type="text"
            name=""
            id=""
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-2/3 lg:w-1/5 p-2 px-4  appearance-none bg-none border-none outline-none bg-rgba-light-0.5 rounded-2xl shadow text-[#313131] text-3xl transition-all duration-300 ease-in-out focus:bg-rgba-light-0.75 focus:w-full focus:ring-4 ring-blue-400 focus:lg:w-2/5"
            placeholder="Nhập tên thành phố ..."
            onKeyDown={handleSearch}
            autoFocus="disabled"
        />
    );
};

export default SearchBox;
