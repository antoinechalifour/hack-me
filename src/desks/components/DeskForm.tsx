import React from "react";
import { useForm } from "react-hook-form";

import { Card } from "../../components/Card";
import { VStack } from "../../components/VStack";
import { Label } from "../../components/form/Label";
import { Input } from "../../components/form/Input";
import { ErrorMessage } from "../../components/form/ErrorMessage";
import { Button } from "../../components/Button";

interface FormData {
  name: string;
  numberOfEmployees: string;
}

interface DeskFormProps {
  initialState?: FormData;
  onNewDesk: (name: string, numberOfEmployees: number) => void;
}

export const DeskForm = ({ initialState, onNewDesk }: DeskFormProps) => {
  const { handleSubmit, register, formState } = useForm<FormData>({
    defaultValues: {
      name: initialState?.name,
      numberOfEmployees: initialState?.numberOfEmployees,
    },
  });
  const onSubmit = (data: FormData) =>
    onNewDesk(data.name, Number(data.numberOfEmployees));

  return (
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
  );
};
