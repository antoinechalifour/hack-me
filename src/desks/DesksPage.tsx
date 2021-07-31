import React from "react";
import { Route, Switch } from "react-router-dom";

import { PageLayout } from "../components/PageLayout";
import { AddNewDeskViewContainer } from "./components/AddNewDeskView";
import { AllDesksViewContainer } from "./components/AllDesksView";
import { EditDeskViewContainer } from "./components/EditDeskView";

const DesksPage = () => (
  <PageLayout title="Desks">
    <Switch>
      <Route path="/desks/add" component={AddNewDeskViewContainer} />
      <Route
        path="/desks/:id"
        render={({ match }) => (
          <EditDeskViewContainer deskId={match.params.id} />
        )}
      />
      <Route component={AllDesksViewContainer} />
    </Switch>
  </PageLayout>
);

export default DesksPage;
