"use client";
import { useState, useEffect } from "react";

export default function Contacto() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mqaydpkj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        setFormSent(true);
        form.reset();
        setTimeout(() => setFormSent(false), 4000);
      }
    });
  };

  return (
    <section className="bg-white text-neutral-800 py-35 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">
          Contacta con nosotros
        </h1>

        {/* --- JEFE 1 --- */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <img
            src="/images/contacto/miguel-rubio.png"
            alt="Miguel Rubio Uriarte"
            className="w-64 h-64 object-cover rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold">Miguel Rubio Uriarte</h2>
            <p className="text-yellow-600 font-medium mb-2">
              Responsable de Endoscopy y Maxilofacial
            </p>
            <p className="text-neutral-700">📞 Teléfono: +34 600 123 456</p>
            <p className="text-neutral-700">
              📧 Email: <a href="mailto:miguel@impulse.com" className="underline hover:text-yellow-600">miguel@impulse.com</a>
            </p>
          </div>
        </div>

        {/* --- JEFA 2 --- */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <img
            src="/images/contacto/sonia-anaya.png"
            alt="Sonia Anaya Dueñas"
            className="w-64 h-64 object-cover rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold">Sonia Anaya Dueñas</h2>
            <p className="text-yellow-600 font-medium mb-2">
              Responsable de Medical
            </p>
            <p className="text-neutral-700">📞 Teléfono: +34 600 987 654</p>
            <p className="text-neutral-700">
              📧 Email: <a href="mailto:sonia@impulse.com" className="underline hover:text-yellow-600">sonia@impulse.com</a>
            </p>
          </div>
        </div>

        {/* --- ADMINISTRACIÓN --- */}
        <div className="relative bg-gradient-to-b from-white to-neutral-100 p-12 rounded-[2.5rem] shadow-inner mb-20 overflow-hidden">
        {/* Línea amarilla superior */}
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500 rounded-t-[2.5rem]" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-2">
            {/* Texto a la izquierda */}
            <div className="text-center md:text-left flex-1">
            <h3 className="text-3xl font-semibold mb-4 text-neutral-800">
                Contacta con Administración
            </h3>
            <p className="text-neutral-700 text-lg mb-4 leading-relaxed">
                Si necesitas resolver cualquier duda administrativa, contáctanos a través del correo:
            </p>
            <p className="text-neutral-700 text-xl font-medium">
                📧{" "}
                <a
                href="mailto:administracion@prueba.com"
                className="text-yellow-600 underline hover:text-yellow-700"
                >
                administracion@prueba.com
                </a>
            </p>
            </div>

            {/* Logo grande a la derecha */}
            <div className="flex-1 flex justify-center md:justify-end">
            <img
                src="/images/logo-impulse.jpeg"
                alt="Logo Impulse Medical Service"
                className="h-56 w-auto md:h-64 md:w-[420px] object-contain opacity-95 drop-shadow-lg"
            />
            </div>
        </div>
        </div>





        {/* --- FORMULARIO DE CONTACTO --- */}
        <div className="bg-neutral-50 p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Envíanos un mensaje
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                rows="5"
                required
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex items-center gap-2 text-sm text-neutral-600">
              <input type="checkbox" required />
              <span>
                He leído y acepto la{" "}
                <a
                  href="/aviso-legal"
                  className="text-yellow-600 hover:text-yellow-700 underline"
                >
                  política de privacidad
                </a>
                .
              </span>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Enviar mensaje
              </button>
            </div>
          </form>

          {formSent && (
            <p className="text-green-600 text-center mt-4">
              ✅ Enviado con éxito. Nos pondremos en contacto contigo pronto.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
