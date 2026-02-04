
const projects = [
  {
    id: 1,
    title: "Quiet Cloud",
    category: "Journal & Vision Board",
    img: "/logo.jpg",
    description:
      "QuietCloud – A Secure & Calm Journaling Platform. QuietCloud is a privacy-first journaling and reflection platform that I designed and built to explore how technology can support emotional clarity, self-reflection, and intentional sharing — without becoming overwhelming or addictive. The core idea behind QuietCloud is simple: your thoughts deserve safety and calm. Unlike traditional social or blogging platforms, QuietCloud does not push engagement metrics, likes, or constant notifications. Journals are private by default, and users can consciously choose whether a journal should remain personal or be shared publicly in a read-only format. From a technical perspective, the application is built using React 19 with a strong focus on clean component architecture and global state management using the Context API. Authentication is handled through Firebase, ensuring secure login, email verification, and session handlin. The dashboard experience is intentionally designed to feel warm and welcoming. Users are greeted personally, and public journals are displayed through a Swiper-based carousel enhanced with GSAP animations, creating smooth transitions and subtle motion that supports readability rather than distraction. Each public journal card previews the subject, a short snippet of content, and the creation date, and opens into a read-only view to preserve author intent. This design choice reflects the platform’s philosophy: sharing without pressure. Styling is achieved using a hybrid approach with React-Bootstrap for structure and Tailwind CSS for customization, allowing both consistency and flexibility. The UI emphasizes whitespace, typography, and emotional comfort. QuietCloud is not just a CRUD application — it is a design-driven, psychology-aware system that balances technical robustness with human-centered thinking. It represents my ability to build scalable React applications, manage authentication and protected routes, implement animations responsibly, and design systems that prioritize user trust.",
    screenshots: [
      "/SSq.png",
      "/SSQ1.png",
    ],
    github: "https://github.com/ranj1thaa/QuietCloud",
    live: "https://quiet-cloud-i7nn.vercel.app",
  },
  {
    id: 2,
    title: "CiraSari",
    category: "Productivity",
    img: "/CiraLogo.jpg",
    description:
      "CiraSari is a full-stack MERN web application developed to support and empower traditional saree weavers by providing them with a modern digital platform to connect directly with customers. The project focuses on eliminating middlemen and enabling artisans to showcase their work, manage orders, and receive payments securely. The application offers role-based functionality where customers can browse saree collections, add products to their cart, place orders, and communicate directly with weavers. Weavers, on the other hand, can upload saree listings with images stored securely using Cloudinary, manage incoming orders, and interact with customers through an order-based messaging system. This ensures transparency, trust, and a smoother buying experience. CiraSari integrates Stripe payment gateway to handle secure online transactions using Payment Intents, ensuring reliability and scalability. Authentication is implemented using JWT and bcrypt, with additional support for Google OAuth, making the login process seamless and secure. A built-in feedback and complaint system allows users to submit concerns, which are automatically sent to the admin via email using Nodemailer. The frontend is built using React, Tailwind CSS, Bootstrap, GSAP, and Swiper.js, delivering a responsive and visually engaging user experience. The backend, powered by Node.js, Express, and MongoDB, follows clean architecture principles and RESTful API design. Overall, CiraSari demonstrates real-world problem solving, full-stack development expertise, and production-ready system design.",
    screenshots: ["/SsC.png", "/ssC2.png"],
    github: "https://github.com/ranj1thaa/CiraSari",
    live: "https://cira-sari.vercel.app",
  },
];
export default projects
