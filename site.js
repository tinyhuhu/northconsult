document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = String(new Date().getFullYear());
});

document.querySelectorAll("[data-logo-group]").forEach((group) => {
  const duplicate = group.cloneNode(true);
  duplicate.removeAttribute("data-logo-group");
  duplicate.setAttribute("aria-hidden", "true");
  duplicate.querySelectorAll("img").forEach((image) => image.setAttribute("alt", ""));
  group.parentElement.appendChild(duplicate);
});

document.querySelectorAll("[data-simple-footer]").forEach((footer) => {
  footer.innerHTML = `
    <div class="shell footer-grid">
      <div><a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true"><span class="brand-orbit"></span><span class="brand-dot"></span></span><span class="brand-copy"><strong>Northern Hemisphere</strong><span>Tech &amp; Consulting Inc.</span></span></a><p class="footer-note">Canadian technology consulting since 2012.</p></div>
      <div class="footer-links"><p class="eyebrow">Explore</p><a href="services.html">Services</a><a href="about.html">About</a><a href="contact.html">Contact</a></div>
      <div class="footer-contact"><p class="eyebrow">Start a conversation</p><a href="mailto:support@northconsult.ca">support@northconsult.ca</a><a href="tel:+14037039593">+1 (403) 703-9593</a></div>
    </div>
    <div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Northern Hemisphere Tech &amp; Consulting Inc.</span><span>Canada</span></div>`;
});
