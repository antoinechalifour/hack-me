import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";

const DesksPage = React.lazy(() => import("./desks/DesksPage"));
const EmployeesPage = React.lazy(() => import("./employees/EmployeesPage"));
const CalendarPage = React.lazy(() => import("./calendar/CalendarPage"));

export const App = () => (
  <AppLayout>
    <React.Suspense fallback={null}>
      <Switch>
        <Route path="/desks" render={() => <DesksPage />} />
        <Route path="/employees" render={() => <EmployeesPage />} />
        <Route path="/calendar" render={() => <CalendarPage />} />
        <Redirect to="/desks" />
      </Switch>
    </React.Suspense>
  </AppLayout>
);
