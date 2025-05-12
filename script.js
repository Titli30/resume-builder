const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const linkedinInput = document.getElementById('linkedin');
const githubInput = document.getElementById('github');
const summaryInput = document.getElementById('summary');
const educationInput = document.getElementById('education');
const experienceInput = document.getElementById('experience');
const skillsInput = document.getElementById('skills');
const themeSelector = document.getElementById('theme');

const updatePreview = () => {
  document.getElementById('previewName').innerText = nameInput.value || 'Your Name';
  document.getElementById('previewEmail').innerText = emailInput.value;
  document.getElementById('previewPhone').innerText = phoneInput.value;
  document.getElementById('previewLinkedIn').innerText = linkedinInput.value;
  document.getElementById('previewGitHub').innerText = githubInput.value;
  document.getElementById('previewSummary').innerText = summaryInput.value;
  document.getElementById('previewEducation').innerText = educationInput.value;
  document.getElementById('previewExperience').innerText = experienceInput.value;
  document.getElementById('previewSkills').innerText = skillsInput.value;
};

const inputs = [
  nameInput, emailInput, phoneInput, linkedinInput, githubInput,
  summaryInput, educationInput, experienceInput, skillsInput
];

inputs.forEach(input => input.addEventListener('input', updatePreview));

// Theme switcher
const resumeBox = document.getElementById('resumePreview');
themeSelector.addEventListener('change', () => {
  resumeBox.className = 'resume ' + themeSelector.value;
});

// PDF download
function downloadPDF() {
  html2pdf().from(resumeBox).save('resume.pdf');
}

// Initial preview
updatePreview();
