type Props = {
  copyright: string;
};

export default function HomePageFooter(props: Props) {
  return (
    <footer className="border-t border-zinc-800 py-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500">
        <p>{props.copyright}</p>
      </div>
    </footer>
  );
}