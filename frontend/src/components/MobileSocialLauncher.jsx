import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaShareAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const mobileSocialItems = [
  {
    id: "github",
    href: "https://github.com/Mukesh469",
    icon: FaGithub,
    label: "GitHub",
    x: 0,
    y: -58,
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/mukesh-kumar-86a182264/",
    icon: FaLinkedin,
    label: "LinkedIn",
    x: 0,
    y: -110,
  },
  {
    id: "email",
    href: "mailto:mukesh512004@example.com",
    icon: MdEmail,
    label: "Email",
    x: 0,
    y: -162,
  },
  {
    id: "whatsapp",
    href: "https://wa.me/8527747289",
    icon: FaWhatsapp,
    label: "WhatsApp",
    x: 0,
    y: -214,
  },
  {
    id: "phone",
    href: "tel:+918527747289",
    icon: MdPhone,
    label: "Phone",
    x: 0,
    y: -266,
  },
];

const MobileSocialLauncher = () => {
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 z-[210] sm:hidden">
      {mobileSocialItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            initial={false}
            animate={
              isSocialOpen
                ? { x: item.x, y: item.y, opacity: 1, scale: 1, pointerEvents: "auto" }
                : { x: 0, y: 0, opacity: 0, scale: 0.72, pointerEvents: "none" }
            }
            transition={{ type: "spring", stiffness: 330, damping: 20 }}
            className="absolute bottom-0 right-0 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-slate-900/92 text-white shadow-xl backdrop-blur-xl"
          >
            <Icon size={19} />
          </motion.a>
        );
      })}

      <motion.button
        onClick={() => setIsSocialOpen((prev) => !prev)}
        aria-label="Toggle social links"
        whileTap={{ scale: 0.92 }}
        className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/40 bg-cyan-400/95 text-slate-950 shadow-2xl"
      >
        <motion.span
          animate={{ rotate: isSocialOpen ? 135 : 0 }}
          transition={{ duration: 0.25 }}
          className="grid place-items-center"
        >
          <FaShareAlt size={18} />
        </motion.span>
      </motion.button>
    </div>
  );
};

export default MobileSocialLauncher;