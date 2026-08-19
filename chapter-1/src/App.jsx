import { Car } from "lucide-react";
import Card from "./components/Card";



const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAABL1BMVEX////qQzU0qFNChfT7vAXt8/4YdPJIiPTZ5Pywx/otfPT7uADqPi//vQAspk7qQTPpNCLpNyfpLhr97u04gPT8wQD86OftZl3sYlj3w8C1y/r1+vbu9vAdo0X98/LwhH3vfXbzpJ/xjYfoJw/++Op4o/dFrV+12r3L5dF1voX2uLTymJLtbWTsWk/1r6zqSj3oHwD629n92prpOTf9465ilvVVj/WMsPj81ID7xEn+68ievPjM2/vj6/3a7N6ZzaQ9k8FetnP5z830jw33oxnrTjPtXi/8y2jxfib5rA/vcCr7vzjzjSHvaAv96dL8yFsAa/K1sR+hsTlSqk3LtiiBrkPjuRpprEiIxpYAnTJwqdA8mKozqzk2n4M2pWZBieQ3onY8jdI8lbU4no+NxKu0i81RAAAHdklEQVR4nO2Za3fSSBjHQ0pbbUMuQKEIoTTUQLijtWtrBUF3V7e73nVh7aq77vf/DDsJt4S5ZJKZkL7o/xxfeE47/vw/zzyXiSDcKi6Vy5mZyuW4UZbKjRvN5lGllT88bB8e5luVI6PZKeRiZSrnxs28IkkakLTS/K9to5HLxIGVKTRbalWVFEVJIKQoklbttY3Ohs3LFPJdCVChmNySNLXbPt4YXLlgpKsS2iqUeelepbOJsJabbU2lpFpIS7ePojaub1SDYs2c03qtcYRcuUoiFNfMOKnVj4rL6GmhuWzfpF4lErbjbpoBayY1ccydayyFj6PbN1Xjm25lQ5U4cNmSVINjZx0nmBLMK0XrcrPtuMrLsJmkdIcLV7mtceVK2NmW5wBW6HIHA1LbzPWjwS31vZJY72gzzS/1vVI0pmQzIgMDrvXCN/lyhb3qY6VohfCORQrWu6FgCRbHjCjBWBxr3tQc60R4K5lyrMBl5sGAsTjWTwSu/MpCvj9YZQATAjZxsFbay2e32wUjtaZqpEVUURsMYAY9mKJo1Wr+6LhTGPf7uVx/XGgcGy2tp2LMU9IsYA3q7Fc0KVEp5NaH1HKmb3QlDZERbGAZWjCl2jXwOTNutqGJky2UwhFdLMHK4vOckim00x42pcoE1qjS+ZWn+VcKLXcA2BwTqCqZVu3QbUDlTnoZgh7b+E8TS0WtBNjMKvP/K6Njff9HsYQWsLs0ena29djAhLy/ZelW0GG0Dyo3o2PCuOcLVj0KvmNnDlkdE/J+/VJJh3ozybCu5RfPHz6MAoxd58kXP5PQFJXP3h9YF/vJg/1f8GixOSb8mkwCtJdYNLUZE9hF0tHBcxxYJSYw4cH+HO1VAmWb1I7lY42t5Eq/wWiKFNXTtK8u9ldkB3CyVePKfkF44/IsebBePqRWbGAnV0kP2itP+VA4v0kH0WlyXe6IqkZsYMLj/XWyg9+XaEo6tnspFK8gz0BEF8kWW40Feg1Z5jSEWflQurFVjFWZXWd7aZNpR/GBeWuGp3yAwYjhSZVdiDRbJpvE48NCWF3gwADawR+sozKL4Grm0v5rylO2WYU4E3MBZnpDCXb37Q6b3t6HD4XrrMuyB7Rke1uMegSdeXLOI5jsZGdQPE+wV9MmowTjQLb7FCIjpdn55si2LoOQ7T/eHFn23vqZFySy0zjJTklkFxsku7t+JrGcbZLsSRCyK9qiwYPsp/UzSYX26uSmkp3fktlkUOO8JQtOdmPuZiCyZKxkN6YHQHeT2DdjJUPuwQsy2pE2ku5EnM9o14BoyAhgm5xp4VmDvAfQFrQo5jPnwR1LRjs6ciCDpm1O+yb7hnInGBntHBTF7kR610im3tXoyO5ldylEIjuDD8UvnKnUe31CR7Z9h0aPCGTwjm5/psOAJT+I4rRIh0aFf4YHg1uAgJ2DUh8BmKgP+ZFdEizbg4sGpnOCSIq25BE/00jXZAe+mugukEp+EmfSKe8AhR5lCZ4hfwOutanPf87BRNnkZdr2DiHNUBcAMaKlPoorTXmZ9oRkGdTPHb1ej+R7FxgwrcQFbJtUzhBd05Hn3d0VyXmmUdY0HxHbBKIDOHI3qNTnD+Ka9AEPsjNCMJF11tGSLJV6t85li8MleEKybA8azhZaFNtU6hMKTGaP51MCF6hmmGAuuzoikrzu531SLDE1w9E5VCz4php5SsIH0ylpi36ElCwyoV2SHANCtaaFXP0Ig8ZQ1Z4SJ7OtLcT3k5VOkyQuG80M79ou2bI9eAVw6cT0IRNlOSTaNqmTO2Tk3x/qvmhiPRQYscRuYXvmSrLsixameFxu+YBtnWGL2Vw1X9NA8bCCgt3L+oEh52yPiiNf0+xkC2Tb4C/CTDbXDuqj69oxU38ygDahLx9DU/7it4ju+VoGNKGIp51tQyq2Yk0E513/7XMB4O+aCJVMingC6ebQf/iojXTnNP3rN5Jt8OMUUnUq0+yQ6ladYFxxMNR1efnD/xJc26UCo42nY4U+GmLKW3040t3nyNdfsBeUXP5dKtHcz8U/qMvyaFgrlUrFYlEAf4ql0gBQyTJUGfXvmGTzrxhLDahNm9PpU9EcWdbEsqyRqU9XQfSiff0HmWxZmvSfi6beruMtRfoZVLJRx9KRf/8Mp+sf0MQRIJaORhGhgfLhRcsinsx80OhvQSDJ+jNPsu0GSLKZSmJUaJ5ehXyX8kOj7AXBdf19mWxhwEDt8J/VQmpZPnzHRZxrUQUUNIRnWQYw4FpkARX1H9ks1eiDEdUcGRLt+7fQjjloVkR1TRSn/7GACUEGj0CSObz81tHtmREs2CaB0YB/p9I5va1yj+h0wu3zQp1n0eWRYisVh9yyTbc4RXKhusmFTedq2Fw1kzndwCbInwuoVNOZ2OTphMvLPVLD8DHVTd4J5lWpZk5DsIHlbxidXwsNLDNYVGVdHEWQ9yiVapZO65ysT0e16O1aqVi3TBGz8a6gdNG0aiWOH+EpNahNRjJyIZfttV0eTWr1zVPNVSwBPMu9oTtLumkNa4MYvEIIENZnGtwQolvdKP0Pv+EMB92wmEAAAAAASUVORK5CYII=",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];
  return <>
    <div className="Cards">
      {jobOpenings.map((info, index) => {
        return <div key={index}>
          <Card brandLogo={info.brandLogo} companyName={info.companyName} datePosted={info.datePosted} post={info.post} tag1={info.tag1} tag2={info.tag2} pay={info.pay} location={info.location} />
        </div>
      })}
    </div>
  </>
}

export default App;