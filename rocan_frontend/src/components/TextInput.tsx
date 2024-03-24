import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="text-input"
      />
      <p>Enter Text: {text}</p>
    </div>
  );
};

export default TextInput;
