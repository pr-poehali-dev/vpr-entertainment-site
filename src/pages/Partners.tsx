import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const steps = [
  { n: '01', title: 'Идея и цели', desc: 'Обсуждаем концепцию совместного продукта и определяем зоны ответственности.' },
  { n: '02', title: 'Разработка', desc: 'Объединяем компетенции: дизайн и технологии от V-PRIME, производство от партнёра.' },
  { n: '03', title: 'Производство', desc: 'Запускаем выпуск, контролируем качество на каждом этапе.' },
  { n: '04', title: 'Запуск', desc: 'Выводим совместный продукт на рынок под двумя брендами.' },
];

const collabs = [
  { name: 'Умная тумбочка', partner: 'Мебельное производство', status: 'В продаже', icon: 'Box' },
  { name: 'Будущие коллаборации', partner: 'Открыты к предложениям', status: 'В планах', icon: 'Plus' },
];

const Partners = () => (
  <Layout>
    <PageHero
      eyebrow="Партнёры"
      icon="Handshake"
      title="Как мы сотрудничаем"
      subtitle="V-PRIME объединяет усилия с производствами и брендами, чтобы создавать совместные продукты. Мы приносим технологии и дизайн, партнёры — экспертизу и мощности."
    />

    <section className="container py-16">
      <h2 className="font-display font-700 text-4xl uppercase mb-12">Этапы сотрудничества</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {steps.map((s) => (
          <div key={s.n} className="bg-ink p-8 relative">
            <span className="font-display font-700 text-5xl text-electric/20">{s.n}</span>
            <h3 className="font-display font-600 text-xl uppercase mt-4 mb-3">{s.title}</h3>
            <p className="text-white/50 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <h2 className="font-display font-700 text-4xl uppercase mb-12">Совместные продукты</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {collabs.map((c) => (
          <div key={c.name} className="glass p-8 flex items-center gap-6 hover:border-electric/40 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-electric/10 text-electric shrink-0">
              <Icon name={c.icon} size={30} />
            </div>
            <div>
              <span className="text-electric text-xs uppercase tracking-wider">В паре с: {c.partner}</span>
              <h3 className="font-display font-600 text-2xl uppercase mt-1">{c.name}</h3>
              <span className="text-white/40 text-sm">{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <div className="glass p-12 text-center">
        <h2 className="font-display font-700 text-3xl uppercase">Хотите выпустить продукт вместе?</h2>
        <p className="text-white/60 mt-4 max-w-xl mx-auto">Мы открыты к коллаборациям с производствами и брендами.</p>
        <Link to="/contacts">
          <Button className="mt-8 bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-10 font-display uppercase tracking-wider">
            Стать партнёром <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Partners;
