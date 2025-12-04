export default function Button({ children, href, onClick, className = "" }) {
  const base = "inline-block px-4 py-2 rounded-md text-sm font-medium";
  const style = "bg-brand-accent text-white hover:brightness-95";
  if (href) {
    return <a href={href} className={`${base} ${style} ${className}`}>{children}</a>;
  }
  return <button onClick={onClick} className={`${base} ${style} ${className}`}>{children}</button>;
}
