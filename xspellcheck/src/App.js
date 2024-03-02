import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({ inputText: "", suggestedText: "" });
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setState((prev) => {
      return { ...prev, inputText: text };
    });

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setState((prev) => {
      return { ...prev, suggestedText: firstCorrection || "" };
    });
  };

  return (
    <>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={state.inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {state.suggestedText && (
        <p>
          Did you mean: <strong>{state.suggestedText}</strong>?
        </p>
      )}
    </>
  );
}

export default App;
