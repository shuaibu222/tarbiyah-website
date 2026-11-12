import { BookOpen, Eye, GraduationCap, Heart, Moon, Sprout, Target, Users } from 'lucide-react';

// Lets content.js name icons as plain strings. Add new ones here.
const icons = { BookOpen, Eye, GraduationCap, Heart, Moon, Sprout, Target, Users };

export default function Icon({ name, size = 22 }) {
  const Cmp = icons[name] ?? BookOpen;
  return <Cmp size={size} strokeWidth={1.6} aria-hidden="true" />;
}
