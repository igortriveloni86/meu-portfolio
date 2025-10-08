import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircleDashed as MessageCircle,
  Video,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "itms_dev@outlook.com",
      href: "mailto:itms_dev@outlook.com",
      description: "Respondo em até 24h",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (14) 99649-0707",
      href: "tel:+5514996490707",
      description: "WhatsApp disponível",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Marília, SP - Brasil",
      href: "#",
      description: "Trabalho remoto e presencial",
    },
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      label: "Enviar WhatsApp",
      href: "https://wa.me/5514996490707?text=Olá!.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Video,
      label: "Agendar Reunião",
      href: "https://calendar.app.google/u13VNJYLfXj7CqQm9",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="text-purple-400">Conversar</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </motion.div>

        {/* Main Contact Information */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="group block"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {info.label}
                  </h3>
                  <p className="text-purple-400 font-medium mb-2">
                    {info.value}
                  </p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {quickActions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`bg-gradient-to-r ${action.color} p-6 rounded-xl text-white text-center font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3`}
                >
                  <action.icon size={24} />
                  <span>{action.label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
