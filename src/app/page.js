"use client";
import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useI18n } from "../utils/i18n";
import Link from "next/link";

export default function HomePage() {
  const { t } = useI18n();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mqaydpkj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        e.target.reset();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 4000);
      } else alert("Error al enviar el mensaje ❌");
    } catch {
      alert("Error de conexión ❌");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white mt-[80px] sm:mt-[90px]">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col-reverse md:flex-row items-center justify-center gap-10 min-h-[65vh]">
        <div className="md:w-1/2 text-center md:text-left">
          <Fade cascade damping={0.2} triggerOnce>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 mb-6">
              {t("hero.subtitle")}
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-[#FFB600] hover:bg-[#e0a200] text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              {t("hero.cta")}
            </Link>
          </Fade>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Slide direction="up" triggerOnce>
            <img
              src="/images/hero-medical.jpg"
              alt="Impulse Medical Service equipo médico"
              className="rounded-2xl shadow-lg w-full max-w-[500px] object-cover"
            />
          </Slide>
        </div>
      </div>

      {/* Empresa colaboradora */}
      <div className="py-8 bg-white">
        <Fade direction="up" triggerOnce>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-neutral-700 text-lg sm:text-xl md:text-2xl font-medium mb-6">
              Empresa colaboradora de:
            </p>
            <div className="flex justify-center items-center gap-8 sm:gap-12 flex-wrap">
              <img src="/images/logo-impulse.jpeg" alt="Impulse" className="h-16 sm:h-20 md:h-24 w-auto" />
              <img src="/images/logo-stryker.webp" alt="Stryker" className="h-16 sm:h-20 md:h-24 w-auto opacity-90 hover:opacity-100 transition" />
            </div>
          </div>
        </Fade>
      </div>

      {/* Sobre nosotros */}
      <Slide direction="up" triggerOnce>
        <section className="bg-neutral-50 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-neutral-900">Sobre nosotros</h2>
            <p className="text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-10 text-base sm:text-lg">
              Impulse Medical Service es una empresa especializada en la comercialización y distribución de equipos sanitarios de alta calidad. Trabajamos con los principales fabricantes internacionales para ofrecer soluciones innovadoras en Endoscopia, Maxilofacial y Medical.
            </p>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-sm">
              <Carousel />
            </div>
          </div>
        </section>
      </Slide>

      {/* Divisiones */}
      <div className="bg-neutral-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Slide direction="up" triggerOnce>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-neutral-900">
              {t("divisions.title")}
            </h2>
          </Slide>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Fade cascade damping={0.2} triggerOnce>
              <DivisionCard title={t("divisions.endoscopyTitle")} text={t("divisions.endoscopyDesc")} image="/images/endo.jpg" />
              <DivisionCard title={t("divisions.maxTitle")} text={t("divisions.maxDesc")} image="/images/maxilo.webp" />
              <DivisionCard title={t("divisions.medicalTitle")} text={t("divisions.medicalDesc")} image="/images/medical.webp" />
            </Fade>
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <Slide direction="up" triggerOnce>
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-neutral-900">Contáctanos</h2>
            <p className="text-neutral-700 mb-10 text-sm sm:text-base">
              ¿Tienes alguna consulta o deseas más información sobre nuestros productos o servicios? Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Nombre completo</label>
                <input type="text" name="nombre" required className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Correo electrónico</label>
                <input type="email" name="email" required className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">Mensaje</label>
                <textarea name="mensaje" rows="5" required className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"></textarea>
              </div>
              <div className="md:col-span-2 flex items-start gap-2 text-sm text-neutral-600">
                <input type="checkbox" required className="mt-1" />
                <span>
                  He leído y acepto la{" "}
                  <a href="/aviso-legal" className="text-yellow-600 hover:text-yellow-700 underline">
                    política de privacidad
                  </a>.
                </span>
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" disabled={isLoading} className={`${isLoading ? "bg-yellow-400 cursor-not-allowed" : "bg-[#FFB600] hover:bg-[#e0a200]"} text-white font-semibold px-6 py-3 rounded-lg transition`}>
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </div>
            </form>

            {isSent && <p className="mt-6 text-green-600 font-medium text-lg animate-fadeIn">✅ Enviado con éxito. ¡Gracias por contactarnos!</p>}
          </div>
        </section>
      </Slide>
    </section>
  );
}

function DivisionCard({ title, text, image }) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl hover:shadow-md transition flex flex-col items-center text-center">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
      <p className="text-neutral-600 leading-relaxed mb-6 text-sm sm:text-base">{text}</p>
      <img src={image} alt={title} className="rounded-xl w-full h-40 sm:h-48 object-cover" />
    </div>
  );
}

function Carousel() {
  const images = ["/images/carrusel/image.png", "/images/carrusel/image-copy.png", "/images/carrusel/image-copy2.png", "/images/carrusel/image-copy3.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden bg-neutral-50 rounded-[2rem] shadow-inner">
      {images.map((src, i) => {
        const offset = (i - current + images.length) % images.length;
        let style = {
          transform: "scale(0.5)",
          opacity: 0,
          zIndex: 0,
          transition: "all 1s ease",
        };
        if (offset === 0) style = { transform: "scale(1)", opacity: 1, zIndex: 3 };
        else if (offset === 1) style = { transform: "translateX(40%) scale(0.8)", opacity: 0.6, zIndex: 2 };
        else if (offset === images.length - 1) style = { transform: "translateX(-40%) scale(0.8)", opacity: 0.6, zIndex: 2 };

        return (
          <img key={i} src={src} alt="" className="absolute w-[80%] max-w-[500px] rounded-[1.5rem] shadow-md object-cover" style={style} />
        );
      })}
    </div>
  );
}
