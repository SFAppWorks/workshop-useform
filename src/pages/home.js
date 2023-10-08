import Input from "@/components/input";
import RandomTable from "@/containers/random-table";
import {useState} from "react";

const HomePage = () => {
    const [searchValue, setSearchValue] = useState('')
    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearchValue(value)
    };

    const doSearch = () => {
        console.log('Searched for:', searchValue)
    }

    return (
        <div>
            <h1>Welcome SFAW</h1>
            <Input type={'text'} label={'Search'} name={'search'} onChange={handleSearchChange} stateValue={searchValue} />
            <button type="button" onClick={doSearch}>Search</button>
            <RandomTable />
        </div>
    );
};

export default HomePage;