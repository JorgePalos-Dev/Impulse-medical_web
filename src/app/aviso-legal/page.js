export const metadata = {
  title: "Aviso Legal | Impulse Medical Service",
  description:
    "Aviso legal y condiciones de uso del sitio web de Impulse Medical Service S.L.",
};

export default function AvisoLegal() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 mt-[90px] text-neutral-800 leading-relaxed bg-white">
      {/* Título principal */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-yellow-600 text-center">
        Aviso Legal
      </h1>

      {/* Intro */}
      <p className="mb-6 text-base sm:text-lg">
        En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002,
        de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), se facilita la siguiente información:
      </p>

      {/* Secciones */}
      <Section
        title="1. Datos identificativos"
        text={
          <>
            El sitio web <strong>impulsemedical.es</strong> (en adelante, “el sitio web”) es titularidad de{" "}
            <strong>Impulse Medical Service S.L.</strong>, con domicilio social en Madrid (España),
            CIF B87370458, e inscrita en el Registro Mercantil de Madrid.
          </>
        }
      />

      <Section
        title="2. Objeto del sitio web"
        text="Este sitio web tiene carácter exclusivamente informativo. Su finalidad es dar a conocer la
        actividad profesional de Impulse Medical Service S.L. como empresa colaboradora de Stryker."
      />

      <Section
        title="3. Propiedad intelectual e industrial"
        text="Todos los contenidos del sitio web (textos, imágenes, logotipos, combinaciones de colores,
        estructura y diseño, etc.) son titularidad de Impulse Medical Service S.L. o de sus legítimos
        propietarios, quedando expresamente prohibida su reproducción total o parcial sin
        autorización previa."
      />

      <Section
        title="4. Responsabilidad"
        text="Impulse Medical Service S.L. no se hace responsable de los posibles errores de contenido
        que pudieran aparecer en el sitio web, ni de los daños que pudieran derivarse del uso de la
        información publicada. El sitio web puede incluir enlaces a sitios de terceros, sobre los cuales
        la empresa no tiene control alguno."
      />

      <Section
        title="5. Protección de datos"
        text="Este sitio web no recopila datos personales de los usuarios. En caso de habilitar formularios
        de contacto en el futuro, la recogida y tratamiento de datos se realizará conforme al Reglamento
        (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD)."
      />

      <Section
        title="6. Legislación aplicable"
        text="La relación entre Impulse Medical Service S.L. y el usuario se regirá por la normativa
        española vigente, y cualquier controversia se someterá a los Juzgados y Tribunales de
        la ciudad de Madrid."
      />

      <Section
        title="7. Política de privacidad y tratamiento de datos"
        text={
          <>
            Los datos personales que el usuario facilite voluntariamente a través del formulario de contacto
            del sitio web serán tratados con la única finalidad de responder a su solicitud o consulta.{" "}
            <br className="hidden sm:block" />
            Impulse Medical Service S.L. no cederá dichos datos a terceros y los conservará únicamente
            durante el tiempo necesario para gestionar la comunicación.{" "}
            <br className="hidden sm:block" />
            El usuario podrá ejercer sus derechos de acceso, rectificación, supresión y oposición mediante
            comunicación escrita a la dirección de correo electrónico corporativo indicada en el apartado de
            datos de contacto.
          </>
        }
      />

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="/contacto"
          className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Contactar con Impulse Medical
        </a>
      </div>
    </main>
  );
}

/* --- Componente auxiliar para cada sección --- */
function Section({ title, text }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-yellow-600">
        {title}
      </h2>
      <p className="text-neutral-700 text-sm sm:text-base">{text}</p>
    </section>
  );
}
