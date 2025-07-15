import { useState } from "react";

function App() {
  const [resumeJSON, setResumeJSON] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleGenerate = () => {
    let parsedResume;
    try {
      parsedResume = JSON.parse(resumeJSON);
    } catch (e) {
      alert("Invalid JSON format for resume.");
      return;
    }

    const prompt = \`You are a resume writer. Rewrite this resume to match the job description.

Job Description:
\${jobDescription}

Resume Data:
\${JSON.stringify(parsedResume, null, 2)}

Make it ATS-friendly, concise, and aligned with the job requirements. Return the result in professional resume format.\`;

    const chatGPTUrl = \`https://chat.openai.com/chat?prompt=\${encodeURIComponent(prompt)}\`;
    window.open(chatGPTUrl, "_blank");
  };

  return (
    <div className="container">
      <h1>AI Resume Tailoring Tool</h1>

      <textarea
        placeholder="Paste your Master Resume JSON here"
        rows="10"
        value={resumeJSON}
        onChange={(e) => setResumeJSON(e.target.value)}
      />
      <textarea
        placeholder="Paste Job Description here"
        rows="10"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button onClick={handleGenerate}>Generate CV in ChatGPT</button>
    </div>
  );
}

export default App;