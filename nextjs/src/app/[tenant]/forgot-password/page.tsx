import { Card } from "@/components/card";
import { submit } from "./actions";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { FormField } from "@/components/form-field";

export default function ResetPage() {
  return (
    <Card title="Reset Password" goBack>
      <form action={submit}>
        <FormField label="Email">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </FormField>
        <Button type="submit">Send Reset Link</Button>
      </form>
    </Card>
  );
}
