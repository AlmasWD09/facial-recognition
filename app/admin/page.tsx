export default function AdminPage() {
  return (
    <div className="h-full">
      {/* Main Content Area with diagonal pattern */}
      <div className="h-[800px]">
        <div 
          className="h-full rounded-lg "
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.02) 10px,
              rgba(255, 255, 255, 0.02) 20px
            )`
          }}
        >
          {/* Add your dashboard content here */}
          <div className="flex h-full items-center justify-center p-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm sm:text-base">Dashboard Content</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">Responsive on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}