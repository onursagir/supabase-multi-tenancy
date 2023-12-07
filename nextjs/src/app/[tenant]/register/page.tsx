import { Card } from "@/components/card";
import { submit } from "./actions";
import { FormField } from "@/components/form-field";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function RegisterPage() {
  return (
    <Card title="Register" goBack>
      <form action={submit}>
        <FormField label="Email">
          <Input id="email" type="email" name="email" />
        </FormField>
        <FormField label="Password">
          <Input id="password" type="password" name="password" />
        </FormField>
        <Button type="submit">Register</Button>
      </form>
    </Card>
  );
}
