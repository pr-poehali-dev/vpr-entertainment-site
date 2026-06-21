import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const products = [
  { name: 'TDS Headphones Pro', cat: 'Наушники', price: '19 990 ₽', made: 'own', maker: 'V-PRIME', icon: 'Headphones' },
  { name: 'TDS Headphones Lite', cat: 'Наушники', price: '12 990 ₽', made: 'own', maker: 'V-PRIME', icon: 'Headphones' },
  { name: 'Умная тумбочка', cat: 'Мебель', price: '34 500 ₽', made: 'collab', maker: 'Мебель+', icon: 'Box' },
  { name: 'Камера Sony A7', cat: 'Б/У техника', price: '45 000 ₽', made: 'used', maker: 'Sony', icon: 'Camera' },
  { name: 'Микшер Yamaha', cat: 'Б/У техника', price: '12 000 ₽', made: 'used', maker: 'Yamaha', icon: 'Sliders' },
  { name: 'Объектив 50mm', cat: 'Б/У техника', price: '18 000 ₽', made: 'used', maker: 'Canon', icon: 'Aperture' },
];

const filters = [
  { id: 'all', label: 'Все' },
  { id: 'own', label: 'Наши продукты' },
  { id: 'collab', label: 'Коллаборации' },
  { id: 'used', label: 'Б/У техника' },
];

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) => {
    const byFilter = filter === 'all' || p.made === filter;
    const bySearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.maker.toLowerCase().includes(search.toLowerCase());
    return byFilter && bySearch;
  });

  return (
    <Layout>
      <PageHero
        eyebrow="Магазин"
        icon="ShoppingBag"
        title="Наша техника и продукты"
        subtitle="Физические продукты V-PRIME, совместные коллаборации с партнёрами и проверенная Б/У техника."
      />

      <section className="container py-12">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.name} className="group glass p-6 hover:border-electric/40 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-electric/10 text-electric">
                  <Icon name={p.icon} size={30} />
                </div>
                <span
                  className={`text-xs uppercase tracking-wider px-3 py-1 ${
                    p.made === 'own'
                      ? 'bg-electric/20 text-electric'
                      : p.made === 'collab'
                      ? 'bg-white/10 text-white'
                      : 'bg-white/5 text-white/50'
                  }`}
                >
                  {p.made === 'own' ? 'V-PRIME' : p.made === 'collab' ? 'В паре с ' + p.maker : 'Б/У'}
                </span>
              </div>
              <span className="text-electric text-xs uppercase tracking-wider">{p.cat}</span>
              <h3 className="font-display font-600 text-xl uppercase mt-1 mb-4">{p.name}</h3>
              <div className="flex items-center justify-between">
                <span className="font-display font-700 text-2xl">{p.price}</span>
                <Button className="bg-transparent border border-electric/40 hover:bg-electric text-electric hover:text-white rounded-none">
                  В корзину
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
      </section>
    </Layout>
  );
};

export default Shop;
