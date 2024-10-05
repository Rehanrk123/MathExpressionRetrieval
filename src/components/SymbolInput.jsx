import React from "react";

const symbols = [
  { label: "π (Pi)", latex: "\\pi" },
  { label: "∫ (Integral)", latex: "\\int" },
  { label: "∑ (Summation)", latex: "\\sum" },
  { label: "½ (Half)", latex: "\\frac{1}{2}" },
  { label: "√ (Square Root)", latex: "\\sqrt{x}" },
  { label: "∞ (Infinity)", latex: "\\infty" },
  { label: "α (Alpha)", latex: "\\alpha" },
  { label: "β (Beta)", latex: "\\beta" },
  { label: "γ (Gamma)", latex: "\\gamma" },
  { label: "θ (Theta)", latex: "\\theta" },
  { label: "∀ (For All)", latex: "\\forall" },
  { label: "∃ (Exists)", latex: "\\exists" },
  { label: "≤ (Less Than or Equal)", latex: "\\leq" },
  { label: "≥ (Greater Than or Equal)", latex: "\\geq" },
  { label: "≠ (Not Equal)", latex: "\\neq" },
  { label: "≈ (Approximately)", latex: "\\approx" },
  { label: "→ (Arrow)", latex: "\\to" },
  { label: "→ (Right Arrow)", latex: "\\rightarrow" },
  { label: "← (Left Arrow)", latex: "\\leftarrow" },
  { label: "⋯ (Dots)", latex: "\\cdots" },
  { label: "± (Plus-Minus)", latex: "\\pm" },
  { label: "× (Multiplication)", latex: "\\times" },
  { label: "÷ (Division)", latex: "\\div" },
  { label: "∪ (Union)", latex: "\\cup" },
  { label: "∩ (Intersection)", latex: "\\cap" },
  { label: "lim (Limit)", latex: "\\lim" },
  { label: "sin (Sine)", latex: "\\sin" },
  { label: "cos (Cosine)", latex: "\\cos" },
  { label: "tan (Tangent)", latex: "\\tan" },
  { label: "log (Logarithm)", latex: "\\log" },
];

const SymbolInput = ({ setLatex }) => {
  const handleSymbolClick = (latex) => {
    setLatex((prevLatex) => prevLatex + latex + " "); // Append symbol to existing input
  };

  return (
    <div className="symbol-input-container">
      <div className="symbol-button-container">
        {symbols.map((symbol, index) => (
          <button
            key={index}
            onClick={() => handleSymbolClick(symbol.latex)}
            className="symbol-button"
          >
            {symbol.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SymbolInput;
