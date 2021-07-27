import React from "react";
import { Route, Switch } from "react-router-dom";

import { PageLayout } from "../components/PageLayout";
import { AddNewDeskView } from "./components/AddNewDeskView";
import { AllDesksView } from "./components/AllDesksView";

const DesksPage = () => (
  <PageLayout title="Desks">
    <Switch>
      <Route path="/desks/add" render={() => <AddNewDeskView />} />
      <Route render={() => <AllDesksView />} />
    </Switch>
  </PageLayout>
);

export default DesksPage;
