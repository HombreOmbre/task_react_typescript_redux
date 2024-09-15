import React, { useEffect } from "react";
import { useAppDispatch } from './store/store.ts';
import { fetchPeopleData } from "./store/actions/peopleData-actions.ts";
import { UserManagementTable } from "./components/UserManagementTable.tsx";
import classes from "./App.module.css";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPeopleData());
  }, [dispatch]);

  return (
      <div className={classes.mainContainer}>
        <UserManagementTable />
      </div>
  );
}

export default App
