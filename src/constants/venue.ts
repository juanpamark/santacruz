export const VENUE_INFO = {
  name: "Santa Cruz Restaurante",
  tagline: "Tradición y Confort en Doble Altura",
  // Separated Phone Lines
  deliveryPhone: "+57 315 683 0295",
  deliveryPhoneDisplay: "315 683 0295",
  deliveryWhatsapp: "573156830295",

  reservationPhone: "+57 316 854 4474",
  reservationPhoneDisplay: "316 854 4474",
  reservationWhatsapp: "573168544474",

  // Default backwards-compatibility properties
  phone: "+57 315 683 0295",
  phoneDisplay: "315 683 0295",
  whatsappNumber: "573156830295",

  address: "Diagonal 72 #96-32",
  neighborhood: "Barrio Álamos / Engativá Central",
  city: "Bogotá, Colombia",
  schedule: "Lunes a Domingo: 11:30 AM a 5:00 PM",
  capacity: "50 personas cómodas",

  // Official Navigation Links
  mapsUrl: "https://maps.app.goo.gl/KkJ2iJkSRoSWMWG97",
  wazeUrl: "https://waze.com/ul?q=Diagonal%2072%20%2396-32%20Bogota&navigate=yes",

  officialLogoUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793074755/WhatsApp_Image_2026-10-26_at_23.15.07.jpg",
  social: {
    instagram: "https://instagram.com/santacruzrestaurante",
    facebook: "https://facebook.com/santacruzrestaurante",
  },
  payments: {
    onSite: [
      { name: "Efectivo", icon: "cash" },
      { name: "Tarjetas Débito / Crédito (Datáfono)", icon: "card" },
      { name: "Nequi", icon: "qr" },
      { name: "Daviplata", icon: "qr" },
      { name: "Bre-B (Transferencias)", icon: "bank" },
    ],
    delivery: [
      { name: "Efectivo", note: "Indica si necesitas cambio" },
      { name: "Nequi", note: "Pago previo contra entrega" },
      { name: "Daviplata", note: "Transferencia directa" },
      { name: "Bre-B", note: "Llave de pago inmediata" },
      { name: "No recibimos tarjeta a domicilio", note: "Solo pagos digitales o efectivo" },
    ],
  },
};

export const VENUE_IMAGES = {
  // 1. Salón Principal en Doble Altura (HD Cloudinary)
  groundFloorDoubleHeight: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793165677/dhz.jpg",
  // 2. Segundo Piso en Pleno Evento (HD Cloudinary)
  secondFloorEvent: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793164789/Sin_t%C3%ADtulo_1200_x_900_px_3.png",
  // 3. Segundo Piso Salón Vacío (HD Cloudinary)
  secondFloorEmpty: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793165005/Sin_t%C3%ADtulo_1200_x_900_px_4.png",
  // 4. Escaleras de Madera / Detalle Primer Nivel (HD Cloudinary)
  groundFloorStairs: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793165360/Sin_t%C3%ADt.png",
  // 5. Fachada Exterior (HD Cloudinary)
  facade: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793164786/Sin_t%C3%ADtulo_1200_x_900_px_2.png",
  // 6. Logo Dorado Oficial
  officialLogo: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793074755/WhatsApp_Image_2026-10-26_at_23.15.07.jpg",
};
