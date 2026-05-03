/* ============================================
   SILENCED — WOMEN UNDER THE TALIBAN
   main.js
   ============================================ */

/* ── SCROLL REVEAL ── */
document.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const revealSelectors = [
    '.timeline-item',
    '.leader-card',
    '.oppress-item',
    '.story-card',
    '.faction-card',
    '.compare-col'
  ];

  document.querySelectorAll(revealSelectors.join(', ')).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

});

/* ── STORY FORM SUBMISSION ── */
function submitStory() {
  const name     = document.getElementById('storyName').value.trim();
  const location = document.getElementById('storyLocation').value.trim();
  const category = document.getElementById('storyCategory').value;
  const text     = document.getElementById('storyText').value.trim();
  const email    = document.getElementById('storyEmail').value.trim();
  const perm     = document.getElementById('storyPermission').value;

  if (!text) {
    alert('Please write your story before submitting.');
    return;
  }

  const subject = encodeURIComponent('Story Submission — Silenced Afghanistan');
  const body = encodeURIComponent(
    `Name/Pseudonym: ${name || 'Anonymous'}\n` +
    `Location: ${location || 'Not provided'}\n` +
    `Category: ${category || 'Not specified'}\n` +
    `Permissions: ${perm}\n` +
    `Reply Email: ${email || 'Not provided'}\n\n` +
    `STORY:\n${text}`
  );

  window.location.href = `mailto:getanyinformation@gmail.com?subject=${subject}&body=${body}`;

  document.getElementById('storySuccess').style.display = 'block';
  document.getElementById('storyForm').reset();
}

/* ── CONTACT FORM SUBMISSION ── */
function submitContact() {
  const name    = document.getElementById('contactName').value.trim();
  const email   = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if (!message) {
    alert('Please write a message before sending.');
    return;
  }

  const subjectEnc = encodeURIComponent(subject || 'Message from Silenced Website');
  const body = encodeURIComponent(
    `From: ${name || 'Anonymous'}\n` +
    `Email: ${email || 'Not provided'}\n\n` +
    `${message}`
  );

  window.location.href = `mailto:getanyinformation@gmail.com?subject=${subjectEnc}&body=${body}`;

  document.getElementById('contactSuccess').style.display = 'block';
  document.getElementById('contactForm').reset();
}
