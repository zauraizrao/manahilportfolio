export const content = {
  name: 'Manahil Hassan',
  title: 'Frontend Developer · WordPress Developer · SEO Specialist',
  email: 'manahilhassan.1230@gmail.com',
  phone: '0345 3193995',
  linkedin: 'https://www.linkedin.com/in/manahil-hassan-16657b374/',
  portrait: '/images/manahil-portrait.png',
  nav: [{label:'Home',href:'#home'},{label:'About',href:'#about'},{label:'Services',href:'#services'},{label:'Skills',href:'#skills'},{label:'Work',href:'#work'},{label:'Contact',href:'#contact'}],
  facts: [['Web Dev','Sites built & maintained'],['WordPress','Themes & content'],['SEO','On & off-page'],['Design','Visuals & content']],
  about: ["I work across web development, WordPress, SEO and design — which means I can take a project from a blank page to a live, searchable, good-looking website without handing pieces off to five different people.","Day to day, that looks like building and customizing WordPress sites, coding clean and responsive front-ends, writing SEO content, improving on-page and off-page SEO, and designing the visuals that hold it all together.","I care about websites that are easy to use and easy to understand — for the people visiting them, and for the people who have to maintain them after I'm gone."],
  aboutTags: ['Web Development','WordPress','SEO','Design','Content'],
  projects: [
    {title:'Online Fonts Generator',category:'Web Development',filters:['Web Development','WordPress'],role:'Web Development, Website Management, SEO, Content & Design',description:'An online font generator platform that lets users generate and copy styled Unicode text for social media, bios and design work. I built and continue to manage the site, its content, design and SEO.',url:'https://onlinefontsgenerator.com/',image:'/images/online-fonts-generator.png',tags:['Unicode Text Styling','Web Development','SEO','Content','Design']},
    {title:'Cosmos Artist Studio',category:'Web Development',filters:['Web Development','WordPress'],role:'Website Development',description:'An online art and photography store built to showcase artwork and products with a clean, gallery-style browsing experience.',url:'https://cosmosartiststudio.com/'},
    {title:'SMS Property Management',category:'Web Development',filters:['Web Development','WordPress'],role:'Website Development',description:'A business website developed for a property management company, presenting their services and listings clearly for prospective clients.',url:'https://smspropertymgmt.com/'},
    {title:'Doorstep Dental',category:'Website Management',filters:['Website Management','WordPress'],role:'Website Management & SEO',description:'Ongoing management of a dental practice website — ongoing updates, content changes, on-page SEO and ongoing improvements to keep the site accurate and visible.',url:'https://doorstepdentalinc.com/'},
    {title:'IPPT Score Calculator',category:'SEO',filters:['SEO','WordPress'],role:'Off-Page SEO',description:'Off-page SEO work focused on improving the visibility and authority of this fitness score calculator tool in search results.',url:'https://ipptscorecalculator.com/'},
    {title:'All Morse Code',category:'SEO',filters:['SEO','WordPress'],role:'Off-Page SEO',description:'Off-page SEO work aimed at improving this Morse code reference tool\'s online visibility and organic reach.',url:'https://allmorsecode.com/'},
  ],
  services: [['Frontend Web Development','Building clean, responsive websites and layouts that work well across devices and feel easy to use.'],['WordPress Development','Building and customizing WordPress sites, from theme setup to structure, content and functionality.'],['SEO','On-page and off-page SEO, keyword research, technical fixes and content optimization to improve visibility.'],['Website Management','Ongoing site upkeep — updates, content changes, layout tweaks and usability improvements over time.'],['Graphic Design','Visuals for web, social media and branding, created with attention to consistency and clarity.'],['SEO Content Writing','Search-friendly content written for real readers first, structured to support on-page SEO goals.']],
  skills: {Development:['HTML','CSS','JavaScript','Responsive Web Design','WordPress'],Design:['Graphic Design','UI Design','Canva','Figma'],SEO:['On-Page SEO','Off-Page SEO','Technical SEO','Keyword Research','Content Optimization','SEO Content Writing']},
  process: [['Discover','Understand the project, audience and goals.'],['Plan','Organize the structure, content and visual direction.'],['Build','Develop and create the website or digital work.'],['Improve','Test, refine, optimize and maintain the result.']],
  timeline: [['Web Development','Online Fonts Generator, Cosmos Artist Studio, SMS Property Management'],['Website Management','Doorstep Dental'],['SEO','IPPT Score Calculator, All Morse Code']]
};

export const screenshotUrl = (url) => `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
