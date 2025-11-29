import Layout from "@/components/Layout";
import home from "../content/home.md";

type HomeAttributes = {
  title: string;
  subtitle: string;
  hero_button_primary: string;
  hero_button_secondary: string;
};

const { attributes, react: HomeContent } = home as {
  attributes: HomeAttributes;
  react: React.FC;
};

export default function Home() {
  const {
    title,
    subtitle,
    hero_button_primary,
    hero_button_secondary,
  } = attributes;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brandBg">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-brandPrimary mb-4">
              {title}
            </h1>
            <p className="text-base md:text-lg text-slate-700 mb-6">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#niveles"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-brandPrimary text-white text-sm font-semibold hover:bg-slate-900 transition"
              >
                {hero_button_primary}
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-brandPrimary text-brandPrimary text-sm font-semibold hover:bg-brandPrimary hover:text-white transition"
              >
                {hero_button_secondary}
              </a>
            </div>
          </div>
          <div className="h-64 md:h-80 bg-[url('/hero-montessori.jpg')] bg-cover bg-center rounded-3xl shadow-lg" />
        </div>
      </section>

      {/* Quiénes somos: body del Markdown */}
      <section
        id="quienes-somos"
        className="bg-white border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
          <div className="prose prose-sm md:prose-base max-w-none text-slate-700">
            <HomeContent />
          </div>
          <div className="bg-brandBg rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-semibold text-brandPrimary mb-2">
              Nuestro enfoque
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Ambientes preparados por rangos de edad.</li>
              <li>Material Montessori original y de alta calidad.</li>
              <li>Respeto al ritmo de cada estudiante.</li>
              <li>Trabajo cercano con las familias.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* (el resto de secciones igual que ya las tenías) */}
      {/* ... */}
    </Layout>
  );
}
