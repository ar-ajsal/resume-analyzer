const BASE_URL = "http://localhost:5000"; // your backend URL

export const fetchResumes = async () => {
  try {
    const res = await fetch(`${BASE_URL}/resumes`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching resumes:", err);
    return [];
  }
};

export const addResume = async (resumeData) => {
  try {
    const res = await fetch(`${BASE_URL}/resumes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resumeData),
    });
    return await res.json();
  } catch (err) {
    console.error("Error adding resume:", err);
  }
};
