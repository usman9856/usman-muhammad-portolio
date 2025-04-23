"use client";

const handleDownloadCV = () => {
    const cvUrl = "/cv/Usman-CV.pdf"; // Correct path relative to 'public'
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Usman-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
};

export default handleDownloadCV;
