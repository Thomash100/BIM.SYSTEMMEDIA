import { motion } from 'framer-motion';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-normal text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg">{text}</p> : null}
    </motion.div>
  );
}
