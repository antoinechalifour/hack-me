import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { Card } from "../../components/Card";
import { VStack } from "../../components/VStack";
import { Label } from "../../components/form/Label";
import { Input } from "../../components/form/Input";
import { ErrorMessage } from "../../components/form/ErrorMessage";
import { Button } from "../../components/Button";
import { addNewDesk } from "../desksSlice";

interface FormData {
  name: string;
  numberOfEmployees: string;
}

interface AddNewDeskViewProps {
  onNewDesk: (name: string, numberOfEmployees: number) => void;
}

export const AddNewDeskView = ({ onNewDesk }: AddNewDeskViewProps) => {
  const { handleSubmit, register, formState } = useForm<FormData>();
  const onSubmit = (data: FormData) =>
    onNewDesk(data.name, Number(data.numberOfEmployees));

  return (
    <VStack>
      <Link to="/desks">Show all desks</Link>

      <Card as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <div>
            <Label htmlFor="desk-name">Desk name</Label>
            <Input
              type="text"
              id="desk-name"
              placeholder="Ex: super desk"
              {...register("name", { required: true })}
            />
            {formState.errors.name && (
              <ErrorMessage>The desk name is required.</ErrorMessage>
            )}
          </div>

          <div>
            <Label htmlFor="number-of-employees">Number of employees</Label>
            <Input
              type="number"
              id="number-of-employees"
              {...register("numberOfEmployees", {
                required: true,
                min: 0,
                max: 100,
              })}
            />
            {formState.errors.numberOfEmployees && (
              <ErrorMessage>The number of employees is required.</ErrorMessage>
            )}
          </div>

          <div>
            <Button type="submit">Add desk</Button>
          </div>
        </VStack>
      </Card>
    </VStack>
  );
};

export const AddNewDeskViewContainer = connect(null, {
  onNewDesk: addNewDesk,
})(AddNewDeskView);
