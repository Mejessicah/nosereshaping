import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the difference between open and closed rhinoplasty?",
    answer: "Open rhinoplasty involves a small external incision, providing better visibility and access for complex changes. Closed rhinoplasty is performed entirely inside the nose, leaving no visible scarring but is better suited for minor adjustments.",
  },
  {
    question: "Who is a good candidate for revision rhinoplasty?",
    answer: "Candidates for revision rhinoplasty include those unhappy with their previous results, experiencing functional issues, or requiring additional refinements. A thorough evaluation is necessary to determine suitability.",
  },
  {
    question: "How long is the recovery process?",
    answer: "Initial recovery takes 1-2 weeks, with most swelling subsiding within 6-8 weeks. Final results may take up to a year as subtle swelling continues to resolve.",
  },
  {
    question: "Will the procedure leave scars?",
    answer: "Closed rhinoplasty leaves no visible external scars. Open rhinoplasty involves a small incision on the columella that typically heals very well and becomes nearly invisible.",
  },
  {
    question: "How much does rhinoplasty cost?",
    answer: "Costs vary based on procedure complexity, surgeon expertise, and location. During your consultation, we'll provide a detailed breakdown of all associated costs.",
  },
  {
    question: "Is rhinoplasty covered by insurance?",
    answer: "Insurance may cover rhinoplasty if it's performed to correct functional breathing problems. Purely cosmetic procedures are typically not covered.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;