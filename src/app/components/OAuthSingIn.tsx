interface OAuthSingInProps {
  icon: React.ReactNode;
  text: string;
}

export default function OAuthSingIn({ icon, text }: OAuthSingInProps) {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-sm border border-lime-400 bg-lime-600 px-5 py-2 transition-all duration-200 ease-in-out hover:opacity-70">
      {icon}
      <p>{text}</p>
    </div>
  );
}
