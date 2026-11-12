// All site text and data lives here. Edit this file to change what the site says.
// Items marked "TODO confirm" are placeholders carried over from the old template.

const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const school = {
  name: 'Attarbiyah Community College',
  shortName: 'Attarbiyah',
  founded: 1987,
  tagline: 'Nurturing excellence since 1987',
  address: 'Hotoro Area, Nassarawa Local Government, Kano State, Nigeria',
  phones: ['08132136338', '08039423419', '08039712069', '08068893617'],
  email: 'aicollege98@yahoo.com',
  officeHours: '8am – 6pm, Friday to Thursday',
  // TODO confirm: add real social profile URLs. Links with an empty url are hidden.
  social: [
    { label: 'Facebook', url: '' },
    { label: 'Instagram', url: '' },
    { label: 'X', url: '' },
  ],
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/schools', label: 'Our Schools' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/news', label: 'Events & News' },
];

export const hours = [
  { level: 'Nursery', time: '8:00am – 2:30pm' },
  { level: 'Primary', time: '7:30am – 2:30pm' },
  { level: 'Secondary', time: '7:30am – 3:00pm' },
  { level: 'Office', time: '7:30am – 4:00pm' },
];

export const home = {
  eyebrow: 'Hotoro, Kano · Since 1987',
  title: 'Empowering the community through knowledge and faith',
  intro:
    'Holistic education from Nursery through Secondary School, in a nurturing environment that builds academic excellence and sound moral values.',
  image: img('1523240795612-9a054b0db644', 1600),
  stats: [
    { value: `${new Date().getFullYear() - 1987}+`, label: 'Years of service' },
    { value: '5', label: 'Schools in one family' },
    { value: 'Nursery', label: 'to Senior Secondary' },
    { value: 'Kano', label: 'Rooted in Hotoro' },
  ],
  // TODO confirm: these quotes came from the old template.
  testimonials: [
    {
      quote:
        'Attarbiyah gave my children not just education, but character. I am proud of the values they carry.',
      author: 'Mr. Adebayo',
      role: 'Parent',
    },
    {
      quote:
        'The teachers are dedicated and caring. My child looks forward to school every single day.',
      author: 'Mrs. Okonkwo',
      role: 'Parent',
    },
    {
      quote:
        'After comparing several schools, Attarbiyah stood out for its balance of faith, academics and discipline.',
      author: 'Dr. Ibrahim',
      role: 'Parent',
    },
  ],
};

export const about = {
  story: [
    { year: '1987', text: 'Founded by Dr. Habibu Muhammad Gwarzo at his residence, teaching his family and neighbours.' },
    { year: 'Growth', text: 'Grew into a full community institution serving children and adults across Hotoro.' },
    { year: 'Today', text: 'Five schools: Islamiyya, Adult Education, Islamic Nursery & Primary, Secondary, and Qur’anic Boarding.' },
    { year: 'Next', text: 'Continuous expansion into new fields of learning for the community.' },
  ],
  image: img('1523240795612-9a054b0db644'),
  values: [
    {
      icon: 'Target',
      title: 'Mission',
      text: 'To nurture students who excel academically and morally across Qur’anic, Arabic, English, Sciences and Arts disciplines.',
    },
    {
      icon: 'Eye',
      title: 'Vision',
      text: 'To inspire learners with the fear of Allah and the teachings of the Prophet (S.A.W), building upright, disciplined individuals.',
    },
    {
      icon: 'Heart',
      title: 'Core values',
      text: 'Excellence, integrity, respect, responsibility and compassion guide our daily interactions and decisions.',
    },
  ],
  leaders: [
    { name: 'Dr. Habibu Muhammad Gwarzo', role: 'Founder' },
    { name: 'Mr. Olumide Adebayo', role: 'Vice Principal, Academics' }, // TODO confirm
    { name: 'Mrs. Funke Okonkwo', role: 'Head of Primary School' }, // TODO confirm
  ],
};

export const schools = [
  {
    icon: 'BookOpen',
    name: 'Islamiyya School',
    text: 'Qur’an, Arabic, Hadith and Fiqh for children, taught with patience and care.',
    image: img('1609599006353-e629aaabfeae'),
  },
  {
    icon: 'Users',
    name: 'Adult Education',
    text: 'Literacy and Islamic studies for adults who want to keep learning at any age.',
    image: img('1427504494785-3a9ca7044f45'),
  },
  {
    icon: 'Sprout',
    name: 'Islamic Nursery & Primary',
    text: 'A strong early foundation that joins the national curriculum with Islamic values.',
    image: img('1503676260728-1c00da094a0b'),
  },
  {
    icon: 'GraduationCap',
    name: 'Secondary School',
    text: 'Junior and Senior Secondary, preparing students for WAEC, NECO and JAMB.',
    image: img('1580582932707-520aed937b7b'),
  },
  {
    icon: 'Moon',
    name: 'Qur’anic Boarding School',
    text: 'A focused residential setting for memorising the Qur’an alongside formal study.',
    image: img('1584551246679-0daf3d275d0f'),
  },
];

