import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { EmployeeForm } from "./employee/EmployeeForm";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = (props) => {
  return (
    <>
      <AnimalProvider>
        <EmployeeProvider>
          <LocationProvider>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
              <LocationList />
            </Route>
            <Route
              path="/locations/:locationId(\d+)"
              render={(props) => {
                console.log("props", props);
                return <LocationDetail {...props} />;
              }}
            />
          </LocationProvider>
        </EmployeeProvider>
      </AnimalProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route
              exact
              path="/animals"
              render={(props) => (
                <>
                  <AnimalSearch />
                  <AnimalList {...props} />
                </>
              )}
            />
            <Route
              path="/animals/:animalId(\d+)"
              render={(props) => <AnimalDetail {...props} />}
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
              render={(props) => <EmployeeList {...props} />}
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
