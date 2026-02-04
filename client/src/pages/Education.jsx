import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets/assets";
import { TbCertificate } from "react-icons/tb";
import '../styles/education.css'

gsap.registerPlugin(ScrollTrigger);

export default function EducationCert() {
  const wrapper = useRef();
  const track = useRef();
  const flairWrapper = useRef();

  useGSAP(() => {
    let scrollLength = track.current.scrollWidth - window.innerWidth;

    gsap.to(track.current, {
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top top",
        end: "+=" + scrollLength,
        scrub: true,
        pin: true,
      },
    });

    gsap.fromTo(
      ".edu-flair",
      { x: 300, opacity: 0, rotation: 0, scale: 0.5 },
      {
        x: 0,
        opacity: 1,
        rotation: 360,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.6)",
        delay: 0.1,
        scrollTrigger: {
          trigger: flairWrapper.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(".edu-flair", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2.4,
      ease: "sine.inOut",
      delay: 2,
    });
  });

  const education = [
    { degree: "Master of Computer Applications (MCA)", year: "2025", place: "VIT Bhopal" },
    { degree: "Bachelor in Science", year: "2023", place: "Yelahanka Govt College" },
    { degree: "PUC", year: "2021", place: "Yelahanka Govt College" },
    { degree: "10th", year: "2019", place: "Yelahanka Govt School" },
  ];

  const certifications = [
    { title: "InternPe programming Quiz competition", issued: "InternPe", year: "2024", link:"https://www.linkedin.com/in/ranjitha-r-b76211306/details/certifications/1724423835077/single-media-viewer/?profileId=ACoAAE38VkoB7uBbWYeNzuS_7vVeUrumreEOQ_k"},
    { title: "MongoDB ", issued: "Great Learning", year: "2024", link:"https://www.linkedin.com/in/ranjitha-r-b76211306/details/certifications/1724155327271/single-media-viewer/?profileId=ACoAAE38VkoB7uBbWYeNzuS_7vVeUrumreEOQ_k" },
  ];

  return (
    <section
      id="education"
      ref={wrapper}
      className="w-full text-white relative educ"
      style={{width:"100%" }}>
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-12">
        Education & Certifications
      </h1>
      <p className="text-center text-base md:text-lg max-w-3xl mx-auto opacity-80 mb-16 md:mb-32">
        My academic journey and certifications reflect my dedication toward learning cloud & real-world development.
      </p>

      <div ref={track} className="flex gap-12 md:gap-20 w-max flex-wrap md:flex-nowrap edu-space">
        <div ref={flairWrapper} className="relative min-w-[100vw] h-[500px] md:h-[800px] overflow-visible">
          <img src={assets.f3} style={{width:"120px"}} className="edu-flair absolute z-[20] bottom-10 left-1/2 -translate-x-1/2 pointer-events-none" />
          <img src={assets.flair1} style={{width:"100px"}} className="edu-flair absolute top-[20%] left-[42%]" />
          <img src={assets.f2} style={{width:"80px"}} className="edu-flair absolute top-[28%] left-[12%]" />
          <img src={assets.f4} style={{width:"200px"}} className="edu-flair absolute top-[32%] right-[14%]" />
          <img src={assets.f5} style={{width:"90px"}} className="edu-flair absolute top-[10%] left-[65%]" />
          <img src={assets.f6} style={{width:"190px"}} className="edu-flair absolute top-[18%] left-[30%]" />
          <img src={assets.f7} style={{width:"70px"}} className="edu-flair absolute top-[25%] right-[32%]" />
        </div>

        <div className="min-w-[100vw] md:min-w-[400px] mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {education.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl w-full md:w-[340px] hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="opacity-80">{item.place}</p>
                <p className="opacity-60 text-sm">{item.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-[100vw] md:min-w-[500px] flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
              Certifications <TbCertificate />
            </h2>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {certifications.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl w-[240px] md:w-[280px] hover:scale-105 transition-transform duration-300 flex flex-col items-start">
                  <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                  <p className="opacity-80">{item.issued}</p>
                  <p className="opacity-60 text-sm mb-4">{item.year}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-500"
                    style={{color:"white"}}>
                    View Certificate
                  </a>
                </div>
              ))}
              <a
                href={"https://www.linkedin.com/in/ranjitha-r-b76211306/details/certifications/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-500"
                style={{color:"white"}}>
                More Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
