/* exported CORPUS */

// Every searchable line of the resume. Each id matches an element id on
// resume.html, so a search result can link straight to that line.
// "keywords" holds tools that belong to an entry but are not in its text.

const CORPUS = [
  {
    id: "carelon-rag",
    source: "Carelon, Associate Software Engineer",
    text: "Built an enterprise RAG system using LLaMA 70B, LangGraph, Qdrant vector DB, semantic retrieval, and cross-encoder reranking across 25+ policy documents, lifting top-1 accuracy from 66% to 78%, cutting P95 retrieval latency from 1.8s to 0.9s (50%), and reducing policy lookup time by 90% for 200+ internal users.",
    keywords: "RAG retrieval augmented generation vector search LLM",
  },
  {
    id: "carelon-claims",
    source: "Carelon, Associate Software Engineer",
    text: "Designed an explainable AI medical-claims adjudication pipeline processing 1,000+ claims daily across 15+ claim types using GPT-4o entity extraction, bounding-box source mapping, and a config-driven rules engine, achieving 85% decision accuracy, 75% faster clinician review, and traceability for audits.",
  },
  {
    id: "carelon-agents",
    source: "Carelon, Associate Software Engineer",
    text: "Architected a production multi-agent AI system with LangGraph and GPT-4o orchestrating 4 specialized service agents (address updates, ID card generation, member inquiries, policy terminations), processing 500+ daily member requests at 85% straight-through rate and 94% intent-classification accuracy with human-in-the-loop validation and PostgreSQL state persistence.",
    keywords: "agents agentic multi-agent orchestration LLM",
  },
  {
    id: "carelon-deploy",
    source: "Carelon, Associate Software Engineer",
    text: "Deployed containerized AI services on AWS with Docker and Kubernetes, integrating Tesseract OCR and LLM-driven document parsing; managed releases via Git-based CI/CD pipelines, onboarded 500+ users, and reduced claim-processing time by 30%.",
  },
  {
    id: "carelon-frameworks",
    source: "Carelon, Associate Software Engineer",
    text: "Developed reusable GenAI frameworks: a Text-to-SQL engine for natural-language database querying, an Agent-to-Agent (A2A) communication layer using CrewAI to orchestrate autonomous task delegation, and a GPT-4o-mini synthetic data-generation pipeline with referential-integrity validation that cut manual test-data preparation by 80%.",
  },
  {
    id: "carelon-embeddings",
    source: "Carelon, Associate Software Engineer",
    text: "Fine-tuned sentence-transformer embedding models on domain-specific data to improve retrieval accuracy.",
  },
  {
    id: "carelon-detection",
    source: "Carelon, Associate Software Engineer",
    text: "Built an experimental framework combining statistical analysis and NLP techniques to distinguish human-authored from AI-generated text in medical reports.",
  },
  {
    id: "harvin-etl",
    source: "Henry Harvin, Data Science Intern",
    text: "Implemented scheduled ETL across major social channels; applied spaCy and NLTK for sentiment and emotion classification, enabled same-day issue detection, and reduced negative comments by 5%.",
  },
  {
    id: "harvin-dashboards",
    source: "Henry Harvin, Data Science Intern",
    text: "Created Plotly dashboards tracking week-over-week performance for 20+ consultants, cutting manual reporting effort by 40% and giving managers a clearer basis for decisions.",
  },
  {
    id: "multilabel-model",
    source: "Project: Multilabel Image Classification",
    text: "Engineered a multi-label image classification model using ResNet and DenseNet architectures, achieving over 90% average validation accuracy while addressing class imbalance through class weights.",
    keywords:
      "Python PyTorch scikit-learn sklearn pandas NumPy OpenCV CV2 PIL Matplotlib deep learning computer vision",
  },
  {
    id: "multilabel-metrics",
    source: "Project: Multilabel Image Classification",
    text: "Reported precision, recall, and F1-score across 40 attribute classes, reaching an average F1-score of 0.85.",
    keywords: "PyTorch evaluation metrics",
  },
  {
    id: "multilabel-tuning",
    source: "Project: Multilabel Image Classification",
    text: "Tuned model hyperparameters using GridSearch, increasing the F1-score by 20% and improving recall for minority classes by 25%.",
    keywords: "PyTorch scikit-learn hyperparameter tuning",
  },
  {
    id: "hybrid-routing",
    source: "Project: Hybrid RAG System with Knowledge Graph Integration",
    text: "Built an enterprise telecom support system with intelligent query routing between Neo4j graph traversal for structured queries and Faiss vector search for semantic similarity using sentence-transformers embeddings.",
    keywords: "RAG knowledge graph retrieval",
  },
  {
    id: "hybrid-classifier",
    source: "Project: Hybrid RAG System with Knowledge Graph Integration",
    text: "Trained a custom spaCy classifier with a 98%+ confidence threshold for P0/P1/P2 escalation, with citation tracking for compliance.",
    keywords: "NLP RAG classification",
  },
  {
    id: "alignment-distillation",
    source: "Project: LM Alignment Toward Human Preferences",
    text: "Aligned smaller language models toward human preferences via knowledge distillation from larger LMs.",
    keywords: "LLM fine-tuning alignment",
  },
  {
    id: "alignment-peft",
    source: "Project: LM Alignment Toward Human Preferences",
    text: "Applied parameter-efficient fine-tuning methods (LoRA and QLoRA) to train models with fewer parameters, and used preference optimization to align them on toxicity and helpfulness.",
    keywords: "LLM PEFT alignment",
  },
  {
    id: "rl-algorithms",
    source: "Project: Deep RL Algorithms Implementation and Evaluation",
    text: "Implemented REINFORCE with baseline, semi-gradient n-step SARSA, and Deep Q-Learning with neural-network policy and value functions.",
    keywords: "reinforcement learning policy gradient DQN",
  },
  {
    id: "rl-evaluation",
    source: "Project: Deep RL Algorithms Implementation and Evaluation",
    text: "Evaluated all algorithms on CartPole, Acrobot, and a custom autonomous toy car environment, with a comparative analysis across methods.",
    keywords: "reinforcement learning environment",
  },
  {
    id: "paper-scope",
    source: "Publication, Chemical Engineering Transactions (2023)",
    text: "Modeled sustainable production planning for India's iron and steel sector across 3 process routes (BF/BOF, coal-based DRI-EAF, scrap-EAF), integrating carbon emissions, energy use, and cost into a single feasibility framework.",
    keywords: "research optimization sustainability",
  },
  {
    id: "paper-classifiers",
    source: "Publication, Chemical Engineering Transactions (2023)",
    text: "Trained SVM and Random Forest classifiers to identify feasible design points, reaching 90% precision and recall on the feasible class with SVM and 90% overall accuracy with a 47-tree Random Forest on a held-out 100-point evaluation set.",
    keywords: "machine learning classification research Python",
  },
  {
    id: "paper-boundary",
    source: "Publication, Chemical Engineering Transactions (2023)",
    text: "Extracted an algebraic decision boundary from the trained SVM's support vectors, reducing feasibility checking for a candidate production path to evaluating a single plane equation instead of re-running the model.",
    keywords: "interpretability explainability research",
  },
  {
    id: "skills-languages",
    source: "Skills: Languages",
    text: "Python, SQL, C++",
    keywords: "programming",
  },
  {
    id: "skills-ml",
    source: "Skills: Machine learning",
    text: "PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face",
    keywords: "neural networks",
  },
  {
    id: "skills-llm",
    source: "Skills: LLMs and GenAI",
    text: "LLaMA, OpenAI GPT, Claude, RAG, LangChain, LangGraph, LlamaIndex, AutoGen, CrewAI, prompt engineering, LoRA, QLoRA",
    keywords: "agents language models",
  },
  {
    id: "skills-nlp",
    source: "Skills: NLP",
    text: "spaCy, NLTK, sentence-transformers, Tesseract OCR",
  },
  {
    id: "skills-data",
    source: "Skills: Data tools",
    text: "pandas, NumPy, PostgreSQL, MySQL, MongoDB, Neo4j, Qdrant, ChromaDB, Faiss",
    keywords: "SQL vector database",
  },
  {
    id: "skills-ops",
    source: "Skills: MLOps and tools",
    text: "AWS, Docker, Kubernetes, Git, CI/CD, MLflow, Streamlit",
    keywords: "cloud deployment",
  },
  {
    id: "skills-viz",
    source: "Skills: Visualization",
    text: "Matplotlib, Seaborn, Plotly, Power BI",
    keywords: "dashboards charts",
  },
  {
    id: "award-impact",
    source: "Accomplishments",
    text: "Received the Impact Award three times from Carelon management for impactful solutions and consistent execution.",
  },
  {
    id: "award-aws",
    source: "Accomplishments",
    text: "AWS Certified Cloud Practitioner.",
    keywords: "cloud certification",
  },
  {
    id: "award-jee",
    source: "Accomplishments",
    text: "Ranked in the top 8% of 160,000 candidates on the JEE Advanced examination.",
  },
  {
    id: "edu-northeastern",
    source: "Northeastern University, MS in Computer Science",
    text: "Coursework: Data Management and Database Design, Algorithms.",
    keywords: "education graduate",
  },
  {
    id: "edu-iitpatna",
    source: "IIT Patna, Bachelor of Technology",
    text: "Coursework: Linear Algebra, Calculus, Programming and Data Structures, Python Programming, C++.",
    keywords: "education undergraduate math",
  },
];
