import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const values = [
  { icon: 'Target', title: 'От идеи до результата', desc: 'Берём проект под ключ — сценарий, реализация, готовый продукт.' },
  { icon: 'Rocket', title: 'Инновации', desc: 'Разрабатываем собственные технологии: нейросети, аудио ТДС и не только.' },
  { icon: 'Users', title: 'Команда профессионалов', desc: 'Видеографы, разработчики, инженеры и организаторы в одной команде.' },
  { icon: 'Award', title: 'Качество', desc: 'Контролируем каждый этап — результат, которым гордимся.' },
];

const About = () => (
  <Layout>
    <PageHero
      eyebrow="О нас"
      icon="Building2"
      title="Кто мы и зачем мы здесь"
      subtitle="V-PRIME Entertainment — это компания на стыке творчества и технологий. Мы создаём контент, разрабатываем ПО, выпускаем технику и проводим события."
    />

    <section className="container py-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-6 text-white/60 text-lg">
          <p>
            Наша история началась с желания делать вещи иначе. Сегодня V-PRIME объединяет несколько направлений, которые усиливают друг друга: видеопродакшн, разработку программного обеспечения, выпуск собственной техники, партнёрские коллаборации, организацию мероприятий и ремонт.
          </p>
          <p>
            Мы верим, что лучший продукт рождается, когда творчество и инженерия работают вместе. Поэтому мы доводим каждый проект от первой идеи до финального результата.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 content-start">
          {[['6', 'Направлений'], ['100%', 'Под ключ'], ['∞', 'Идей в работе']].map(([n, l]) => (
            <div key={l} className="glass p-6 text-center">
              <div className="font-display font-700 text-4xl text-electric text-glow">{n}</div>
              <div className="text-sm text-white/40 uppercase tracking-wider mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-16">
      <h2 className="font-display font-700 text-4xl uppercase mb-12">Наши ценности</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {values.map((v) => (
          <div key={v.title} className="bg-ink p-8">
            <div className="w-12 h-12 flex items-center justify-center border border-electric/40 text-electric mb-5">
              <Icon name={v.icon} size={24} />
            </div>
            <h3 className="font-display font-600 text-xl uppercase mb-3">{v.title}</h3>
            <p className="text-white/50 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <div className="glass p-12 text-center">
        <h2 className="font-display font-700 text-3xl uppercase">Хотите работать с нами?</h2>
        <Link to="/contacts">
          <Button className="mt-8 bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-10 font-display uppercase tracking-wider">
            Связаться <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
