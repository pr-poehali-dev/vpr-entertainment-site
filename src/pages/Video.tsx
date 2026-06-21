import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const services = [
  { icon: 'Lightbulb', title: 'Идея и сценарий', desc: 'Разрабатываем концепцию и сценарий от первой мысли.' },
  { icon: 'Video', title: 'Съёмка', desc: 'Профессиональная видеосъёмка любого формата.' },
  { icon: 'Camera', title: 'Фото', desc: 'Фотосъёмка для брендов, событий и продуктов.' },
  { icon: 'Clapperboard', title: 'Монтаж и моушен', desc: 'Монтаж, цветокоррекция, анимация и motion-дизайн.' },
];

const Video = () => (
  <Layout>
    <PageHero
      eyebrow="Видеопродакшн"
      icon="Video"
      title="Видео-моушен от идеи до результата"
      subtitle="Профессиональная съёмка, монтаж, фото и сценарий. Берём проект под ключ — от концепции до готового видео."
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
      <div className="glass p-12 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display font-700 text-4xl uppercase">Полный цикл производства</h2>
          <p className="text-white/60 mt-6">
            Вам не нужно искать разных подрядчиков. Мы закрываем весь процесс: придумываем идею, пишем сценарий, снимаем, монтируем и сдаём готовый продукт.
          </p>
        </div>
        <div className="text-center lg:text-right">
          <Link to="/contacts">
            <Button className="bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-10 font-display uppercase tracking-wider">
              Заказать съёмку <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Video;
