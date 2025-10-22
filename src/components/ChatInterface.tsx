import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

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
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hoveredMessageId, setHoveredMessageId] = useState<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
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
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Thanks for your message! I'm ${companionName}, and I'd love to continue our conversation. This is a demo response - in a full implementation, I would provide more contextual and personalized replies based on my unique personality and expertise.`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied to clipboard",
      duration: 2000,
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-hero)' }}>
      {/* Header - Reduced height */}
      <div className="glass-effect border-b border-white/10 px-6 py-4 sticky top-0 z-10 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-white/10"
            onClick={() => navigate('/companions')}
            aria-label="Back to companions"
          >
            <i className="fas fa-arrow-left text-xl"></i>
          </Button>
          
          <div className="flex items-center gap-4 flex-1">
            <div className="relative">
              <img 
                src={companionImage} 
                alt={companionName}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                loading="lazy"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-accent rounded-full border-2 border-background" role="status" aria-label="Online" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold tracking-tight">{companionName}</h2>
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                AI Companion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8" role="log" aria-live="polite">
        <div className="max-w-4xl mx-auto space-y-8">
          {messages.length === 0 && (
            <div className="text-center py-16 space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-comments text-3xl text-primary"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold">Start a Conversation</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Say hello to {companionName} and begin your journey. Ask anything you'd like!
              </p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 animate-fade-in-up ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              onMouseEnter={() => setHoveredMessageId(message.id)}
              onMouseLeave={() => setHoveredMessageId(null)}
            >
              {message.role === 'assistant' && (
                <img 
                  src={companionImage} 
                  alt={companionName}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
              )}
              
              <div className={`max-w-[70%] space-y-2 ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`px-6 py-4 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'glass-card'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                
                {hoveredMessageId === message.id && (
                  <div className="flex items-center gap-2 px-2 animate-fade-in">
                    <span className="text-xs text-muted-foreground">
                      {formatTime(message.timestamp)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 hover:bg-white/10"
                      onClick={() => handleCopy(message.content)}
                      aria-label="Copy message"
                    >
                      <i className="fas fa-copy text-xs"></i>
                    </Button>
                  </div>
                )}
              </div>
              
              {message.role === 'user' && (
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user text-primary"></i>
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4 animate-fade-in">
              <img 
                src={companionImage} 
                alt={companionName}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="glass-card px-6 py-4 rounded-2xl">
                <div className="flex gap-2">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="glass-effect border-t border-white/10 px-6 py-6 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-3"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask ${companionName} anything...`}
              className="flex-1 glass-effect border-white/20 focus-visible:ring-primary text-base py-6 px-6"
              aria-label={`Message ${companionName}`}
            />
            <Button 
              type="submit"
              variant="hero"
              size="lg"
              className="px-8"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
