import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export const nav = [
  { label: 'О нас', href: '/about' },
  { label: 'Видео', href: '/video' },
  { label: 'ПО', href: '/software' },
  { label: 'Мероприятия', href: '/events' },
  { label: 'Ремонт', href: '/repair' },
  { label: 'Партнёры', href: '/partners' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Магазин', href: '/shop' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display font-700 text-xl tracking-[0.2em] text-glow">
          V<span className="text-electric">-</span>PRIME
        </Link>
        <nav className="hidden xl:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className={`text-sm font-500 uppercase tracking-wider transition-colors ${
                pathname === n.href ? 'text-electric' : 'text-white/70 hover:text-electric'
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contacts" className="hidden xl:block">
          <Button className="bg-electric hover:bg-electric-glow text-white rounded-none px-6 font-display uppercase tracking-wider">
            Связаться
          </Button>
        </Link>
        <button className="xl:hidden" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>
      {open && (
        <nav className="xl:hidden flex flex-col gap-1 px-6 py-4 border-t border-white/10 animate-fade-in">
          {[...nav, { label: 'Контакты', href: '/contacts' }].map((n) => (
            <Link
              key={n.href}
              to={n.href}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-wider py-2 ${pathname === n.href ? 'text-electric' : 'text-white/80'}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
