import React from "react";
import { Route, Switch } from "react-router-dom";

import { PageLayout } from "../components/PageLayout";
import { AddNewDeskViewContainer } from "./components/AddNewDeskView";
import { AllDesksViewContainer } from "./components/AllDesksView";

const DesksPage = () => (
  <PageLayout title="Desks">
    <Switch>
      <Route path="/desks/add" component={AddNewDeskViewContainer} />
      <Route component={AllDesksViewContainer} />
    </Switch>
  </PageLayout>
);

export default DesksPage;
