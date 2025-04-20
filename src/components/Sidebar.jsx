
const categories = [
  { name: "ThemePicker", id: "themePicker" },
  // { name: "OTPInput", id: "otpInput" },
  { name: "Navbar", id: "navbarSection" },
  { name: "Toggle", id: "toggleSection" },
  { name: "Button", id: "buttonSection" },
  {name: "Card", id: "cardSection"},
  {name: "Input", id: "inputSection"},
  {name: "Badge", id: "badgeSection"},
  // Add other components here...
];

export default function Sidebar() {
  return (
    <aside className="w-55 bg-white border-r px-4 py-6">
      <h2 className="font-bold mb-4 text-lg">Components</h2>
      <input
        type="text"
        placeholder="Search components..."
        className="mb-4 w-full p-2 border rounded border-r-2 border-black"
      />
      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li key={idx} >
            <a
              href={`#${cat.id}`}
              className="block w-full text-center px-3 py-2 hover:bg-brown-100 rounded cursor-pointer border border-r-2 border-black"
            >
              {cat.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}


