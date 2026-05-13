'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, AtSign, Send, MessageCircle, ChevronDown } from 'lucide-react'

interface FormState {
  nome: string
  email: string
  telefone: string
  servico: string
  mensagem: string
}

interface Errors {
  [key: string]: string
}

const services = [
  'Fachadas em ACM',
  'Letra Caixa',
  'Luminosos',
  'Sinalizações',
  'Toldos',
  'Projetos Especiais',
]

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return value
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const e: Errors = {}
    if (form.nome.trim().length < 2) e.nome = 'Nome deve ter ao menos 2 caracteres.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido.'
    if (form.telefone.replace(/\D/g, '').length < 10) e.telefone = 'Telefone inválido.'
    if (!form.servico) e.servico = 'Selecione um serviço.'
    if (form.mensagem.trim().length < 10) e.mensagem = 'Mensagem deve ter ao menos 10 caracteres.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    const newValue = name === 'telefone' ? formatPhone(value) : value
    setForm((f) => ({ ...f, [name]: newValue }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const text = [
      `Olá! Vim pelo site zanaoprint.com.br`,
      ``,
      `*Nome:* ${form.nome}`,
      `*E-mail:* ${form.email}`,
      `*Telefone:* ${form.telefone}`,
      `*Serviço:* ${form.servico}`,
      ``,
      `*Mensagem:*`,
      form.mensagem,
    ].join('\n')

    const url = `https://wa.me/5511982857385?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const inputCls = (field: string) =>
    `w-full bg-surface border ${
      errors[field] ? 'border-accent-magenta' : 'border-border'
    } rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary focus:outline-none focus:border-accent-cyan transition-colors duration-200`

  return (
    <section id="contato" className="section-padding bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-3">
            Fale conosco
          </p>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            VAMOS TRANSFORMAR
            <br />
            <span className="text-accent-cyan text-glow-cyan">SUA MARCA?</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-accent-cyan/20 flex items-center justify-center mb-4">
                  <Send size={28} className="text-accent-cyan" />
                </div>
                <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
                  WhatsApp aberto!
                </h3>
                <p className="text-text-secondary">
                  Sua mensagem foi preparada no WhatsApp. Só enviar!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nome: '', email: '', telefone: '', servico: '', mensagem: '' }) }}
                  className="mt-6 text-accent-cyan text-sm underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-text-secondary text-xs mb-1.5 font-medium">
                      Nome *
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      autoComplete="name"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={inputCls('nome')}
                    />
                    {errors.nome && <p className="text-accent-magenta text-xs mt-1">{errors.nome}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-secondary text-xs mb-1.5 font-medium">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={inputCls('email')}
                    />
                    {errors.email && <p className="text-accent-magenta text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefone" className="block text-text-secondary text-xs mb-1.5 font-medium">
                      Telefone *
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className={inputCls('telefone')}
                    />
                    {errors.telefone && <p className="text-accent-magenta text-xs mt-1">{errors.telefone}</p>}
                  </div>
                  <div>
                    <label htmlFor="servico" className="block text-text-secondary text-xs mb-1.5 font-medium">
                      Serviço de interesse *
                    </label>
                    <div className="relative">
                      <select
                        id="servico"
                        name="servico"
                        value={form.servico}
                        onChange={handleChange}
                        className={`${inputCls('servico')} appearance-none pr-10`}
                      >
                        <option value="">Selecione...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
                      />
                    </div>
                    {errors.servico && <p className="text-accent-magenta text-xs mt-1">{errors.servico}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-text-secondary text-xs mb-1.5 font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto..."
                    className={`${inputCls('mensagem')} resize-none`}
                  />
                  {errors.mensagem && <p className="text-accent-magenta text-xs mt-1">{errors.mensagem}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-accent-magenta hover:bg-accent-magenta-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_25px_rgba(255,0,110,0.4)] active:scale-95"
                >
                  <Send size={18} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-surface rounded-xl border border-border p-6 space-y-5">
              <h3 className="font-orbitron font-bold text-text-primary text-lg">
                Informações de Contato
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:leonardo@zanaoprint.com.br"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-cyan transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0 group-hover:bg-accent-cyan/20 transition-colors">
                    <Mail size={16} className="text-accent-cyan" />
                  </div>
                  <span className="text-sm break-all">leonardo@zanaoprint.com.br</span>
                </a>

                <a
                  href="tel:+5511982857385"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-cyan transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0 group-hover:bg-accent-cyan/20 transition-colors">
                    <Phone size={16} className="text-accent-cyan" />
                  </div>
                  <span className="text-sm">(11) 98285-7385</span>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Benedito+Alves+Tur%C3%ADbio,+1574,+Bandeiras,+Osasco,+SP,+06160-004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-cyan transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0 group-hover:bg-accent-cyan/20 transition-colors">
                    <MapPin size={16} className="text-accent-cyan" />
                  </div>
                  <span className="text-sm">Av. Benedito Alves Turíbio, 1574 - Bandeiras, Osasco - SP, 06160-004</span>
                </a>

                <a
                  href="https://instagram.com/zanaoprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-magenta transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-magenta/10 flex items-center justify-center shrink-0 group-hover:bg-accent-magenta/20 transition-colors">
                    <AtSign size={16} className="text-accent-magenta" />
                  </div>
                  <span className="text-sm">@zanaoprint</span>
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/5511982857385?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-whatsapp hover:brightness-110 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg"
            >
              <MessageCircle size={20} fill="white" />
              Chamar no WhatsApp
            </a>

            <div className="bg-surface-2 rounded-xl border border-border p-5">
              <p className="text-text-secondary text-xs leading-relaxed">
                <span className="text-accent-cyan font-semibold">Endereço:</span> Av. Benedito
                Alves Turíbio, 1574 - Bandeiras, Osasco - SP, 06160-004. Atendemos também
                toda a Grande São Paulo e interior.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
