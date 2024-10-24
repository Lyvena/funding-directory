import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const LoginForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Attempted",
      description: "This is a demo. In a real app, this would log you in.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input type="email" placeholder="Email" required />
      </div>
      <div className="space-y-2">
        <Input type="password" placeholder="Password" required />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};