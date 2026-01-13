type SplitHeroProps = {
  title: string;
  subheadline?: string;
  // Optional content to render under the subheadline on the left column
  leftSlot?: React.ReactNode;
  children: React.ReactNode;
};

export default function SplitHero({ children, title, subheadline, leftSlot }: SplitHeroProps) {
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
            {subheadline && (
              <p className="mt-4 text-lg text-indigo-200 text-center max-w-md mx-auto">{subheadline}</p>
            )}

            {/* Optional left slot under subheadline */}
            {leftSlot && <div className="mt-6 flex items-center justify-center">{leftSlot}</div>}
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
