import Icon from '@/components/ui/icon';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  icon?: string;
}

const PageHero = ({ eyebrow, title, subtitle, icon }: PageHeroProps) => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <div className="absolute inset-0 border-grid opacity-50" />
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-electric/20 rounded-full blur-[120px] animate-glow-pulse" />
    <div className="container relative z-10 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        {icon && <Icon name={icon} size={22} className="text-electric" />}
        <span className="h-px w-12 bg-electric" />
        <span className="text-electric text-sm uppercase tracking-[0.3em] font-500">{eyebrow}</span>
      </div>
      <h1 className="font-display font-700 leading-[0.95] text-5xl sm:text-6xl lg:text-7xl uppercase max-w-4xl">
        {title}
      </h1>
      {subtitle && <p className="mt-8 text-lg text-white/60 max-w-2xl">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
