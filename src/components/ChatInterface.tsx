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
      {/* Header - Mobile optimized */}
      <div className="glass-effect border-b border-white/10 px-4 sm:px-6 py-3 md:py-4 sticky top-0 z-10 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto flex items-center gap-2 md:gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-white/10 shrink-0 touch-manipulation"
            onClick={() => navigate('/companions')}
            aria-label="Back to companions"
          >
            <i className="fas fa-arrow-left text-lg md:text-xl"></i>
          </Button>
          
          <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
            <div className="relative shrink-0">
              <img 
                src={companionImage} 
                alt={companionName}
                className="w-9 h-9 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary/30"
                loading="lazy"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full border-2 border-background" role="status" aria-label="Online" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-heading text-base md:text-xl font-bold tracking-tight truncate">{companionName}</h2>
              <p className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1.5 md:gap-2">
                <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full animate-pulse"></span>
                AI Companion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 md:py-8 safe-area-inset-bottom" role="log" aria-live="polite">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {messages.length === 0 && (
            <div className="text-center py-12 md:py-16 space-y-3 md:space-y-4 px-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="fas fa-comments text-2xl md:text-3xl text-primary"></i>
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold">Start a Conversation</h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                Say hello to {companionName} and begin your journey. Ask anything you'd like!
              </p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2.5 md:gap-4 animate-fade-in-up ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              onMouseEnter={() => setHoveredMessageId(message.id)}
              onMouseLeave={() => setHoveredMessageId(null)}
            >
              {message.role === 'assistant' && (
                <img 
                  src={companionImage} 
                  alt={companionName}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
              )}
              
              <div className={`max-w-[80%] sm:max-w-[75%] md:max-w-[70%] space-y-1.5 md:space-y-2 ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`px-4 py-3 md:px-6 md:py-4 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'glass-card'
                  }`}
                >
                  <p className="text-xs md:text-sm leading-relaxed break-words">{message.content}</p>
                </div>
                
                {hoveredMessageId === message.id && (
                  <div className="flex items-center gap-2 px-2 animate-fade-in">
                    <span className="text-[10px] md:text-xs text-muted-foreground">
                      {formatTime(message.timestamp)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 md:h-7 md:w-7 hover:bg-white/10 touch-manipulation"
                      onClick={() => handleCopy(message.content)}
                      aria-label="Copy message"
                    >
                      <i className="fas fa-copy text-[10px] md:text-xs"></i>
                    </Button>
                  </div>
                )}
              </div>
              
              {message.role === 'user' && (
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user text-sm md:text-base text-primary"></i>
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-2.5 md:gap-4 animate-fade-in">
              <img 
                src={companionImage} 
                alt={companionName}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="glass-card px-4 py-3 md:px-6 md:py-4 rounded-2xl">
                <div className="flex gap-1.5 md:gap-2">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="glass-effect border-t border-white/10 px-4 sm:px-6 py-4 md:py-6 backdrop-blur-xl safe-area-inset-bottom">
        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2 md:gap-3"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask ${companionName} anything...`}
              className="flex-1 glass-effect border-white/20 focus-visible:ring-primary text-sm md:text-base py-5 md:py-6 px-4 md:px-6"
              aria-label={`Message ${companionName}`}
            />
            <Button 
              type="submit"
              variant="hero"
              size="lg"
              className="px-5 md:px-8 shrink-0 touch-manipulation"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane text-sm md:text-base"></i>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
