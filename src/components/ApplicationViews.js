import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalForm } from "./animal/AnimalForm";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { EmployeeForm } from "./employee/EmployeeForm";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route
              exact
              path="/animals"
              render={(props) => <AnimalList {...props} />}
            />
            <Route
              path="/animals/create"
              render={(props) => <AnimalForm {...props} />}
            />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>
            <Route
            path="/employees"
            render={(props) => <EmployeeList {...props}/>} 
            />
            <Route
              path="/employees/create"
              render={(props) => <EmployeeForm {...props} />}
            />

            {/* New route for showing employee details */}
            <Route
              path="/employees/:employeeId(\d+)"
              render={(props) => <EmployeeDetail {...props} />}
            />
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};
