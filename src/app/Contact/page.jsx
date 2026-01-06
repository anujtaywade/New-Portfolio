'use client';

import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(()=>{
            setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
        })
        .catch((error)=>console.log("error in sending email",error))
      
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'anujtaywade456@gmail.com', href: 'mailto:anujtaywade456@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7276587797', href: 'tel:+917276587797' },
    { icon: MapPin, label: 'Location', value: 'Maharashtra, India', href: null }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden text-white ">
      
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">

        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 mb-4 text-sm bg-slate-800/50 rounded-full border border-slate-700/50">
            Available for freelancing
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="text-blue-400">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
         
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-center">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                   
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    placeholder="Your Name"
                    className={`w-full bg-slate-800/50 border ${
                      focused === 'name' ? 'border-blue-400' : 'border-slate-700'
                    } rounded-lg px-4 py-3 outline-none transition-all duration-300 placeholder-gray-500 text-white`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    placeholder="Your Email"
                    className={`w-full bg-slate-800/50 border ${
                      focused === 'email' ? 'border-blue-400' : 'border-slate-700'
                    } rounded-lg px-4 py-3 outline-none transition-all duration-300 placeholder-gray-500 text-white`}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                    placeholder="Subject"
                    className={`w-full bg-slate-800/50 border ${
                      focused === 'subject' ? 'border-blue-400' : 'border-slate-700'
                    } rounded-lg px-4 py-3 outline-none transition-all duration-300 placeholder-gray-500 text-white`}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    placeholder="Your Message"
                    rows="5"
                    className={`w-full bg-slate-800/50 border ${
                      focused === 'message' ? 'border-blue-400' : 'border-slate-700'
                    } rounded-lg px-4 py-3 outline-none transition-all duration-300 placeholder-gray-500 resize-none text-white`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
              </div>
              
            )}
            
          </div>

     
          <div className="space-y-6">
        
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-blue-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-700/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-400">Available for Work</span>
              </div>
              <p className="text-sm text-gray-400">
                Currently accepting all freelance projects and collaboration let me know through mail or social handles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Page;