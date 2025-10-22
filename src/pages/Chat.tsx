import { useParams, Navigate } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";

const companions = {
  luna: {
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
  },
  alex: {
    name: 'Alex',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
  },
  nova: {
    name: 'Nova',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
  },
  kai: {
    name: 'Kai',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
  },
};

const Chat = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !(id in companions)) {
    return <Navigate to="/companions" replace />;
  }

  const companion = companions[id as keyof typeof companions];

  return <ChatInterface companionName={companion.name} companionImage={companion.image} />;
};

export default Chat;
