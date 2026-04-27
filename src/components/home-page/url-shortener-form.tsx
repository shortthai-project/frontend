"use client";

import { Link2, Check, Copy } from "lucide-react";
import { useState } from "react";

type Props = {
  placeholder: string;
  submitLabel: string;
  resultLabel: string;
  copyLabel: string;
  copiedLabel: string;
};

export default function URLShortenerForm(props: Props) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = () => {
    if (url) {
      const randomId = Math.random().toString(36).substring(2, 8);
      setShortUrl(`shortthai.co/${randomId}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800">
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={props.placeholder}
          className="flex-1 px-6 py-4 bg-zinc-950 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <button
          onClick={handleShorten}
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors flex items-center gap-2"
        >
          <Link2 className="w-5 h-5" />
          {props.submitLabel}
        </button>
      </div>

      {shortUrl && (
        <div className="flex items-center gap-3 p-4 bg-zinc-950 border border-cyan-900/50 rounded-xl">
          <div className="flex-1 text-left">
            <p className="text-zinc-500 text-sm mb-1">{props.resultLabel}</p>
            <p className="text-cyan-400 font-medium text-lg">{shortUrl}</p>
          </div>
          <button
            onClick={handleCopy}
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                {props.copiedLabel}
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                {props.copyLabel}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}