// script.js

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const linkedinInput = document.getElementById('linkedin');
const githubInput = document.getElementById('github');
const summaryInput = document.getElementById('summary');
const educationInput = document.getElementById('education');
const experienceInput = document.getElementById('experience');
const skillsInput = document.getElementById('skills');
const photoInput = document.getElementById('photo');
const themeSelector = document.getElementById('theme');
const templateSelector = document.getElementById('template');

const resumeBox = document.getElementById('resumePreview');

// Update live preview
const updatePreview = () => {
  document.getElementById('previewName').innerText = nameInput.value || 'Your Name';
  document.getElementById('previewEmail').innerText = emailInput.value || 'example@email.com';
  document.getElementById('previewPhone').innerText = phoneInput.value || '1234567890';
  document.getElementById('previewLinkedIn').innerText = linkedinInput.value || 'linkedin.com/in/yourname';
  document.getElementById('previewGitHub').innerText = githubInput.value || 'github.com/yourname';
  document.getElementById('previewSummary').innerText = summaryInput.value || 'A brief professional summary.';
  document.getElementById('previewEducation').innerText = educationInput.value || 'Your educational background.';
  document.getElementById('previewExperience').innerText = experienceInput.value || 'Work experience details.';
  document.getElementById('previewSkills').innerText = skillsInput.value || 'Your skillset.';
};

// Apply theme and template
const applyStyle = () => {
  resumeBox.className = `resume ${themeSelector.value} ${templateSelector.value}`;
};

// Photo upload & preview
photoInput.addEventListener('change', function () {
  const file = photoInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('previewPhoto').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Bind input events
[
  nameInput, emailInput, phoneInput, linkedinInput, githubInput,
  summaryInput, educationInput, experienceInput, skillsInput
].forEach(input => input.addEventListener('input', updatePreview));

themeSelector.addEventListener('change', applyStyle);
templateSelector.addEventListener('change', applyStyle);

// Download as PDF
function downloadPDF() {
  const element = document.getElementById('resumePreview');
  const opt = {
    margin:       0.5,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2
::contentReference[oaicite:0]{index=0}
 
