import React, { useState } from "react";
import { addResume } from "../api/resumeApi";

const ResumeForm = ({ onAdded }) => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newResume = {
      name,
      skills: skills.split(",").map((s) => s.trim()), // convert "React, Node" → ["React", "Node"]
      experience,
    };

    const result = await addResume(newResume);
    if (result) {
      onAdded(); // refresh list in parent
      setName("");
      setSkills("");
      setExperience("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Skills (comma separated):</label>
        <input
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>

      <div>
        <label>Experience:</label>
        <input
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>

      <button type="submit">Add Resume</button>
    </form>
  );
};

export default ResumeForm;
