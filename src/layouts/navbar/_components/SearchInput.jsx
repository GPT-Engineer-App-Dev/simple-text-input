
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput = () => (
  <div className="relative">
    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    <Input
      type="search"
      placeholder="Search..."
      className="w-[200px] pl-8 md:w-[300px]"
    />
  </div>
);
