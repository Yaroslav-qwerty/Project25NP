function newsletter(f) {
  mail(
    "Uutiskirjeen tilaus",
    "Haluan tilata uutiskirjeen osoitteeseen: " + f.querySelector("input").value,
  );
  return false;
}
function contactForm(f) {
  mail(
    "Viesti kotisivuilta",
    "Nimi: " + f.n.value + "\nSähköposti: " + f.e.value + "\n\n" + f.m.value,
  );
  f.querySelector(".ok").hidden = false;
  return false;
}
function orderForm(f) {
  mail(
    "Kirjatilaus: Töppötassut",
    [
      "Nimi: " + f.fn.value + " " + f.ln.value,
      "Sähköposti: " + f.em.value,
      "Osoite: " + f.ad.value,
      "Puhelin: " + (f.ph.value || "-"),
      "Kappalemäärä: " + f.qty.value,
      "Omistuskirjoitus: " + (f.ded.checked ? f.dt.value || "kyllä" : "ei"),
    ].join("\n"),
  );
  f.querySelector(".ok").hidden = false;
  return false;
}
