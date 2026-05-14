import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, Palette } from "lucide-react";

const STORAGE_KEY = "falcons-theme";

const THEMES = [
  {
    id: "default",
    name: "Default",
    swatches: ["#0f172a", "#3b82f6", "#e3af64"],
  },
  {
    id: "wind-tunnel",
    name: "Wind Tunnel",
    swatches: ["#03090f", "#00c2cb", "#f9b540"],
  },
  {
    id: "carbon-sky",
    name: "Carbon Sky",
    swatches: ["#05080d", "#4794ff", "#a0dd6e"],
  },
  {
    id: "afterburner",
    name: "Afterburner",
    swatches: ["#0d0205", "#ff522d", "#69000f"],
  },
  {
    id: "ember-red",
    name: "Ember Red",
    swatches: ["#0c0304", "#ff6136", "#7e0811"],
  },
  {
    id: "crimson-jet",
    name: "Crimson Jet",
    swatches: ["#0a0106", "#ff4826", "#520016"],
  },
  {
    id: "scarlet-core",
    name: "Scarlet Core",
    swatches: ["#0d0101", "#ff6f40", "#910505"],
  },
  {
    id: "obsidian-volt",
    name: "Obsidian Volt",
    swatches: ["#050a07", "#b6ff2e", "#007a45"],
  },
  {
    id: "ion-cobalt",
    name: "Ion Cobalt",
    swatches: ["#050b1c", "#16c7ff", "#1238ff"],
  },
  {
    id: "plasma-rush",
    name: "Plasma Rush",
    swatches: ["#0c020e", "#ff3dd8", "#ff7a1a"],
  },
  {
    id: "titanium-ember",
    name: "Titanium Ember",
    swatches: ["#070807", "#f4a62a", "#007c83"],
  },

];

function applyTheme(themeId) {
  document.documentElement.dataset.theme = themeId;
  localStorage.setItem(STORAGE_KEY, themeId);
}

export default function ThemePicker() {
  const [theme, setTheme] = useState("default");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const activeTheme = useMemo(
    () => THEMES.find((item) => item.id === theme) || THEMES[0],
    [theme]
  );

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = THEMES.some((item) => item.id === stored) ? stored : "default";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    function onPointerDown(event) {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const selectTheme = (themeId) => {
    setTheme(themeId);
    applyTheme(themeId);
    setOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:text-tech-gold focus:outline-none focus:ring-2 focus:ring-tech-gold"
        onClick={() => setOpen((value) => !value)}
        aria-label={`Theme: ${activeTheme.name}`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Palette size={20} />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-3 w-56 overflow-hidden rounded-lg border border-white/10 bg-tech-900/95 p-2 text-sm text-slate-200 shadow-2xl backdrop-blur-xl"
          role="menu"
        >
          {THEMES.map((item) => {
            const selected = item.id === theme;
            return (
              <button
                key={item.id}
                type="button"
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition ${selected ? "bg-white/10 text-tech-gold" : "hover:bg-white/5 hover:text-white"
                  }`}
                onClick={() => selectTheme(item.id)}
                role="menuitem"
              >
                <span className="flex items-center gap-3">
                  <span className="flex -space-x-1" aria-hidden="true">
                    {item.swatches.map((color) => (
                      <span
                        key={color}
                        className="h-4 w-4 rounded-full border border-white/40"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </span>
                  <span>{item.name}</span>
                </span>
                {selected && <Check size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
