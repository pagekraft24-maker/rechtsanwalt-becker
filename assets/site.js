(function () {
  // Mobiles Menü
  var btn = document.querySelector('[data-menu-toggle]');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.hasAttribute('hidden');
      if (open) { menu.removeAttribute('hidden'); } else { menu.setAttribute('hidden', ''); }
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      var i = btn.querySelector('i');
      if (i) { i.classList.toggle('ri-menu-3-line', !open); i.classList.toggle('ri-close-line', open); }
    });
  }

  // Kontaktformular
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var hp = form.querySelector('[name="phone_alt"]');
      var status = form.querySelector('.form-status');
      if (!status) {
        status = document.createElement('p');
        status.className = 'form-status';
        status.setAttribute('role', 'status');
        form.appendChild(status);
      }
      if (hp && hp.value.trim() !== '') { status.className = 'form-status ok'; status.textContent = 'Vielen Dank! Ihre Nachricht wurde gesendet.'; form.reset(); return; }
      var submit = form.querySelector('[type="submit"]');
      if (submit) submit.disabled = true;
      var data = new URLSearchParams(new FormData(form));
      data.delete('phone_alt');
      fetch(form.action, { method: 'POST', body: data, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          status.className = 'form-status ok';
          status.textContent = 'Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.';
          form.reset();
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = 'Die Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns an oder schreiben Sie an kontakt@rechtsanwalt-becker.eu.';
        })
        .finally(function () { if (submit) submit.disabled = false; });
    });
  }
})();
