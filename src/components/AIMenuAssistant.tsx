import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function AIMenuAssistant() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
  if (!query.trim()) return;

  setLoading(true);
  setAnswer("");

  try {
    const { data: menuItems, error } = await supabase
      .from("menu_items")
      .select("name, description, base_price");

    if (error) throw error;

    const q = query.toLowerCase();

    let recommendations = menuItems || [];

    if (q.includes("under")) {
      const match = q.match(/\d+/);
      if (match) {
        const price = Number(match[0]);
        recommendations = recommendations.filter(
          (item: any) => item.base_price <= price
        );
      }
    }

    if (q.includes("spicy")) {
      recommendations = recommendations.filter((item: any) =>
        `${item.name} ${item.description || ""}`
          .toLowerCase()
          .includes("spicy")
      );
    }

    if (
      q.includes("veg") ||
      q.includes("vegetarian")
    ) {
      recommendations = recommendations.filter((item: any) =>
        item.name.toLowerCase().includes("veg") ||
        item.name.toLowerCase().includes("paneer")
      );
    }

    if (recommendations.length === 0) {
      recommendations = menuItems || [];
    }

    const top = recommendations.slice(0, 3);

    setAnswer(
      `🍽️ I recommend:\n\n${top
        .map(
          (item: any) =>
            `• ${item.name} - ₹${item.base_price}`
        )
        .join("\n")}`
    );
  } catch (err) {
    console.error(err);
    setAnswer("Couldn't fetch menu.");
  }

  setLoading(false);
};

  return (
    <div className="bg-gray-100 rounded-xl p-4 my-4 border">
      <h2 className="text-lg font-bold mb-3">
        🤖 Ask AI What To Order
      </h2>

      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. spicy veg under ₹250"
          className="flex-1 border rounded-lg p-2"
        />

        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-blue-600 text-white rounded-lg px-4"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </div>

      {answer && (
        <div className="mt-4 bg-white rounded-lg p-3 border">
          {answer}
        </div>
      )}
    </div>
  );
}