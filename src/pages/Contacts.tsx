import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';

const contacts = [
  { icon: 'Mail', label: 'Почта', value: 'hello@v-prime.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (000) 000-00-00' },
  { icon: 'Send', label: 'Telegram', value: '@vprime' },
  { icon: 'MapPin', label: 'Адрес', value: 'Россия' },
];

const Contacts = () => (
  <Layout>
    <PageHero
      eyebrow="Контакты"
      icon="MessageCircle"
      title="Свяжитесь с нами"
      subtitle="Расскажите о вашей задаче — видео, софт, техника, мероприятие или партнёрство. Мы ответим и предложим решение."
    />

    <section className="container py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 h-fit">
          {contacts.map((c) => (
            <div key={c.label} className="bg-ink p-8">
              <div className="w-12 h-12 flex items-center justify-center border border-electric/40 text-electric mb-5">
                <Icon name={c.icon} size={24} />
              </div>
              <span className="text-white/40 text-xs uppercase tracking-wider">{c.label}</span>
              <p className="font-display text-lg mt-1">{c.value}</p>
            </div>
          ))}
        </div>

        <form className="glass p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <h2 className="font-display font-600 text-2xl uppercase">Оставить заявку</h2>
          <input placeholder="Имя" className="w-full h-13 px-4 py-3 bg-white/5 border border-white/10 focus:border-electric outline-none text-white placeholder:text-white/30 transition-colors" />
          <input placeholder="Телефон или email" className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-electric outline-none text-white placeholder:text-white/30 transition-colors" />
          <textarea placeholder="Опишите задачу" rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-electric outline-none text-white placeholder:text-white/30 transition-colors resize-none" />
          <Button type="submit" className="w-full bg-electric hover:bg-electric-glow text-white rounded-none h-14 font-display uppercase tracking-wider">
            Отправить <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </form>
      </div>
    </section>
  </Layout>
);

export default Contacts;
