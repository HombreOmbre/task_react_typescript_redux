import React, { FormEvent, useRef } from "react";
import classes from './SearchInput.module.css';

export const SearchInput: React.FC<{
    setSearchInput: (value: string) => void,
    setSearchType: (value: string) => void
}> = ({ setSearchInput, setSearchType }) => {
    const inputSearch = useRef<HTMLInputElement>(null);
    const searchType = useRef<HTMLSelectElement>(null);

    const handleSelectInput = (): void => {
        const selectedType: string = searchType.current!.value;

        if (selectedType.trim().length === 0) {
            setSearchInput('');
        }

        setSearchType(selectedType);
    }

    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();

        const enteredVal: string = inputSearch.current!.value;

        if (enteredVal.trim().length === 0) {
            setSearchInput('');
        }

        setSearchInput(enteredVal.trim().toLowerCase());
        inputSearch.current!.value = '';
    }

    const selectVal: string | undefined = searchType.current?.value;

    return (
        <div className={classes.searchContainer}>
            <form className={classes.formContainer} onSubmit={submitHandler}>
                <select className={classes.selectInput} name='search-column' defaultValue='' ref={searchType} onChange={handleSelectInput}>
                    <option value=''>Choose column for search</option>
                    <option value='name'>Name</option>
                    <option value='username'>User name</option>
                    <option value='email'>E-mail</option>
                    <option value='phone'>Phone</option>
                </select>
                <input className={classes.searchInput} type='text' name='search' defaultValue='' ref={inputSearch} placeholder={'Search in ' + selectVal} />
                <button className={classes.submitBtn} type="submit">Search</button>
            </form>
        </div>
    );
}