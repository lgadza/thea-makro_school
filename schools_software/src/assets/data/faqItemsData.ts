export interface FAQItem {
    id: number;
    title: string;
    content: string;
  }

  
  const FAQItems: FAQItem[] = [
    {
        id: 1,
        title: 'What is the main purpose of your software?',
        content: 'Makrodex is designed to provide an integrated platform for school management, streamlining administrative tasks, and facilitating efficient student data management. Help teachers and students to ',
      },
      {
        id: 2,
        title: 'How do you handle data security and privacy?',
        content: 'Data security and privacy are our top priorities. Our software employs robust encryption and follows industry best practices to ensure the confidentiality and safety of all user data.',
      },
    {
      id: 3,
      title: 'Can Makrodex be customized to suit our schools specific needs?',
      content: 'Yes, our software is highly customizable. We understand that different schools have unique requirements, so we offer flexibility in tailoring the software to meet your specific needs.',
    },
    {
      id: 4,
      title: 'What kind of support and training do you provide for users?',
      content: 'We provide comprehensive support and training to help schools make the most of our software. Our team is available to assist with any inquiries and offer training sessions to ensure smooth implementation and utilization.',
    },
    {
      id: 5,
      title: 'How will CALA AI enhance the efficiency of the Continuous Assessment Learning Activity?',
      content: ' CALA AI brings cutting-edge technology to the CALA project, streamlining and automating various assessment processes. By utilizing advanced algorithms and data analysis, CALA AI can quickly evaluate students performance, generate valuable insights, and provide real-time feedback to both teachers and students. This efficiency ensures that educators can focus more on instructional support and tailor learning activities, while students receive timely guidance to improve their academic journey.',
    },
    {
      id: 6,
      title: 'Can you explain how CALA AI contributes to continuous improvement in the CALA project over time?',
      content: 'CALA AI is a learning system itself. As it gathers more data and interacts with students and teachers, it continuously refines its algorithms and adapts to the evolving educational landscape. This means that CALA AI gets smarter over time, becoming even more effective at providing personalized learning experiences and generating valuable insights. Its ongoing improvement ensures that the CALA project remains at the forefront of modern education, delivering exceptional outcomes for students and educators alike.',
    },
    {
      id: 7,
      title: 'How will students learn when they rely on CALA AI?',
      content: 'The CALA AI is designed to be a supportive learning companion for students rather than a direct source of answers. It will act as a guiding mentor, assisting students in their learning journey. When students use CALA AI, they will encounter a dynamic and interactive platform that presents them with thought-provoking questions and challenging exercises. Instead of simply providing answers, CALA AI will encourage critical thinking and problem-solving skills by prompting students to analyze concepts, explore different approaches, and make informed decisions, much like they would ask their teacher for guidance. This approach fosters a deeper understanding of the subject matter and empowers students to become independent learners, preparing them to excel in a rapidly evolving world. CALA AIs goal is to nurture a lifelong love for learning and equip students with the essential skills they need to succeed academically and beyond.',
    },
   
    
  ];
  export default FAQItems;