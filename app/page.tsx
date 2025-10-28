const page = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Hello World!
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-black p-4 rounded-lg">
            <p className="text-white">Custom Black</p>
          </div>
          <div className="bg-purple p-4 rounded-lg">
            <p className="text-white">Custom Purple</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent h-4 w-full rounded"></div>
          <div className="animate-spotlight bg-blue-100 p-4 rounded-lg">
            <p>Spotlight Animation</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-grid h-20 rounded-lg"></div>
          <div className="bg-grid-small h-20 rounded-lg"></div>
          <div className="bg-dot h-20 rounded-lg"></div>
        </div>
      </div>
    </main>
  );
};

export default page;
