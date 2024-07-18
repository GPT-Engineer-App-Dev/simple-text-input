
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(inputText);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Simple Text Input</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter some text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="max-w-md"
        />
        <Button type="submit">Submit</Button>
      </form>
      {displayText && (
        <p className="mt-4 text-lg">
          You entered: <span className="font-semibold">{displayText}</span>
        </p>
      )}
    </div>
  );
};

export default Index;
