import React, { useState } from "react";
import { useAppSelector } from "../store/store.ts";
import { peopleAllData, PeopleDataState, PersonalInfo } from "../store/slices/peopleData-slices.ts";
import classes from './UserManagementTable.module.css';
import { SearchInput } from "./SearchInput.tsx";
import {LoadingComponent} from "./LoadingComponent.tsx";
import {ErrorComponent} from "./ErrorComponent.tsx";

const filterPeopleData = (people: PersonalInfo[], searchType: string, searchInput: string): PersonalInfo[] => {
    const newPeopleArr: PersonalInfo[] = [];

    if (searchType.length === 0) {
        return people;
    }

    if (searchInput.length === 0) {
        return people;
    }

    for (const person of people) {
        if (typeof person[searchType] === 'string' ) {
            if (person[searchType].toLowerCase().includes(searchInput)) {
                newPeopleArr.push(person);
            }
        }
    }

    return newPeopleArr;
}


export const UserManagementTable: React.FC = () => {
    const { peopleData, isLoading, isError }: PeopleDataState = useAppSelector(peopleAllData);
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchType, setSearchType] = useState<string>("");

    if (isLoading) {
        return <LoadingComponent />;
    }

    if (isError) {
        return <ErrorComponent />;
    }

    return (
        <div className={classes.tableContainer}>
            <SearchInput
                setSearchInput={setSearchInput}
                setSearchType={setSearchType}
            />
            <table>
                <thead className={classes.tableHead}>
                <tr>
                    <th className={classes.cell}>name</th>
                    <th className={classes.cell}>username</th>
                    <th className={classes.cell}>email</th>
                    <th className={classes.cell}>phone</th>
                </tr>
                </thead>
                <tbody className={classes.tableBody}>
                {
                    filterPeopleData(peopleData, searchType, searchInput).map((person: PersonalInfo) => (
                        <tr key={person.id} className={classes.tableRow}>
                            <td className={classes.cell}>{person.name}</td>
                            <td className={classes.cell}>{person.username}</td>
                            <td className={classes.cell}>{person.email.toLowerCase()}</td>
                            <td className={classes.cell}>{person.phone}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>);
}