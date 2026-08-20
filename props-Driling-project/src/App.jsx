import Card from "./components/Card";


const App = () => {
    const profiles = [
        {
            name: "Wade Wilson",
            role: "UI/UX designer",
            company: "Epic Coders",
            price: "$55/hr",
            available: true,
            skills: ["UI", "UX", "photoshop"],
            description: "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him."
        },
        {
            name: "Maria Petrescu",
            role: "mobile designer",
            company: "Freelancer",
            price: "$32/hr",
            available: false,
            skills: ["PHP", "android", "iOS"],
            description: "Maria is an android and iOS developer who worked at Apple for 6 years."
        },
        {
            name: "Alexandra Morgan",
            role: "mobile designer",
            company: "Freelancer",
            price: "$42/hr",
            available: false,
            skills: ["PHP", "android", "iOS"],
            description: "Alexandra is a dedicated developer for mobile platforms and is very good at it."
        },
        {
            name: "Jennifer Smith",
            role: "interactive designer",
            company: "Freelancer",
            price: "$44/hr",
            available: false,
            skills: ["PHP", "android", "iOS"],
            description: "Jennifer is an interactive designer who is really awesome at what she does."
        },
        {
            name: "Svetlana Anyukova",
            role: "mobile designer",
            company: "Freelancer",
            price: "$40/hr",
            available: true,
            skills: ["PHP", "android", "iOS"],
            description: "Samantha is an Android and iOS designer with advanced knowledge in coding."
        },
        {
            name: "Marko van Kooh",
            role: "UI/UX designer",
            company: "Visual Madness",
            price: "$30/hr",
            available: false,
            skills: ["UI", "UX", "photoshop"],
            description: "Marko is a 25 year old web designer with an impressive portfolio behind him."
        },
        {
            name: "Pawel Koszentka",
            role: "UX designer",
            company: "Apple Inc.",
            price: "$50/hr",
            available: false,
            skills: ["UI", "UX", "photoshop"],
            description: "Pawel is a 32 year old UX designer, with over 10 years of experience in what he does."
        },
        {
            name: "Sonia Simionov",
            role: "mobile designer",
            company: "Freelancer",
            price: "$32/hr",
            available: false,
            skills: ["PHP", "android", "iOS"],
            description: "Sonia is an android and iOS developer who worked at Apple for 6 years."
        },
        {
            name: "Jonathan Wayne",
            role: "photographer",
            company: "Epic Coders",
            price: "$40/hr",
            available: false,
            skills: ["UI", "UX", "photoshop"],
            description: "Jonathan is a 28 year old photographer from London with a real talent for what he does."
        },
        {
            name: "Batman",
            role: "Superhero",
            company: "Freelancer",
            price: "free",
            available: false,
            skills: ["tech", "IT", "martial arts"],
            description: "I'm Batman"
        },
        {
            name: "Georgiana Suclea",
            role: "mobile designer",
            company: "Freelancer",
            price: "$39/hr",
            available: false,
            skills: ["PHP", "android", "iOS"],
            description: "Georgiana is an android and iOS developer who worked at Apple for 6 years."
        },
        {
            name: "Gregory Johnes",
            role: "UI/UX designer",
            company: "Epic Coders",
            price: "$45/hr",
            available: false,
            skills: ["UI", "UX", "photoshop"],
            description: "Gregory is a 32 year old UI/UX designer, with an impressive portfolio behind him."
        }
    ];
    return <>
        <div className="p-5 flex flex-wrap gap-5">
            {profiles.map(function (profile, index) {
                return <div key={index}>
                    <Card name={profile.name} role={profile.role} company={profile.company} price={profile.price} available={profile.available} skills={profile.skills} description={profile.description} />
                </div>
            })}
        </div>
    </>
}

export default App;