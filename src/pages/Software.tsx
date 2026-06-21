import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const apps = [
  {
    name: 'V-PRIME Neuro',
    cat: 'Нейросеть',
    icon: 'Brain',
    desc: 'Нейросеть для генерации и обработки контента. Текст, изображения и идеи в одном инструменте.',
    status: 'ready',
    platforms: ['Windows', 'macOS', 'Web'],
  },
  {
    name: 'V-PRIME Talk',
    cat: 'Мессенджер',
    icon: 'MessageSquare',
    desc: 'Защищённый мессенджер нового поколения с фокусом на приватность и скорость.',
    status: 'ready',
    platforms: ['Android', 'iOS', 'Desktop'],
  },
  {
    name: 'Новые продукты',
    cat: 'В разработке',
    icon: 'Sparkles',
    desc: 'Мы постоянно работаем над новым ПО. Следите за обновлениями.',
    status: 'soon',
    platforms: [],
  },
];

const Software = () => (
  <Layout>
    <PageHero
      eyebrow="Разработка ПО"
      icon="Cpu"
      title="Наше программное обеспечение"
      subtitle="Мы создаём собственные цифровые продукты: нейросеть, мессенджер и многое другое в планах. Скачивайте и пользуйтесь."
    />

    <section className="container py-16">
      <div className="grid lg:grid-cols-3 gap-6">
        {apps.map((a) => (
          <div key={a.name} className="glass p-8 flex flex-col hover:border-electric/40 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-electric/10 text-electric mb-6">
              <Icon name={a.icon} size={32} />
            </div>
            <span className="text-electric text-xs uppercase tracking-wider">{a.cat}</span>
            <h3 className="font-display font-600 text-2xl uppercase mt-1 mb-3">{a.name}</h3>
            <p className="text-white/50 text-sm flex-1">{a.desc}</p>
            {a.platforms.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {a.platforms.map((p) => (
                  <span key={p} className="text-xs uppercase tracking-wider px-3 py-1 bg-white/5 text-white/60">{p}</span>
                ))}
              </div>
            )}
            <Button
              disabled={a.status === 'soon'}
              className="mt-6 bg-electric hover:bg-electric-glow disabled:bg-white/5 disabled:text-white/40 text-white rounded-none h-12 font-display uppercase tracking-wider"
            >
              {a.status === 'ready' ? (
                <>
                  <Icon name="Download" size={18} className="mr-2" /> Скачать
                </>
              ) : (
                'Скоро'
              )}
            </Button>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Software;
