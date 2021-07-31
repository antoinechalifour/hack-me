import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { AppState } from "../../store";
import { deskById, requestDesk, updateDeskInformation } from "../desksSlice";
import { Desk } from "../Desk";
import { DeskForm } from "./DeskForm";

interface EditDeskViewProps {
  deskId: string;
  desk: Desk | undefined;
  requestDesk: (id: string) => void;
  onChange: (desk: Desk) => void;
}

const toFormData = (desk: Desk) => ({
  name: desk.name,
  numberOfEmployees: desk.numberOfEmployees.toString(),
});

const EditDeskView = ({
  deskId,
  desk,
  requestDesk,
  onChange,
}: EditDeskViewProps) => {
  const onNewDesk = useCallback(
    (name: string, numberOfEmployees: number) => {
      onChange({
        id: deskId,
        name,
        numberOfEmployees,
      });
    },
    [deskId, onChange]
  );

  useEffect(() => {
    if (!desk) requestDesk(deskId);
  }, [desk, deskId, requestDesk]);

  if (!desk) return <p>Loading...</p>;

  return <DeskForm initialState={toFormData(desk)} onNewDesk={onNewDesk} />;
};

const mapState = (state: AppState, props: { deskId: string }) => ({
  desk: deskById(state, props.deskId),
});

const mapDispatch = {
  onChange: updateDeskInformation,
  requestDesk,
};

export const EditDeskViewContainer = connect(
  mapState,
  mapDispatch
)(EditDeskView);
