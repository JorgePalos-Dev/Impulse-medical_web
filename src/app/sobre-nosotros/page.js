"use client";

export default function SobreNosotros() {
  const valores = [
    {
      title: "Compromiso",
      text: "Nos implicamos en cada proyecto con una dedicación total, ofreciendo un servicio personalizado a hospitales y profesionales de la salud.",
    },
    {
      title: "Excelencia",
      text: "Aspiramos a la perfección en cada detalle: desde la demostración de producto hasta la asistencia técnica y el soporte posventa.",
    },
    {
      title: "Confianza",
      text: "Nuestra relación directa con Stryker y nuestra experiencia en quirófano nos permiten ofrecer una atención cercana y transparente.",
    },
    {
      title: "Pasión por la innovación",
      text: "Creemos en el poder de la tecnología médica para transformar la práctica clínica y mejorar la vida de los pacientes.",
    },
  ];

  return (
    <section className="bg-white text-neutral-800 py-20 px-4 sm:px-6 mt-[90px]">
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-24">

        {/* INTRO */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-4">
            Sobre nosotros
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-neutral-700 leading-relaxed">
            <strong>Impulse Medical Service</strong> es el agente comercial exclusivo de{" "}
            <strong>Stryker</strong> en España, especializado en las divisiones de{" "}
            <strong>Endoscopy</strong>, <strong>Head & Neck</strong>, <strong>Medical</strong> y{" "}
            <strong>Orthopaedics</strong>. Nuestro propósito es acercar la tecnología quirúrgica
            más avanzada a los profesionales sanitarios, ofreciendo asesoramiento, formación
            y soporte técnico continuado.
          </p>
        </div>

        
        {/* HISTORIA */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center text-center md:text-left">
        <img
            src="/images/logo-impulse.jpeg"
            alt="Equipo Impulse Medical Services"
            className="rounded-3xl shadow-lg object-cover w-full max-h-[420px]"
        />
        <div className="mx-auto md:mx-0">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
            Nuestra historia
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-4 text-base sm:text-lg">
            <strong>Impulse Medical Service</strong> fue fundada en 2015 por{" "}
            <strong>Miguel Rubio</strong> y <strong>Sonia Anaya</strong>.  
            Miguel, tras una larga trayectoria en <strong>Stryker</strong>, decidió continuar
            su labor dentro de la compañía como <strong>agente comercial oficial</strong>,
            ofreciendo una atención más personalizada y directa a los hospitales y equipos quirúrgicos.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
            Desde entonces, el proyecto ha crecido hasta consolidar un equipo de{" "}
            <strong>8 profesionales</strong> que trabajan exclusivamente para Stryker, garantizando
            una cobertura integral en formación, soporte técnico y soluciones quirúrgicas.
            </p>
        </div>
        </div>


        {/* EQUIPO */}
        <div className="text-center space-y-10">
          <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-600">
            Nuestro equipo
          </h3>
          <p className="max-w-3xl mx-auto text-neutral-700 leading-relaxed text-base sm:text-lg">
            Formado por ingenieros biomédicos, técnicos quirúrgicos y especialistas en producto,
            nuestro equipo acompaña a los profesionales de la salud en todas las fases: desde la
            planificación de quirófano hasta la asistencia durante las intervenciones.  
            Todos compartimos un mismo compromiso: representar con orgullo los valores de Stryker.
          </p>

          {/* Fundadores */}
          <div className="flex flex-wrap justify-center gap-10 sm:gap-14 mt-10">
            {/* Miguel */}
            <div className="text-center max-w-xs">
              <img
                src="/images/contacto/miguel-rubio.png"
                alt="Miguel Rubio"
                className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full mx-auto shadow-md border-4 border-yellow-600"
              />
              <h4 className="text-lg sm:text-xl font-semibold text-yellow-600 mt-4">
                Miguel Rubio
              </h4>
              <p className="text-neutral-700 text-sm mb-2">
                Fundador y Agente Oficial Stryker
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>🏆 Mejor Agente de Ventas Stryker España (2021)</li>
                <li>🏆 Excelencia Comercial (2022)</li>
                <li>🏆 Top Performer EMEA Endoscopy (2023)</li>
              </ul>
            </div>

            {/* Sonia */}
            <div className="text-center max-w-xs">
              <img
                src="/images/contacto/sonia-anaya.png"
                alt="Sonia Anaya"
                className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full mx-auto shadow-md border-4 border-yellow-600"
              />
              <h4 className="text-lg sm:text-xl font-semibold text-yellow-600 mt-4">
                Sonia Anaya
              </h4>
              <p className="text-neutral-700 text-sm mb-2">
                Cofundadora y Directora Comercial
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>🏆 Mejor Gestión Comercial (2020)</li>
                <li>🏆 Liderazgo en Ventas (2022)</li>
                <li>🏆 Partner Loyalty Award (2023)</li>
              </ul>
            </div>
          </div>

          {/* Funciones del equipo */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-14">
            {[
              {
                title: "Asesoramiento clínico",
                text: "Guiamos al profesional sanitario en la elección y uso de cada dispositivo Stryker.",
              },
              {
                title: "Formación continua",
                text: "Organizamos sesiones de entrenamiento y demostraciones en hospitales de toda España.",
              },
              {
                title: "Soporte técnico",
                text: "Ofrecemos acompañamiento quirúrgico y mantenimiento especializado de equipos Stryker.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 border border-neutral-200 rounded-2xl shadow-sm w-64 sm:w-72 text-center"
              >
                <p className="font-semibold text-yellow-600">{f.title}</p>
                <p className="text-sm text-neutral-700 mt-2">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VALORES */}
        <div>
          <h3 className="text-center text-2xl sm:text-3xl font-semibold text-yellow-600 mb-10">
            Nuestros valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {valores.map((v, i) => (
              <div
                key={i}
                className="p-6 border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white"
              >
                <h4 className="text-yellow-600 font-semibold mb-2 text-lg">
                  {v.title}
                </h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-neutral-700 mb-5">
            ¿Quieres conocer más sobre nuestras divisiones y soluciones Stryker?
          </p>
          <a
            href="/contacto"
            className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Contáctanos
          </a>
        </div>

      </div>
    </section>
  );
}
