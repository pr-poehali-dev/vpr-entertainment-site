import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const projects = [
  { name: 'V-PRIME Neuro', cat: 'Нейросеть', icon: 'Brain', color: 'from-electric/30', desc: 'Собственная нейросеть для генерации и обработки контента.' },
  { name: 'V-PRIME Talk', cat: 'Мессенджер', icon: 'MessageSquare', color: 'from-blue-500/20', desc: 'Защищённый мессенджер нового поколения.' },
  { name: 'TDS Headphones', cat: 'Аудиотехника', icon: 'Headphones', color: 'from-electric/40', desc: 'Наушники закрытого типа с трёхдинамической системой.' },
  { name: 'Умная тумбочка', cat: 'Коллаборация', icon: 'Box', color: 'from-blue-400/20', desc: 'Совместный продукт с мебельным производством.' },
];

const Projects = () => (
  <Layout>
    <PageHero
      eyebrow="Портфолио"
      icon="LayoutGrid"
      title="Наши проекты"
      subtitle="Продукты, которые мы создаём и развиваем прямо сейчас — от софта до собственной техники и партнёрских коллабораций."
    />

    <section className="container py-16">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.name} className={`group relative aspect-[16/10] overflow-hidden border border-white/10 bg-gradient-to-t ${p.color} to-transparent`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon name={p.icon} size={90} className="text-white/10 group-hover:text-electric/40 group-hover:scale-110 transition-all duration-500" />
            </div>
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-ink via-ink/80 to-transparent">
              <span className="text-electric text-xs uppercase tracking-wider">{p.cat}</span>
              <h3 className="font-display font-600 text-2xl uppercase mt-1">{p.name}</h3>
              <p className="text-white/50 text-sm mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Projects;
