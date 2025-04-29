import { Result } from "@e2b/code-interpreter";
import { useState } from "react";
import { ToolResult } from "../lib/types";
import { RenderResult } from "./charts";
import { AlertTriangle, ChartNoAxesCombined } from "lucide-react";

export function ToolOutput({ result }: { result: ToolResult | undefined }) {
  const [viewMode, setViewMode] = useState<"static" | "interactive">(
    "interactive"
  );

  if (!result) return null;
  const toolResult = result.find((r) => r.toolName === "runCode")?.result;

  if (toolResult?.error) {
    return (
      <div className="text-error border border-error/20 rounded-[8px] bg-error/10 text-body-s">
        <div className="flex items-center gap-2 pt-4 px-4">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-medium">Error: {toolResult.error.name}</span>
        </div>
        <pre className="overflow-auto p-4 font-mono">{toolResult.error.traceback}</pre>
      </div>
    );
  }

  return toolResult.results.map((result: Result, index: number) => (
    <div key={index} className="flex flex-col border border-grid rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between p-2">
        <div className="p-2 font-medium text-text-main text-body-s flex items-center gap-2">
          <ChartNoAxesCombined className="w-4 h-4 text-primary" />
          {result.extra?.chart.title}
        </div>
        <div className="flex justify-end border border-grid rounded-[8px] overflow-hidden">
          <button
            className={`px-3 py-2 font-medium text-body-s transition-colors duration-120 ${
              viewMode === "static" ? "bg-primary-lite text-primary" : "hover:bg-primary-lite"
            }`}
            onClick={() => setViewMode("static")}
          >
            Static
          </button>
          <button
            className={`px-3 py-2 font-medium text-body-s transition-colors duration-120 ${
              viewMode === "interactive"
                ? "bg-primary-lite text-primary"
                : "hover:bg-primary-lite"
            }`}
            onClick={() => setViewMode("interactive")}
          >
            Interactive
          </button>
        </div>
      </div>
      <div className="p-4">
        <RenderResult result={result} viewMode={viewMode} />
      </div>
    </div>
  ));
}
