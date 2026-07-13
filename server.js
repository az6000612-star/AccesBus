const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PUERTO = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/solicitar-asistencia', (req, res) => {
  const datos = req.body;
  const mensaje = `*🚌 SOLICITUD AccesBus*%0A
👤 Usuario: ${datos.nombre}%0A
📍 Ubicación: ${datos.ubicacion}%0A
🎯 Destino: ${datos.destino}%0A
🚌 Ruta: ${datos.ruta}%0A
♿ Ayuda: ${datos.tipoAyuda}%0A
📝 Detalles: ${datos.detalles || "Sin detalles adicionales"}%0A
⏰ Fecha y hora: ${new Date().toLocaleString("es-EC")}`;

  res.json({
    exito: true,
    enlaceWhatsApp: `https://wa.me/593980530610?text=${mensaje}`
  });
});

app.listen(PUERTO, () => console.log("✅ Servidor AccesBus funcionando"));
