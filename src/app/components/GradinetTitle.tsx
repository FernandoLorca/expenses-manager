interface GradinetTitleProps {
  text: string;
}

export default function GradinetTitle({ text }: GradinetTitleProps) {
  return (
    <div className="flex justify-center">
      <h1 className="inline-block bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text py-5 text-center text-5xl font-bold text-transparent">
        {text}
      </h1>
    </div>
  );
}
