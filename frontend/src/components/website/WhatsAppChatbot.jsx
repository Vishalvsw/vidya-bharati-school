import React, { useState, useEffect, useRef } from 'react';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  UserCircleIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  CalendarIcon,
  CreditCardIcon,
  HomeIcon,
  InformationCircleIcon,
  BookOpenIcon,
  UserPlusIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import { ChatBubbleLeftRightIcon as ChatIconSolid } from '@heroicons/react/24/solid';

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', phone: '', email: '' });
  const [step, setStep] = useState('greeting');
  const messagesEndRef = useRef(null);

  const phoneNumber = '919731666652';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            type: 'bot',
            text: '👋 Namaste! Welcome to Vidya Bharati Public School, Bhalki.',
            time: new Date().toLocaleTimeString()
          },
          {
            id: 2,
            type: 'bot',
            text: 'I\'m your virtual assistant. How can I help you today?',
            time: new Date().toLocaleTimeString()
          },
          {
            id: 3,
            type: 'bot',
            text: 'You can ask me about Admissions, Academics, Fees, or just say "Hello" to start!',
            time: new Date().toLocaleTimeString()
          }
        ]);
      }, 500);
    }
  }, [isOpen]);

  // Quick Reply Options
  const quickReplies = [
    { id: 'admissions', label: '📚 Admissions', icon: UserPlusIcon },
    { id: 'academics', label: '📖 Academics', icon: BookOpenIcon },
    { id: 'fees', label: '💰 Fees', icon: CreditCardIcon },
    { id: 'contact', label: '📞 Contact', icon: PhoneIcon },
    { id: 'gallery', label: '🖼️ Gallery', icon: PhotoIcon },
    { id: 'about', label: '🏫 About Us', icon: InformationCircleIcon }
  ];

  // Bot Responses
  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return {
        text: `👋 Hello! Welcome to Vidya Bharati Public School, Bhalki.\n\nI'm here to help you with:\n📚 Admissions\n📖 Academics\n💰 Fees\n📞 Contact\n🏫 About Us\n\nWhat would you like to know?`,
        quickReplies: true
      };
    }
    
    if (msg.includes('admission') || msg.includes('apply') || msg.includes('enroll')) {
      return {
        text: `📚 **Admissions Open for 2026-27!**\n\n**Admission Process:**\n1️⃣ Fill Application Form\n2️⃣ Documents Verification\n3️⃣ Entrance Test & Interview\n4️⃣ Fee Payment & Enrollment\n\n**Documents Required:**\n• Birth Certificate\n• Previous School Report Card\n• Transfer Certificate\n• Aadhar Card\n• Passport Photos (4)\n• Medical Certificate\n\n📅 **Last Date:** March 31, 2026\n\nWould you like to apply online?`,
        quickReplies: [
          { id: 'apply', label: '✅ Apply Now' },
          { id: 'documents', label: '📋 Documents' }
        ]
      };
    }
    
    if (msg.includes('fee') || msg.includes('payment') || msg.includes('cost')) {
      return {
        text: `💰 **Fee Structure 2026-27**\n\n**Tuition Fee:** ₹5,000/month\n**Admission Fee:** ₹10,000 (one-time)\n**Exam Fee:** ₹3,000/year\n**Transport Fee:** ₹3,000/month\n**Library Fee:** ₹2,000/year\n\n📞 For detailed fee structure, contact our office.\n📧 Email: vbpsbhalki@gmail.com`,
        quickReplies: [
          { id: 'contact', label: '📞 Contact' },
          { id: 'payment', label: '💳 Payment' }
        ]
      };
    }
    
    if (msg.includes('academic') || msg.includes('subject') || msg.includes('curriculum')) {
      return {
        text: `📖 **Academic Programs**\n\n**Primary School** (Class 1-5)\nEnglish, Maths, Science, Social Studies, Hindi, Computer Science\n\n**Middle School** (Class 6-8)\nEnglish, Maths, Science, Social Studies, Hindi, Computer Science, Sanskrit\n\n**High School** (Class 9-10)\nEnglish, Maths, Science, Social Studies, Hindi, Computer Science\n\n**Co-Curricular Activities:**\n🎨 Arts & Culture\n🏏 Sports & Games\n🎵 Music & Dance\n🧪 Science Lab`,
        quickReplies: [
          { id: 'sports', label: '🏏 Sports' },
          { id: 'arts', label: '🎨 Arts' }
        ]
      };
    }
    
    if (msg.includes('sport') || msg.includes('game') || msg.includes('cricket') || msg.includes('volleyball')) {
      return {
        text: `🏏 **Sports & Games**\n\n**Outdoor Sports:**\n• Cricket 🏏\n• Volleyball 🏐\n• Kabaddi 🤼\n\n**Indoor Games:**\n• Badminton 🏸\n• Chess ♟️\n• Carroms 🎯\n• Yoga 🧘`,
        quickReplies: true
      };
    }
    
    if (msg.includes('art') || msg.includes('dance') || msg.includes('music')) {
      return {
        text: `🎨 **Arts & Culture**\n\n**Activities:**\n• Dance (Classical & Contemporary) 💃\n• Music (Vocal & Instrumental) 🎵\n• Art & Drawing 🎨\n• Painting 🖌️\n• Drama & Theatre 🎭\n\n**Clubs:**\n• Science Club 🔬\n• Math Club 📐\n• Literary Club 📝\n• Eco Club 🌿\n• IT Club 💻`,
        quickReplies: true
      };
    }
    
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('address')) {
      return {
        text: `📞 **Contact Us**\n\n**Address:**\nVidya Bharati Public School\nNear Subhash Chowk, Bhalki - 585328\nDistrict: Bidar, Karnataka\n\n**Phone Numbers:**\n📱 Rohith Vairage: +91 97316 66652\n📱 Santosh Patil: +91 94494 59013\n\n**Email:**\n✉️ vbpsbhalki@gmail.com\n\n**Office Hours:**\n🕐 Mon-Fri: 8:00 AM - 4:00 PM\n🕐 Sat: 9:00 AM - 1:00 PM`,
        quickReplies: [
          { id: 'whatsapp', label: '💬 WhatsApp' },
          { id: 'location', label: '📍 Location' }
        ]
      };
    }
    
    if (msg.includes('about') || msg.includes('school') || msg.includes('history')) {
      return {
        text: `🏫 **About Vidya Bharati Public School**\n\n**Established:** 1995\n**Motto:** "विद्या परम भूषणम्" (Knowledge is the highest ornament)\n**Tagline:** "Empowering minds, shaping futures"\n\n**Why Choose Us?**\n✅ Quality Education\n✅ Expert Faculty\n✅ Smart Classrooms\n✅ Co-curricular Activities\n✅ Safe Environment\n✅ 98% Success Rate\n\n📚 15,000+ Library Books\n🎯 20:1 Student-Teacher Ratio`,
        quickReplies: [
          { id: 'admissions', label: '📚 Admissions' },
          { id: 'contact', label: '📞 Contact' }
        ]
      };
    }
    
    if (msg.includes('thank')) {
      return {
        text: `🙏 Thank you for contacting Vidya Bharati Public School!\n\nIs there anything else I can help you with?`,
        quickReplies: true
      };
    }
    
    if (msg.includes('help') || msg.includes('support') || msg.includes('?') || msg.includes('query')) {
      return {
        text: `🤔 I'm here to help! You can ask me about:\n\n📚 **Admissions** - Application process, documents, deadlines\n📖 **Academics** - Subjects, curriculum, activities\n💰 **Fees** - Fee structure, payment methods\n📞 **Contact** - Phone, email, address, office hours\n🏫 **About Us** - School history, mission, values\n\nJust type what you'd like to know!`,
        quickReplies: true
      };
    }
    
    return {
      text: `🤔 I'm not sure about that. Let me connect you with a human expert.\n\nIn the meantime, you can:\n📞 Call us: +91 97316 66652\n✉️ Email: vbpsbhalki@gmail.com\n💬 Or continue chatting with me!`,
      quickReplies: true
    };
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: text,
      time: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: response.text,
        time: new Date().toLocaleTimeString(),
        quickReplies: response.quickReplies
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (text) => {
    handleSendMessage(text);
  };

  const handleStartChat = () => {
    // Send to WhatsApp with pre-filled message
    const message = `Hello! I need information about Vidya Bharati Public School.`;
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
        >
          <ChatBubbleLeftRightIcon className="h-8 w-8" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse"></span>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
            Chat with us 💬
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 h-[550px] flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ChatIconSolid className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Vidya Bharati School</h3>
                <p className="text-xs text-green-200 flex items-center gap-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition">
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`rounded-2xl px-4 py-2.5 ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 shadow-md rounded-bl-none border border-gray-100'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                  <div className={`text-xs text-gray-400 mt-1 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </div>
                  
                  {/* Quick Replies from Bot */}
                  {msg.type === 'bot' && msg.quickReplies && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {quickReplies.map((reply) => (
                        <button
                          key={reply.id}
                          onClick={() => handleQuickReply(reply.label)}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition border border-gray-200 flex items-center gap-1"
                        >
                          {reply.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100 rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto">
            <button 
              onClick={handleStartChat}
              className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium hover:bg-green-200 transition whitespace-nowrap"
            >
              💬 WhatsApp
            </button>
            <button 
              onClick={() => handleQuickReply('📚 Admissions')}
              className="flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200 transition whitespace-nowrap"
            >
              📚 Admissions
            </button>
            <button 
              onClick={() => handleQuickReply('💰 Fees')}
              className="flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-200 transition whitespace-nowrap"
            >
              💰 Fees
            </button>
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
            />
            <button
              onClick={() => handleSendMessage(inputMessage)}
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-full hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatbot;
