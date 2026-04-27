import { Link2, LayoutDashboard } from "lucide-react";
import { Link } from "@/lib/i18n/navigation";

type Props = {
  dashboardLabel: string;
  loginLabel: string;
};

export default function HomePageNavbar(props: Props) {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Link2 className="w-6 h-6 text-cyan-400" />
          <span className="font-bold text-xl">shortthai</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-zinc-400 hover:text-white hover:bg-zinc-800/50"
          >
            <LayoutDashboard className="w-4 h-4" />
            {props.dashboardLabel}
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-zinc-400 hover:text-white hover:bg-zinc-800/50"
          >
            <LayoutDashboard className="w-4 h-4" />
            {props.loginLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
}