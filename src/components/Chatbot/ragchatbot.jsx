import { useState, useEffect, useRef } from "react";
import { askRAG } from "../../api/RAGapi";
import AIVideo from "../../assets/wingsvideo.mp4"; // <-- your video here

export default function RAGChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const question = input;
    setInput("");
    setLoading(true);

    setMessages((m) => [...m, { role: "user", text: question }]);

    try {
      const { answer, sources } = await askRAG(question);
      setMessages((m) => [...m, { role: "bot", text: answer, sources }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50 p-4">
      <div className="flex w-[80%] h-[80%] bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left: AI Video */}
        <div className="w-[35%] bg-pink-100 flex items-center justify-center">
          <video
            src={AIVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-11/12 h-auto rounded-3xl object-cover shadow-lg"
          />
        </div>

        {/* Right: Chat Section */}
        <div className="w-[65%] flex flex-col">
          <div className="bg-pink-600 text-white px-6 py-4 text-2xl font-bold">
            Trunki AI Helper
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-pink-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-start ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "bot" && (
                  <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center mr-3 mt-1">
                    🎓
                  </div>
                )}

                <div
                  className={`inline-block px-6 py-4 rounded-2xl max-w-[70%] break-words shadow-md ${
                    m.role === "user"
                      ? "bg-purple-500 text-white"
                      : "bg-white text-gray-800 border border-pink-200"
                  }`}
                >
                  {m.text}

                  {m.sources && m.sources.length > 0 && (
                    <details className="text-xs mt-2 opacity-60">
                      <summary>Sources</summary>
                      {m.sources.map((s, j) => (
                        <div key={j}>{s.text.slice(0, 100)}...</div>
                      ))}
                    </details>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-sm text-gray-500 italic">AI is analyzing...</div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="p-4 border-t flex gap-3 items-center bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about your child's learning..."
              className="flex-1 border border-pink-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-6 py-3 rounded-full transition transform hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
