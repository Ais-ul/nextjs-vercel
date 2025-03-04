export default function Divider({ className = "", thickness = 2, color = "rgba(0, 0, 0, 0.8)" }) {
  return (
    <div className={`w-full my-16 flex items-center ${className}`}>
      <div
        className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent"
        style={{ height: `${thickness}px`, backgroundColor: color }}
        role="separator"
        aria-orientation="horizontal"
      />
    </div>
  );
}
