export const generateCV = () => {
  const cvContent = `
JAGAPATHY DHANUSHKAR
Data science undergraduate at sliit

Email: jagiidhanush@gmail.com
LinkedIn: https://www.linkedin.com/in/jagapathy-dhanushkar-1bab77248/
GitHub: https://github.com/dhanushiatus

EDUCATION
--------
BSc in IT specializing in Data Science | SLIIT | 2024-2027 (Expected)
Diploma in IT & English | ESOFT Metro Campus | 2022-2023 (Completed)
A/L in Physical Science | Highlands College | 2019-2021 (Completed)

EXPERIENCE
----------
Full Stack Developer | Freelancer | 2024 - Present
• Designed and developed responsive web applications using React.js, Node.js, and MongoDB
• Collaborated with cross-functional teams to deliver scalable solutions within tight deadlines

Android Developer | Freelancer | 2024 - Present  
• Designed and built intuitive Android applications using Kotlin and Java in Android Studio
• Integrated APIs and third-party libraries such as Firebase, Google Maps, and Retrofit for extended app functionality
• Collaborated with UI/UX designers to implement user-friendly interfaces and improve user experience

Data Entry | Freelancer | 2018 - 2019
• Verified data for completeness and accuracy, correcting errors and inconsistencies where necessary
• Maintained confidentiality of sensitive information and adhered to data protection policies
• Managed multiple data entry projects while meeting strict deadlines and ensuring high quality standards

TECHNICAL SKILLS
---------------
Programming Languages: Python, Java, R, JavaScript, Kotlin
Web Technologies: React.js, Node.js, HTML, CSS, MongoDB
Mobile Development: Android Studio, Firebase, Google Maps API
Data Science: Machine Learning, Data Analysis, Statistical Analysis
Tools: Excel, Google Ads, WordPress, Azure Cognitive Services

CERTIFICATIONS
--------------
• Applied Data Science Capstone - United Latino Students Association (June 2025)
• Build a computer vision app with Azure Cognitive Services - United Latino Students Association (June 2025)
• Build a free website with WordPress - United Latino Students Association (May 2025)
• Getting Started with Microsoft Excel - United Latino Students Association (May 2025)
• Google Ads for Beginners - United Latino Students Association (May 2025)
• Introduction to Data Analysis using Microsoft Excel - United Latino Students Association (May 2025)
• Business Analysis & Process Management - United Latino Students Association (April 2025)
• AI Product Management - Duke University (2024)
• IBM Data Science Professional Certificate - IBM (2024)
• Esoft DiTec - Esoft Metro Campus (2023)

ABOUT
-----
I'm a third-year Data Science undergraduate at SLIIT with a strong foundation in Python, Java, and R. I have hands-on experience in web and mobile development, and I'm passionate about transforming data into insights and building impactful digital solutions. I'm currently seeking internship opportunities to apply my skills and grow within the tech and data science communities.
`;

  const element = document.createElement('a');
  const file = new Blob([cvContent], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'Jagapathy_Dhanushkar_CV.txt';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};