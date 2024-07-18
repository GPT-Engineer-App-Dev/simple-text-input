
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [image, setImage] = useState(null);
  const [imageInfo, setImageInfo] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(inputText);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setImageInfo({
          name: file.name,
          size: `${(file.size / 1024).toFixed(2)} KB`,
          type: file.type,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Simple Text Input and Image Upload</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="text-input">Enter some text</Label>
          <Input
            id="text-input"
            type="text"
            placeholder="Enter some text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="max-w-md"
          />
        </div>
        <Button type="submit">Submit Text</Button>
      </form>

      {displayText && (
        <p className="mt-4 text-lg mb-8">
          You entered: <span className="font-semibold">{displayText}</span>
        </p>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Image Upload</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          ref={fileInputRef}
        />
        <Button onClick={triggerFileInput}>Upload Image</Button>

        {image && (
          <div className="mt-4">
            <img src={image} alt="Uploaded" className="max-w-md mb-4" />
            <h3 className="text-lg font-semibold">Image Information:</h3>
            <p>Name: {imageInfo.name}</p>
            <p>Size: {imageInfo.size}</p>
            <p>Type: {imageInfo.type}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
