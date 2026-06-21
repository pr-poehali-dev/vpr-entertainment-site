import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/61255452-2a3f-45a8-84a3-b3d91d8e9be7/files/29c6d375-e0c0-49f5-9cae-d8a56b8d9a02.jpg';

const nav = [
  { label: 'О нас', href: '#about' },
  { label: 'Направления', href: '#directions' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Магазин', href: '#shop' },
  { label: 'Контакты', href: '#contacts' },
];

const directions = [
  { icon: 'Video', title: 'Видео-моушен', desc: 'Съёмка, монтаж, фото и сценарий — от идеи до готового продукта.', tag: '01' },
  { icon: 'Cpu', title: 'Разработка ПО', desc: 'Собственная нейросеть, мессенджер и новые цифровые продукты.', tag: '02' },
  { icon: 'Headphones', title: 'Своя техника', desc: 'Наушники закрытого типа с технологией ТДС и будущие устройства.', tag: '03' },
  { icon: 'Handshake', title: 'Партнёрства', desc: 'Совместные продукты с другими брендами и производствами.', tag: '04' },
  { icon: 'Sparkles', title: 'Мероприятия', desc: 'Организация событий любого масштаба под ключ.', tag: '05' },
  { icon: 'Wrench', title: 'Ремонт техники', desc: 'Профессиональный сервис и восстановление устройств.', tag: '06' },
];

const projects = [
  { name: 'V-PRIME Neuro', cat: 'Нейросеть', img: 'Brain', color: 'from-electric/30' },
  { name: 'V-PRIME Talk', cat: 'Мессенджер', img: 'MessageSquare', color: 'from-blue-500/20' },
  { name: 'TDS Headphones', cat: 'Аудиотехника', img: 'Headphones', color: 'from-electric/40' },
  { name: 'Smart Тумба', cat: 'Коллаборация', img: 'Box', color: 'from-blue-400/20' },
];

const products = [
  { name: 'TDS Headphones Pro', cat: 'Наушники', price: '19 990 ₽', made: 'own', maker: 'V-PRIME', icon: 'Headphones' },
  { name: 'Умная тумбочка', cat: 'Мебель', price: '34 500 ₽', made: 'collab', maker: 'Мебель+', icon: 'Box' },
  { name: 'V-Neuro подписка', cat: 'Софт', price: '990 ₽/мес', made: 'own', maker: 'V-PRIME', icon: 'Brain' },
  { name: 'Камера Sony (б/у)', cat: 'Б/У техника', price: '45 000 ₽', made: 'used', maker: 'Sony', icon: 'Camera' },
  { name: 'V-PRIME Talk Plus', cat: 'Софт', price: '490 ₽/мес', made: 'own', maker: 'V-PRIME', icon: 'MessageSquare' },
  { name: 'Микшер (б/у)', cat: 'Б/У техника', price: '12 000 ₽', made: 'used', maker: 'Yamaha', icon: 'Sliders' },
];

const filters = [
  { id: 'all', label: 'Все' },
  { id: 'own', label: 'Наши продукты' },
  { id: 'collab', label: 'Коллаборации' },
  { id: 'used', label: 'Б/У техника' },
];

const Index = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = products.filter((p) => {
    const byFilter = filter === 'all' || p.made === filter;
    const bySearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.maker.toLowerCase().includes(search.toLowerCase());
    return byFilter && bySearch;
  });

  return (
    <div className="min-h-screen bg-ink text-white overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-display font-700 text-xl tracking-[0.2em] text-glow">
            V<span className="text-electric">-</span>PRIME
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-500 text-white/70 hover:text-electric transition-colors uppercase tracking-wider">
                {n.label}
              </a>
            ))}
          </nav>
          <Button className="hidden md:flex bg-electric hover:bg-electric-glow text-white rounded-none px-6 font-display uppercase tracking-wider">
            Связаться
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 px-6 py-6 border-t border-white/10 animate-fade-in">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider text-white/80">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

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
              <Button className="bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-8 text-base font-display uppercase tracking-wider">
                Наши направления
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 text-white rounded-none h-14 px-8 text-base font-display uppercase tracking-wider">
                Смотреть проекты
              </Button>
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

      {/* ABOUT */}
      <section id="about" className="container py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-electric text-sm uppercase tracking-[0.3em]">О нас</span>
            <h2 className="font-display font-700 text-5xl lg:text-6xl uppercase mt-4 leading-tight">
              Кто мы и<br />зачем мы здесь
            </h2>
          </div>
          <div className="space-y-6 text-white/60 text-lg">
            <p>
              V-PRIME Entertainment объединяет творчество и технологии. Мы создаём профессиональный видеоконтент, разрабатываем собственное программное обеспечение и выпускаем инновационную технику.
            </p>
            <p>
              Наша миссия — превращать идеи в законченные продукты: от сценария до премьеры, от концепта до устройства в руках клиента. Мы работаем в команде с лучшими партнёрами индустрии.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[['6', 'Направлений'], ['100%', 'Под ключ'], ['∞', 'Идей в работе']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display font-700 text-4xl text-electric text-glow">{n}</div>
                  <div className="text-sm text-white/40 uppercase tracking-wider mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="container py-20">
        <div className="text-center mb-16">
          <span className="text-electric text-sm uppercase tracking-[0.3em]">Что мы делаем</span>
          <h2 className="font-display font-700 text-5xl lg:text-6xl uppercase mt-4">Направления</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {directions.map((d) => (
            <div key={d.title} className="group bg-ink p-10 hover:bg-electric/5 transition-colors relative">
              <span className="absolute top-6 right-8 font-display text-5xl font-700 text-white/5 group-hover:text-electric/20 transition-colors">{d.tag}</span>
              <div className="w-14 h-14 flex items-center justify-center border border-electric/40 text-electric mb-6 group-hover:bg-electric group-hover:text-white transition-all">
                <Icon name={d.icon} size={26} />
              </div>
              <h3 className="font-display font-600 text-2xl uppercase mb-3">{d.title}</h3>
              <p className="text-white/50">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-electric text-sm uppercase tracking-[0.3em]">Портфолио</span>
            <h2 className="font-display font-700 text-5xl lg:text-6xl uppercase mt-4">Наши проекты</h2>
          </div>
          <p className="text-white/50 max-w-sm">Продукты, которые мы создаём и развиваем прямо сейчас.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.name} className={`group relative aspect-[3/4] overflow-hidden border border-white/10 bg-gradient-to-t ${p.color} to-transparent`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name={p.img} size={80} className="text-white/10 group-hover:text-electric/40 group-hover:scale-110 transition-all duration-500" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-ink to-transparent">
                <span className="text-electric text-xs uppercase tracking-wider">{p.cat}</span>
                <h3 className="font-display font-600 text-xl uppercase mt-1">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="py-28 border-t border-white/10 bg-gradient-to-b from-electric/5 to-transparent">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-electric text-sm uppercase tracking-[0.3em]">Магазин</span>
            <h2 className="font-display font-700 text-5xl lg:text-6xl uppercase mt-4">Наше ПО и техника</h2>
          </div>

          {/* Search + filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск по продуктам..."
                className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 focus:border-electric outline-none text-white placeholder:text-white/30 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-5 h-14 font-display uppercase text-sm tracking-wider border transition-all ${
                    filter === f.id ? 'bg-electric border-electric text-white' : 'border-white/15 text-white/60 hover:border-electric/50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.name} className="group glass p-6 hover:border-electric/40 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-electric/10 text-electric">
                    <Icon name={p.icon} size={30} />
                  </div>
                  <span className={`text-xs uppercase tracking-wider px-3 py-1 ${
                    p.made === 'own' ? 'bg-electric/20 text-electric' : p.made === 'collab' ? 'bg-white/10 text-white' : 'bg-white/5 text-white/50'
                  }`}>
                    {p.made === 'own' ? 'V-PRIME' : p.made === 'collab' ? 'В паре с ' + p.maker : 'Б/У'}
                  </span>
                </div>
                <span className="text-electric text-xs uppercase tracking-wider">{p.cat}</span>
                <h3 className="font-display font-600 text-xl uppercase mt-1 mb-4">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-display font-700 text-2xl">{p.price}</span>
                  <Button className="bg-transparent border border-electric/40 hover:bg-electric text-electric hover:text-white rounded-none">
                    {p.cat === 'Софт' ? 'Скачать' : 'В корзину'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/40">
              <Icon name="SearchX" size={48} className="mx-auto mb-4" />
              Ничего не найдено
            </div>
          )}
        </div>
      </section>

      {/* CONTACTS / CTA */}
      <section id="contacts" className="container py-28">
        <div className="relative glass p-12 lg:p-20 text-center overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric/20 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="font-display font-700 text-4xl lg:text-6xl uppercase">
              Есть идея? <span className="text-electric text-glow">Воплотим</span>
            </h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto text-lg">
              Видео, софт, техника или мероприятие — расскажите о задаче, и мы доведём её от идеи до результата.
            </p>
            <Button className="mt-10 bg-electric hover:bg-electric-glow text-white rounded-none h-14 px-10 text-base font-display uppercase tracking-wider">
              Оставить заявку
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display font-700 text-xl tracking-[0.2em]">V<span className="text-electric">-</span>PRIME</a>
          <p className="text-white/40 text-sm">© 2026 V-PRIME Entertainment. Все права защищены.</p>
          <div className="flex gap-4">
            {['Send', 'Instagram', 'Youtube'].map((i) => (
              <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-white/15 hover:border-electric hover:text-electric transition-colors">
                <Icon name={i} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
