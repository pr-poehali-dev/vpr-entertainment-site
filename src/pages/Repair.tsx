import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const items = [
  { icon: 'Headphones', title: 'Аудиотехника', desc: 'Наушники, колонки, микшеры и звуковое оборудование.' },
  { icon: 'Camera', title: 'Фото и видео', desc: 'Камеры, объективы, стабилизаторы и аксессуары.' },
  { icon: 'Laptop', title: 'Компьютеры', desc: 'Ноутбуки, ПК и комплектующие.' },
  { icon: 'Smartphone', title: 'Гаджеты', desc: 'Смартфоны, планшеты и портативная электроника.' },
];

const steps = [
  { n: '01', t: 'Диагностика', d: 'Определяем причину неисправности.' },
  { n: '02', t: 'Согласование', d: 'Озвучиваем стоимость и сроки.' },
  { n: '03', t: 'Ремонт', d: 'Восстанавливаем технику качественно.' },
  { n: '04', t: 'Выдача', d: 'Возвращаем устройство с гарантией.' },
];

const Repair = () => (
  <Layout>
    <PageHero
      eyebrow="Сервис"
      icon="Wrench"
      title="Ремонт техники"
      subtitle="Профессиональный сервис и восстановление устройств. Чиним аудио, фото, видео и компьютерную технику."
    />

    <section className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {items.map((i) => (
          <div key={i.title} className="bg-ink p-8">
            <div className="w-12 h-12 flex items-center justify-center border border-electric/40 text-electric mb-5">
              <Icon name={i.icon} size={24} />
            </div>
            <h3 className="font-display font-600 text-xl uppercase mb-3">{i.title}</h3>
            <p className="text-white/50 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <h2 className="font-display font-700 text-4xl uppercase mb-12">Как мы работаем</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {steps.map((s) => (
          <div key={s.n} className="bg-ink p-8">
            <span className="font-display font-700 text-5xl text-electric/20">{s.n}</span>
            <h3 className="font-display font-600 text-xl uppercase mt-4 mb-3">{s.t}</h3>
            <p className="text-white/50 text-sm">{s.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <div className="glass p-12 text-center">
        <h2 className="font-display font-700 text-3xl uppercase">Нужен ремонт?</h2>
        <Link to="/contacts">
          <Button className="mt-8 bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-10 font-display uppercase tracking-wider">
            Оставить заявку <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Repair;
