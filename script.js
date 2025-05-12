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

const resumeBox = document.getElementById('resumePreview');

const updatePreview = () => {
  document.getElementById('previewName').innerText = nameInput.value || 'Your Name';
  document.getElementById('previewEmail').innerText = emailInput.value || 'Email';
  document.getElementById('previewPhone').innerText = phoneInput.value || 'Phone';
  document.getElementById('previewLinkedIn').innerText = linkedinInput.value || 'LinkedIn';
  document.getElementById('previewGitHub').innerText = githubInput.value || 'GitHub';
  document.getElementById('previewSummary').innerText = summaryInput.value || 'Summary';
  document.getElementById('previewEducation').innerText = educationInput.value || 'Education';
  document.getElementById('previewExperience').innerText = experienceInput.value || 'Experience';
  document.getElementById('previewSkills').innerText = skillsInput.value || 'Skills';
};

const inputs = [
  nameInput, emailInput, phoneInput, linkedinInput, githubInput,
  summaryInput, educationInput, experienceInput, skillsInput
];

inputs.forEach(input => input.addEventListener('input', updatePreview));

photoInput.addEventListener('change', () => {
  const file = photoInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById('previewPhoto').src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

// Theme switcher
if (themeSelector) {
  themeSelector.addEventListener('change', () => {
    resumeBox.className = 'resume ' + themeSelector.value;
  });
}

// PDF download
function downloadPDF() {
  const element = document.getElementById('resumeContainer');
  const opt = {
    margin:       0,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

// Initial preview
updatePreview();
