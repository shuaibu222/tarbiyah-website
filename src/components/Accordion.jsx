import { useId, useState } from 'react';
import { Plus } from 'lucide-react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-${i}`;
        return (
          <div key={item.q} className={`accordion__item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <Plus size={20} aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="accordion__panel" role="region" inert={!isOpen}>
              <div><p>{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
