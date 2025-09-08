import React, { useEffect, useState } from "react";
import { fetchResumes } from "../api/resumeApi";
import ResumeForm from "./ResumeForm";

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  const loadResumes = () => {
    fetchResumes().then(setResumes);
  };

  useEffect(() => {
    loadResumes();
  }, []);

  return (
    <div>
      <h1>Resumes</h1>
      <ResumeForm onAdded={loadResumes} />
      <ul>
        {resumes.map((r) => (
          <li key={r._id}>
            <strong>{r.name}</strong> — {r.experience}  
            <br />
            Skills: {r.skills.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeList;
