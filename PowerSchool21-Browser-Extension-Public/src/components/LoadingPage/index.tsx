interface Props {
  size?: string;
  hasNavBar: boolean;
}

function LoadingPage({ size, hasNavBar }: Props) {
  return (
    <>
      {hasNavBar && (
        <nav className="bg-blue-500">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-lg">PowerSchool21</h1>
            </div>
          </div>
        </nav>
      )}

      <div className={`flex items-center justify-center bg-white-500 ${size}`}>
        <div className="text-center">
          <div className="relative w-20 h-20">
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-12 h-12 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
