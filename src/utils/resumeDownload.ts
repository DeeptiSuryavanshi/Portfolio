import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EXPERIENCES_DATA, SKILLS_DATA } from '../data/portfolioData';

export const handleResumeDownload = (showToast: (msg: string, type?: 'success' | 'info' | 'error') => void) => {
  // Trigger celebratory confetti
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  } catch {
    // Ignore confetti errors
  }

  const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Deepti_Suryavanshi_Resume.pdf</title>
  <style>
    @page { margin: 15mm; size: letter; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #171717;
      line-height: 1.45;
      font-size: 10.5pt;
      margin: 0;
      padding: 10px;
    }
    .header { text-align: center; margin-bottom: 16px; border-bottom: 2px solid #6D5DFB; padding-bottom: 12px; }
    .name { font-size: 22pt; font-weight: 800; color: #171717; margin: 0; letter-spacing: -0.5px; }
    .sub { font-size: 11pt; color: #6D5DFB; font-weight: 600; margin-top: 3px; }
    .contact { font-size: 9pt; color: #626262; margin-top: 6px; }
    .section-title {
      font-size: 11pt;
      font-weight: 700;
      color: #171717;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border-bottom: 1px solid #E7E4DE;
      padding-bottom: 3px;
      margin-top: 14px;
      margin-bottom: 8px;
    }
    .item { margin-bottom: 10px; }
    .item-header { display: flex; justify-content: space-between; font-weight: 700; font-size: 10pt; color: #171717; }
    .item-sub { display: flex; justify-content: space-between; font-style: italic; font-size: 9pt; color: #626262; margin-bottom: 3px; }
    ul { margin: 3px 0 6px 18px; padding: 0; }
    li { margin-bottom: 2px; font-size: 9.5pt; }
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 9pt; }
    .skill-cat { font-weight: 600; color: #171717; }
    @media print {
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="name">${PERSONAL_INFO.name}</h1>
    <div class="sub">${PERSONAL_INFO.title}</div>
    <div class="contact">
      Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
    </div>
  </div>

  <div class="section-title">Professional Summary</div>
  <p style="margin: 4px 0 10px 0; font-size: 9.5pt;">
    Computer Science student and software developer building practical, reliable applications with Python, JavaScript, AI models and modern web technologies. Experienced in machine learning data pipelines, automated code review tooling with Abstract Syntax Trees, and distributed systems.
  </p>

  <div class="section-title">Technical Skills</div>
  <div class="skills-grid">
    <div><span class="skill-cat">Languages:</span> Python, JavaScript (ES6+), Java, C, C++, SQL</div>
    <div><span class="skill-cat">Frontend:</span> React, Vite, Tailwind CSS, HTML5, CSS3</div>
    <div><span class="skill-cat">Backend & DB:</span> FastAPI, Node.js, Express, Firebase, MySQL, MongoDB</div>
    <div><span class="skill-cat">Tools & AI:</span> Git, GitHub Actions, AST, Hugging Face NLP, Google GenAI SDK</div>
  </div>

  <div class="section-title">Experience & Internships</div>
  ${EXPERIENCES_DATA.map(
    (exp) => `
    <div class="item">
      <div class="item-header">
        <span>${exp.role}</span>
        <span>${exp.period}</span>
      </div>
      <div class="item-sub">
        <span>${exp.company}</span>
        <span>${exp.location}</span>
      </div>
      <ul>
        ${exp.responsibilities.map((r) => `<li>${r}</li>`).join('')}
      </ul>
    </div>
  `
  ).join('')}

  <div class="section-title">Education</div>
  <div class="item">
    <div class="item-header">
      <span>Bachelor of Technology (B.Tech) in Computer Science & Engineering</span>
      <span>2022 — 2026</span>
    </div>
    <div class="item-sub">
      <span>University Engineering College</span>
      <span>Relevant Coursework</span>
    </div>
    <div style="font-size: 9pt; color: #626262;">
      Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Distributed Computing.
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>`;

  try {
    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    let opened = false;

    try {
      const printWindow = window.open(url, '_blank');
      if (printWindow) {
        opened = true;
        showToast('Resume preview generated. Print dialog opened.', 'success');
      }
    } catch {
      opened = false;
    }

    if (!opened) {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Deepti_Suryavanshi_Resume.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast('Resume downloaded successfully.', 'success');
    }
  } catch (err) {
    showToast('Failed to generate resume preview.', 'error');
  }
};
