import React, { useState, useEffect, useRef } from 'react';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  AcademicCapIcon,
  CreditCardIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline';

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const phoneNumber = '919731666652';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initial greeting when chat opens
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
          }
        ]);
      }, 500);
    }
  }, [isOpen]);

  // Quick Reply Options
  const quickReplies = [
    { id: 'admissions', label: '📚 Admissions' },
    { id: 'academics', label: '📖 Academics' },
    { id: 'fees', label: '💰 Fees' },
    { id: 'contact', label: '📞 Contact' }
  ];

  // Bot Responses
  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return '👋 Hello! Welcome to Vidya Bharati Public School.\n\nI can help you with:\n📚 Admissions\n📖 Academics\n💰 Fees\n📞 Contact\n\nWhat would you like to know?';
    }
    
    if (msg.includes('admission') || msg.includes('apply') || msg.includes('enroll')) {
      return '📚 **Admissions Open 2026-27!**\n\n**Process:**\n1️⃣ Fill Application\n2️⃣ Document Verification\n3️⃣ Entrance Test\n4️⃣ Fee Payment\n\n**Last Date:** March 31, 2026\n\n📞 For queries: +91 97316 66652';
    }
    
    if (msg.includes('fee') || msg.includes('payment') || msg.includes('cost')) {
      return '💰 **Fee Structure**\n\n**Tuition:** ₹5,000/month\n**Admission:** ₹10,000 (one-time)\n**Exam:** ₹3,000/year\n**Transport:** ₹3,000/month\n\n📞 Contact office for details: +91 97316 66652';
    }
    
    if (msg.includes('academic') || msg.includes('subject') || msg.includes('class')) {
      return '📖 **Academic Programs**\n\n**Primary (1-5):** English, Maths, Science, Social Studies, Hindi\n**Middle (6-8):** + Computer Science, Sanskrit\n**High (9-10):** Board preparation\n\n🎨 Co-curricular: Sports, Arts, Music, Dance';
    }
    
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
      return '📞 **Contact Us**\n\n**Address:**\nVidya Bharati Public School\nNear Subhash Chowk, Bhalki - 585328\nBidar, Karnataka\n\n**Phone:**\n📱 +91 97316 66652\n📱 +91 94494 59013\n\n**Email:**\n✉️ vbpsbhalki@gmail.com\n\n**Hours:** Mon-Fri 8AM-4PM';
    }
    
    if (msg.includes('about') || msg.includes('school') || msg.includes('history')) {
      return '🏫 **About Vidya Bharati**\n\n**Established:** 1995\n**Motto:** "विद्या परम भूषणम्"\n**Tagline:** "Empowering minds, shaping futures"\n\n✅ 500+ Students\n✅ 25+ Teachers\n✅ 98% Success Rate\n✅ 15,000+ Library Books';
    }
    
    if (msg.includes('thank')) {
      return '🙏 Thank you for contacting Vidya Bharati Public School!\n\nIs there anything else I can help you with?';
    }
    
    if (msg.includes('help') || msg.includes('?') || msg.includes('query')) {
      return '🤔 I\'m here to help! Ask me about:\n\n📚 Admissions\n📖 Academics\n💰 Fees\n📞 Contact\n🏫 About Us\n\nJust type what you\'d like to know!';
    }
    
    return '🤔 I\'m not sure about that. Let me connect you with a human expert.\n\n📞 Call: +91 97316 66652\n✉️ Email: vbpsbhalki@gmail.com';
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
        text: response,
        time: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (text) => {
    handleSendMessage(text);
  };

  const openWhatsApp = () => {
    const message = 'Hello! I need information about Vidya Bharati Public School.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
        >
          <ChatBubbleLeftRightIcon className="h-8 w-8" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 h-[500px] flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Vidya Bharati</h3>
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
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 shadow-md rounded-bl-none border border-gray-100'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                  <div className={`text-xs text-gray-400 mt-1 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </div>
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

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply.id}
                onClick={() => handleQuickReply(reply.label)}
                className="text-xs bg-white hover:bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full transition border border-gray-200"
              >
                {reply.label}
              </button>
            ))}
            <button 
              onClick={openWhatsApp}
              className="text-xs bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1.5 rounded-full transition border border-green-200 flex items-center gap-1"
            >
              💬 WhatsApp
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
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition disabled:opacity-50"
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
