import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const HERO_IMG = 'https://cdn.poehali.dev/projects/61255452-2a3f-45a8-84a3-b3d91d8e9be7/files/29c6d375-e0c0-49f5-9cae-d8a56b8d9a02.jpg';

const directions = [
  { icon: 'Video', title: 'Видео-моушен', desc: 'Съёмка, монтаж, фото и сценарий — от идеи до готового продукта.', href: '/video', tag: '01' },
  { icon: 'Cpu', title: 'Разработка ПО', desc: 'Собственная нейросеть, мессенджер и новые цифровые продукты.', href: '/software', tag: '02' },
  { icon: 'Headphones', title: 'Своя техника', desc: 'Наушники закрытого типа с технологией ТДС и будущие устройства.', href: '/shop', tag: '03' },
  { icon: 'Sparkles', title: 'Мероприятия', desc: 'Организация событий любого масштаба под ключ.', href: '/events', tag: '04' },
  { icon: 'Handshake', title: 'Партнёрства', desc: 'Совместные продукты с другими брендами и производствами.', href: '/partners', tag: '05' },
  { icon: 'Wrench', title: 'Ремонт техники', desc: 'Профессиональный сервис и восстановление устройств.', href: '/repair', tag: '06' },
];

const Index = () => (
  <Layout>
    {/* HERO */}
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        <div className="absolute inset-0 border-grid opacity-60" />
      </div>
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-electric/30 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="container relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-electric" />
            <span className="text-electric text-sm uppercase tracking-[0.3em] font-500">Entertainment Company</span>
          </div>
          <h1 className="font-display font-700 leading-[0.95] text-6xl sm:text-7xl lg:text-8xl uppercase">
            Создаём<br />
            <span className="text-electric text-glow">эмоции</span> и<br />
            технологии
          </h1>
          <p className="mt-8 text-lg text-white/60 max-w-xl">
            V-PRIME — это видеопродакшн, собственное ПО, инновационная техника, партнёрские продукты и события. Всё, что движет индустрией развлечений.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/about">
              <Button className="bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-8 text-base font-display uppercase tracking-wider">
                О компании
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 text-white rounded-none h-14 px-8 text-base font-display uppercase tracking-wider">
                Смотреть проекты
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* MARQUEE */}
    <div className="border-y border-white/10 py-5 bg-electric/5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 pr-8">
            {['Видеопродакшн', 'Нейросети', 'TDS Audio', 'Мессенджер', 'События', 'Ремонт', 'Коллаборации'].map((t) => (
              <span key={t} className="font-display uppercase text-2xl tracking-wider text-white/40 flex items-center gap-8">
                {t} <Icon name="Asterisk" size={20} className="text-electric" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* WHO WE ARE */}
    <section className="container py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-electric text-sm uppercase tracking-[0.3em]">Кто мы</span>
          <h2 className="font-display font-700 text-5xl lg:text-6xl uppercase mt-4 leading-tight">
            Творчество<br />и технологии
          </h2>
        </div>
        <div className="space-y-6 text-white/60 text-lg">
          <p>
            V-PRIME Entertainment объединяет профессиональный видеоконтент, собственное программное обеспечение и инновационную технику. Мы превращаем идеи в законченные продукты.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-electric uppercase tracking-wider font-display hover:gap-4 transition-all">
            Подробнее о нас <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* DIRECTIONS */}
    <section className="container pb-28">
      <div className="text-center mb-16">
        <span className="text-electric text-sm uppercase tracking-[0.3em]">Что мы делаем</span>
        <h2 className="font-display font-700 text-5xl lg:text-6xl uppercase mt-4">Направления</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
        {directions.map((d) => (
          <Link key={d.title} to={d.href} className="group bg-ink p-10 hover:bg-electric/5 transition-colors relative">
            <span className="absolute top-6 right-8 font-display text-5xl font-700 text-white/5 group-hover:text-electric/20 transition-colors">{d.tag}</span>
            <div className="w-14 h-14 flex items-center justify-center border border-electric/40 text-electric mb-6 group-hover:bg-electric group-hover:text-white transition-all">
              <Icon name={d.icon} size={26} />
            </div>
            <h3 className="font-display font-600 text-2xl uppercase mb-3">{d.title}</h3>
            <p className="text-white/50 mb-4">{d.desc}</p>
            <span className="inline-flex items-center gap-2 text-electric text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Открыть <Icon name="ArrowRight" size={16} />
            </span>
          </Link>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container pb-28">
      <div className="relative glass p-12 lg:p-20 text-center overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric/20 rounded-full blur-[100px]" />
        <div className="relative z-10">
          <h2 className="font-display font-700 text-4xl lg:text-6xl uppercase">
            Есть идея? <span className="text-electric text-glow">Воплотим</span>
          </h2>
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-lg">
            Видео, софт, техника или мероприятие — расскажите о задаче, и мы доведём её от идеи до результата.
          </p>
          <Link to="/contacts">
            <Button className="mt-10 bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-10 text-base font-display uppercase tracking-wider">
              Оставить заявку
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
