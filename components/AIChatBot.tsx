import React, { useState, useRef } from "react";
import { Sparkles, Send, Loader2 } from "lucide-react";
import {
  Flex,
  Box,
  Text,
  ScrollArea,
  TextField,
  IconButton,
  Card,
  Inset,
} from "@radix-ui/themes";
import { askAI } from "../services/geminiService.ts";

export const AIChatBot: React.FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setResponse(null);
    const aiResp = await askAI(input);
    setResponse(aiResp);
    setLoading(false);
    setInput("");
  };

  return (
    <Flex direction="column" height="100%">
      <Flex align="center" gap="3" mb="5">
        <Box
          p="2"
          style={{
            backgroundColor: "var(--indigo-a3)",
            color: "var(--indigo-11)",
            border: "1px solid var(--indigo-a5)",
          }}
        >
          <Sparkles size={16} />
        </Box>
        <Text
          size="1"
          weight="bold"
          color="gray"
          style={{ textTransform: "uppercase", letterSpacing: "0.2em" }}
        >
          Knowledge Assistant
        </Text>
      </Flex>

      <ScrollArea
        scrollbars="vertical"
        style={{ flexGrow: 1, marginBottom: "var(--space-5)", minHeight: 140 }}
      >
        <Flex direction="column" justify="end" minHeight="100%" pb="4">
          {response ? (
            <Card
              variant="classic"
              style={{
                padding: "var(--space-4)",
                backgroundColor: "var(--slate-3)",
              }}
            >
              <Text
                size="1"
                weight="bold"
                color="indigo"
                style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
                mb="2"
                display="block"
              >
                Response
              </Text>
              <Text size="2" color="gray" style={{ lineHeight: "1.6" }}>
                {response}
              </Text>
            </Card>
          ) : (
            <Box
              p="5"
              style={{
                border: "1px dashed var(--slate-6)",
                textAlign: "center",
              }}
            >
              <Text size="2" color="gray" weight="medium">
                Ask me about Christian's stack or philosophy.
              </Text>
            </Box>
          )}
        </Flex>
      </ScrollArea>

      <form onSubmit={handleSubmit}>
        <TextField.Root
          size="3"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        >
          <TextField.Slot p="0" mr="1">
            <IconButton
              variant="ghost"
              type="submit"
              disabled={loading || !input.trim()}
              loading={loading}
              highContrast
            >
              <Send size={18} />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
      </form>
    </Flex>
  );
};
