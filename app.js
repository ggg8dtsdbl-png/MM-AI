const tabs = document.querySelectorAll('.tab');
const picker = document.getElementById('photoPicker');
const notice = document.getElementById('notice');
let mode = 'text';

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  mode = tab.dataset.mode;
  picker.classList.toggle('hidden', mode !== 'photo');
  notice.textContent = mode === 'photo'
    ? 'Choose a photo and describe how you want it animated. AI generation needs a connected service.'
    : 'Demo interface: connect an AI video service to generate real videos.';
}));

document.getElementById('photo').addEventListener('change', event => {
  const file = event.target.files?.[0];
  if (!file) return;
  const preview = document.getElementById('photoPreview');
  preview.src = URL.createObjectURL(file);
  preview.classList.remove('hidden');
});

document.getElementById('generate').addEventListener('click', () => {
  const prompt = document.getElementById('prompt').value.trim();
  if (!prompt) {
    notice.textContent = 'Please describe your video first.';
    document.getElementById('prompt').focus();
    return;
  }
  notice.textContent = 'Your prompt is ready. Real video generation is not active until a secure AI backend and provider are connected.';
});

document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('selected'));
  item.classList.add('selected');
  const page = item.dataset.page;
  notice.textContent = page === 'Create'
    ? 'Create mode selected.'
    : page + ' section preview. Account and cloud storage features will be connected in a later build.';
}));
document.getElementById('creditsBtn').addEventListener('click', () => {
  notice.textContent = 'Demo credits only. A real credit balance and billing system are not connected.';
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
