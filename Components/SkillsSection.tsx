const SkillsSection = () => {
    const skillList = {
      languages: [
        {
          skillName: "HTML 5",
          experience: "1.5 years",
        },
        {
          skillName: "CSS",
          experience: "1.5 years",
        },
        {
          skillName: "Javascript",
          experience: "1 year",
        },
        {
          skillName: "Python",
          experience: "4 months",
        },
        {
          skillName: "Typescript",
          experience: "1 month",
        },
      ],
      frameworks: [
        {
          skillName: "Next Js",
          experience: "1 year",
        },
        {
          skillName: "React",
          experience: "5 months",
        },
        {
          skillName: "Tailwind CSS",
          experience: "9 months",
        },
        {
          skillName: "SCSS",
          experience: "8 months",
        },
      ],
      generalTools: [
        {
          skillName: "Next Js",
          experience: "1 year",
        },
        {
          skillName: "React",
          experience: "5 months",
        },
        {
          skillName: "Tailwind CSS",
          experience: "9 months",
        },
        {
          skillName: "SCSS",
          experience: "8 months",
        },
      ],
    };
  
    return (
      <section className="my-6 mx-[1.25%] text-[#a3a3a3]">
        <h2 className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          My Skills
        </h2>
        <div className="helvetica grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-6">
          <div id="codingLanguages">
            <p className="mt-6 mb-3">Coding Languages | x5 |</p>
            <div className="w-full h-[1px] bg-[#a3a3a3] opacity-50"></div>
            {skillList.languages.map((codingSkill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between my-1">
                  <p>{codingSkill.skillName}</p>
                  <p>{codingSkill.experience}</p>
                </div>
                <div className="w-full h-[1px] bg-[#a3a3a3] opacity-50"></div>
              </div>
            ))}
          </div>
          <div id="frameworks">
            <p className="mt-6 mb-3">Frameworks | x4 |</p>
            <div className="w-full h-[1px] bg-[#a3a3a3] opacity-50"></div>
            {skillList.frameworks.map((frameworkSkill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between my-1">
                  <p>{frameworkSkill.skillName}</p>
                  <p>{frameworkSkill.experience}</p>
                </div>
                <div className="w-full h-[1px] bg-[#a3a3a3] opacity-50"></div>
              </div>
            ))}
          </div>
          <div id="generalTools">
            <p className="mt-6 mb-3">General Tools | x4 |</p>
            <div className="w-full h-[1px] bg-[#a3a3a3] opacity-50"></div>
            {skillList.generalTools.map((generalSkill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between my-1">
                  <p>{generalSkill.skillName}</p>
                  <p>{generalSkill.experience}</p>
                </div>
                <div className="w-full h-[1px] bg-[#a3a3a3] opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  