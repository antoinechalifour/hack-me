import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { VStack } from "../../components/VStack";
import { addNewDesk } from "../desksSlice";
import { DeskForm } from "./DeskForm";

interface AddNewDeskViewProps {
  onNewDesk: (name: string, numberOfEmployees: number) => void;
}

export const AddNewDeskView = ({ onNewDesk }: AddNewDeskViewProps) => {
  return (
    <VStack>
      <Link to="/desks">Show all desks</Link>

      <DeskForm onNewDesk={onNewDesk} />
    </VStack>
  );
};

export const AddNewDeskViewContainer = connect(null, {
  onNewDesk: addNewDesk,
})(AddNewDeskView);
