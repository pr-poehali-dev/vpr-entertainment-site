import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const services = [
  { icon: 'Calendar', title: 'Планирование', desc: 'Концепция, программа и тайминг события под ваши цели.' },
  { icon: 'Speaker', title: 'Техника и звук', desc: 'Профессиональное оборудование, свет и звук.' },
  { icon: 'Users', title: 'Координация', desc: 'Полное сопровождение и управление командой на площадке.' },
  { icon: 'PartyPopper', title: 'Под ключ', desc: 'Берём на себя всё — от идеи до финального аккорда.' },
];

const types = ['Корпоративы', 'Концерты', 'Презентации', 'Фестивали', 'Частные события', 'Шоу-программы'];

const Events = () => (
  <Layout>
    <PageHero
      eyebrow="Мероприятия"
      icon="Sparkles"
      title="Организация мероприятий"
      subtitle="Проводим события любого масштаба под ключ — от идеи и сценария до техники, координации и яркого финала."
    />

    <section className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {services.map((s) => (
          <div key={s.title} className="bg-ink p-8">
            <div className="w-12 h-12 flex items-center justify-center border border-electric/40 text-electric mb-5">
              <Icon name={s.icon} size={24} />
            </div>
            <h3 className="font-display font-600 text-xl uppercase mb-3">{s.title}</h3>
            <p className="text-white/50 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <h2 className="font-display font-700 text-4xl uppercase mb-10">Что мы проводим</h2>
      <div className="flex flex-wrap gap-3">
        {types.map((t) => (
          <span key={t} className="glass px-6 py-3 font-display uppercase tracking-wider text-sm">{t}</span>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <div className="glass p-12 text-center">
        <h2 className="font-display font-700 text-3xl uppercase">Организуем ваше событие</h2>
        <Link to="/contacts">
          <Button className="mt-8 bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-10 font-display uppercase tracking-wider">
            Обсудить мероприятие <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Events;
