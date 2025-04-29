import { Message } from "ai";
import { BotIcon, UserIcon } from "lucide-react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ToolOutput } from "./tooloutput";
import { ToolResult } from "../lib/types";

export function MessageComponent({ message }: { message: Message }) {
  return (
    <div
      key={message.id}
      className={`px-4 ${message.role === "user" ? "bg-primary-lite" : ""}`}
    >
      <div
        className={`flex gap-4 mx-auto w-full max-w-[1140px] py-4 ${
          message.role === "user" ? "items-center" : ""
        }`}
      >
        <div className="h-fit rounded-md flex items-center justify-center">
          {message.role === "user" ? (
            <UserIcon className="mt-1 w-6 h-6 text-primary" />
          ) : (
            <BotIcon className="mt-1 w-6 h-6 text-primary" />
          )}
        </div>
        <div className="overflow-hidden flex-1 flex flex-col gap-2">
          <Markdown
            components={{
              p(props) {
                return <p className="text-body-m leading-body text-text-main" {...props} />;
              },
              h1(props) {
                return <h1 className="text-h1 font-extrabold leading-heading tracking-h1 text-text-main" {...props} />;
              },
              h2(props) {
                return <h2 className="text-h2 font-bold leading-heading tracking-h2 text-text-main" {...props} />;
              },
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    PreTag="div"
                    className="border border-grid text-sm !rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                    language={match[1]}
                    style={oneLight}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={`font-mono font-medium ${className}`}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </Markdown>
          <ToolOutput result={message.toolInvocations as ToolResult} />
        </div>
      </div>
    </div>
  );
}
