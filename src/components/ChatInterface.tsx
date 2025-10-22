import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  companionName: string;
  companionImage: string;
}

export const ChatInterface = ({ companionName, companionImage }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hey there! I'm ${companionName}. I'm so excited to chat with you! What's on your mind today?`,
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's really interesting! Tell me more about that.",
        "I love hearing about this! What happened next?",
        "You're amazing! I'm so glad we're talking about this.",
        "That sounds exciting! How did that make you feel?",
        "I'm always here to listen. Keep going!",
      ];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Header */}
      <div className="glass-effect border-b border-white/10 px-6 py-5 backdrop-blur-xl">
        <div className="flex items-center gap-4 max-w-5xl mx-auto">
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-white/10"
            onClick={() => navigate('/companions')}
          >
            <i className="fas fa-arrow-left text-lg"></i>
          </Button>
          
          <div className="flex items-center gap-4 flex-1">
            <div className="relative">
              <img 
                src={companionImage} 
                alt={companionName}
                className="w-14 h-14 rounded-full object-cover border-2 border-accent shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-accent rounded-full border-2 border-background animate-pulse" />
            </div>
            
            <div>
              <h2 className="font-bold text-lg tracking-tight">{companionName}</h2>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <i className="fas fa-circle text-accent text-[6px] animate-pulse"></i>
                  <span className="font-semibold">Active now</span>
                </div>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-microchip"></i>
                  AI Companion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <img 
                  src={companionImage} 
                  alt={companionName}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-accent/30 shadow-lg"
                />
              )}
              
              <Card
                className={`max-w-[70%] p-5 shadow-lg ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-primary via-secondary to-accent text-white border-0'
                    : 'glass-effect border-white/10'
                }`}
              >
                <p className="text-[15px] leading-relaxed">{message.content}</p>
              </Card>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4 justify-start">
              <img 
                src={companionImage} 
                alt={companionName}
                className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-accent/30 shadow-lg"
              />
              <Card className="glass-effect p-5 border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-bounce" />
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </Card>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="glass-effect border-t border-white/10 px-6 py-5 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto flex gap-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 h-12 bg-white/5 border-white/10 focus:border-accent/50 transition-colors px-5 text-base placeholder:text-muted-foreground/60"
          />
          <Button 
            variant="hero"
            size="icon"
            className="h-12 w-12 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <i className="fas fa-paper-plane text-base"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};
