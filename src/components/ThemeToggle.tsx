import { FC } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Sun } from "lucide-react";
import { Button } from "./ui/button";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  return (
    <Button variant="ghost">
      <Sun className="text-primary" />
    </Button>
  );
};

export default ThemeToggle;
