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
const projectInput = document.getElementById('projects');
const schoolInput = document.getElementById('school');
const collegeInput = document.getElementById('college');
const hobbiesInput = document.getElementById('hobbies');
const languagesInput = document.getElementById('languages');
const themeSelector = document.getElementById('theme');

const resumeBox = document.getElementById('resumeContainer');

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
  document.getElementById('previewProjects').innerText = projectInput.value || 'Projects';
  document.getElementById('previewSchool').innerText = schoolInput.value || 'School';
  document.getElementById('previewCollege').innerText = collegeInput.value || 'College';
  document.getElementById('previewHobbies').innerText = hobbiesInput.value || 'Hobbies';
  document.getElementById('previewLanguages').innerText = languagesInput.value || 'Languages';
};

const inputs = [
  nameInput, emailInput, phoneInput, linkedinInput, githubInput,
  summaryInput, educationInput, experienceInput, skillsInput,
  projectInput, schoolInput, collegeInput, hobbiesInput, languagesInput
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

if (themeSelector) {
  themeSelector.addEventListener('change', () => {
    resumeBox.className = 'resume ' + themeSelector.value;
  });
}

function downloadPDF() {
  const element = document.getElementById('resumeContainer');
  const opt = {
    margin: 0,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

updatePreview();
