import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Inbox, Trash2, ChevronDown, ChevronUp, Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { personalData } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ContactMessage } from '../types';

export default function Contact() {
  const [messages, setMessages] = useLocalStorage<ContactMessage[]>('contact_messages', []);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Your email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please type a brief message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on write
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate dynamic network send delay
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: new Date().toISOString()
      };

      setMessages((prev) => [newMessage, ...prev]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto dismiss success toast
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const handleClearMessages = () => {
    if (window.confirm('Clear all local contact messages?')) {
      setMessages([]);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div id="contact-container" className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-indigo-500 dark:text-indigo-400">
            <Mail size={16} />
            <span className="text-xs font-mono tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-900 dark:text-white">
            Let's build something next
          </h2>
          <p className="text-sm text-slate-605 dark:text-slate-400 max-w-xl">
            Have an exciting pipeline project, general questions, or want to say hello? Fill out the form and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Card left side: Info details */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-sans uppercase tracking-wider">
                Contact Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase">Email</h4>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline break-all"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase">Location</h4>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalData.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase mb-3">Follow Me</h4>
                <div className="flex flex-wrap gap-2">
                  <a href={personalData.github} target="_blank" rel="noopener noreferrer" title="GitHub"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                    <Github size={13} /><span>GitHub</span>
                  </a>
                  <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                    <Linkedin size={13} /><span>LinkedIn</span>
                  </a>
                  <a href={personalData.instagram} target="_blank" rel="noopener noreferrer" title="Instagram"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-300 dark:hover:border-pink-700 transition-all">
                    <Instagram size={13} /><span>Instagram</span>
                  </a>
                  <a href={personalData.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-all">
                    <Facebook size={13} /><span>Facebook</span>
                  </a>
                  <a href={personalData.twitter} target="_blank" rel="noopener noreferrer" title="X (Twitter)"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                    <Twitter size={13} /><span>X (Twitter)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Local Inbox toggle widget (if messages exist, let them easily see them) */}
            {messages.length > 0 && (
              <div className="border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-2xl overflow-hidden transition-all shadow-xs animate-fade-in">
                <button
                  onClick={() => setShowInbox(!showInbox)}
                  className="w-full flex items-center justify-between p-4 text-xs font-mono text-slate-650 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <Inbox size={14} />
                    <span>Local Sandbox Inbox ({messages.length})</span>
                  </div>
                  {showInbox ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {showInbox && (
                  <div className="p-4 border-t border-slate-100 dark:border-slate-800/60 space-y-3 max-h-64 overflow-y-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">Sent messages are stored locally</span>
                      <button
                        onClick={handleClearMessages}
                        className="text-[10px] text-red-500 hover:underline flex items-center space-x-1 cursor-pointer font-bold"
                      >
                        <Trash2 size={10} />
                        <span>Clear All</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {messages.map((msg) => (
                        <div key={msg.id} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl relative border border-slate-100 dark:border-slate-800/40 space-y-1">
                          <button
                            onClick={() => handleDeleteMessage(msg.id)}
                            className="absolute top-2 right-2 text-slate-400 hover:text-red-500 cursor-pointer"
                            title="Delete record"
                          >
                            <Trash2 size={12} />
                          </button>
                          <div className="text-[10px] font-mono text-slate-450 dark:text-slate-550 flex items-center justify-between pr-4 font-semibold">
                            <span>{msg.name}</span>
                            <span>{new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                          <div className="text-[11px] font-bold text-slate-850 dark:text-slate-100">
                            {msg.subject}
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal line-clamp-2">
                            {msg.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Form right side: Inputs */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4 font-sans max-w-2xl">
              
              {/* Success Notification */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40 flex items-start space-x-3 text-green-800 dark:text-green-300 animate-slide-up">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <div className="text-xs leading-relaxed">
                    <span className="font-bold">Message Submitted!</span> Your contact details were logged in the local database successfully. Look in the "Local Sandbox Inbox" sidebar view!
                  </div>
                </div>
              )}

              {/* Grid inputs for name and email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 animate-none">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm transition-all focus:outline-hidden ${
                      errors.name 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-400' 
                        : 'border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11.5px] text-red-500 flex items-center space-x-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 animate-none">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm transition-all focus:outline-hidden ${
                      errors.email 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-400' 
                        : 'border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11.5px] text-red-500 flex items-center space-x-1">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-1.5 animate-none">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this regarding?"
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm transition-all focus:outline-hidden ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-1 focus:ring-red-400' 
                      : 'border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11.5px] text-red-500 flex items-center space-x-1">
                    <AlertCircle size={12} />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message text area */}
              <div className="space-y-1.5 animate-none">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Message Body
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can I help you today? Please write at least 10 characters."
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm transition-all focus:outline-hidden resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-1 focus:ring-red-450' 
                      : 'border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11.5px] text-red-500 flex items-center space-x-1">
                    <AlertCircle size={12} />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA button */}
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-550 dark:text-white dark:hover:bg-indigo-500 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider font-mono text-center shadow-md shadow-indigo-100 dark:shadow-none"
              >
                {isSubmitting ? (
                  <span>Dispatching...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