export const admissions = {
  steps: [
    { title: 'Inquiry', text: 'Visit the campus for a tour or call the office.' },
    { title: 'Assessment', text: 'Complete a placement test for applicable classes.' },
    { title: 'Application', text: 'Submit the completed form with required documents.' },
    { title: 'Decision', text: 'Receive an admission decision within 7 working days.' },
    { title: 'Enrolment', text: 'Complete registration and payment to secure a place.' },
  ],
  requirements: [
    {
      level: 'Nursery',
      items: ['Completed application form', 'Birth certificate', '4 passport photographs', 'Medical report'],
    },
    {
      level: 'Primary',
      items: ['Completed application form', 'Birth certificate', '6 passport photographs', 'Previous school report (if any)', 'Medical report'],
    },
    {
      level: 'Secondary',
      items: ['Completed application form', 'Birth certificate', '8 passport photographs', 'School reports (last 2 years)', 'Transfer certificate', 'Medical report'],
    },
  ],
  // TODO confirm: fee amounts came from the old template.
  feesYear: '2023/2024',
  fees: [
    { program: 'Nursery', tuition: 250000, registration: 50000, other: 30000 },
    { program: 'Primary', tuition: 350000, registration: 50000, other: 40000 },
    { program: 'Junior Secondary', tuition: 450000, registration: 50000, other: 50000 },
    { program: 'Senior Secondary', tuition: 500000, registration: 50000, other: 60000 },
  ],
  feesNote:
    'Fees are paid per term (3 terms per year). Sibling discount: 10% for the second child, 15% for the third.',
  faq: [
    {
      q: 'What is the admission age for Nursery?',
      a: 'Children must be 2 years old by 1 September of the admission year. Nursery has three classes: Playgroup (2–3), Nursery 1 (3–4) and Nursery 2 (4–5).',
    },
    {
      q: 'Are scholarships available?',
      a: 'Yes. Merit scholarships are offered for students entering JSS1 and SS1, with exams held each March. Need-based support may be available on request.',
    },
    {
      q: 'When does the academic year begin?',
      a: 'The year runs from September to July in three terms: First (Sep–Dec), Second (Jan–Mar) and Third (Apr–Jul).',
    },
    {
      q: 'What are the school hours?',
      a: 'Nursery 8:00am–2:30pm, Primary 7:30am–2:30pm, Secondary 7:30am–3:00pm. Early drop-off from 7:00am for all levels.',
    },
  ],
};

// TODO confirm: events, news and gallery came from the old template.
export const events = [
  { day: '15', month: 'Oct', title: 'Inter-House Sports Competition', time: '8:00 AM – 3:00 PM', place: 'School sports ground', text: 'A colourful day of sport for every student from Nursery to Secondary.' },
  { day: '25', month: 'Oct', title: 'Career Day for Secondary Students', time: '10:00 AM – 2:00 PM', place: 'School hall', text: 'Professionals from many fields share their journeys with senior students.' },
  { day: '05', month: 'Nov', title: 'Parents–Teachers Conference', time: '9:00 AM – 4:00 PM', place: 'Classrooms', text: 'Meet your child’s teachers and discuss their progress.' },
  { day: '20', month: 'Nov', title: 'Cultural Day', time: '10:00 AM – 3:00 PM', place: 'School grounds', text: 'Performances, food and traditional attire from across Nigeria.' },
];

export const news = [
  { date: 'Oct 3, 2023', title: 'Students win regional science fair', text: 'Our senior students took top honours with a solar-powered irrigation system.', image: img('1588072432836-e10032774350', 900) },
  { date: 'Sep 28, 2023', title: 'New library and digital learning centre', text: 'Thousands of books and new computer stations, now open to all students.', image: img('1521587760476-6c12a4b040da', 900) },
  { date: 'Sep 15, 2023', title: 'Teachers complete STEM training', text: 'Twenty of our teachers finished an intensive programme in modern teaching methods.', image: img('1600494603989-9650cf6ddd3d', 900) },
];

export const gallery = [
  { caption: 'Graduation ceremony', image: img('1541339907198-e08756dedf3f', 800) },
  { caption: 'Science exhibition', image: img('1588072432836-e10032774350', 800) },
  { caption: 'Cultural day', image: img('1600494603989-9650cf6ddd3d', 800) },
  { caption: 'Sports day', image: img('1434030216411-0b793f4b4173', 800) },
  { caption: 'Debate competition', image: img('1523240795612-9a054b0db644', 800) },
  { caption: 'Art exhibition', image: img('1541178735493-479c1a27ed24', 800) },
];
