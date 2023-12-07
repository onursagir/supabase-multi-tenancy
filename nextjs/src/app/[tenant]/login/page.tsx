import { Card } from "@/components/card";
import { submit } from "./actions";
import { FormField } from "@/components/form-field";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Link } from "@/components/link";

export default function LoginPage() {
  return (
    <Card title="Login">
      <form action={submit}>
        <FormField label="Email">
          <Input id="email" type="email" name="email" />
        </FormField>
        <FormField label="Password">
          <Input id="password" type="password" name="password" />
        </FormField>
        <div className="mb-4">
          <Link href="/forgot-password">Forgot password?</Link>
        </div>
        <Button type="submit">Login</Button>
        <div className="mt-6 text-center">
          <Link href="/register">Register</Link>
        </div>
      </form>
    </Card>
  );
}
