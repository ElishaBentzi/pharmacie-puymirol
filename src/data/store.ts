export const pharmacyData = {
  name: "Pharmacie Puymirol",
  since: 1945,
  slogan: "Prospérité, Santé et Union",

  contact: {
    address: "32 rue Royale",
    city: "PUYMIROL",
    zipCode: "47270",
    phone: "09 66 11 14 27",
    phoneHref: "+33966111427",
    email: "pharmaciepuymirol@gmail.com",
    fullAddress: "32 rue Royale, 47270 PUYMIROL, France"
  },

  coordinates: {
    lat: 44.3747,
    lng: 0.6339
  },

  hours: [
    { day: "Lundi", hours: "8:45 - 12:30 / 14:00 - 19:30", opens: "08:45", closes: "19:30" },
    { day: "Mardi", hours: "8:45 - 12:30 / 14:00 - 19:30", opens: "08:45", closes: "19:30" },
    { day: "Mercredi", hours: "8:45 - 12:30 / 14:00 - 19:00", opens: "08:45", closes: "19:00" },
    { day: "Jeudi", hours: "8:45 - 12:30 / 14:00 - 19:30", opens: "08:45", closes: "19:30" },
    { day: "Vendredi", hours: "8:45 - 12:30 / 14:00 - 19:30", opens: "08:45", closes: "19:30" },
    { day: "Samedi", hours: "9:00 - 12:00", opens: "09:00", closes: "12:00" },
    { day: "Dimanche", hours: "Fermé", closed: true }
  ],

  services: [
    { name: "Téléconsultation", href: "/teleconsultation", description: "Consultez un médecin à distance via Medadom" },
    { name: "Matériel Médical", href: "/materiel-medical", description: "Location et vente de matériel médical" },
    { name: "Orthopédie et Contention", href: "/orthopedie-contention", description: "Solutions de contention et orthopédie" }
  ],

  serviceArea: [
    "Puymirol", "Lafox", "Tayrac", "Grayssas", "Perville",
    "Casteljaloux", "Saint-Urcisse", "Saint-Romain-le-Noble", "Saint-Caprais-de-Lerm"
  ],

  siteUrl: "https://pharmacie-puymirol.fr"
};
