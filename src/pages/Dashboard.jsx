import React, { useRef,useState } from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import SymbolInput from "../components/SymbolInput"; // Adjust path if needed
import "../styles/Dashboard.css"; // Import the CSS from the styles folder
import { Document, Packer, Paragraph, ImageRun } from 'docx';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

const Dashboard = () => {
    const [filename, setFilename] = useState('');
    const outputRef = useRef();
    const exportToDocx = async () => {
        const mathContainer = outputRef.current; // Get the current output reference
    
        // Check if the output reference exists
        if (!mathContainer) {
            console.error("Output reference is null or undefined.");
            return;
        }
    
        // Capture the MathJax output as an image
        const canvas = await html2canvas(mathContainer);
        
        // Ensure the canvas is valid
        if (!canvas) {
            console.error("Failed to create canvas from the output.");
            return;
        }
    
        const dataUrl = canvas.toDataURL('image/png');
    
        // Ensure the data URL is valid
        if (!dataUrl) {
            console.error("Failed to create data URL from canvas.");
            return;
        }
    
        // Create a new Document
        const doc = new Document();
        
        // Fetch the image from the data URL
        const image = await fetch(dataUrl)
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.blob();
            })
            .then(blob => new ImageRun({
                data: blob,
                transformation: {
                    width: 600, // Adjust width as needed
                    height: 200 // Adjust height as needed
                }
            }))
            .catch(error => {
                console.error("Failed to fetch image blob:", error);
            });
    
        // Check if image is valid
        if (!image) {
            console.error("Image creation failed.");
            return;
        }
    
        // Add the image to the document
        doc.addSection({
            children: [
                new Paragraph({
                    children: [image]
                }),
            ],
        });
    
        // Save the document as .docx
        Packer.toBlob(doc).then((blob) => {
            saveAs(blob, 'math-expressions.docx');
        }).catch(error => {
            console.error("Failed to save the document:", error);
        });
    };
    





  const [latex, setLatex] = useState("");

  return (
    <MathJaxContext>

    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="symbol-input-area">
        <SymbolInput setLatex={setLatex} />
      </div>
      <div className="input-area">
        <h3>Input LaTeX:</h3>
        <textarea
          value={latex}
          onChange={(e) => setLatex(e.target.value)}
          placeholder="Type your LaTeX here..."
          className="latex-input"
        />
      </div>
      <h3>Rendered Expression:</h3>
      <div className="output-area">  
          <MathJax>
            {latex ? `\\[ ${latex} \\]` : ''}
          </MathJax>
      </div>
    </div>



    <div className="save-doc-container" style={{marginLeft:'20px', marginTop: '20px', display: 'flex', alignItems: 'center' }}>
    <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Enter filename"
          style={{
            padding: '10px',
            marginRight: '10px',
            border: '2px solid #4a90e2',
            borderRadius: '5px',
            width: '200px',
            backgroundColor: '#333',
            color: '#fff',
          }}
        />
        <button
          onClick={exportToDocx}
          style={{
            padding: '10px 15px',
            border: '2px solid #4a90e2',
            backgroundColor: '#4a90e2',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#4a90e2')}
        >
          Save as .docx
        </button>
      </div>
    </MathJaxContext>
  );
};

export default Dashboard;
