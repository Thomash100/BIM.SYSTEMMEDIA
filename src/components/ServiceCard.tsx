import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  text: string;
  href?: string;
  icon: LucideIcon;
};

export default function ServiceCard({ title, text, href, icon: Icon }: ServiceCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -5 }}
      className="group h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-glow backdrop-blur-md transition hover:border-cyan/40"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded border border-cyan/30 bg-cyan/10 text-cyan">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{text}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan/50 to-transparent" />
    </motion.div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
