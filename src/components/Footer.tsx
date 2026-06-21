import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { nav } from '@/components/Header';

const Footer = () => (
  <footer className="border-t border-white/10 py-14 mt-10">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="font-display font-700 text-2xl tracking-[0.2em]">
            V<span className="text-electric">-</span>PRIME
          </Link>
          <p className="text-white/40 text-sm mt-4 max-w-xs">
            Видеопродакшн, ПО, техника, партнёрства и мероприятия. От идеи до готового продукта.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {nav.map((n) => (
            <Link key={n.href} to={n.href} className="text-sm text-white/60 hover:text-electric uppercase tracking-wider transition-colors">
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="text-white/60 uppercase tracking-wider text-sm mb-4">Мы в сети</p>
          <div className="flex gap-3">
            {['Send', 'Instagram', 'Youtube'].map((i) => (
              <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-white/15 hover:border-electric hover:text-electric transition-colors">
                <Icon name={i} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-white/30 text-sm mt-12 pt-8 border-t border-white/10">
        © 2026 V-PRIME Entertainment. Все права защищены.
      </p>
    </div>
  </footer>
);

export default Footer;
