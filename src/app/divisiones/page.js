"use client";
import ScrollStack, { ScrollStackItem } from "@/components/reactbits/ScrollStack";

export default function Divisiones() {
  const divisions = [
    {
      title: "Endoscopy",
      description:
        "La división Endoscopy de Stryker se especializa en soluciones para cirugía mínimamente invasiva con un fuerte énfasis en visualización quirúrgica avanzada, integración de plataformas y conectividad en quirófano.",
      galleryImages: [
        "/images/divisiones/endo/monitor1788.png",
        "/images/divisiones/endo/1788.png",
      ],
      video: "/images/divisiones/endo/endo.mp4",
    },
    //añadir imagenes de /medical
    {
      title: "Medical & Surgical",
      description:
        "Distribuimos equipamiento médico y quirúrgico de última generación, garantizando la máxima fiabilidad y soporte técnico para profesionales de la salud.",
      galleryImages: [
        "/images/divisiones/medical/med1.png",
        "/images/divisiones/medical/med2.png",
        "/images/divisiones/medical/med3.png",

      ],
    },
    {
      title: "Head & Neck",
      description:
        "Expertos en productos destinados a cirugía maxilofacial y craneal, con un enfoque innovador orientado a la precisión anatómica y la recuperación del paciente.",
      galleryImages: [
        "/images/divisiones/head/head1.png",
        "/images/divisiones/head/head2.png",
        "/images/divisiones/head/head3.png",
      ],
    },
    {
      title: "Orthopaedics",
      description:
        "Soluciones ortopédicas diseñadas para la excelencia en cirugía traumatológica, implantología y rehabilitación, con la calidad garantizada de Stryker.",
      galleryImages: [
        "/images/divisiones/ortho/ort1.png",
        "/images/divisiones/ortho/ort2.png",
        "/images/divisiones/ortho/ort3.png",
      ],
    },
  ];

  return (
    <section className="bg-white text-neutral-800 py-16 px-4 sm:px-6">
      <ScrollStack
        className="max-w-6xl mx-auto"
        itemDistance={300}
        itemScale={0.04}
        baseScale={0.9}
        blurAmount={0}
        rotationAmount={0}
        stackPosition="35%"
        scaleEndPosition="10%"
        useWindowScroll
      >
        {divisions.map((div, idx) => {
          const mediaCount =
            (div.galleryImages?.length || 0) + (div.video ? 1 : 0);

          return (
            <ScrollStackItem
              key={idx}
              itemClassName="scroll-stack-card bg-white border border-neutral-200 rounded-3xl shadow-sm p-6 sm:p-10 h-auto md:h-80"
            >
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600">
                  {div.title}
                </h2>

                <p className="mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-neutral-700 leading-relaxed desc-text">
                  {div.description}
                </p>

                {(div.galleryImages?.length || div.video) && (
                  <div
                    className={`mt-8 grid gap-6 ${
                      mediaCount >= 3
                        ? "md:grid-cols-3"
                        : mediaCount === 2
                        ? "md:grid-cols-2"
                        : "grid-cols-1"
                    } place-items-center media-grid`}
                  >
                    {div.galleryImages?.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${div.title} ${i + 1}`}
                        className="media-elt w-full h-auto md:h-72 object-contain bg-neutral-50 border border-neutral-200 rounded-2xl shadow-sm"
                      />
                    ))}

                    {div.video && (
                      <video
                        src={div.video}
                        controls
                        muted
                        playsInline
                        className="media-elt w-full h-auto md:h-72 bg-neutral-50 border border-neutral-200 rounded-2xl object-cover shadow-sm"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* 📱 SOLO MÓVIL: texto más ancho, no más pequeño */}
              <style jsx>{`
                @media (max-width: 768px) {
                  .scroll-stack-card {
                    width: 100%;
                    margin: 0 auto;
                    padding-left: 2rem;  /* más espacio interno lateral */
                    padding-right: 2rem;
                    height: auto !important;
                    min-height: 720px;
                  }

                  .desc-text {
                    max-width: 95%; /* texto más ancho */
                    font-size: 1rem;
                    line-height: 1.6rem;
                  }

                  .media-grid {
                    grid-template-columns: 1fr !important;
                    gap: 1.25rem;
                  }

                  .media-elt {
                    max-width: 100%;
                    height: auto !important;
                  }
                }
              `}</style>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
}
