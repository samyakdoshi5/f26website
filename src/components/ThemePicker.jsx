import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, Palette } from "lucide-react";

const STORAGE_KEY = "falcons-theme";

const THEMES = [
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
    swatches: ["#000000", "#dc1631", "#ffc159"],
  },
  {
    id: "runway-dawn",
    name: "Runway Dawn",
    swatches: ["#080c12", "#e2682e", "#74c6ac"],
  },

  // New themes

  {
    id: "midnight-radar",
    name: "Midnight Radar",
    swatches: ["#020b12", "#3cffb3", "#1d7cf2"],
  },
  {
    id: "storm-vector",
    name: "Storm Vector",
    swatches: ["#0b1020", "#7a8cff", "#d9e2ff"],
  },
  {
    id: "solar-flare",
    name: "Solar Flare",
    swatches: ["#120300", "#ff6b00", "#ffd166"],
  },
  {
    id: "orbital-ice",
    name: "Orbital Ice",
    swatches: ["#06131f", "#7ee7ff", "#dff7ff"],
  },
  {
    id: "stealth-mode",
    name: "Stealth Mode",
    swatches: ["#050505", "#5c677d", "#cfd8dc"],
  },
  {
    id: "phoenix-core",
    name: "Phoenix Core",
    swatches: ["#0e0200", "#ff4820", "#ffb45c"],
  },
  {
    id: "molten-orbit",
    name: "Molten Orbit",
    swatches: ["#120500", "#ff6200", "#ffd278"],
  },
  {
    id: "crimson-vortex",
    name: "Crimson Vortex",
    swatches: ["#0a0004", "#dc143c", "#ff788c"],
  },
  {
    id: "ember-strike",
    name: "Ember Strike",
    swatches: ["#0c0401", "#ff5818", "#ffa060"],
  },
  {
    id: "redline",
    name: "Redline",
    swatches: ["#060000", "#ff2222", "#ffc878"],
  },
];

function applyTheme(themeId) {
  document.documentElement.dataset.theme = themeId;
  localStorage.setItem(STORAGE_KEY, themeId);
}

export default function ThemePicker() {
  const [theme, setTheme] = useState("wind-tunnel");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const activeTheme = useMemo(
    () => THEMES.find((item) => item.id === theme) || THEMES[0],
    [theme]
  );

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = THEMES.some((item) => item.id === stored) ? stored : "wind-tunnel";
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
