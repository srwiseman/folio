type SplitHeroProps = {
  title: string;
  subheadline?: string;
  children: React.ReactNode;
};

export default function SplitHero({ children, title }: SplitHeroProps) {
  return (
    <section className="w-full h-screen bg-[#333] hero-bg">
      <div className="h-full flex flex-row md:flex-row">
        {/* Left: title - centered vertically & horizontally */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white text-center drop-shadow-sm">
              {title}
            </h1>
            {/* Subheadline (optional) */}
            {/** @ts-ignore -- subheadline may be undefined; render conditionally */}
            {typeof (arguments[0] as any)?.subheadline !== 'undefined' && (
              <p className="mt-4 text-lg text-indigo-200 text-center max-w-md mx-auto">
                {(arguments[0] as any).subheadline}
              </p>
            )}
          </div>
        </div>

        {/* Right: children - centered vertically & horizontally */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-8">
          <div className="w-full max-w-lg">{children}</div>
        </div>
      </div>
    </section>
  )
}
