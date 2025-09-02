import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";

const GeminiChat = () => {
  return (
    <section className="flex h-screen bg-background text-foreground">
      {/* Panel Lateral del Historial */}
      <aside className="w-1/4 p-6 border-r border-glass-border flex flex-col">
        <h2 className="text-2xl font-bold mb-6">History Chat</h2>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full glass-strong border-glass-border rounded-lg pl-4 pr-10 py-2"
          />
          <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <div className="flex-grow space-y-3 overflow-y-auto">
          {/* Ejemplos de historial */}
          {[
            "Can AI be creative?",
            "What is artificial intelligence?",
            "How can AI be used to improve NLP?",
          ].map((item, index) => (
            <div key={index} className="p-3 glass rounded-lg cursor-pointer hover:glass-strong transition-all">
              <p className="text-sm truncate">{item}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Panel Principal del Chat */}
      <main className="w-3/4 flex flex-col p-8">
        <div className="flex-grow overflow-y-auto space-y-8">
          {/* Conversación */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold">U</div>
            <p>Hi there!</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <MessageSquare size={16} />
            </div>
            <div className="flex-grow">
              <p>Hello! How can I assist you today?</p>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <button className="hover:text-foreground"><ThumbsUp size={16} /></button>
                <button className="hover:text-foreground"><ThumbsDown size={16} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Input del Usuario */}
        <div className="mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="What are the two types of coffee beans?"
              className="w-full glass-strong border-glass-border rounded-full pl-6 pr-16 py-4 text-lg"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default GeminiChat;