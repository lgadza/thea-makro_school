export interface calaProps {
    id: number;
    title: string;
    description: string;
  }
export interface FAQProps {
    id: number;
    question: string;
    answer: string;
  }
 
   
  export const calaFAQ:FAQProps[] =[
    {id: 1,
    question: "Is Makronexus AI free to use?",
    answer: "Yes, you can create an account to use Makronexus AI for free. You have a 60 page limit for the free version on a range of different PDFs with maximum document size at 60 pages.",},
    
    {id: 2,
    question: "What do you do with my documents?",
    answer: "We train our AI on you data",},
    {id: 3,
    question: "How are my documents secured?",
    answer: "Your documents are securely stored in encrypted cloud storage. We have stringent security protocols to provide the highest standards of safety to protect your information from any malicious intent. You own and control your data and the ability to delete any unwanted files on your dashboard.",},
    {id: 4,
    question: "How does Makronexus AI work?",
    answer: "Makronexus AI creates vector embeddings for semantic search and utilizes the latest advances in AI to synthesize results based on natural language commands.",},
    {id: 5,
      question: "What type of document should I upload?",
      answer: "Currently we support DOC, DOCX, PDF, more file types coming soon."},
    
]
  export const quickFeatures:calaProps[]=[
    {id: 1,
    title: "Summarize long papers",
    description: "Learn Faster. Turn complex technical papers into simply explained summaries. Discover new insights 100X faster.",},
    {id: 2,
    title: "Instant Q&A",
    description: "Answer hard questions related to your file. Get easy-to-understand answers instantly.",},
    {id: 3,
    title: "CALA Assistance",
    description: "AI has revolutionized CALA research, simplifying complex data analysis and enhancing productivity.The future of CALA research is brighter than ever with AI's transformative capabilities",},
    
]