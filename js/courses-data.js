// Hacker Learn - Curated Courses Data (12 Courses)
// Explicitly assigned to window for cross-script access in file:// and http://
window.HACKER_COURSES = [
  {
    "id": "machine-learning-deep-learning",
    "title": "Machine Learning & Deep Learning: Zero to Hero",
    "tagline": "Vectors, Calculus, CS229, micrograd, makemore, Transformers, Tokenizers, and RLHF",
    "domain": "AI, Machine Learning & Data",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": "48 hours",
    "badge": "Top Recommended",
    "icon": "brain",
    "description": "An exhaustive, battle-tested masterclass for mastering modern machine learning and artificial intelligence as curated by Hacker News. Begins with geometric spatial intuition for linear algebra and calculus, progresses to classical supervised learning and linear regression with Andrew Ng, covers 3Blue1Brown's complete neural network series, builds micrograd and makemore with Andrej Karpathy, constructs GPT from scratch in PyTorch, and explores modern RLHF with OpenAI co-founder John Schulman.",
    "prerequisites": "Basic Python programming and high-school math intuition.",
    "modules": [
      {
        "id": "ml-math-foundations",
        "title": "Module 1: Mathematical Foundations (Vectors & Calculus)",
        "description": "Develop geometric intuition for vectors, coordinate spaces, derivatives, and loss slopes before writing machine learning algorithms.",
        "lessons": [
          {
            "order": 1,
            "vid": "fNk_zzaMoSs",
            "title": "Vectors | Chapter 1, Essence of linear algebra",
            "channel": "3Blue1Brown",
            "topic": "Vectors & Linear Algebra Intuition",
            "level": "intro",
            "score": 25.0,
            "recommenders": 17,
            "summary": "The first chapter of 3Blue1Brown's Essence of Linear Algebra series, introducing vectors with animated geometric visuals. It begins a series that builds intuition for linear algebra from the basics.",
            "why_hn": "HN's go-to recommendation for learning linear algebra intuition, repeatedly credited with making concepts click and complementing textbooks.",
            "quote": "the most welcoming and informative introduction to the topic I've ever seen",
            "tags": [
              "vectors",
              "linear algebra",
              "visual intuition",
              "3blue1brown",
              "machine learning math"
            ],
            "learningOutcomes": [
              "Geometric understanding of vectors as arrows in space and coordinate lists",
              "Vector addition, scalar multiplication, and linear combinations",
              "The mathematical foundation for weights, biases, and feature embeddings in deep learning"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/fNk_zzaMoSs"
          },
          {
            "order": 2,
            "vid": "WUvTyaaNkzM",
            "title": "The essence of calculus",
            "channel": "3Blue1Brown",
            "topic": "The Essence of Calculus & Derivatives",
            "level": "intro",
            "score": 10.5,
            "recommenders": 10,
            "summary": "The first video of 3Blue1Brown's Essence of Calculus series, which builds toward integrals, derivatives, and the fundamental theorem of calculus from a simple geometry question. It aims to make viewers feel they could have invented calculus themselves.",
            "why_hn": "A staple recommendation for anyone learning math, praised for visual intuition that makes memorized formulas make sense.",
            "quote": "When I discovered that video, all the formulas they tried to make me memorize started making a LOT more sense.",
            "tags": [
              "calculus",
              "derivatives",
              "integrals",
              "visual math",
              "3blue1brown"
            ],
            "learningOutcomes": [
              "Visualizing derivatives as instantaneous rates of change and sensitivity slopes",
              "Intuition for tangents, chain rule, and area under the curve",
              "The mathematical engine behind gradient descent and error minimization"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/WUvTyaaNkzM"
          }
        ]
      },
      {
        "id": "ml-classical-regression",
        "title": "Module 2: Classical Machine Learning & Supervised Regression",
        "description": "Understand the classical roots of machine learning: formal problem formulation, supervised vs unsupervised learning, linear regression, and cost function minimization.",
        "lessons": [
          {
            "order": 3,
            "vid": "UzxYlbK2c7E",
            "title": "Lecture 1 | Machine Learning (Stanford)",
            "channel": "Stanford",
            "topic": "Supervised Learning, Linear Regression & Gradient Descent",
            "level": "intermediate",
            "score": 11.5,
            "recommenders": 11,
            "summary": "The first lecture of Andrew Ng's Stanford CS229 Machine Learning course, giving an overview of the course. It introduces supervised and unsupervised learning, learning theory and reinforcement learning.",
            "why_hn": "Recommended as the rigorous, math-heavy original course, deeper than the Coursera version, for learning machine learning.",
            "quote": "I'd suggest going back to the original youtube[1] and course materials[2].",
            "tags": [
              "andrew ng",
              "cs229",
              "supervised learning",
              "stanford",
              "machine learning course"
            ],
            "learningOutcomes": [
              "Andrew Ng's classic Stanford CS229 overview of supervised vs unsupervised learning",
              "Derivation of Linear Regression and Mean Squared Error cost functions",
              "Batch Gradient Descent mechanics, learning rates, and convergence behavior"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/UzxYlbK2c7E"
          },
          {
            "order": 4,
            "vid": "ZmNOAtZIgIk",
            "title": "Bay Area Vision Meeting: Unsupervised Feature Learning and Deep Learning",
            "channel": "Google TechTalks",
            "topic": "Unsupervised Feature Learning & Representations",
            "level": "intermediate",
            "score": 9.5,
            "recommenders": 9,
            "summary": "Andrew Ng presents unsupervised feature learning and deep learning, showing how algorithms can learn representations from unlabeled data instead of hand-designed features. He gives examples in vision and audio, including visualizations of features learned by successive layers.",
            "why_hn": "HN commenters recommended it for years as a simple, exciting overview of the deep learning wave.",
            "quote": "he explains very simply how all this works for images and some examples about the audio case.",
            "tags": [
              "deep learning",
              "andrew ng",
              "neural networks",
              "feature learning",
              "computer vision"
            ],
            "learningOutcomes": [
              "Bay Area Vision Meeting deep-dive by Andrew Ng on feature representations",
              "Why handcrafted features fail and how algorithms learn features automatically",
              "Transition from linear models to hierarchical feature extraction"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ZmNOAtZIgIk"
          }
        ]
      },
      {
        "id": "ml-neural-nets-scratch",
        "title": "Module 3: Neural Networks, Calculus & Backpropagation from Scratch",
        "description": "Visualize weight spaces, derive backpropagation calculus, and build autograd engines and language models from scratch in Python.",
        "lessons": [
          {
            "order": 5,
            "vid": "aircAruvnKk",
            "title": "But what is a neural network? | Deep learning chapter 1",
            "channel": "3Blue1Brown",
            "topic": "Visualizing Neural Networks & Hidden Layers",
            "level": "intro",
            "score": 16.5,
            "recommenders": 16,
            "summary": "3Blue1Brown's first chapter on deep learning explains what neurons and layers are and the math underlying a basic neural network, using handwritten digit recognition with visual animations.",
            "why_hn": "HN treats it as the standard first stop for learning neural networks, praised for making the math intuitive.",
            "quote": "the visualisations and explanations of the math/concepts are so amazing",
            "tags": [
              "deep learning",
              "3blue1brown",
              "gradient descent",
              "visualization",
              "machine learning basics"
            ],
            "learningOutcomes": [
              "3Blue1Brown visual deep dive into neuron activation weights and biases",
              "Geometric interpretation of hyperplanes, loss landscapes, and non-linearities",
              "Understanding how multilayer networks carve up high-dimensional vector spaces"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/aircAruvnKk"
          },
          {
            "order": 6,
            "vid": "IHZwWFHWa-w",
            "title": "Gradient descent, how neural networks learn | Deep Learning Chapter 2",
            "channel": "3Blue1Brown",
            "topic": "Gradient Descent: How Neural Networks Learn",
            "level": "intro",
            "score": 3.5,
            "recommenders": 4,
            "summary": "3Blue1Brown's second neural network chapter explains cost functions and gradient descent, showing how a network learns by minimizing error during training.",
            "why_hn": "HN recommends the series as a very accessible way to understand the math behind machine learning and LLMs.",
            "quote": "3Blue1Brown which explains math in very accessible way",
            "tags": [
              "neural networks",
              "cost function",
              "machine learning",
              "3blue1brown",
              "deep learning"
            ],
            "learningOutcomes": [
              "3Blue1Brown visual demonstration of descending high-dimensional cost surfaces",
              "Negative gradient vectors, local minima, and parameter adjustments"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/IHZwWFHWa-w"
          },
          {
            "order": 7,
            "vid": "Ilg3gGewQ5U",
            "title": "Backpropagation, intuitively | Deep Learning Chapter 3",
            "channel": "3Blue1Brown",
            "topic": "Backpropagation Intuitively",
            "level": "intro",
            "score": 4.0,
            "recommenders": 4,
            "summary": "3Blue1Brown's third deep learning chapter gives a visual, intuitive account of backpropagation and what happens to a neural network as it learns. A follow-up video covers the underlying calculus.",
            "why_hn": "Recommended as the most accessible introduction to backprop for people who struggle with the pure math.",
            "quote": "I found the explainations by 3Brown1Blue to be very intuitive when it comes to neural networks",
            "tags": [
              "neural networks",
              "backpropagation",
              "deep learning",
              "gradient descent",
              "visual math"
            ],
            "learningOutcomes": [
              "Deconstructing how a single training example nudges every weight and bias",
              "Recursive error signals flowing backward through computational layers"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/Ilg3gGewQ5U"
          },
          {
            "order": 8,
            "vid": "tIeHLnjs5U8",
            "title": "Backpropagation calculus | Deep Learning Chapter 4",
            "channel": "3Blue1Brown",
            "topic": "Backpropagation Calculus & The Chain Rule",
            "level": "intro",
            "score": 2.0,
            "recommenders": 3,
            "summary": "3Blue1Brown's chapter 4 on deep learning gives a more formal, symbol-based account of backpropagation calculus, connecting the intuition from the previous chapter to the math found in textbooks and code.",
            "why_hn": "Recommended as an accessible, visual way to understand backpropagation and neural networks.",
            "quote": "3Blue1Brown which explains math in very accessible way",
            "tags": [
              "backpropagation",
              "neural networks",
              "calculus",
              "gradient descent",
              "3blue1brown"
            ],
            "learningOutcomes": [
              "Rigorous partial derivative derivations for activations, weights, and biases",
              "Formal chain rule notation connecting loss gradients across layers"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/tIeHLnjs5U8"
          },
          {
            "order": 9,
            "vid": "VMj-3S1tku0",
            "title": "The spelled-out intro to neural networks and backpropagation: building micrograd",
            "channel": "Andrej Karpathy",
            "topic": "Building micrograd from Scratch in Python",
            "level": "intro",
            "score": 21.0,
            "recommenders": 17,
            "summary": "Andrej Karpathy's first Neural Networks: Zero to Hero lecture, which builds micrograd, a tiny autograd engine, from scratch in Python. It explains backpropagation and neural network training step by step, assuming only basic Python and some high-school calculus.",
            "why_hn": "HN treats it as the best starting point for really understanding backprop and neural nets, because Karpathy explains the why with intuition and builds everything in code.",
            "quote": "It's especially useful because he explains the why and provides intuitive explanations instead of just talking about the what and how.",
            "tags": [
              "micrograd",
              "autograd",
              "backpropagation",
              "neural networks",
              "python",
              "andrej karpathy"
            ],
            "learningOutcomes": [
              "Andrej Karpathy's masterclass writing a scalar autograd engine in pure Python",
              "Forward pass, computational DAG traversal, and backward topological sorting",
              "Training a 2-layer multi-layer perceptron (MLP) on binary classification"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/VMj-3S1tku0"
          },
          {
            "order": 10,
            "vid": "PaCmpygFfXo",
            "title": "The spelled-out intro to language modeling: building makemore",
            "channel": "Andrej Karpathy",
            "topic": "Building makemore: Language Modeling from Scratch",
            "level": "intro",
            "score": 3.0,
            "recommenders": 2,
            "summary": "Andrej Karpathy builds a bigram character-level language model from scratch, introducing torch.Tensor and the framework of training, sampling and loss evaluation. It is the first step toward a GPT-style Transformer in his makemore series.",
            "why_hn": "HN recommends it as a long but worthwhile way to demystify how language models work technically.",
            "quote": "It's long (2h), but well worth the time if anyone is curious about the technical workings of LLMs.",
            "tags": [
              "makemore",
              "bigram",
              "pytorch",
              "neural networks",
              "karpathy",
              "next-token prediction"
            ],
            "learningOutcomes": [
              "Andrej Karpathy bridging scalar autograd to PyTorch multi-dimensional tensors",
              "Bigram models, negative log-likelihood, MLP language models (Bengio et al.)",
              "Cross-entropy loss, batch normalization, and training diagnostics"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/PaCmpygFfXo"
          }
        ]
      },
      {
        "id": "ml-transformers-llms",
        "title": "Module 4: Attention Mechanisms, Tokenizers & Modern LLMs",
        "description": "Master the self-attention architecture that powers ChatGPT, Claude, and Gemini, build tokenizers, and write a GPT from scratch.",
        "lessons": [
          {
            "order": 11,
            "vid": "7xTGNNLPyMI",
            "title": "Deep Dive into LLMs like ChatGPT",
            "channel": "Andrej Karpathy",
            "topic": "Deep Dive into LLMs like ChatGPT (The Architectural Roadmap)",
            "level": "intro",
            "score": 11.0,
            "recommenders": 10,
            "summary": "Andrej Karpathy's three-hour-plus general-audience deep dive into how ChatGPT-style LLMs are built, covering the full training stack from pretraining to post-training. It also gives mental models for their quirks, like hallucination, and how to use them well.",
            "why_hn": "HN's most frequent recommendation for a clear, approachable foundation in how LLMs work without heavy math.",
            "quote": "I highly recommend Andrej Karpathy's Deep Dive into LLMs like ChatGPT",
            "tags": [
              "llm training",
              "chatgpt",
              "pretraining",
              "hallucination",
              "tokenization",
              "andrej karpathy"
            ],
            "learningOutcomes": [
              "Andrej Karpathy's comprehensive end-to-end mental model for modern language models",
              "Pretraining on Internet text, tokenizers, supervised fine-tuning (SFT), and RLHF",
              "Context window scaling, system 1 vs system 2 reasoning, and hallucination bounds"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/7xTGNNLPyMI"
          },
          {
            "order": 12,
            "vid": "wjZofJX0v4M",
            "title": "Transformers, the tech behind LLMs | Deep Learning Chapter 5",
            "channel": "3Blue1Brown",
            "topic": "Transformers & Self-Attention Demystified",
            "level": "intro",
            "score": 13.0,
            "recommenders": 13,
            "summary": "3Blue1Brown's visual explanation of how transformers and GPT-style language models work, tracing data through tokens, embeddings and attention.",
            "why_hn": "HN treats it as the go-to visual introduction to transformers, and many say it finally made attention and embeddings click.",
            "quote": "what bade me finally understand the transformer architecture [0] and attention [1], are 3Blue1Brown's videos.",
            "tags": [
              "transformers",
              "attention",
              "embeddings",
              "llm",
              "deep learning",
              "visualization"
            ],
            "learningOutcomes": [
              "Query, Key, and Value vector mechanics in self-attention",
              "How token embeddings exchange context across sequence positions",
              "Multi-head attention and residual connections explained visually"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/wjZofJX0v4M"
          },
          {
            "order": 13,
            "vid": "eMlx5fFNoYc",
            "title": "Attention in transformers, step-by-step | Deep Learning Chapter 6",
            "channel": "3Blue1Brown",
            "topic": "Attention in Transformers, Step-by-Step",
            "level": "intro",
            "score": 5.0,
            "recommenders": 5,
            "summary": "3Blue1Brown's visual walkthrough of the attention mechanism inside transformers, covering self-attention, multiple heads and cross-attention. It is chapter 6 of his deep learning series.",
            "why_hn": "HN treats it as the go-to visual explanation of attention, recommended to people who find text-based transformer explainers hard to follow.",
            "quote": "what bade me finally understand the transformer architecture [0] and attention [1], are 3Blue1Brown's videos.",
            "tags": [
              "attention",
              "transformers",
              "llm",
              "deep learning",
              "visualization",
              "3blue1brown"
            ],
            "learningOutcomes": [
              "Deep dive into softmax scaling, attention matrices, and value aggregation",
              "How masking preserves autoregressive causality in decoder models"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/eMlx5fFNoYc"
          },
          {
            "order": 14,
            "vid": "zduSFxRajkE",
            "title": "Let's build the GPT Tokenizer",
            "channel": "Andrej Karpathy",
            "topic": "Let's Build the GPT Tokenizer from Scratch",
            "level": "intermediate",
            "score": 5.5,
            "recommenders": 5,
            "summary": "Andrej Karpathy builds the GPT tokenizer from scratch, implementing byte pair encoding along with encode and decode. He shows how many odd LLM behaviors trace back to tokenization, and covers Unicode byte encodings along the way.",
            "why_hn": "Recommended as the best deep dive on tokenizers, worth the two hours for anyone working with LLMs.",
            "quote": "Worth spending 2h for the deeper understanding if you deal with LLMs.",
            "tags": [
              "byte pair encoding",
              "tokenizer",
              "gpt",
              "unicode",
              "llm"
            ],
            "learningOutcomes": [
              "Andrej Karpathy on Byte Pair Encoding (BPE) from scratch in Python",
              "Why tokenizers cause common LLM quirks, spelling glitches, and arithmetic errors",
              "Training sentencepiece and tiktoken models"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/zduSFxRajkE"
          },
          {
            "order": 15,
            "vid": "kCc8FmEb1nY",
            "title": "Let's build GPT: from scratch, in code, spelled out.",
            "channel": "Andrej Karpathy",
            "topic": "Let's Build GPT: From Scratch in Code",
            "level": "intermediate",
            "score": 10.0,
            "recommenders": 14,
            "summary": "Andrej Karpathy builds a GPT from scratch in code, following Attention Is All You Need and GPT-2/3, in about two hours using PyTorch. He connects it to ChatGPT and assumes familiarity with his earlier makemore videos.",
            "why_hn": "It is the go-to recommendation for learning how transformers and LLMs actually work, praised for its clarity and Karpathy's teaching.",
            "quote": "the best video I have seen on the topic",
            "tags": [
              "gpt",
              "transformer",
              "pytorch",
              "nanogpt",
              "attention",
              "from scratch"
            ],
            "learningOutcomes": [
              "Writing a decoder-only Transformer in pure PyTorch",
              "Positional encoding, causal self-attention masking, and feed-forward blocks",
              "Training a character-level Shakespeare language model and sampling text"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/kCc8FmEb1nY"
          },
          {
            "order": 16,
            "vid": "jkrNMKz9pWU",
            "title": "A Hackers' Guide to Language Models",
            "channel": "Jeremy Howard",
            "topic": "A Hackers' Guide to Language Models",
            "level": "intermediate",
            "score": 9.5,
            "recommenders": 8,
            "summary": "Jeremy Howard's 90-minute practical tour of language models. It covers how they work, GPT-4's capabilities and limits, using the OpenAI API, code writing, data analysis and fine-tuning.",
            "why_hn": "Repeatedly named the best practical tutorial for using LLMs, with a well-liked fine-tuning section.",
            "quote": "highly recommend \"Hackers Guide to language models\" by Jeremy Howard. 1.5h video packed with practical information",
            "tags": [
              "language models",
              "gpt-4",
              "fine-tuning",
              "openai api",
              "jeremy howard",
              "prompting"
            ],
            "learningOutcomes": [
              "Jeremy Howard on practical fine-tuning, embeddings, retrieval-augmented generation (RAG)",
              "Deploying and optimizing local open models on commodity hardware"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/jkrNMKz9pWU"
          }
        ]
      },
      {
        "id": "ml-rl-autonomous-agents",
        "title": "Module 5: Reinforcement Learning & Alignment (RLHF)",
        "description": "Learn how agents interact with environments, maximize rewards, and align modern models with human feedback.",
        "lessons": [
          {
            "order": 17,
            "vid": "2pWv7GOvuf0",
            "title": "RL Course by David Silver - Lecture 1: Introduction to Reinforcement Learning",
            "channel": "Google DeepMind",
            "topic": "Introduction to Reinforcement Learning",
            "level": "intro",
            "score": 10.0,
            "recommenders": 9,
            "summary": "The first lecture of David Silver's reinforcement learning course, introducing the field and its basic concepts. The course follows the Sutton and Barto textbook.",
            "why_hn": "Frequently recommended as an excellent, clear introductory RL course from the lead of AlphaGo, pairing well with Sutton and Barto.",
            "quote": "Really clear explanations that went hand in hand when I was reading Sutton and Barto's introductory book.",
            "tags": [
              "reinforcement learning",
              "david silver",
              "deepmind",
              "sutton and barto",
              "machine learning"
            ],
            "learningOutcomes": [
              "David Silver's DeepMind RL course: Markov Decision Processes (MDPs)",
              "Value functions, policies, and the Bellman expectation equation",
              "Exploration vs exploitation trade-offs in agent decision-making"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/2pWv7GOvuf0"
          },
          {
            "order": 18,
            "vid": "hhiLw5Q_UFg",
            "title": "John Schulman - Reinforcement Learning from Human Feedback: Progress and Challenges",
            "channel": "UC Berkeley EECS",
            "topic": "John Schulman: RL from Human Feedback (RLHF) Progress & Challenges",
            "level": "intermediate",
            "score": 2.0,
            "recommenders": 2,
            "summary": "UC Berkeley EECS colloquium by OpenAI's John Schulman on reinforcement learning from human feedback. He covers why RL helps with truthfulness, hallucination, and the limits of behavior cloning.",
            "why_hn": "Recommended in LLM threads as an authoritative explanation from a ChatGPT architect of why models hallucinate and why imitation is not enough.",
            "quote": "There's a very good talk by John Schulman, chief architect of ChatGPT",
            "tags": [
              "rlhf",
              "chatgpt",
              "hallucination",
              "behavior cloning",
              "openai"
            ],
            "learningOutcomes": [
              "OpenAI co-founder and lead architect of PPO and ChatGPT discussing RLHF mechanics",
              "Reward models, KL divergence penalties, mode collapse, and alignment challenges"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/hhiLw5Q_UFg"
          },
          {
            "order": 19,
            "vid": "Dw3BZ6O_8LY",
            "title": "Training an unbeatable AI in Trackmania",
            "channel": "Yosh",
            "topic": "Training an Unbeatable AI in Trackmania with Deep RL",
            "level": "intro",
            "score": 1.5,
            "recommenders": 1,
            "summary": "Yosh trains a reinforcement learning agent to drive Trackmania until he can no longer beat it. The video explains how the training works and the design choices involved.",
            "why_hn": "Recommended as an approachable explanation of how reinforcement learning works in practice, and cited for the constraints needed to stop exploits.",
            "quote": "be sure to check out the videos by Yosh. They're amazing, and do a great job explaining how reinforcement learning works in practice",
            "tags": [
              "trackmania",
              "reinforcement learning",
              "game ai",
              "machine learning",
              "tminterface"
            ],
            "learningOutcomes": [
              "Applying Proximal Policy Optimization (PPO) and deep Q-learning to real-time game physics",
              "Reward function engineering, hyperparameter tuning, and superhuman lap times"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/Dw3BZ6O_8LY"
          },
          {
            "order": 20,
            "vid": "qv6UVOQ0F44",
            "title": "MarI/O - Machine Learning for Video Games",
            "channel": "SethBling",
            "topic": "Neuroevolution & Genetic Algorithms in Games",
            "level": "intro",
            "score": 11.5,
            "recommenders": 10,
            "summary": "SethBling shows MarI/O, a program using neural networks and the NEAT genetic algorithm to learn to play Super Mario World. The description links the source code, the paper and background reading.",
            "why_hn": "The go-to accessible introduction to neuroevolution and NEAT, praised for crediting prior research.",
            "quote": "his brief videos give a really nice introduction to the topic that should be accessible to most people",
            "tags": [
              "neat",
              "genetic algorithms",
              "neural networks",
              "super mario world",
              "machine learning"
            ],
            "learningOutcomes": [
              "SethBling's MarI/O: evolving neural networks using the NEAT algorithm",
              "Topology mutation, fitness evaluation, and emergent game-playing behavior"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/qv6UVOQ0F44"
          }
        ]
      }
    ]
  },
  {
    "id": "systems-low-level-engineering",
    "title": "Systems Programming & Low-Level Hardware Mastery",
    "tagline": "Breadboards, 6502 Machine Code, Chip Fabrication, Mechanical Sympathy, C++, Rust & Zig",
    "domain": "Systems, Networks & Security",
    "difficulty": "Intermediate to Advanced",
    "estimatedHours": "38 hours",
    "badge": "Hardcore Systems",
    "icon": "cpu",
    "description": "Step beneath the layers of high-level virtual machines. Start with discrete logic gates and microprocessors on breadboards, transition to modern EUV semiconductor physics, and master mechanical sympathy, cache lines, SIMD, C++ memory arenas, Rust systems design, and the Zig language.",
    "prerequisites": "Knowledge of basic programming syntax and memory pointers.",
    "modules": [
      {
        "id": "sys-discrete-hardware",
        "title": "Module 1: Building Up from Bare Silicon & Discrete Logic",
        "description": "Deconstruct how digital electronics execute instructions by assembling microprocessors on breadboards and examining silicon fabrication.",
        "lessons": [
          {
            "order": 1,
            "vid": "HyznrdDSSGM",
            "title": "8-bit computer update",
            "channel": "Ben Eater",
            "topic": "Building an 8-bit Computer on Breadboards",
            "level": "intro",
            "score": 15.0,
            "recommenders": 14,
            "summary": "Ben Eater's short update announcing his plan to build another 8-bit computer from scratch on camera. It kicks off the breadboard computer series that became widely known.",
            "why_hn": "HN repeatedly recommends the series it launched as the best way to understand how a CPU works, praised for Eater's clear teaching.",
            "quote": "I think I learned more from Ben Eater’s “Building an 8-bit breadboard computer” series [0] than my intro to computer architecture course at university.",
            "tags": [
              "ben eater",
              "breadboard computer",
              "cpu design",
              "digital logic",
              "electronics"
            ],
            "learningOutcomes": [
              "Clock modules, ALU arithmetic, registers, and program counters using discrete 74LS chips",
              "Microcode execution, instruction decoding, and bus arbitration"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/HyznrdDSSGM"
          },
          {
            "order": 2,
            "vid": "LnzuMJLZRdU",
            "title": "“Hello, world” from scratch on a 6502 — Part 1",
            "channel": "Ben Eater",
            "topic": "Hello World on Bare Silicon: 6502 Assembly",
            "level": "intro",
            "score": 14.0,
            "recommenders": 11,
            "summary": "Ben Eater starts a series building a working computer on breadboards around the 6502 microprocessor. In this first part he gets a 'hello world' running from scratch.",
            "why_hn": "HN repeatedly recommends it as the best hands-on way to understand how a CPU and a computer work from first principles.",
            "quote": "It is highly recommended if you want to dive down into computers and digital logic on first principles.",
            "tags": [
              "6502",
              "breadboard computer",
              "digital electronics",
              "assembly",
              "ben eater"
            ],
            "learningOutcomes": [
              "Wiring a 6502 microprocessor from scratch with RAM, ROM, and EEPROM programmers",
              "Writing machine code instructions and observing memory cycles with an oscilloscope"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/LnzuMJLZRdU"
          },
          {
            "order": 3,
            "vid": "NGFhc8R_uO4",
            "title": "Indistinguishable From Magic: Manufacturing Modern Computer Chips",
            "channel": "Andor Gafotas",
            "topic": "Manufacturing Modern Computer Chips",
            "level": "general",
            "score": 22.0,
            "recommenders": 19,
            "summary": "A HOPE09 talk on how modern computer chips are manufactured, from 22nm transistors to ultra-clean fabs and the tricks used to pattern tiny features with light. It frames chipmaking as hacking electrical engineering and physics.",
            "why_hn": "HN repeatedly calls it the best in-depth introduction to IC manufacturing, a sense-of-awe talk by an independent engineer, while wishing for an updated version.",
            "quote": "This talk on YouTube is the most in depth explanation of IC manufacuring I have seen. I highly recommend it to anyone, no matter their background.",
            "tags": [
              "chip fabrication",
              "lithography",
              "semiconductors",
              "hope conference",
              "transistors"
            ],
            "learningOutcomes": [
              "Deep dive into photolithography, EUV machines, silicon wafer fabrication, and transistor physics",
              "The physical limits of nanoscale fabrication and semiconductor scaling"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/NGFhc8R_uO4"
          }
        ]
      },
      {
        "id": "sys-hardware-reality",
        "title": "Module 2: Mechanical Sympathy, Cache Hierarchies & Concurrency",
        "description": "Understand how CPU cache lines, memory latency, and branch prediction dictate real-world software performance.",
        "lessons": [
          {
            "order": 4,
            "vid": "rX0ItVEVjHc",
            "title": "CppCon 2014: Mike Acton \"Data-Oriented Design and C++\"",
            "channel": "CppCon",
            "topic": "Data-Oriented Design and C++",
            "level": "intermediate",
            "score": 10.5,
            "recommenders": 9,
            "summary": "Mike Acton of Insomniac Games argues that a program's purpose is transforming data, and shows how common C++ approaches work against that in performance-critical game development. He covers cache behavior, data layout and the limits of compilers.",
            "why_hn": "It is the go-to talk HN points to for data-oriented design and hardware-aware performance thinking, despite Acton's blunt style.",
            "quote": "one of the most digestible ways to start thinking about performance in high throughput systems",
            "tags": [
              "data-oriented design",
              "c++",
              "cache performance",
              "game engines",
              "struct of arrays"
            ],
            "learningOutcomes": [
              "Mike Acton's seminal CppCon keynote on designing software around data transformation and hardware constraints",
              "Eliminating virtual dispatch overhead, pointer chasing, and memory layout fragmentation"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/rX0ItVEVjHc"
          },
          {
            "order": 5,
            "vid": "kZRE7HIO3vk",
            "title": "The Thirty Million Line Problem",
            "channel": "Molly Rocket",
            "topic": "The Thirty Million Line Problem",
            "level": "intermediate",
            "score": 12.0,
            "recommenders": 11,
            "summary": "Casey Muratori's long talk arguing that modern software has ballooned to tens of millions of lines because of hardware and OS diversity. He proposes a stable ISA for entire system-on-a-chip packages and recalls when games shipped with their own boot disk.",
            "why_hn": "HN recommends it, long as it is, as an eye-opening rant on software complexity and why systems became so complicated.",
            "quote": "The video is long, but it's worth watching all of it.",
            "tags": [
              "casey muratori",
              "operating systems",
              "instruction set architecture",
              "software bloat",
              "hardware"
            ],
            "learningOutcomes": [
              "Casey Muratori on why modern software runs hundreds of times slower than hardware allows",
              "Data-oriented design vs object-oriented abstraction penalties",
              "Mechanical sympathy: designing algorithms around CPU cache lines and branch prediction"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/kZRE7HIO3vk"
          },
          {
            "order": 6,
            "vid": "r-TLSBdHe1A",
            "title": "\"Performance Matters\" by Emery Berger",
            "channel": "Strange Loop Conference",
            "topic": "Performance Matters (Emery Berger)",
            "level": "intermediate",
            "score": 12.5,
            "recommenders": 12,
            "summary": "Emery Berger explains why performance is hard to measure and deliver on modern hardware, showing how code layout and alignment can swamp optimization effects. He presents Stabilizer for statistically sound evaluation and Coz, a causal profiler.",
            "why_hn": "It is the standard recommendation for anyone puzzled by unexplained benchmark changes from tiny code edits, and for learning about causal profiling.",
            "quote": "this is the most amazing optimisation information I have seen",
            "tags": [
              "causal profiling",
              "coz",
              "benchmarking",
              "memory layout",
              "emery berger",
              "optimization"
            ],
            "learningOutcomes": [
              "Emery Berger on causal profiling (Coz), finding true performance bottlenecks, and cache thrashing",
              "How memory allocators and thread synchronization induce false sharing"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/r-TLSBdHe1A"
          },
          {
            "order": 7,
            "vid": "Kvsvd67XUKw",
            "title": "Dennis Gustafsson – Parallelizing the physics solver – BSC 2025",
            "channel": "Better Software Conference",
            "topic": "Parallelizing the Physics Solver (Dennis Gustafsson / BSC 2025)",
            "level": "advanced",
            "score": 2.0,
            "recommenders": 2,
            "summary": "Dennis Gustafsson, creator of Teardown, presents how he parallelized the physics solver for an upcoming game, followed by a Q&A. The talk was given at the Better Software Conference 2025.",
            "why_hn": "HN points to it as a practical example of solving a tricky multithreading problem, including using a spinlock to speed up a real-time physics solver.",
            "quote": "The following is an interesting talk where the author used a spinlock to speed up a real-time physics solver significantly.",
            "tags": [
              "physics solver",
              "multithreading",
              "spinlock",
              "game engines",
              "teardown"
            ],
            "learningOutcomes": [
              "Creator of Teardown on SIMD vectorization, cache locality, spinlocks, and multi-threaded game physics"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/Kvsvd67XUKw"
          }
        ]
      },
      {
        "id": "sys-cpp-optimization",
        "title": "Module 3: C++ Memory Mechanics & High Performance",
        "description": "Deep dive into memory allocators, cache-friendly data structures, and zero-cost abstractions.",
        "lessons": [
          {
            "order": 8,
            "vid": "LIb3L4vKZ7U",
            "title": "CppCon 2015: Andrei Alexandrescu “std::allocator...”",
            "channel": "CppCon",
            "topic": "std::allocator and Custom Memory Arenas",
            "level": "advanced",
            "score": 14.5,
            "recommenders": 7,
            "summary": "Andrei Alexandrescu's CppCon 2015 talk argues that std::allocator is badly designed. He proposes building high-performance allocators from small composable, templated pieces.",
            "why_hn": "HN repeatedly recommends it as an entertaining, mind-opening talk on allocator design and composable generic programming.",
            "quote": "It really opened my eyes to how one could very elegantly make a very complex and high-performance heap allocator",
            "tags": [
              "c++",
              "std::allocator",
              "composable allocators",
              "andrei alexandrescu",
              "templates",
              "cppcon"
            ],
            "learningOutcomes": [
              "Andrei Alexandrescu on modern C++ memory management, custom allocators, and arena allocation",
              "Reducing allocator contention in multithreaded systems"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/LIb3L4vKZ7U"
          },
          {
            "order": 9,
            "vid": "ncHmEUmJZf4",
            "title": "CppCon 2017: Matt Kulukundis “Designing a Fast, Efficient, Cache-friendly Hash Table, Step by Step”",
            "channel": "CppCon",
            "topic": "Designing a Fast, Cache-Friendly Hash Table",
            "level": "advanced",
            "score": 12.0,
            "recommenders": 9,
            "summary": "Matt Kulukundis explains how Google designed SwissTable, a fast, cache-friendly hash table, step by step from std::unordered_map. The talk covers open addressing, SIMD probing and the tradeoffs of changing a fundamental data structure.",
            "why_hn": "HN repeatedly cites it as the definitive explanation of SwissTable, the design behind Abseil, Rust's hash map and Go's maps.",
            "quote": "Excellent talk which explains the concepts really clearly and concisely.",
            "tags": [
              "swisstable",
              "hash tables",
              "c++",
              "simd",
              "abseil",
              "cache efficiency"
            ],
            "learningOutcomes": [
              "Matt Kulukundis (Google) on Swiss Table: flat hash maps, SIMD probing, and metadata byte groups",
              "Step-by-step reduction of CPU cache misses during hash table lookups"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ncHmEUmJZf4"
          },
          {
            "order": 10,
            "vid": "zBkNBP00wJE",
            "title": "CppCon 2016: Jason Turner “Rich Code for Tiny Computers: A Simple Commodore 64 Game in C++17”",
            "channel": "CppCon",
            "topic": "Rich Code for Tiny Computers: C++17 on Commodore 64",
            "level": "intermediate",
            "score": 11.0,
            "recommenders": 13,
            "summary": "Jason Turner's CppCon 2016 talk builds a simple Commodore 64 game using C++17, showing how constexpr and const let a modern compiler produce tight 6502 code. He walks through assembly output to show abstractions being optimized away.",
            "why_hn": "A perennial favorite, recommended as proof that expressive modern C++ can compile to efficient code even on tiny retro hardware.",
            "quote": "there is a wonderful talk by Jason Turner about writing a simple Pong clone for the Commodore 64 in modern C++",
            "tags": [
              "c++17",
              "commodore 64",
              "constexpr",
              "6502",
              "compiler optimization",
              "retro games"
            ],
            "learningOutcomes": [
              "Using constexpr, templates, and zero-cost abstractions to compile high-level C++ to 6502 bytecodes",
              "Compiler optimization techniques for resource-constrained microcontrollers"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/zBkNBP00wJE"
          }
        ]
      },
      {
        "id": "sys-modern-languages",
        "title": "Module 4: Modern Systems: Rust, Zig & ECS Architecture",
        "description": "Compare zero-cost abstractions, compiler optimizations, memory ownership, and modern language design.",
        "lessons": [
          {
            "order": 11,
            "vid": "aKLntZcp27M",
            "title": "RustConf 2018 - Closing Keynote - Using Rust For Game Development by Catherine West",
            "channel": "Rust Programming Language",
            "topic": "Rust for Game Engines & Systems Architecture",
            "level": "intermediate",
            "score": 11.5,
            "recommenders": 9,
            "summary": "Catherine West's RustConf 2018 closing keynote on building a game in Rust and organizing a large codebase. It builds up an entity component system and generational indices step by step.",
            "why_hn": "HN treats it as the go-to explanation of ECS, valuable even for people who don't use Rust.",
            "quote": "is still my favorite ECS explanation, because she builds the concept piece by piece starting from megaclass-hell to full entities-as-IDs with reasons for each step.",
            "tags": [
              "ecs",
              "rust",
              "game development",
              "generational indices",
              "architecture"
            ],
            "learningOutcomes": [
              "Catherine West on overcoming OOP architectural failures with Rust's ownership model",
              "Entity Component Systems (ECS), memory layout, and concurrency guarantees"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/aKLntZcp27M"
          },
          {
            "order": 12,
            "vid": "W3aieHjyNvw",
            "title": "Overwatch Gameplay Architecture and Netcode",
            "channel": "GDC Festival of Gaming",
            "topic": "Overwatch Gameplay Architecture and Netcode",
            "level": "intermediate",
            "score": 13.0,
            "recommenders": 16,
            "summary": "Blizzard's Timothy Ford explains in this 2017 GDC session how Overwatch uses an Entity Component System architecture for layered gameplay. He also covers its server-authoritative netcode with client-side prediction and how they keep the game responsive and fair.",
            "why_hn": "HN treats it as the best real-world AAA example of ECS and game netcode, and cites it constantly in discussions of data-oriented design.",
            "quote": "This Overwatch GDC talk is the best breakdown/example of data-oriented ECS in a AAA game that I know of",
            "tags": [
              "entity component system",
              "netcode",
              "overwatch",
              "client prediction",
              "gdc",
              "data-oriented design"
            ],
            "learningOutcomes": [
              "GDC masterclass on Entity Component Systems, deterministic rollback netcode, and cache coherence"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/W3aieHjyNvw"
          },
          {
            "order": 13,
            "vid": "Z4oYSByyRak",
            "title": "Zig: A programming language designed for robustness, optimality, and clarity –  Andrew Kelley",
            "channel": "Recurse Center",
            "topic": "Zig: Clarity, Robustness and Optimality",
            "level": "intermediate",
            "score": 8.5,
            "recommenders": 6,
            "summary": "Andrew Kelley, creator of Zig, introduces the language at the Recurse Center's Localhost series in 2018. He covers its goals of robustness, optimality and clarity, C interop, cross-compilation and explicit allocators.",
            "why_hn": "HN repeatedly recommends it as the definitive introduction to Zig straight from its author, and links to it whenever Zig's design choices come up.",
            "quote": "here's a great talk on zig from the recurse center",
            "tags": [
              "zig",
              "systems programming",
              "allocators",
              "cross-compilation",
              "language design"
            ],
            "learningOutcomes": [
              "Andrew Kelley's design philosophy for Zig: no hidden control flow, no macros, no hidden allocations",
              "Comptime metaprogramming and building high-performance systems"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/Z4oYSByyRak"
          },
          {
            "order": 14,
            "vid": "mwrA5IRGpfU",
            "title": "Writing a Wayland Compositor in Zig - Isaac Freund",
            "channel": "Zig SHOWTIME",
            "topic": "Writing a Wayland Compositor in Zig",
            "level": "intermediate",
            "score": 4.0,
            "recommenders": 4,
            "summary": "Isaac Freund, author of the River Wayland compositor, talks about writing a Wayland compositor in Zig. He covers why he chose Zig over C and Rust and how Zig can wrap a hairy C library.",
            "why_hn": "HN recommends it as a phenomenal talk on Zig's C interop and on choosing between C, Rust and Zig for systems work.",
            "quote": "I loved his Zig+Wayland screencast [1], where he explained very engagingly how Zig is able to embrace and extend a pretty hairy C library",
            "tags": [
              "zig",
              "wayland",
              "river compositor",
              "c interop",
              "systems programming"
            ],
            "learningOutcomes": [
              "Isaac Freund building low-level graphics compositors with direct Linux DRM/KMS buffer management"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/mwrA5IRGpfU"
          }
        ]
      }
    ]
  },
  {
    "id": "operating-systems-kernels",
    "title": "Operating Systems, Kernels & Concurrency",
    "tagline": "UNIX Heritage, systemd, BeOS Microkernels, Container Isolation, Crash Dumps & Concurrency Runtimes",
    "domain": "Systems, Networks & Security",
    "difficulty": "Intermediate to Advanced",
    "estimatedHours": "34 hours",
    "badge": "Core CS",
    "icon": "terminal",
    "description": "Explore the software layer that arbitrates between hardware and applications. From UNIX bootstrapping to BeOS microkernel concurrency, Apollo guidance software, modern Linux kernel evolution, systemd init architecture, production crash dump analysis, and thread runtimes.",
    "prerequisites": "Basic understanding of C and terminal commands.",
    "modules": [
      {
        "id": "os-unix-heritage",
        "title": "Module 1: Genesis of UNIX & Operating System Bootstrapping",
        "description": "Discover the revolutionary insights of Bell Labs and contrast traditional monolithic UNIX with modern init systems and microkernel architectures.",
        "lessons": [
          {
            "order": 1,
            "vid": "tc4ROCJYbm0",
            "title": "AT&T Archives: The UNIX Operating System",
            "channel": "AT&T Tech Channel",
            "topic": "The UNIX Operating System: Philosophy & Design",
            "level": "intro",
            "score": 9.5,
            "recommenders": 10,
            "summary": "A 1982 Bell Labs film hosted by Victor Vyssotsky on the origins and design philosophy of the UNIX operating system, with appearances by Kernighan, Thompson and Ritchie. It shows pipes, filters and a shell one-liner spell checker being built.",
            "why_hn": "HN points people to it as the clearest primary-source explanation of Unix pipes and the small-tools philosophy, straight from the creators.",
            "quote": "The pipelines explanation was incredibly clear.",
            "tags": [
              "unix",
              "pipes",
              "bell labs",
              "shell",
              "kernighan",
              "computing history"
            ],
            "learningOutcomes": [
              "Ken Thompson and Dennis Ritchie explaining pipelines, file descriptors, and modular tools",
              "The 'everything is a file' abstraction and composable shell pipelines"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/tc4ROCJYbm0"
          },
          {
            "order": 2,
            "vid": "EY6q5dv_B-o",
            "title": "VCF East: Ken Thompson interviewed by Brian Kernighan",
            "channel": "Vintage Computer Federation",
            "topic": "Ken Thompson Interviewed by Brian Kernighan",
            "level": "general",
            "score": 11.5,
            "recommenders": 11,
            "summary": "Brian Kernighan interviews Unix co-creator Ken Thompson at VCF East 2019. Thompson recounts how he was hired at Bell Labs, writing the Unix kernel in about three weeks, the origins of B and TMG, pipes, and other anecdotes.",
            "why_hn": "HN commenters recommend it for Thompson's funny, first-hand Unix history stories, some of which even Kernighan had not heard.",
            "quote": "Also I found these fascinating",
            "tags": [
              "ken thompson",
              "brian kernighan",
              "unix",
              "bell labs",
              "computing history",
              "tmg"
            ],
            "learningOutcomes": [
              "Ken Thompson reflecting on writing the first UNIX kernel on the PDP-7, B/C languages, and regular expressions"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/EY6q5dv_B-o"
          },
          {
            "order": 3,
            "vid": "o_AIw9bGogo",
            "title": "The Tragedy of systemd",
            "channel": "linux.conf.au",
            "topic": "The Tragedy of systemd: Linux Init Evolution",
            "level": "intermediate",
            "score": 16.0,
            "recommenders": 16,
            "summary": "FreeBSD developer Benno Rice traces the history of init and bootstrap systems at linux.conf.au 2019 to explain why systemd was seen as necessary and why it provokes such strong reactions. He also discusses why change is scary.",
            "why_hn": "The most-recommended balanced take on systemd, from a BSD perspective, handed to anyone caught up in the systemd debate.",
            "quote": "is an interesting talk on this topic from the view of someone (Benno Rice) in BSD land. Highly recommended.",
            "tags": [
              "systemd",
              "init systems",
              "freebsd",
              "unix history",
              "linux"
            ],
            "learningOutcomes": [
              "Benno Rice's legendary Linux conference analysis of systemd's architectural controversies",
              "Service supervision, cgroups, D-Bus messaging, and PID 1 responsibilities"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/o_AIw9bGogo"
          },
          {
            "order": 4,
            "vid": "BsVydyC8ZGQ",
            "title": "BeOS DEMO VIDEO",
            "channel": "koyhoge",
            "topic": "BeOS: Pervasive Multithreading & Microkernel Architecture",
            "level": "general",
            "score": 2.0,
            "recommenders": 2,
            "summary": "The official demo video from Be, Inc. showing BeOS running multiple videos, media applications and a responsive desktop on 1990s hardware.",
            "why_hn": "HN people cite it as evidence of how fast and responsive a well-designed microkernel desktop could be on modest hardware.",
            "quote": "Tell me why microkernels are too slow when they can only do this on 90's era hardware",
            "tags": [
              "beos",
              "haiku",
              "microkernel",
              "operating systems",
              "90s computing"
            ],
            "learningOutcomes": [
              "Contrasting monolithic UNIX with BeOS modular microkernel design, symmetric multiprocessing, and 64-bit BFS"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/BsVydyC8ZGQ"
          },
          {
            "order": 5,
            "vid": "xx7Lfh5SKUQ",
            "title": "34C3 -  The Ultimate Apollo Guidance Computer Talk",
            "channel": "media.ccc.de",
            "topic": "The Ultimate Apollo Guidance Computer Talk",
            "level": "intermediate",
            "score": 9.5,
            "recommenders": 9,
            "summary": "Michael Steil and Christian Hessmann's 34C3 talk explaining the Apollo Guidance Computer end to end: hardware design, operating system, and mission software.",
            "why_hn": "Repeatedly called the best and most comprehensive AGC talk, with commenters rewatching it and treating it as foundational computer architecture learning.",
            "quote": "This is the best description of AGC I have seen so far, from hardware design to mission software, layer by layer",
            "tags": [
              "agc",
              "computer architecture",
              "apollo",
              "operating systems",
              "chaos communication congress"
            ],
            "learningOutcomes": [
              "Deep dive into the 1960s Apollo Guidance Computer (AGC) hardware and software architecture",
              "Cooperative multitasking, priority-based process scheduling, and real-time fault tolerance"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/xx7Lfh5SKUQ"
          }
        ]
      },
      {
        "id": "os-modern-kernel",
        "title": "Module 2: Kernel Abstractions, Virtualization & Production Debugging",
        "description": "Investigate how modern multicore, NVMe, and memory architectures challenge conventional OS abstractions, and master crash debugging.",
        "lessons": [
          {
            "order": 6,
            "vid": "36myc8wQhLo",
            "title": "USENIX ATC '21/OSDI '21 Joint Keynote Address-It's Time for Operating Systems to Rediscover Hardware",
            "channel": "USENIX",
            "topic": "It's Time for Operating Systems to Rediscover Hardware",
            "level": "intermediate",
            "score": 10.5,
            "recommenders": 12,
            "summary": "Timothy Roscoe of ETH Zurich delivers the joint USENIX ATC/OSDI 2021 keynote arguing that operating systems must reckon with modern hardware, which is a heterogeneous collection of processors, firmware and coprocessors rather than a simple machine. It shows how much runs below and beside Linux.",
            "why_hn": "Repeatedly recommended as a revelatory talk on how little control the main OS has over modern SoCs and PCs.",
            "quote": "There's this great USENIX talk by Timothy Roscoe [1]",
            "tags": [
              "operating systems",
              "heterogeneous hardware",
              "firmware",
              "usenix",
              "systems research"
            ],
            "learningOutcomes": [
              "USENIX ATC/OSDI keynote on why 1970s OS abstractions fail on modern 100GbE networks and PCIe Gen5 SSDs",
              "Kernel-bypass networking, io_uring, and reimagining the POSIX interface"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/36myc8wQhLo"
          },
          {
            "order": 7,
            "vid": "-zRN7XLCRhc",
            "title": "LISA11 - Fork Yeah! The Rise and Development of illumos",
            "channel": "USENIX",
            "topic": "Fork Yeah! The Rise and Development of illumos",
            "level": "general",
            "score": 11.0,
            "recommenders": 9,
            "summary": "Bryan Cantrill's LISA11 talk on how illumos arose after Oracle closed OpenSolaris. It covers the history of Sun, ZFS, DTrace and Zones, and the diaspora of kernel engineers, with a famous rant about Oracle and Larry Ellison.",
            "why_hn": "HN points to it as the definitive, entertaining account of Sun's fate under Oracle, and quotes its Ellison lawnmower advice whenever Oracle behaves badly.",
            "quote": "If you're interested how it came to be check out this epic talk by Bryan Cantrill",
            "tags": [
              "illumos",
              "opensolaris",
              "oracle",
              "sun microsystems",
              "bryan cantrill",
              "open source"
            ],
            "learningOutcomes": [
              "Bryan Cantrill on the evolution of OpenSolaris into illumos, ZFS filesystems, and DTrace kernel tracing"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/-zRN7XLCRhc"
          },
          {
            "order": 8,
            "vid": "hgN8pCMLI2U",
            "title": "Bryan Cantrill on Jails and Solaris Zones",
            "channel": "PapersWeLove",
            "topic": "Bryan Cantrill on Jails and Solaris Zones",
            "level": "intermediate",
            "score": 7.0,
            "recommenders": 6,
            "summary": "Bryan Cantrill's Papers We Love talk on FreeBSD Jails and Solaris Zones, tracing how OS-level virtualization grew out of chroot and the limits of the traditional UNIX security model.",
            "why_hn": "Recommended repeatedly as the best account of container history and how Zones built on and went beyond Jails.",
            "quote": "I highly recommend this talk, talking about Jails and Zones.",
            "tags": [
              "jails",
              "solaris zones",
              "containers",
              "unix security",
              "bryan cantrill"
            ],
            "learningOutcomes": [
              "The architectural history of operating-system-level virtualization, cgroups, and container boundaries"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/hgN8pCMLI2U"
          },
          {
            "order": 9,
            "vid": "8fi7uSYlOdc",
            "title": "Containers From Scratch • Liz Rice • GOTO 2018",
            "channel": "GOTO Conferences",
            "topic": "Containers From Scratch in Go",
            "level": "intermediate",
            "score": 6.5,
            "recommenders": 6,
            "summary": "Liz Rice live-codes a minimal container runtime in a few lines of Go at GOTO Amsterdam 2018. She explains namespaces, control groups and what a host knows about its containers.",
            "why_hn": "HN considers it one of the best talks for understanding how containers work from the ground up.",
            "quote": "Probably one of the most enlightening presentations I've seen in recent years, full-stop.",
            "tags": [
              "containers",
              "namespaces",
              "cgroups",
              "go",
              "live coding",
              "docker"
            ],
            "learningOutcomes": [
              "Liz Rice writing container isolation from scratch using Linux namespaces, cgroups, and chroot in ~100 lines of Go"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8fi7uSYlOdc"
          },
          {
            "order": 10,
            "vid": "30jNsCVLpAE",
            "title": "Debugging Under Fire: Keep your Head when Systems have Lost their Mind • Bryan Cantrill • GOTO 2017",
            "channel": "GOTO Conferences",
            "topic": "Debugging Under Fire: Keep your Head when Systems have Lost their Mind",
            "level": "intermediate",
            "score": 12.5,
            "recommenders": 8,
            "summary": "Bryan Cantrill's GOTO Chicago 2017 talk on debugging production systems under pressure, centered on the incident where an operator's mistyped command rebooted an entire Joyent datacenter. It covers human factors, automation and architecture.",
            "why_hn": "A perennial HN recommendation for outage and postmortem threads, praised as funny, educational and one of the best postmortems anyone has seen.",
            "quote": "The best postmortem I've seen was actually a conference talk",
            "tags": [
              "bryan cantrill",
              "outages",
              "postmortem",
              "debugging",
              "joyent",
              "devops"
            ],
            "learningOutcomes": [
              "Bryan Cantrill on post-mortem crash dump analysis, operating system kernel panics, and production triage"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/30jNsCVLpAE"
          }
        ]
      },
      {
        "id": "os-concurrency-event-loop",
        "title": "Module 3: Concurrency Runtimes: From Event Loops to Kernel Threads",
        "description": "Order concurrency from simplest to most advanced: asynchronous event loops, actor concurrency, and kernel M:N threading.",
        "lessons": [
          {
            "order": 11,
            "vid": "8aGhZQkoFbQ",
            "title": "What the heck is the event loop anyway? | Philip Roberts | JSConf EU",
            "channel": "JSConf",
            "topic": "What the Heck Is the Event Loop Anyway?",
            "level": "intermediate",
            "score": 16.5,
            "recommenders": 16,
            "summary": "Philip Roberts explains the JavaScript event loop, call stack, callbacks and asynchronous behavior with live visualizations using a tool he built. It demystifies terms like non-blocking and single-threaded.",
            "why_hn": "HN commenters repeatedly name it as the best explanation of the JS event loop and the first thing to watch before tackling async code.",
            "quote": "The tool he created to display the event loop in real time is fantastic.",
            "tags": [
              "event loop",
              "async javascript",
              "call stack",
              "callbacks",
              "visualization"
            ],
            "learningOutcomes": [
              "Philip Roberts' iconic JSConf visual demonstration of the call stack, web APIs, and task queue",
              "Non-blocking I/O, event demultiplexing, and avoiding thread starvation"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8aGhZQkoFbQ"
          },
          {
            "order": 12,
            "vid": "JvBT4XBdoUE",
            "title": "The Soul of Erlang and Elixir • Sasa Juric • GOTO 2019",
            "channel": "GOTO Conferences",
            "topic": "The Soul of Erlang and Elixir: Lightweight Processes",
            "level": "intermediate",
            "score": 17.5,
            "recommenders": 16,
            "summary": "Sasa Juric explains what makes Erlang and Elixir suited to server-side systems, focusing on the BEAM concurrency model rather than syntax or ecosystem. He demonstrates processes, supervision, and fault tolerance.",
            "why_hn": "It is HN's favorite pitch for Elixir and the BEAM, credited with convincing many people to adopt them.",
            "quote": "Watch this if you want to understand why so many people fall in love with it.",
            "tags": [
              "elixir",
              "erlang",
              "beam",
              "fault tolerance",
              "supervision trees",
              "actor model"
            ],
            "learningOutcomes": [
              "Sasa Juric on the BEAM virtual machine's preemptive scheduler and isolated actor processes",
              "Supervision trees, 'let it crash' philosophy, and zero-downtime concurrency"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/JvBT4XBdoUE"
          },
          {
            "order": 13,
            "vid": "KXuZi9aeGTw",
            "title": "User-level threads....... with threads. - Paul Turner - Google",
            "channel": "Linux Plumbers Conference",
            "topic": "User-Level Threads... with Threads",
            "level": "advanced",
            "score": 6.5,
            "recommenders": 6,
            "summary": "Paul Turner of Google presents kernel interfaces for user-level scheduling of real threads, aiming at a uniform synchronous programming model across C++, Java, Go and Python. It introduces the switchto-style system calls behind Google's fibers.",
            "why_hn": "HN cites it as the key explanation of cooperative, user-scheduled kernel threads and the prior art behind later async and coroutine debates.",
            "quote": "Paul Turner explained this really well at this year's Linux Plumbers Conference. The whole talk is fantastic",
            "tags": [
              "linux kernel",
              "fibers",
              "scheduling",
              "concurrency",
              "switchto",
              "google"
            ],
            "learningOutcomes": [
              "Paul Turner (Google) on M:N threading, kernel scheduler cooperative preemption, and high-throughput thread runtimes"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/KXuZi9aeGTw"
          }
        ]
      }
    ]
  },
  {
    "id": "distributed-systems-databases",
    "title": "Distributed Systems, Databases & Storage Engines",
    "tagline": "Relational Models, Stonebraker's Big Data, DynamoDB, Data Centers, CRDTs, WhatsApp Scaling & Simulation",
    "domain": "Systems, Networks & Security",
    "difficulty": "Intermediate to Advanced",
    "estimatedHours": "36 hours",
    "badge": "High Scale",
    "icon": "database",
    "description": "Master the design of systems that span multiple machines across unreliable networks. Study relational theory from Andy Pavlo and Michael Stonebraker, NoSQL patterns, physical Google cluster architecture, conflict-free replicated data types (CRDTs), WhatsApp scaling to 1M+ TCP connections, and deterministic simulation testing from FoundationDB.",
    "prerequisites": "Basic understanding of networking and databases.",
    "modules": [
      {
        "id": "dist-storage-models",
        "title": "Module 1: Relational Foundations & Storage Internals",
        "description": "Examine how databases organize bytes on disk, parse queries, and balance relational vs non-relational trade-offs.",
        "lessons": [
          {
            "order": 1,
            "vid": "oeYBdghaIjc",
            "title": "01 - Course Introduction & Relational Model (CMU Databases Systems / Fall 2019)",
            "channel": "CMU Database Group",
            "topic": "CMU Database Systems: Course Intro & Relational Model",
            "level": "intro",
            "score": 8.0,
            "recommenders": 6,
            "summary": "The first lecture of Andy Pavlo's CMU 15-445 Intro to Database Systems (Fall 2019), covering course introduction and the relational model.",
            "why_hn": "Frequently recommended as the best free university course on database internals, praised for depth and Pavlo's presentation.",
            "quote": "Highly recommended both for the depth and how Andy Pavlo presents the topic.",
            "tags": [
              "databases",
              "relational model",
              "cmu",
              "andy pavlo",
              "course"
            ],
            "learningOutcomes": [
              "Andy Pavlo on the relational model, tuple storage layouts, and relational algebra operations"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/oeYBdghaIjc"
          },
          {
            "order": 2,
            "vid": "KRcecxdGxvQ",
            "title": "Michael Stonebraker | Big Data is (at least) Four Different Problems",
            "channel": "Michigan Engineering",
            "topic": "Big Data is (At Least) Four Different Problems",
            "level": "intermediate",
            "score": 6.0,
            "recommenders": 5,
            "summary": "Database pioneer Michael Stonebraker argues that 'big data' is really at least four different problems: big volumes with small analytics, big analytics, velocity, and variety. He comments on where each market is heading.",
            "why_hn": "HN points to it as a thoughtful, first-principles take from a Turing award winner that cuts through NoSQL and big data hype.",
            "quote": "a rather interesting talk by a very thoughtful Turing award winning engineer named Michael Stonebraker",
            "tags": [
              "michael stonebraker",
              "big data",
              "databases",
              "sql",
              "nosql"
            ],
            "learningOutcomes": [
              "Turing Award laureate Michael Stonebraker on why 'one size fits all' database engines are dead"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/KRcecxdGxvQ"
          },
          {
            "order": 3,
            "vid": "qI_g07C_Q5I",
            "title": "Introduction to NoSQL • Martin Fowler • GOTO 2012",
            "channel": "GOTO Conferences",
            "topic": "Introduction to NoSQL & Aggregate-Oriented Storage",
            "level": "intro",
            "score": 7.0,
            "recommenders": 6,
            "summary": "Martin Fowler's GOTO 2012 introduction to NoSQL databases: where they came from, their data models, how consistency thinking differs, and when to use them. He argues they won't make relational databases obsolete and introduces polyglot persistence.",
            "why_hn": "HN repeatedly recommends it as a balanced, beginner-friendly overview of SQL versus NoSQL, and some teachers assign it to students.",
            "quote": "one of the rare videos I've required students in my database classes to watch.",
            "tags": [
              "nosql",
              "martin fowler",
              "polyglot persistence",
              "consistency",
              "data models"
            ],
            "learningOutcomes": [
              "Martin Fowler on key-value stores, document databases, column-family stores, and graph databases",
              "Polyglot persistence and impedance mismatch"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/qI_g07C_Q5I"
          },
          {
            "order": 4,
            "vid": "HaEPXoXVf2k",
            "title": "AWS re:Invent 2018: Amazon DynamoDB Deep Dive: Advanced Design Patterns for DynamoDB (DAT401)",
            "channel": "Amazon Web Services",
            "topic": "Amazon DynamoDB Deep Dive: Advanced Design Patterns",
            "level": "advanced",
            "score": 11.5,
            "recommenders": 12,
            "summary": "Rick Houlihan's AWS re:Invent 2018 deep dive on advanced DynamoDB design patterns. It covers index overloading, GSI sharding, composite keys, graph processing and transactions.",
            "why_hn": "The go-to recommendation for learning DynamoDB data modeling, with many saying it made access-pattern-driven design click.",
            "quote": "I highly recommend every engineer to watch it: it's a great overview of SQL vs NoSQL",
            "tags": [
              "dynamodb",
              "nosql",
              "single-table design",
              "aws",
              "reinvent"
            ],
            "learningOutcomes": [
              "Rick Houlihan on single-table design, partition key hash distribution, and secondary index projection"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/HaEPXoXVf2k"
          }
        ]
      },
      {
        "id": "dist-caching-replication",
        "title": "Module 2: Infrastructure, Caching & Log-Structured Replication",
        "description": "Study data center infrastructure, cache replacement mechanics, and conflict-free replicated data types.",
        "lessons": [
          {
            "order": 5,
            "vid": "XZmGGAbHqa0",
            "title": "Inside a Google data center",
            "channel": "Google Workspace",
            "topic": "Inside a Google Data Center",
            "level": "general",
            "score": 0.0,
            "recommenders": 0,
            "summary": "Joe Kava, VP of Google's Data Center Operations, gives a short tour of a Google data center. He covers security, sustainability and the core infrastructure architecture.",
            "why_hn": "Cited as a documentary look at how Google runs its data centers, though sometimes dismissed as PR.",
            "quote": "",
            "tags": [
              "google",
              "data center tour",
              "infrastructure",
              "security",
              "sustainability"
            ],
            "learningOutcomes": [
              "Physical cluster architecture, rack networking, backup power generators, and data center cooling infrastructure"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/XZmGGAbHqa0"
          },
          {
            "order": 6,
            "vid": "F8sZRBdmqc0",
            "title": "Bryan Cantrill on ARC: A Self-Tuning, Low Overhead Replacement Cache [PWL SF] 10/2017",
            "channel": "PapersWeLove",
            "topic": "Bryan Cantrill on ARC: Adaptive Replacement Cache",
            "level": "intermediate",
            "score": 3.0,
            "recommenders": 3,
            "summary": "Bryan Cantrill presents the ARC (Adaptive Replacement Cache) paper by Megiddo and Modha at Papers We Love. He opens with a survey of caching strategies before digging into the self-tuning LRU/MFU design.",
            "why_hn": "Recommended in cache-algorithm threads as a fun, informative walk through caching strategies and ARC.",
            "quote": "Bryan Cantrill does a pretty good survey of caching strategies in the intro",
            "tags": [
              "arc",
              "lru",
              "caching",
              "zfs",
              "bryan cantrill",
              "papers we love"
            ],
            "learningOutcomes": [
              "Deep dive into Megiddo and Modha's ARC algorithm: balancing recency (LRU) and frequency (LFU) dynamically",
              "Implementation challenges in production filesystems (ZFS)"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/F8sZRBdmqc0"
          },
          {
            "order": 7,
            "vid": "79fvDDPaIoY",
            "title": "Bryan Cantrill from Joyent on Manta: internet-facing object storage facility that features compute",
            "channel": "AI Council",
            "topic": "Bryan Cantrill on Manta: Object Storage with Compute",
            "level": "intermediate",
            "score": 6.0,
            "recommenders": 4,
            "summary": "Bryan Cantrill of Joyent presents Manta, an internet-facing object store that lets you run compute directly on the data. The talk is peppered with ZFS history and Cantrill's trademark commentary on the industry.",
            "why_hn": "HN recommends Cantrill talks generally for their mix of industry history, technical depth and entertaining delivery, and this one is a favorite for storage and data integrity threads.",
            "quote": "I highly recommend any talk you can find of Bryan Cantrill. A wonderful mix of industry history and great delivery.",
            "tags": [
              "manta",
              "bryan cantrill",
              "zfs",
              "joyent",
              "data integrity",
              "oracle"
            ],
            "learningOutcomes": [
              "Joyent Manta architecture: distributed POSIX-style object storage running compute directly against data"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/79fvDDPaIoY"
          },
          {
            "order": 8,
            "vid": "ROor6_NGIWU",
            "title": "The Language of the System - Rich Hickey",
            "channel": "ClojureTV",
            "topic": "The Language of the System",
            "level": "advanced",
            "score": 10.0,
            "recommenders": 10,
            "summary": "Rich Hickey's 2013 talk applies language-design thinking to whole systems, covering names, queues, data, failure, and the interfaces between programs. It ends with a call to action for building systems holistically.",
            "why_hn": "HN recommends it as a key Hickey talk on system design that changes how people think about distributed state and interfaces.",
            "quote": "it has really changed the way I look at distributed persistent storage.",
            "tags": [
              "rich hickey",
              "clojure",
              "distributed systems",
              "queues",
              "data-oriented design",
              "datomic"
            ],
            "learningOutcomes": [
              "Rich Hickey on building distributed architectures using immutable data streams rather than RPC mutable state",
              "Decoupling time, value, and identity in distributed architectures"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ROor6_NGIWU"
          },
          {
            "order": 9,
            "vid": "fU9hR3kiOK0",
            "title": "\"Turning the database inside out with Apache Samza\" by Martin Kleppmann",
            "channel": "Strange Loop Conference",
            "topic": "Turning the Database Inside Out with Apache Samza",
            "level": "intermediate",
            "score": 11.0,
            "recommenders": 9,
            "summary": "Martin Kleppmann argues that databases are global shared mutable state and proposes treating them as an ever-growing log of immutable facts. Derived data such as caches, indexes and views is then built by stream processors like Apache Samza. The talk draws on Kafka and LinkedIn's experience with commit logs.",
            "why_hn": "Commenters repeatedly cite it as the talk that reframed how they think about caching, derived data and event sourcing.",
            "quote": "This talk on Apache Samza completely changed how I think about caching and derived data in general",
            "tags": [
              "apache samza",
              "kafka",
              "event sourcing",
              "immutable data",
              "commit log",
              "derived data"
            ],
            "learningOutcomes": [
              "Martin Kleppmann on treating change-data-capture (CDC) logs as the central source of truth in distributed systems"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/fU9hR3kiOK0"
          },
          {
            "order": 10,
            "vid": "yCcWpzY8dIA",
            "title": "Conflict Resolution for Eventual Consistency • Martin Kleppmann • GOTO 2016",
            "channel": "GOTO Conferences",
            "topic": "Conflict Resolution for Eventual Consistency (CRDTs)",
            "level": "intermediate",
            "score": 9.0,
            "recommenders": 3,
            "summary": "Martin Kleppmann's GOTO Berlin 2016 talk on how collaborative editors, offline apps, and multi-datacenter databases handle concurrent updates. It covers conflict resolution approaches including operational transformation and CRDTs, with a worked look at text CRDTs.",
            "why_hn": "Treated as the go-to approachable yet deep primer on CRDTs and collaborative editing, recommended repeatedly in threads on Automerge, local-first software and OT versus CRDT.",
            "quote": "Rest of the talk is also highly recommended for anyone interested in an approachable primer on CRDTs.",
            "tags": [
              "crdt",
              "collaborative editing",
              "operational transformation",
              "automerge",
              "distributed systems"
            ],
            "learningOutcomes": [
              "Martin Kleppmann on CRDTs (Conflict-free Replicated Data Types)",
              "State-based vs operation-based CRDTs, vector clocks, and collaborative editing mechanics"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/yCcWpzY8dIA"
          }
        ]
      },
      {
        "id": "dist-resilience-testing",
        "title": "Module 3: Distributed Resilience & Deterministic Testing",
        "description": "Learn how top infrastructure teams engineer resilient systems that survive real-world cluster crashes.",
        "lessons": [
          {
            "order": 11,
            "vid": "PGLYEDpNu60",
            "title": "Velocity NY 2013:   Richard Cook, \"Resilience In Complex Adaptive Systems\"",
            "channel": "O'Reilly",
            "topic": "Resilience In Complex Adaptive Systems (Richard Cook)",
            "level": "general",
            "score": 13.0,
            "recommenders": 4,
            "summary": "Richard Cook's short Velocity 2013 talk on resilience in complex adaptive systems, arguing systems operate near the edge of failure and that the surprise is how rarely they fail. He presents a model of how pressures push systems toward failure boundaries.",
            "why_hn": "HN people cite it constantly as the clearest explanation of normalization of deviance and how complex systems drift toward failure.",
            "quote": "One of the most important talks I've ever seen is Richard Cook's",
            "tags": [
              "richard cook",
              "resilience",
              "normalization of deviance",
              "operations",
              "failure modes"
            ],
            "learningOutcomes": [
              "Velocity NY keynote on failure modes in complex socio-technical distributed systems"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/PGLYEDpNu60"
          },
          {
            "order": 12,
            "vid": "c12cYAUTXXs",
            "title": "Erlang Factory 2014 - That's 'Billion' with a 'B': Scaling to the Next Level at WhatsApp",
            "channel": "Erlang Solutions",
            "topic": "Scaling to the Next Level at WhatsApp: 'Billion' with a 'B'",
            "level": "advanced",
            "score": 11.5,
            "recommenders": 6,
            "summary": "Rick Reed of WhatsApp explains at Erlang Factory 2014 how the service scaled to billions of messages with a very small engineering team. He covers the FreeBSD and Erlang stack, Mnesia usage, server counts and bottleneck work.",
            "why_hn": "The go-to talk showing how Erlang let a tiny team run a massive messaging system.",
            "quote": "watch this talk and imagine trying to recreate that system with only a handful of server engineers",
            "tags": [
              "erlang",
              "whatsapp",
              "scalability",
              "mnesia",
              "freebsd",
              "performance"
            ],
            "learningOutcomes": [
              "Erlang Solutions on tuning FreeBSD network stacks and BEAM VMs to support 2 million concurrent TCP connections per node"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/c12cYAUTXXs"
          },
          {
            "order": 13,
            "vid": "4fFDFbi3toc",
            "title": "\"Testing Distributed Systems w/ Deterministic Simulation\" by Will Wilson",
            "channel": "Strange Loop Conference",
            "topic": "Testing Distributed Systems with Deterministic Simulation",
            "level": "intermediate",
            "score": 13.5,
            "recommenders": 12,
            "summary": "Will Wilson of FoundationDB explains how the team tested their distributed database using deterministic simulation. By running the whole system in a simulator with injected faults and reproducible seeds, they could find rare concurrency and network bugs.",
            "why_hn": "HN treats it as the canonical talk on simulation testing and a mind-blowing example of how far rigorous testing can go.",
            "quote": "this is one of the most amazing talks on distributed systems",
            "tags": [
              "deterministic simulation",
              "foundationdb",
              "fault injection",
              "concurrency bugs",
              "strange loop"
            ],
            "learningOutcomes": [
              "Will Wilson on FoundationDB's simulated world testing methodology",
              "Injecting network partitions, clock skews, and disk failures deterministically to eliminate race conditions"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/4fFDFbi3toc"
          },
          {
            "order": 14,
            "vid": "w3WYdYyjek4",
            "title": "TigerStyle! (Or How To Design Safer Systems in Less Time) by Joran Dirk Greef",
            "channel": "TigerBeetle",
            "topic": "TigerStyle! Designing Safer Systems in Less Time",
            "level": "intermediate",
            "score": 6.5,
            "recommenders": 2,
            "summary": "Joran Dirk Greef's Systems Distributed '23 talk on TigerStyle, the engineering methodology behind TigerBeetle. It covers designing safer systems in less time through up-front design, assertions, and deterministic simulation.",
            "why_hn": "HN commenters, including TigerBeetle people, recommend it as the explanation of a methodology for building defect-free, high-assurance software.",
            "quote": "The TigerStyle video is well worth watching for anyone who wants to build defect-free software systems",
            "tags": [
              "tigerstyle",
              "tigerbeetle",
              "zig",
              "software correctness",
              "deterministic simulation"
            ],
            "learningOutcomes": [
              "Joran Dirk Greef on TigerBeetle's design principles: deterministic assertions, memory pre-allocation, and zero-allocation hot paths"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/w3WYdYyjek4"
          }
        ]
      }
    ]
  },
  {
    "id": "cybersecurity-cryptography",
    "title": "Cybersecurity, Reverse Engineering & Cryptography",
    "tagline": "Diffie-Hellman, SHA-256, Weird Machines, Game Boy Hardware Exploits, iOS Security & SSL Auditing",
    "domain": "Systems, Networks & Security",
    "difficulty": "Intermediate to Advanced",
    "estimatedHours": "32 hours",
    "badge": "Offensive & Defensive",
    "icon": "shield",
    "description": "Demystify mathematical cryptography and real-world reverse engineering. Explore Diffie-Hellman key exchange, SHA-256 and proof-of-work, homomorphic encryption, alongside Meredith Patterson and Sergey Bratus on the Science of Insecurity, media.ccc.de's hardware reverse engineering of the Game Boy, Black Hat iOS teardowns, and Moxie Marlinspike on SSL certificate trust hierarchies. Note: This course builds strong theoretical and analytical foundations for security thinking. Practical penetration testing, binary exploitation (buffer overflows, ROP chains), and malware analysis require hands-on lab environments (CTFs, Hack The Box, pwnable.kr) that complement but go beyond video instruction.",
    "prerequisites": "Basic algebra and introductory programming.",
    "modules": [
      {
        "id": "sec-crypto-foundations",
        "title": "Module 1: Mathematical Cryptography Foundations",
        "description": "Understand the mathematical trapdoor functions and discrete logarithm problems behind modern encryption.",
        "lessons": [
          {
            "order": 1,
            "vid": "YEBfamv-_do",
            "title": "Diffie-Hellman Key Exchange",
            "channel": "Art of the Problem",
            "topic": "Diffie-Hellman Key Exchange Explained with Paint",
            "level": "general",
            "score": 9.5,
            "recommenders": 9,
            "summary": "A short explainer on the history and mechanics of public key cryptography and the Diffie-Hellman key exchange. It uses a mixing-paint-colors analogy to show how two parties can agree on a shared secret in public.",
            "why_hn": "It is the go-to beginner explanation of Diffie-Hellman, recommended because the paint analogy makes the idea click without prior cryptography knowledge.",
            "quote": "I found this video, Public key cryptography - Diffie-Hellman Key Exchange (full version), to be completely enlightening",
            "tags": [
              "diffie-hellman",
              "key exchange",
              "cryptography",
              "paint analogy",
              "encryption"
            ],
            "learningOutcomes": [
              "Art of the Problem visual explanation of modular arithmetic and asymmetric key agreement over insecure channels",
              "The color-mixing analogy and discrete logarithm trapdoor mechanics"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/YEBfamv-_do"
          },
          {
            "order": 2,
            "vid": "bBC-nXj3Ng4",
            "title": "But how does bitcoin actually work?",
            "channel": "3Blue1Brown",
            "topic": "How Bitcoin and Cryptographic Hash Functions Actually Work",
            "level": "intro",
            "score": 13.0,
            "recommenders": 15,
            "summary": "3Blue1Brown explains the math and mechanics behind Bitcoin visually: ledgers, digital signatures, proof of work and the blockchain, building up a decentralized payment system from first principles.",
            "why_hn": "The go-to recommended video for newcomers wanting a clear, visual explanation of how Bitcoin and blockchains work.",
            "quote": "this video is the best explanation for how mining and blockchains work IMO",
            "tags": [
              "bitcoin",
              "blockchain",
              "proof of work",
              "cryptography",
              "mining"
            ],
            "learningOutcomes": [
              "3Blue1Brown's complete mathematical explanation of SHA-256, digital signatures, public key ledgers, and proof of work",
              "Why hash collisions are astronomically improbable and how consensus prevents double-spending"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/bBC-nXj3Ng4"
          },
          {
            "order": 3,
            "vid": "ZDnShu5V99s",
            "title": "Theory and Practice of Cryptography",
            "channel": "Google TechTalks",
            "topic": "Theory and Practice of Cryptography",
            "level": "advanced",
            "score": 7.5,
            "recommenders": 5,
            "summary": "A Google Tech Talk by Steve Weis that introduces modern cryptography and its use in practice and at Google. It covers proofs of security and security definitions and a special topic. HN commenters treat it as a talk on verifiable electronic voting.",
            "why_hn": "HN keeps pointing to it as a long, fascinating talk on cryptographic, verifiable voting whenever e-voting security comes up.",
            "quote": "Here's a long but fascinating tech talk on a real solution",
            "tags": [
              "cryptography",
              "e-voting",
              "verifiable elections",
              "security proofs",
              "google tech talk"
            ],
            "learningOutcomes": [
              "Google TechTalk on symmetric vs asymmetric ciphers, chosen-ciphertext attacks, and cryptographic protocol pitfalls"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ZDnShu5V99s"
          },
          {
            "order": 4,
            "vid": "BYRTvoZ3Rho",
            "title": "Was YOUR vote counted? (feat. homomorphic encryption) - Numberphile",
            "channel": "Numberphile",
            "topic": "Homomorphic Encryption & Verifiable Computation",
            "level": "general",
            "score": 5.0,
            "recommenders": 5,
            "summary": "Numberphile interviews cryptographer Ron Rivest about end-to-end verifiable voting. He explains how homomorphic encryption and receipts let a voter confirm their ballot was counted without being able to prove how they voted to anyone else.",
            "why_hn": "HN commenters point to it in election-security threads as an accessible explainer of how a vote can be verifiable but not sellable.",
            "quote": "Cryptographers are clever and have figured out a way to let you know your vote was counted without being able to prove it to a third party!",
            "tags": [
              "homomorphic encryption",
              "e-voting",
              "cryptography",
              "ron rivest",
              "election security"
            ],
            "learningOutcomes": [
              "Numberphile exploration of homomorphic encryption: computing over encrypted data without decrypting it"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/BYRTvoZ3Rho"
          }
        ]
      },
      {
        "id": "sec-vulnerabilities-reverse-engineering",
        "title": "Module 2: Reverse Engineering, Protocol Hacking & System Vulnerabilities",
        "description": "Learn formal exploit mechanics, hardware reverse engineering, mobile platform security, and systemic vulnerability economics.",
        "lessons": [
          {
            "order": 5,
            "vid": "3kEfedtQVOY",
            "title": "28c3: The Science of Insecurity",
            "channel": "28c3",
            "topic": "28c3: The Science of Insecurity (Patterson & Bratus)",
            "level": "intermediate",
            "score": 10.0,
            "recommenders": 9,
            "summary": "Meredith Patterson and Sergey Bratus argue that networked software stays insecure because protocols and inputs are too complex to recognize safely. They propose using formal language theory and grammars to build secure, verifiable input handling.",
            "why_hn": "HN commenters call it one of the best security talks and the standard introduction to LANGSEC, which they use to argue for simpler, well-specified input formats.",
            "quote": "The best talk on computer security I have seen is Meredith Patterson's Science of Insecurity at 28c3",
            "tags": [
              "langsec",
              "parsers",
              "formal grammars",
              "input validation",
              "protocol security"
            ],
            "learningOutcomes": [
              "Formal language theory applied to security: uncomputable input handling, Turing-complete exploits, and weird machines"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/3kEfedtQVOY"
          },
          {
            "order": 6,
            "vid": "HyzD8pNlpwI",
            "title": "The Ultimate Game Boy Talk (33c3)",
            "channel": "media.ccc.de",
            "topic": "The Ultimate Game Boy Talk (33c3)",
            "level": "intermediate",
            "score": 12.0,
            "recommenders": 10,
            "summary": "Michael Steil's 33c3 talk explains essentially everything about the Game Boy: CPU, video hardware, peripherals, and the tricks used by games and demos. It revives the era of counting clock cycles around hardware limits.",
            "why_hn": "HN treats it as the standard starting point for Game Boy emulator writers and homebrew developers, with several calling it one of their favorite talks.",
            "quote": "I'd recommend watching The Ultimate Game Boy Talk [1] before trying to dive into any code.",
            "tags": [
              "game boy",
              "emulation",
              "retro hardware",
              "ppu",
              "33c3"
            ],
            "learningOutcomes": [
              "Complete hardware reverse engineering: Z80-derived CPU, memory banking mappers, audio synthesis, and boot ROM glitching exploits"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/HyzD8pNlpwI"
          },
          {
            "order": 7,
            "vid": "BLGFriOKz6U",
            "title": "Behind the Scenes of iOS Security",
            "channel": "Black Hat",
            "topic": "Behind the Scenes of iOS Security",
            "level": "advanced",
            "score": 13.5,
            "recommenders": 9,
            "summary": "Apple security head Ivan Krstic gives a Black Hat 2016 talk on iOS security, covering HomeKit, Auto Unlock and iCloud Keychain. He explains key hierarchies and how data can stay safe even in adversarial clouds.",
            "why_hn": "HN repeatedly recommends it as the deepest public look at how iCloud Keychain and Apple's device and cloud security are designed.",
            "quote": "if you haven't watched the talk at Black Hat I'd highly recommend it",
            "tags": [
              "ios security",
              "icloud keychain",
              "secure enclave",
              "cloud key vault",
              "black hat"
            ],
            "learningOutcomes": [
              "Black Hat technical breakdown of Apple Secure Enclave, hardware crypto keys, sandbox isolation, and kernel mitigations"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/BLGFriOKz6U"
          },
          {
            "order": 8,
            "vid": "eG0KrT6pBPk",
            "title": "Defcon 18   Changing threats to privacy   Moxie Marlinspike   Part ",
            "channel": "killab66661",
            "topic": "Defcon 18: Changing Threats to Privacy (Moxie Marlinspike)",
            "level": "general",
            "score": 12.0,
            "recommenders": 6,
            "summary": "Moxie Marlinspike's DEF CON 18 talk on changing threats to privacy argues that surveillance arrived through convenient services and network effects, so opting out is not a real solution. It also includes his framing of getting social democracy rather than the fascism people feared.",
            "why_hn": "Cited repeatedly to rebut 'just don't use Facebook' arguments and to explain why tracking becomes hard to escape at critical mass.",
            "quote": "I would highly encourage anyone who thinks that the solution is as simple as \"don't use XYZ\" to see what Moxie Marlinspike had to say",
            "tags": [
              "privacy",
              "surveillance",
              "network effects",
              "moxie marlinspike",
              "defcon",
              "tracking"
            ],
            "learningOutcomes": [
              "Interception of mobile protocol traffic, SSL stripping, and structural privacy erosion"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/eG0KrT6pBPk"
          },
          {
            "order": 9,
            "vid": "Z7Wl2FW2TcA",
            "title": "BlackHat USA 2011: SSL And The Future Of Authenticity",
            "channel": "Christiaan008",
            "topic": "BlackHat: SSL And The Future Of Authenticity (Moxie Marlinspike)",
            "level": "intermediate",
            "score": 9.0,
            "recommenders": 9,
            "summary": "Moxie Marlinspike's BlackHat 2011 talk examines weaknesses of SSL and the certificate authority system and proposes Convergence, a decentralized notary approach with trust agility.",
            "why_hn": "HN commenters repeatedly recommend it as the best explanation of why the CA system is broken and what alternatives exist.",
            "quote": "best talk I know of this subject",
            "tags": [
              "moxie marlinspike",
              "convergence",
              "certificate authorities",
              "mitm",
              "tls",
              "trust agility"
            ],
            "learningOutcomes": [
              "SSL/TLS Certificate Authority failures, man-in-the-middle attacks, and certificate pinning"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/Z7Wl2FW2TcA"
          },
          {
            "order": 10,
            "vid": "LkH2r-sNjQs",
            "title": "Why Electronic Voting Is Still A Bad Idea",
            "channel": "Tom Scott",
            "topic": "Why Electronic Voting Is Still a Bad Idea (Tom Scott)",
            "level": "general",
            "score": 13.0,
            "recommenders": 11,
            "summary": "Tom Scott explains why electronic voting is a bad idea. Elections must be trusted by everyone and attacks on software scale in ways attacks on paper do not, so open source or blockchain fixes do not solve it.",
            "why_hn": "HN treats it as the go-to layperson-friendly argument against e-voting and links it in nearly every voting-technology thread.",
            "quote": "Tom Scott still has the best argument against e-voting IMO [1].",
            "tags": [
              "e-voting",
              "election security",
              "tom scott",
              "paper ballots",
              "blockchain voting",
              "trust"
            ],
            "learningOutcomes": [
              "Tom Scott's definitive breakdown of software integrity, trust boundaries, and physical ballot verification",
              "Why high-tech software is the wrong solution for democratic elections"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/LkH2r-sNjQs"
          },
          {
            "order": 11,
            "vid": "ajGX7odA87k",
            "title": "USENIX Security '18-Q: Why Do Keynote Speakers Keep Suggesting That Improving Security Is Possible?",
            "channel": "USENIX",
            "topic": "Why Do Keynote Speakers Keep Suggesting Improving Security Is Possible?",
            "level": "general",
            "score": 12.0,
            "recommenders": 10,
            "summary": "James Mickens's humorous USENIX Security keynote argues that improving security and trusting opaque technology like machine learning is far harder than the industry admits.",
            "why_hn": "HN considers it a classic, hilarious and sobering talk on ML inscrutability and tech hubris, often rewatched.",
            "quote": "His keynote at USENIX Security 2018 is by far the best summation of the dangers of ML that I've ever seen.",
            "tags": [
              "james mickens",
              "security",
              "machine learning",
              "humor",
              "keynote"
            ],
            "learningOutcomes": [
              "USENIX Security keynote on the structural, economic, and incentive problems in computer security",
              "The attacker-defender asymmetry and why patching vulnerabilities never solves architectural flaws"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ajGX7odA87k"
          }
        ]
      }
    ]
  },
  {
    "id": "compilers-language-design",
    "title": "Compilers, Interpreters & Programming Language Theory",
    "tagline": "SICP, Growing a Language, Lexers in Go, Metacircular Evaluators, Type Systems, Python Internals & LLVM",
    "domain": "Software Engineering & Languages",
    "difficulty": "Intermediate to Advanced",
    "estimatedHours": "31 hours",
    "badge": "Language Crafter",
    "icon": "code",
    "description": "Learn how human-readable code transforms into machine-executable instructions. Start with SICP metalinguistic abstraction, study Guy Steele's language growth philosophy, build concurrent lexical scanners in Go with Rob Pike, implement metacircular evaluators with William Byrd, study Richard Feldman's algebraic type systems, dissect Python's C runtime internals with Armin Ronacher, and explore LLVM code generation.",
    "prerequisites": "Familiarity with multiple programming paradigms.",
    "modules": [
      {
        "id": "pl-philosophy-foundations",
        "title": "Module 1: Language Semantics & Metalinguistic Abstraction",
        "description": "Examine how language paradigms shape developer thought and how to build scalable vocabularies.",
        "lessons": [
          {
            "order": 1,
            "vid": "-J_xL4IGhJA",
            "title": "Lecture 1A: Overview and Introduction to Lisp",
            "channel": "MIT OpenCourseWare",
            "topic": "MIT 6.001 SICP: Introduction to Lisp & Metalinguistic Abstraction",
            "level": "intro",
            "score": 12.5,
            "recommenders": 10,
            "summary": "The first lecture of MIT's 6.001 (SICP) with Abelson and Sussman, giving an overview of the course and an introduction to Lisp. It argues that computer science is about managing complexity and abstraction, not computers.",
            "why_hn": "HN people recommend the SICP lectures as a deeper, livelier route into the book and a formative course even for seasoned programmers.",
            "quote": "I watched and cannot recommend it enough, even for seasoned programmers",
            "tags": [
              "sicp",
              "scheme",
              "lisp",
              "abstraction",
              "mit",
              "recursion"
            ],
            "learningOutcomes": [
              "Hal Abelson & Gerald Jay Sussman introducing evaluation rules, environments, and syntax trees in Scheme/Lisp"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/-J_xL4IGhJA"
          },
          {
            "order": 2,
            "vid": "_ahvzDzKdB0",
            "title": "Growing a Language, by Guy Steele",
            "channel": "Bill Pugh",
            "topic": "Growing a Language (Guy Steele)",
            "level": "intermediate",
            "score": 12.0,
            "recommenders": 11,
            "summary": "Guy Steele's 1998 OOPSLA keynote on designing a programming language that its users can grow. He builds the talk using only one-syllable words and terms he has defined, to demonstrate the idea.",
            "why_hn": "HN considers it one of the best technical talks ever and cites it in discussions of language design, small cores and extensibility.",
            "quote": "This is probably the best talk ever on the general topic",
            "tags": [
              "guy steele",
              "growing a language",
              "oopsla",
              "language extensibility",
              "lisp",
              "java"
            ],
            "learningOutcomes": [
              "Guy Steele's legendary OOPSLA keynote constructed only using words of one syllable until defining new ones",
              "How programming languages must be designed to grow through user-defined abstractions"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/_ahvzDzKdB0"
          },
          {
            "order": 3,
            "vid": "8pTEmbeENF4",
            "title": "Bret Victor   The Future of Programming",
            "channel": "Joey Reid",
            "topic": "The Future of Programming (Bret Victor)",
            "level": "general",
            "score": 13.0,
            "recommenders": 12,
            "summary": "Bret Victor's DBX 2013 talk, delivered in the guise of a 1973 IBM engineer with an overhead projector. It surveys forgotten ideas from 1960s and early 70s computing and warns against assuming you know what you're doing.",
            "why_hn": "HN treats it as a classic, near-mandatory talk on how programming tools and paradigms stagnated and which older ideas deserve revival.",
            "quote": "Take a look and you will be amazed of how good (or revolutionary by our standards) some old technologies were.",
            "tags": [
              "bret victor",
              "programming paradigms",
              "computing history",
              "tooling",
              "software stagnation"
            ],
            "learningOutcomes": [
              "Bret Victor's historic roleplay set in 1973 examining dynamic vs static paradigms, visual representation, and interactive computing"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8pTEmbeENF4"
          }
        ]
      },
      {
        "id": "pl-lexing-parsing-evaluators",
        "title": "Module 2: Lexing, Parsing, Evaluators & Type Systems",
        "description": "Build scanners, implement metacircular interpreters from first principles, and design type systems that reject bugs at compile time.",
        "lessons": [
          {
            "order": 4,
            "vid": "HxaD_trXwRE",
            "title": "Lexical Scanning in Go - Rob Pike",
            "channel": "GoogleFOSSSydney",
            "topic": "Lexical Scanning in Go (Rob Pike)",
            "level": "intermediate",
            "score": 14.0,
            "recommenders": 13,
            "summary": "Rob Pike shows how the Go text/template lexer is built, using state functions, goroutines and channels. The talk was given at a Google Technology User Group in Sydney in 2011.",
            "why_hn": "HN returns to it for years as an elegant introduction to writing a lexer that is easy to follow even without a parsing background.",
            "quote": "It's far more interesting than it sounds, and even if you don't know much about lexing/parsing it's easy to follow.",
            "tags": [
              "go",
              "lexer",
              "rob pike",
              "state machines",
              "concurrency",
              "parsing"
            ],
            "learningOutcomes": [
              "Rob Pike live-coding a concurrent lexical scanner using state functions and Go channels",
              "Tokenization patterns for complex template languages"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/HxaD_trXwRE"
          },
          {
            "order": 5,
            "vid": "OyfBQmvr2Hc",
            "title": "William Byrd on \"The Most Beautiful Program Ever Written\" [PWL NYC]",
            "channel": "PapersWeLove",
            "topic": "William Byrd on 'The Most Beautiful Program Ever Written'",
            "level": "intermediate",
            "score": 14.0,
            "recommenders": 11,
            "summary": "William Byrd presents at Papers We Love NYC on what he calls the most beautiful program ever written, a Lisp interpreter written in Lisp. He walks through the metacircular interpreter and related ideas, and demos relational programming and program synthesis near the end.",
            "why_hn": "HN repeatedly recommends it as an amazing talk that derives the essence of Lisp and shows miniKanren-style program synthesis.",
            "quote": "I can't recommend the talk Dr Byrd did on this enough",
            "tags": [
              "lisp",
              "scheme",
              "minikanren",
              "program synthesis",
              "relational programming",
              "interpreters"
            ],
            "learningOutcomes": [
              "Papers We Love presentation constructing a relational metacircular Scheme interpreter in Scheme that runs forwards and backwards"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/OyfBQmvr2Hc"
          },
          {
            "order": 6,
            "vid": "FITJMJjASUs",
            "title": "Ruby Conf 12 - Y Not- Adventures in Functional Programming by Jim Weirich",
            "channel": "Confreaks",
            "topic": "Y Not: Adventures in Functional Programming (Jim Weirich)",
            "level": "intermediate",
            "score": 22.5,
            "recommenders": 17,
            "summary": "Jim Weirich's RubyConf 2012 talk derives the Y combinator step by step, live-coding in Ruby lambdas. It builds up an understanding of functional programming and lambda calculus from first principles.",
            "why_hn": "HN recommends it repeatedly as one of the best and most entertaining programming talks, and as the talk that makes the Y combinator click, even for people who do not use Ruby.",
            "quote": "perhaps the most entertaining and interesting technical talk I've ever seen.",
            "tags": [
              "functional programming",
              "lambda calculus",
              "ruby",
              "live coding",
              "jim weirich"
            ],
            "learningOutcomes": [
              "Jim Weirich's live-coded derivation of the Y Combinator in Ruby from pure lambda calculus",
              "Recursion without names, higher-order functions, and functional programming foundations"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/FITJMJjASUs"
          },
          {
            "order": 7,
            "vid": "IcgmSRJHu_8",
            "title": "\"Making Impossible States Impossible\" by Richard Feldman",
            "channel": "elm-conf",
            "topic": "Making Impossible States Impossible (Richard Feldman)",
            "level": "intermediate",
            "score": 15.5,
            "recommenders": 9,
            "summary": "Richard Feldman's elm-conf talk on designing models so that bugs from impossible application states cannot occur, using Elm's compiler and types. It demonstrates techniques for making invalid states unrepresentable.",
            "why_hn": "HN repeatedly recommends it as a talk that changed how people model data, with ideas that apply well beyond Elm to any typed language.",
            "quote": "the talk is Elm lang focused, but the concepts still apply to other languages.",
            "tags": [
              "elm",
              "type systems",
              "make illegal states unrepresentable",
              "functional programming",
              "data modeling"
            ],
            "learningOutcomes": [
              "Designing data models where invalid application states are unrepresentable at compile time",
              "Sum types, tagged unions, and eliminating runtime defensive checks"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/IcgmSRJHu_8"
          },
          {
            "order": 8,
            "vid": "QyJZzq0v7Z4",
            "title": "Why Isn't Functional Programming the Norm? – Richard Feldman",
            "channel": "Metosin",
            "topic": "Why Isn't Functional Programming the Norm? (Richard Feldman)",
            "level": "general",
            "score": 13.0,
            "recommenders": 12,
            "summary": "Richard Feldman argues that functional programming is not the norm largely because of historical accidents, such as C++ popularity, platform exclusivity, marketing spend and network effects, rather than merit. He traces the history of how languages become mainstream.",
            "why_hn": "HN treats it as the standard answer to why FP isn't mainstream and why languages succeed.",
            "quote": "This talk by Richard Feldman is an excellent discussion about why Functional Programming is not the norm",
            "tags": [
              "functional programming",
              "oop",
              "language adoption",
              "network effects",
              "elm"
            ],
            "learningOutcomes": [
              "Historical analysis of why OOP captured mindshare in the 1990s and where functional ideas are now dominating modern languages"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/QyJZzq0v7Z4"
          }
        ]
      },
      {
        "id": "pl-backends-runtime-semantics",
        "title": "Module 3: Interpreter Runtimes, JIT Barriers & LLVM Code Generation",
        "description": "Inspect interpreter runtime bottlenecks, C extension leaks, and LLVM intermediate representations for dynamic language backends.",
        "lessons": [
          {
            "order": 9,
            "vid": "qCGofLIzX6g",
            "title": "How Python was Shaped by leaky Internals, Armin Ronacher, Flask framework",
            "channel": "Видео с мероприятий {speach!",
            "topic": "How Python Was Shaped by Leaky Internals (Armin Ronacher)",
            "level": "advanced",
            "score": 19.5,
            "recommenders": 15,
            "summary": "Armin Ronacher, creator of Flask, explains how CPython's internals and C API leak into the language's semantics. Using examples like the complexity of the add operation, he shows why Python is hard to optimize or reimplement.",
            "why_hn": "It is HN's standard answer to why Python cannot easily get much faster, and is recommended by people who work on JITs and alternative runtimes.",
            "quote": "This excellent talk describes how the semantics of the \"add\" operation are much more complex than generally described.",
            "tags": [
              "cpython",
              "performance",
              "jit",
              "c api",
              "language semantics",
              "armin ronacher"
            ],
            "learningOutcomes": [
              "Armin Ronacher on CPython's interpreter loop semantics, reference counting leaks into C APIs, and JIT optimization barriers"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/qCGofLIzX6g"
          },
          {
            "order": 10,
            "vid": "8X69_42Mj-g",
            "title": "Clasp: Common Lisp using LLVM and C++ for Molecular Metaprogramming",
            "channel": "Google TechTalks",
            "topic": "Clasp: Common Lisp using LLVM and C++",
            "level": "intermediate",
            "score": 10.5,
            "recommenders": 8,
            "summary": "Christian Schafmeister's Google Tech Talk on designing spiroligomer molecules and building Clasp, a Common Lisp on LLVM that interoperates with C++, to program molecular design. It covers the chemistry, automatic differentiation for force fields, and how the compiler is built.",
            "why_hn": "HN repeatedly cites it as a striking example of Common Lisp used to push the frontier of science, and as one of the most inspiring tech talks.",
            "quote": "I challenge anyone to watch this lecture from Christian Schafmeister and say they are not impressed",
            "tags": [
              "clasp",
              "llvm",
              "common lisp",
              "nanotechnology",
              "metaprogramming",
              "chemistry"
            ],
            "learningOutcomes": [
              "Google TechTalk on implementing dynamic language runtimes with LLVM compiler backends",
              "AST transformations, JIT compilation, and native code generation"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8X69_42Mj-g"
          }
        ]
      }
    ]
  },
  {
    "id": "computer-graphics-media",
    "title": "Computer Graphics, Shaders & Demoscene Art",
    "tagline": "Bézier Curves, Splines, Perceptual Color, 4K Demoscene, Signed Distance Fields & Console Graphics Hacks",
    "domain": "Design, Graphics & Visual Media",
    "difficulty": "Intermediate",
    "estimatedHours": "26 hours",
    "badge": "Visual Math",
    "icon": "image",
    "description": "Discover the intersection of pure mathematics, hardware limitations, and visual artistry. Learn the differential geometry of curves and splines, perceptual colormaps, examine the legendary 4k demoscene demo 'elevated', master signed distance fields and raymarching with Inigo Quilez, and reverse-engineer PlayStation 1 and NES graphics hardware.",
    "prerequisites": "Basic algebra and trigonometry.",
    "modules": [
      {
        "id": "gfx-curves-geometry",
        "title": "Module 1: Differential Geometry of Curves & Splines",
        "description": "Master parametric polynomial curves, linear interpolation (lerp), and geometric continuity.",
        "lessons": [
          {
            "order": 1,
            "vid": "aVwxzDHniEw",
            "title": "The Beauty of Bézier Curves",
            "channel": "Freya Holmér",
            "topic": "The Beauty of Bézier Curves",
            "level": "intro",
            "score": 16.0,
            "recommenders": 16,
            "summary": "Freya Holmer explains how Bezier curves work, from the helper-line construction to their uses in animation, text rendering and shapes. It uses visuals from her Unity Shapes plugin and was a SoME1 contest winner.",
            "why_hn": "HN repeatedly calls it one of the best math and graphics explainers on YouTube, praised for bridging game dev and math.",
            "quote": "it's genuinely one of the best math/graphics/explainer videos ever made",
            "tags": [
              "bezier",
              "splines",
              "computer graphics",
              "animation",
              "game dev",
              "math visualization"
            ],
            "learningOutcomes": [
              "Freya Holmér's visual masterpiece on parametric curves, de Casteljau's algorithm, and polynomial Bernstein basis",
              "Derivatives, tangents, normal vectors, and bounding boxes in graphics rendering"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/aVwxzDHniEw"
          },
          {
            "order": 2,
            "vid": "jvPPXbo87ds",
            "title": "The Continuity of Splines",
            "channel": "Freya Holmér",
            "topic": "The Continuity of Splines",
            "level": "intermediate",
            "score": 15.0,
            "recommenders": 10,
            "summary": "Freya Holmer's 74-minute video essay on splines, covering Bezier curves, B-splines, derivatives and the different levels of continuity (C0, C1, C2), built with custom animation tools. She notes she did not cover non-uniform splines.",
            "why_hn": "It is the go-to recommendation for anyone who wants to genuinely understand Bezier curves and splines, and commenters repeatedly call it one of the best programming-related educational videos.",
            "quote": "is (IMHO) one of the best educational videos on a programming topic, full stop.",
            "tags": [
              "bezier",
              "b-splines",
              "continuity",
              "interpolation",
              "computer graphics",
              "math visualization"
            ],
            "learningOutcomes": [
              "Deep dive into C0, C1, C2 and G0, G1, G2 geometric continuity across polynomial spline segments",
              "Catmull-Rom splines, Hermite splines, and curvature combs in camera paths and character animation"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/jvPPXbo87ds"
          },
          {
            "order": 3,
            "vid": "xAoljeRJ3lU",
            "title": "A Better Default Colormap for Matplotlib | SciPy 2015 | Nathaniel Smith and Stéfan van der Walt",
            "channel": "Enthought",
            "topic": "A Better Default Colormap for Matplotlib (Viridis)",
            "level": "general",
            "score": 16.5,
            "recommenders": 15,
            "summary": "SciPy 2015 talk by Nathaniel Smith and Stefan van der Walt on choosing a new default colormap for Matplotlib. It covers why Jet misleads, how perceptual color spaces work, and how viridis was designed.",
            "why_hn": "HN's go-to recommendation for colormap and color-perception questions; commenters call it funny, brief, clear and a favorite talk.",
            "quote": "This hilarious SciPy2015 talk[1] convinced me to switch to the Parula color scheme.",
            "tags": [
              "viridis",
              "matplotlib",
              "colormaps",
              "color perception",
              "data visualization",
              "colorblindness"
            ],
            "learningOutcomes": [
              "Nathaniel Smith and Stéfan van der Walt on perceptual uniformity, luminance gradients, and the math of CIECAM02 color space",
              "Why rainbow/jet colormaps introduce false artifacts and how Viridis was designed"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/xAoljeRJ3lU"
          }
        ]
      },
      {
        "id": "gfx-shaders-demoscene-hacks",
        "title": "Module 2: Procedural Math, Shaders & Console Graphics Hacks",
        "description": "See the 4k demoscene hook, learn raymarching from Inigo Quilez, and dissect console graphics architecture.",
        "lessons": [
          {
            "order": 4,
            "vid": "jB0vBmiTr6o",
            "title": "elevated by Rgba & TBC | 4k intro (FullHD 1080p demoscene demo)",
            "channel": "Demoscene High-Quality Videos (Annikras)",
            "topic": "elevated by Rgba & TBC | 4k Intro Demoscene Demo",
            "level": "general",
            "score": 13.5,
            "recommenders": 7,
            "summary": "Elevated by Rgba and TBC, the winner of the 4k intro compo at Breakpoint 2009. It is a realtime procedurally generated 3D flythrough with music, all in a 4096-byte executable.",
            "why_hn": "Held up as the landmark demoscene production and a counterpoint to software bloat.",
            "quote": "It demonstrated that 4k was more than sufficient for impressive effects and music",
            "tags": [
              "4k intro",
              "procedural generation",
              "inigo quilez",
              "size coding",
              "realtime graphics"
            ],
            "learningOutcomes": [
              "The legendary 4-kilobyte demoscene demo that generates entire raymarched mountain ranges and orchestral sound in 4,096 bytes"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/jB0vBmiTr6o"
          },
          {
            "order": 5,
            "vid": "8--5LwHRhjk",
            "title": "Painting a Character with Maths",
            "channel": "Inigo Quilez",
            "topic": "Painting a Character with Maths (Inigo Quilez)",
            "level": "intermediate",
            "score": 12.0,
            "recommenders": 13,
            "summary": "Inigo Quilez live-codes a cartoon character painting entirely from math, using signed distance fields in a Shadertoy shader. He explains each step of building the image from formulas.",
            "why_hn": "HN repeatedly calls it a mind-blowing and accessible introduction to SDFs and procedural art from a master explainer.",
            "quote": "he's a master of this stuff and a great explainer.",
            "tags": [
              "sdf",
              "shaders",
              "shadertoy",
              "procedural art",
              "raymarching",
              "glsl"
            ],
            "learningOutcomes": [
              "Inigo Quilez (co-creator of Shadertoy) modeling 3D geometry in pure math using Signed Distance Functions (SDFs)",
              "Raymarching algorithms, smooth minimum operators, and procedural texturing"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8--5LwHRhjk"
          },
          {
            "order": 6,
            "vid": "BFld4EBO2RE",
            "title": "I painted a Landscape with Mathematics",
            "channel": "Inigo Quilez",
            "topic": "I Painted a Landscape with Mathematics (Inigo Quilez)",
            "level": "intermediate",
            "score": 7.5,
            "recommenders": 7,
            "summary": "Inigo Quilez live-paints a mountain landscape using only math in a shader, building up from a basic polynomial noise surface through fractal terrain, lighting and atmosphere. The code runs in real time on Shadertoy so viewers can edit it as they follow along.",
            "why_hn": "HN commenters point to it as the best demonstration of procedural graphics from a master, accessible to beginners yet deep enough for advanced viewers.",
            "quote": "My favorite video of his is Painting a Landscape with Maths.",
            "tags": [
              "raymarching",
              "shaders",
              "shadertoy",
              "procedural terrain",
              "demoscene",
              "glsl"
            ],
            "learningOutcomes": [
              "Procedural terrain generation, fractional Brownian motion, lighting, and atmospheric scattering in a single shader"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/BFld4EBO2RE"
          },
          {
            "order": 7,
            "vid": "aMcJ1Jvtef0",
            "title": "8 Bit & '8 Bitish' Graphics-Outside the Box",
            "channel": "GDC Festival of Gaming",
            "topic": "8 Bit & '8 Bitish' Graphics: Outside the Box",
            "level": "intermediate",
            "score": 20.0,
            "recommenders": 13,
            "summary": "Mark Ferrari, the LucasArts background artist, explains in a GDC 2016 talk how he draws 8-bit graphics. He covers color cycling and palette shifting to create complex animated scenery without frame animation.",
            "why_hn": "HN repeatedly recommends it as a master class in limited-palette pixel art and palette cycling, from an artist behind Loom and Monkey Island.",
            "quote": "I recommend this talk to anyone who is interested in the details and history of working on limited colour palette games!",
            "tags": [
              "palette cycling",
              "pixel art",
              "mark ferrari",
              "lucasarts",
              "deluxe paint",
              "gdc"
            ],
            "learningOutcomes": [
              "Mark Ferrari's legendary GDC lecture on color-cycling palettes, dithering, and drawing animated water/fire in 8 bits",
              "Mastering pixel-level constraints on vintage graphics chips"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/aMcJ1Jvtef0"
          },
          {
            "order": 8,
            "vid": "izxXGuVL21o",
            "title": "How Crash Bandicoot Hacked The Original Playstation | War Stories | Ars Technica",
            "channel": "Ars Technica",
            "topic": "How Crash Bandicoot Hacked The Original Playstation (Andy Gavin)",
            "level": "intermediate",
            "score": 11.5,
            "recommenders": 13,
            "summary": "In Ars Technica's War Stories, Naughty Dog co-founder Andy Gavin explains how the team squeezed Crash Bandicoot onto the original PlayStation. They overwrote Sony library code in RAM, built custom animation compression, and streamed assets around slow seek times.",
            "why_hn": "It is one of the most frequently recommended videos on HN for old-school game development hacks under tight hardware constraints.",
            "quote": "Immensely interesting video!",
            "tags": [
              "crash bandicoot",
              "naughty dog",
              "playstation",
              "memory optimization",
              "game history"
            ],
            "learningOutcomes": [
              "Overcoming the PS1's 2MB RAM limit: custom assembly DMA vertex streaming, memory defragmentation, and procedural levels"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/izxXGuVL21o"
          },
          {
            "order": 9,
            "vid": "ar9WRwCiSr0",
            "title": "Reverse emulating the NES to give it SUPER POWERS!",
            "channel": "suckerpinch",
            "topic": "Reverse Emulating the NES to Give It SUPER POWERS! (suckerpinch)",
            "level": "general",
            "score": 14.5,
            "recommenders": 12,
            "summary": "Tom Murphy (suckerpinch) shows 'reverse emulation', using a Raspberry Pi in an NES cartridge to give an unmodified NES new abilities such as playing SNES games. The video starts in a strange way and gets stranger.",
            "why_hn": "Praised as a brilliant, deadpan and inventive hardware hack, and a good starting point for Tom7's videos.",
            "quote": "are a must watch.",
            "tags": [
              "reverse emulation",
              "nes",
              "raspberry pi",
              "retro gaming",
              "tom7"
            ],
            "learningOutcomes": [
              "Tom Murphy VII reverse-emulating NES PPU hardware, running high-dimensional neural network simulations on vintage hardware"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ar9WRwCiSr0"
          }
        ]
      }
    ]
  },
  {
    "id": "software-craftsmanship-architecture",
    "title": "Software Architecture, Refactoring & Craftsmanship",
    "tagline": "Simple Made Easy, Sandi Metz Rules, Deep Modules, TDD Without Mocks, Timezones & Maybe Not",
    "domain": "Software Engineering & Languages",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": "27 hours",
    "badge": "Engineering Masterclass",
    "icon": "layers",
    "description": "Write software that thrives over years of evolving requirements. Learn Rich Hickey's principles of simplicity, Sandi Metz's rules for clean object refactoring, John Ousterhout's philosophy of deep modules, Joshua Bloch's API design rules, Ian Cooper's guide to testing behavior without brittle mocks, and handling messy domain realities like timezones.",
    "prerequisites": "Experience writing and maintaining production software.",
    "modules": [
      {
        "id": "arch-foundational-simplicity",
        "title": "Module 1: Foundational Simplicity & Clean Design",
        "description": "Establish the mental models and concrete heuristics for simple, maintainable software design.",
        "lessons": [
          {
            "order": 1,
            "vid": "SxdOUGdseq4",
            "title": "\"Simple Made Easy\" - Rich Hickey (2011)",
            "channel": "Strange Loop Conference",
            "topic": "Simple Made Easy (Rich Hickey)",
            "level": "intermediate",
            "score": 17.0,
            "recommenders": 14,
            "summary": "Rich Hickey's Strange Loop 2011 keynote distinguishing 'simple' (not intertwined) from 'easy' (familiar or near at hand). It argues that software complexity comes from complecting things and that we should pick simple constructs.",
            "why_hn": "HN treats it as the canonical talk on software complexity, shared constantly and recommended to every programmer regardless of language.",
            "quote": "is a must-watch (even if you never touch Clojure)",
            "tags": [
              "rich hickey",
              "simplicity",
              "complecting",
              "clojure",
              "software design",
              "strange loop"
            ],
            "learningOutcomes": [
              "Rich Hickey's all-time classic distinguishing 'simple' (untangled) from 'easy' (familiar/near at hand)",
              "Why complection kills software systems and how to isolate concerns"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/SxdOUGdseq4"
          },
          {
            "order": 2,
            "vid": "8bZh5LMaSmE",
            "title": "RailsConf 2014 - All the Little Things by Sandi Metz",
            "channel": "Confreaks",
            "topic": "All the Little Things (Sandi Metz)",
            "level": "intermediate",
            "score": 18.5,
            "recommenders": 15,
            "summary": "Sandi Metz takes an ugly section of conditional code and refactors it into a few simple objects, bridging object-oriented theory and practice. The talk includes her take on the Gilded Rose refactoring kata and the idea that duplication is cheaper than the wrong abstraction.",
            "why_hn": "HN treats it as a top-tier programming talk for learning refactoring and for the wrong-abstraction principle, recommended repeatedly over a decade.",
            "quote": "this talk captures all the important values in a single example.",
            "tags": [
              "refactoring",
              "sandi metz",
              "wrong abstraction",
              "gilded rose",
              "ruby",
              "object-oriented design"
            ],
            "learningOutcomes": [
              "Sandi Metz demonstrating how following small, strict rules produces emergent architectural simplicity",
              "Squint tests, single responsibility principle, and open/closed design in practice"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8bZh5LMaSmE"
          },
          {
            "order": 3,
            "vid": "bmSAYlu0NcY",
            "title": "A Philosophy of Software Design | John Ousterhout | Talks at Google",
            "channel": "Talks at Google",
            "topic": "A Philosophy of Software Design (John Ousterhout)",
            "level": "intermediate",
            "score": 12.0,
            "recommenders": 11,
            "summary": "John Ousterhout, Stanford professor and creator of Tcl, presents the ideas of his book A Philosophy of Software Design in a Talks at Google session. He covers managing complexity, deep modules and interfaces, and what he teaches in his Stanford software design course.",
            "why_hn": "HN treats it as the standard one-hour teaser for the book and recommends it for its deep-modules thinking before buying or reading the book.",
            "quote": "This google talk is a condensed version of the (already small - 150 pags IIRC) book. I highly recommend both.",
            "tags": [
              "deep modules",
              "complexity",
              "abstraction",
              "john ousterhout",
              "api design"
            ],
            "learningOutcomes": [
              "Stanford professor on deep vs shallow modules, information hiding, and eliminating red flags in software design"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/bmSAYlu0NcY"
          },
          {
            "order": 4,
            "vid": "aAb7hSCtvGw",
            "title": "How To Design A Good API and Why it Matters",
            "channel": "Google TechTalks",
            "topic": "How To Design A Good API and Why it Matters (Joshua Bloch)",
            "level": "intermediate",
            "score": 13.5,
            "recommenders": 12,
            "summary": "Joshua Bloch's Google Tech Talk on how to design good APIs and why it matters, with concrete principles and examples. It treats every programmer as an occasional API designer.",
            "why_hn": "HN repeatedly names it the best resource on API design, a staple answer to any 'how do I design an API' question.",
            "quote": "Absolutely far and away the best resource that I found was this Google TechTalk by Joshua Bloch",
            "tags": [
              "api design",
              "joshua bloch",
              "software engineering",
              "java",
              "interfaces"
            ],
            "learningOutcomes": [
              "Author of Effective Java on API design: principle of least astonishment, fail-fast mechanics, and documentation"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/aAb7hSCtvGw"
          }
        ]
      },
      {
        "id": "arch-testing-domain-complexity",
        "title": "Module 2: Testing Architecture, Invariants & Real-World Domain Complexity",
        "description": "Test systems effectively without fragile unit mocks, handle difficult real-world domain rules, and manage schema evolution.",
        "lessons": [
          {
            "order": 5,
            "vid": "EZ05e7EMOLM",
            "title": "🚀  TDD, Where Did It All Go Wrong (Ian Cooper)",
            "channel": "DevTernity Conference",
            "topic": "TDD, Where Did It All Go Wrong (Ian Cooper)",
            "level": "intermediate",
            "score": 13.5,
            "recommenders": 11,
            "summary": "Ian Cooper's DevTernity talk revisits Kent Beck's original TDD ideas and shows where misunderstandings crept in. It argues tests should target behaviors through public interfaces rather than implementation details, so suites support refactoring instead of resisting it.",
            "why_hn": "HN repeatedly calls it the best talk on testing, and many say it changed how they approach tests, mocks and the meaning of a unit.",
            "quote": "This excellent talk completely changed the way I approached testing. Every developer who writes tests needs to watch this now!",
            "tags": [
              "tdd",
              "unit testing",
              "mocking",
              "refactoring",
              "kent beck",
              "bdd"
            ],
            "learningOutcomes": [
              "Ian Cooper on the original Kent Beck vision of TDD: test behavior and public APIs, avoid unit testing implementation details and mock clutter"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/EZ05e7EMOLM"
          },
          {
            "order": 6,
            "vid": "-5wpm-gesOY",
            "title": "The Problem with Time & Timezones - Computerphile",
            "channel": "Computerphile",
            "topic": "The Problem with Time & Timezones (Computerphile)",
            "level": "general",
            "score": 13.0,
            "recommenders": 12,
            "summary": "Tom Scott explains for Computerphile why handling time and timezones in code is so hard, walking through a simple web app that computes how long ago something happened. It covers the quirks of timezones and calendars and ends in an exasperated rant.",
            "why_hn": "It is the go-to funny, accessible explanation of why you should never implement datetime handling yourself, linked in nearly every timezone thread.",
            "quote": "a must watch for developers just starting out with Timezones",
            "tags": [
              "timezones",
              "datetime",
              "tom scott",
              "computerphile",
              "programming pitfalls"
            ],
            "learningOutcomes": [
              "Tom Scott breaking down historical timezone shifts, leap seconds, daylight saving oddities, and domain modeling fallacies"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/-5wpm-gesOY"
          },
          {
            "order": 7,
            "vid": "YR5WdGrpoug",
            "title": "Maybe Not - Rich Hickey",
            "channel": "ClojureTV",
            "topic": "Maybe Not (Rich Hickey)",
            "level": "intermediate",
            "score": 13.0,
            "recommenders": 14,
            "summary": "Rich Hickey's Clojure/Conj 2018 keynote argues that Maybe/Option types and rigid type signatures are a poor way to model data that changes over time. He builds the case around optionality, schema growth and compatibility, and presents the ideas behind Clojure spec as an alternative.",
            "why_hn": "HN commenters send people to it whenever nulls, Maybe/Option or static typing come up, as a thoughtful dissent from the type-system orthodoxy that changes how some people model data.",
            "quote": "Rich Hickey's \"Maybe Not\" should be watched by anyone who thinks nulls/nils/undefineds are okay.",
            "tags": [
              "rich hickey",
              "clojure",
              "maybe types",
              "null",
              "spec",
              "static typing"
            ],
            "learningOutcomes": [
              "Rich Hickey on designing optionality, schema evolution, and why traditional static nullable types introduce bugs"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/YR5WdGrpoug"
          },
          {
            "order": 8,
            "vid": "-6BsiVyC1kM",
            "title": "The Value of Values with Rich Hickey",
            "channel": "InfoQ",
            "topic": "The Value of Values (Rich Hickey)",
            "level": "intermediate",
            "score": 13.0,
            "recommenders": 10,
            "summary": "Rich Hickey's JaxConf 2012 keynote examines what values are and why immutable values matter as information systems grow more complex and data gets bigger. It contrasts places with values and builds the case for immutability.",
            "why_hn": "HN commenters cite it as the talk that convinced them of immutability and functional programming.",
            "quote": "is what finally sold me on the benefits of pure functional programming and immutable data structures.",
            "tags": [
              "rich hickey",
              "clojure",
              "immutable data",
              "functional programming",
              "datomic"
            ],
            "learningOutcomes": [
              "Why mutable state causes bugs, and how immutable values provide informational integrity and concurrency safety"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/-6BsiVyC1kM"
          },
          {
            "order": 9,
            "vid": "2V1FtfBDsLU",
            "title": "Effective Programs - 10 Years of Clojure - Rich Hickey",
            "channel": "ClojureTV",
            "topic": "Effective Programs - 10 Years of Clojure (Rich Hickey)",
            "level": "intermediate",
            "score": 11.5,
            "recommenders": 10,
            "summary": "Rich Hickey's talk at Clojure's tenth anniversary on the kind of programs Clojure is designed for. He argues for situated programs that deal with changing requirements, and for dynamic typing and data over static types.",
            "why_hn": "HN's go-to link in typing debates and for talk lists, and several call it their favorite programming talk even for non-Clojure users.",
            "quote": "Whole video is gold, is my fav programming talk of all time.",
            "tags": [
              "rich hickey",
              "clojure",
              "dynamic typing",
              "situated programs",
              "data-oriented programming"
            ],
            "learningOutcomes": [
              "Analyzing what actually worked in production software over a decade of real-world deployments"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/2V1FtfBDsLU"
          }
        ]
      }
    ]
  },
  {
    "id": "mathematics-algorithmic-thinking",
    "title": "Mathematics for Computer Scientists & Algorithmic Thinking",
    "tagline": "Linear Algebra, Gilbert Strang, Vector Transposes, Sorting, Dictionaries, Wave Physics, FFT & Quantum Math",
    "domain": "Mathematics & Theoretical CS",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": "34 hours",
    "badge": "Core Theory",
    "icon": "calculator",
    "description": "Unlock the visual, physical, and algorithmic intuition behind the mathematics of modern computing. Journey through 3Blue1Brown's essence of linear algebra, Gilbert Strang's MIT 18.06 course, vector duals with Jiahao Chen, visual sorting algorithms, Raymond Hettinger's compact hash tables, physical wave mechanics with Dr. John Shive, the Fast Fourier Transform, and Quantum Computing mathematics.",
    "prerequisites": "High school algebra.",
    "modules": [
      {
        "id": "math-linear-algebra",
        "title": "Module 1: Linear Algebra & Matrix Decompositions",
        "description": "Build spatial intuition for vectors, matrix transformations, determinants, and eigenspaces.",
        "lessons": [
          {
            "order": 1,
            "vid": "fNk_zzaMoSs",
            "title": "Vectors | Chapter 1, Essence of linear algebra",
            "channel": "3Blue1Brown",
            "topic": "Vectors: Essence of Linear Algebra Chapter 1",
            "level": "intro",
            "score": 25.0,
            "recommenders": 17,
            "summary": "The first chapter of 3Blue1Brown's Essence of Linear Algebra series, introducing vectors with animated geometric visuals. It begins a series that builds intuition for linear algebra from the basics.",
            "why_hn": "HN's go-to recommendation for learning linear algebra intuition, repeatedly credited with making concepts click and complementing textbooks.",
            "quote": "the most welcoming and informative introduction to the topic I've ever seen",
            "tags": [
              "vectors",
              "linear algebra",
              "visual intuition",
              "3blue1brown",
              "machine learning math"
            ],
            "learningOutcomes": [
              "3Blue1Brown: Geometric basis vectors, coordinate transformations, and linear combinations"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/fNk_zzaMoSs"
          },
          {
            "order": 2,
            "vid": "ZK3O402wf1c",
            "title": "Lec 1 | MIT 18.06 Linear Algebra, Spring 2005",
            "channel": "MIT OpenCourseWare",
            "topic": "MIT 18.06: Linear Algebra Lecture 1 (Gilbert Strang)",
            "level": "intro",
            "score": 14.0,
            "recommenders": 11,
            "summary": "The first lecture of Gilbert Strang's MIT 18.06 Linear Algebra course, covering the geometry of linear equations. It opens a full 35-lecture university course.",
            "why_hn": "It is HN's default recommendation for learning linear algebra, praised for Strang's teaching and for building real understanding useful in machine learning.",
            "quote": "I highly recommend the MIT 18.06 open course on linear algebra - the lectures are first rate.",
            "tags": [
              "gilbert strang",
              "mit ocw",
              "matrices",
              "machine learning math",
              "systems of equations"
            ],
            "learningOutcomes": [
              "Professor Gilbert Strang's iconic MIT lecture: geometry of linear equations, row picture vs column picture"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ZK3O402wf1c"
          },
          {
            "order": 3,
            "vid": "C2RO34b_oPM",
            "title": "Taking Vector Transposes Seriously | Jiahao Chen | JuliaCon 2017",
            "channel": "The Julia Programming Language",
            "topic": "Taking Vector Transposes Seriously (Jiahao Chen / JuliaCon 2017)",
            "level": "advanced",
            "score": 6.0,
            "recommenders": 3,
            "summary": "Jiahao Chen's JuliaCon 2017 talk argues that vector transposes should be taken seriously in type systems and linear algebra libraries. It explains why treating vectors as matrices causes trouble in languages.",
            "why_hn": "Strongly recommended for anyone working with vectors for its clear take on how they should be treated in types.",
            "quote": "but seriously take the time to watch this, it's fantastic",
            "tags": [
              "julia",
              "linear algebra",
              "type systems",
              "vectors",
              "juliacon"
            ],
            "learningOutcomes": [
              "Deep dive into vector dual spaces, covectors, row vs column vectors, and layout implications in numerical computing"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/C2RO34b_oPM"
          }
        ]
      },
      {
        "id": "math-core-algorithms",
        "title": "Module 2: Core Algorithms & Data Structures",
        "description": "Visualize classic sorting algorithms and understand modern cache-friendly hash table implementations.",
        "lessons": [
          {
            "order": 4,
            "vid": "kPRA0W1kECg",
            "title": "15 Sorting Algorithms in 6 Minutes",
            "channel": "Timo Bingmann",
            "topic": "15 Sorting Algorithms in 6 Minutes",
            "level": "intro",
            "score": 4.0,
            "recommenders": 4,
            "summary": "A visualization and sonification of 15 sorting algorithms, from selection sort to bogo sort, run on shuffled integers in six minutes. Each algorithm gets a size and speed scaled to its complexity.",
            "why_hn": "A classic that HN points to for seeing how sorting algorithms behave, valued for how satisfying it is to watch and hear.",
            "quote": "just want to quickly share an IMHO interesting sorting algorithm visualization video",
            "tags": [
              "sorting",
              "visualization",
              "sonification",
              "algorithms",
              "sound of sorting"
            ],
            "learningOutcomes": [
              "Visual and auditory representation of QuickSort, MergeSort, RadixSort, ShellSort, TimSort, and HeapSort mechanics"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/kPRA0W1kECg"
          },
          {
            "order": 5,
            "vid": "p33CVV29OG8",
            "title": "Modern Dictionaries by Raymond Hettinger",
            "channel": "SF Python",
            "topic": "Modern Dictionaries by Raymond Hettinger",
            "level": "intermediate",
            "score": 10.5,
            "recommenders": 9,
            "summary": "Python core developer Raymond Hettinger explains how Python's dictionary implementation evolved into the compact, ordered dict in Python 3.6. He uses pictures and small bits of pure Python, and covers key-sharing, compaction and versioning.",
            "why_hn": "HN treats it as the definitive, engaging talk on hash table internals and Python dict ordering, and recommends it in tech-talk lists.",
            "quote": "one of the most insightful videos I've seen in a long time.",
            "tags": [
              "python",
              "hash tables",
              "dict",
              "cpython",
              "data structures"
            ],
            "learningOutcomes": [
              "Core Python developer Raymond Hettinger explaining compact hash tables, memory layouts, and collision resolution"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/p33CVV29OG8"
          }
        ]
      },
      {
        "id": "math-waves-fourier-quantum",
        "title": "Module 3: Wave Mechanics, Sampling, FFT & Quantum Computing",
        "description": "Explore physical wave mechanics, continuous frequency decomposition, discrete sampling, and quantum linear algebra.",
        "lessons": [
          {
            "order": 6,
            "vid": "DovunOxlY1k",
            "title": "AT&T Archives: Similiarities of Wave Behavior (Bonus Edition)",
            "channel": "AT&T Tech Channel",
            "topic": "AT&T Archives: Similarities of Wave Behavior (Dr. John Shive)",
            "level": "intro",
            "score": 19.0,
            "recommenders": 12,
            "summary": "A Bell Labs film in which Dr. J.N. Shive uses a mechanical wave machine to demonstrate reflection, standing waves, resonance and impedance matching. He includes some equations but relies mostly on real-world examples a layperson can follow.",
            "why_hn": "HN repeatedly calls it the clearest introduction to waves and transmission-line behavior, better than modern explainers.",
            "quote": "By far the best introduction to the subject of waves of any sort.",
            "tags": [
              "wave machine",
              "standing waves",
              "impedance matching",
              "bell labs",
              "signal reflection"
            ],
            "learningOutcomes": [
              "Dr. John Shive using mechanical wave machines to demonstrate reflection, impedance matching, and wave propagation",
              "The physical intuition underlying transmission lines, radio waves, and quantum probability waves"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/DovunOxlY1k"
          },
          {
            "order": 7,
            "vid": "spUNpyF58BY",
            "title": "But what is the Fourier Transform?  A visual introduction.",
            "channel": "3Blue1Brown",
            "topic": "But What is the Fourier Transform? A Visual Intro",
            "level": "intro",
            "score": 18.5,
            "recommenders": 16,
            "summary": "3Blue1Brown's animated visual introduction to the Fourier Transform, showing how a signal breaks into frequency components.",
            "why_hn": "HN's default recommendation for understanding the Fourier transform intuitively; many say it was the explanation that made it click.",
            "quote": "this was the first thing that ever really made sense to me",
            "tags": [
              "fourier transform",
              "3blue1brown",
              "signal processing",
              "visual math",
              "frequencies"
            ],
            "learningOutcomes": [
              "Visualizing frequency winding machines and center-of-mass integrations in 3Blue1Brown"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/spUNpyF58BY"
          },
          {
            "order": 8,
            "vid": "MBnnXbOM5S4",
            "title": "The more general uncertainty principle, regarding Fourier transforms",
            "channel": "3Blue1Brown",
            "topic": "The More General Uncertainty Principle & Fourier Transforms",
            "level": "intermediate",
            "score": 6.5,
            "recommenders": 7,
            "summary": "3Blue1Brown shows how the uncertainty principle arises from Fourier transforms. A wave packet cannot be narrow in both position and frequency, so the principle is a property of waves rather than of measurement.",
            "why_hn": "HN recommends it as the clearest visual explanation that uncertainty is intrinsic to waves, separate from measurement disturbance.",
            "quote": "The clearest, most intuitive explanation of the Fourier Uncertainty Principle that I have come across is by Grant Sanderson of 3Blue1Brown.",
            "tags": [
              "fourier transform",
              "uncertainty principle",
              "wave packets",
              "quantum mechanics",
              "signal processing",
              "3blue1brown"
            ],
            "learningOutcomes": [
              "3Blue1Brown on the time-frequency trade-off and wave-packet dispersion"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/MBnnXbOM5S4"
          },
          {
            "order": 9,
            "vid": "cIQ9IXSUzuM",
            "title": "D/A and A/D | Digital Show and Tell (Monty Montgomery @ xiph.org)",
            "channel": "FL Studio",
            "topic": "Digital Show and Tell: D/A and A/D Conversion (Monty Montgomery)",
            "level": "intro",
            "score": 15.5,
            "recommenders": 15,
            "summary": "Monty Montgomery of Xiph.org gives real-time demonstrations of sampling, quantization, bit depth and dither using real audio equipment, including both digital analysis tools and vintage analog bench gear. It shows that sampled audio is not stair-stepped and corrects common misconceptions about digital audio.",
            "why_hn": "HN calls it the gold-standard debunking of audiophile myths and the stair-step misconception, and recommends it as a primer on digital audio.",
            "quote": "might be the best explanatory video I have ever witnessed",
            "tags": [
              "sampling",
              "nyquist",
              "bit depth",
              "dither",
              "audiophile myths",
              "xiph"
            ],
            "learningOutcomes": [
              "Monty Montgomery (Xiph.org) using oscilloscopes to disprove common myths about digital audio sampling and the Nyquist-Shannon theorem",
              "Why digital audio does not have 'stairsteps' and reconstructs the original analog wave with 100% precision"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/cIQ9IXSUzuM"
          },
          {
            "order": 10,
            "vid": "h7apO7q16V0",
            "title": "The Fast Fourier Transform (FFT): Most Ingenious Algorithm Ever?",
            "channel": "Reducible",
            "topic": "The Fast Fourier Transform: Most Ingenious Algorithm Ever?",
            "level": "intermediate",
            "score": 10.5,
            "recommenders": 7,
            "summary": "Reducible's visual walkthrough of the Fast Fourier Transform, motivated by polynomial multiplication. It shows how the FFT's key ideas can be discovered by asking the right questions.",
            "why_hn": "HN repeatedly calls it a fantastic explanation that made FFT click, with some rewatching it periodically.",
            "quote": "It derives the FFT algorithm from polynomial multiplication and it’s fantastic . I rewatch it every 6 months or so.",
            "tags": [
              "fft",
              "polynomial multiplication",
              "algorithms",
              "convolution",
              "signal processing"
            ],
            "learningOutcomes": [
              "Reducible's comprehensive breakdown of the Cooley-Tukey FFT algorithm",
              "Divide-and-conquer on polynomial roots of unity, dropping complexity from O(N^2) to O(N log N)"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/h7apO7q16V0"
          },
          {
            "order": 11,
            "vid": "F_Riqjdh2oM",
            "title": "Quantum Computing for Computer Scientists",
            "channel": "Microsoft Research",
            "topic": "Quantum Computing for Computer Scientists (Microsoft)",
            "level": "intro",
            "score": 14.0,
            "recommenders": 12,
            "summary": "An 88-minute Microsoft Research talk that explains how quantum computers beat classical ones using basic linear algebra, qubits, superposition and gates. It works through the Deutsch oracle problem and ends with entanglement, teleportation and a live demo.",
            "why_hn": "It is HN's most frequently recommended starting point for quantum computing because it avoids pop-science hand-waving and needs only basic linear algebra.",
            "quote": "This video is the simplest explanation that I have found for Quantum Computing",
            "tags": [
              "qubits",
              "linear algebra",
              "deutsch oracle",
              "quantum gates",
              "entanglement",
              "q#"
            ],
            "learningOutcomes": [
              "Explaining quantum algorithms entirely through complex vector spaces, tensor products, and unitary matrix transformations"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/F_Riqjdh2oM"
          }
        ]
      }
    ]
  },
  {
    "id": "computing-history-pioneers",
    "title": "Computing History, Pioneers & Hacker Culture",
    "tagline": "Chronological: 1960s Bell Labs, Xerox PARC, Hamming, BBC Micro, Steve Jobs 1997, Netscape, Git & Jonathan Blow",
    "domain": "Computing History & Culture",
    "difficulty": "All Levels",
    "estimatedHours": "33 hours",
    "badge": "Hacker Lore",
    "icon": "history",
    "description": "Learn where our modern computing ecosystem came from, ordered strictly chronologically. From Bell Labs in the 1960s to Xerox PARC, Richard Hamming's research advice, the British microcomputer boom that spawned ARM, Steve Jobs' 1997 Apple turnaround, Netscape open-sourcing Mozilla, Linus Torvalds creating Git, Ton Roosendaal's Blender, and Jonathan Blow on software civilizational risk.",
    "prerequisites": "None. Just intellectual curiosity.",
    "modules": [
      {
        "id": "hist-1960s-1970s",
        "title": "Module 1: 1960s–1970s: The Foundations (Bell Labs & Xerox PARC)",
        "description": "Direct insights from the computer scientists who invented the foundations of our industry.",
        "lessons": [
          {
            "order": 1,
            "vid": "tc4ROCJYbm0",
            "title": "AT&T Archives: The UNIX Operating System",
            "channel": "AT&T Tech Channel",
            "topic": "AT&T Archives: The UNIX Operating System",
            "level": "intro",
            "score": 9.5,
            "recommenders": 10,
            "summary": "A 1982 Bell Labs film hosted by Victor Vyssotsky on the origins and design philosophy of the UNIX operating system, with appearances by Kernighan, Thompson and Ritchie. It shows pipes, filters and a shell one-liner spell checker being built.",
            "why_hn": "HN points people to it as the clearest primary-source explanation of Unix pipes and the small-tools philosophy, straight from the creators.",
            "quote": "The pipelines explanation was incredibly clear.",
            "tags": [
              "unix",
              "pipes",
              "bell labs",
              "shell",
              "kernighan",
              "computing history"
            ],
            "learningOutcomes": [
              "Vintage footage inside Bell Labs documenting the birth of UNIX, C, and text streams on the PDP-11"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/tc4ROCJYbm0"
          },
          {
            "order": 2,
            "vid": "EY6q5dv_B-o",
            "title": "VCF East: Ken Thompson interviewed by Brian Kernighan",
            "channel": "Vintage Computer Federation",
            "topic": "VCF East: Ken Thompson interviewed by Brian Kernighan",
            "level": "general",
            "score": 11.5,
            "recommenders": 11,
            "summary": "Brian Kernighan interviews Unix co-creator Ken Thompson at VCF East 2019. Thompson recounts how he was hired at Bell Labs, writing the Unix kernel in about three weeks, the origins of B and TMG, pipes, and other anecdotes.",
            "why_hn": "HN commenters recommend it for Thompson's funny, first-hand Unix history stories, some of which even Kernighan had not heard.",
            "quote": "Also I found these fascinating",
            "tags": [
              "ken thompson",
              "brian kernighan",
              "unix",
              "bell labs",
              "computing history",
              "tmg"
            ],
            "learningOutcomes": [
              "Ken Thompson reflecting on Bell Labs, creating UNIX, chess computers, and the Go programming language"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/EY6q5dv_B-o"
          },
          {
            "order": 3,
            "vid": "FvmTSpJU-Xc",
            "title": "Alan Kay - Normal Considered Harmful",
            "channel": "powerfuloutlet",
            "topic": "Alan Kay: Normal Considered Harmful",
            "level": "general",
            "score": 12.0,
            "recommenders": 10,
            "summary": "Alan Kay's 2009 UIUC talk arguing that computing is more a pop culture than a science and that ignoring history and fundamentals leads to inferior solutions. He touches on the history of interactive environments and what the web should have been.",
            "why_hn": "A staple on must-watch lists, recommended as a starting point for Kay's thinking and for why software is often poor and ahistorical.",
            "quote": "his talk 'Normal Considered Harmful' in particular is worth a look as it pretty much goes straight to the heart of the issue",
            "tags": [
              "alan kay",
              "software engineering",
              "computing history",
              "web design",
              "pop culture"
            ],
            "learningOutcomes": [
              "Turing Award winner Alan Kay on Xerox PARC, object orientation, and why computing culture stagnated"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/FvmTSpJU-Xc"
          },
          {
            "order": 4,
            "vid": "8pTEmbeENF4",
            "title": "Bret Victor   The Future of Programming",
            "channel": "Joey Reid",
            "topic": "The Future of Programming (Bret Victor)",
            "level": "general",
            "score": 13.0,
            "recommenders": 12,
            "summary": "Bret Victor's DBX 2013 talk, delivered in the guise of a 1973 IBM engineer with an overhead projector. It surveys forgotten ideas from 1960s and early 70s computing and warns against assuming you know what you're doing.",
            "why_hn": "HN treats it as a classic, near-mandatory talk on how programming tools and paradigms stagnated and which older ideas deserve revival.",
            "quote": "Take a look and you will be amazed of how good (or revolutionary by our standards) some old technologies were.",
            "tags": [
              "bret victor",
              "programming paradigms",
              "computing history",
              "tooling",
              "software stagnation"
            ],
            "learningOutcomes": [
              "Bret Victor's critique of modern code and vision for direct manipulation environments"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8pTEmbeENF4"
          },
          {
            "order": 5,
            "vid": "a1zDuOPkMSw",
            "title": "Hamming, \"You and Your Research\" (June 6, 1995)",
            "channel": "securitylectures",
            "topic": "You and Your Research (Richard Hamming)",
            "level": "general",
            "score": 11.5,
            "recommenders": 11,
            "summary": "Richard Hamming's 1995 recording of his talk 'You and Your Research', drawn from his graduate engineering course. He discusses how great scientists pick important problems and build careers, drawing on his years at Bell Labs.",
            "why_hn": "HN recommends it as career and research advice on choosing important problems and doing first-class work.",
            "quote": "So much sage advice as compiled over a very long and fruitful career.",
            "tags": [
              "richard hamming",
              "bell labs",
              "important problems",
              "career",
              "learning to learn"
            ],
            "learningOutcomes": [
              "Richard Hamming's legendary Bell Labs lecture on doing first-rate research and working on important problems"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/a1zDuOPkMSw"
          }
        ]
      },
      {
        "id": "hist-1980s-2000s",
        "title": "Module 2: 1980s–2000s: The Microcomputer Boom, Web Wars & Open Source",
        "description": "Relive the pivotal battles that created personal computing, open-source software, and modern tech culture.",
        "lessons": [
          {
            "order": 6,
            "vid": "XXBxV6-zamM",
            "title": "Micro Men - 720p (2009)",
            "channel": "gimpymoo",
            "topic": "Micro Men: The Birth of Personal Computing",
            "level": "general",
            "score": 16.0,
            "recommenders": 15,
            "summary": "Micro Men is a 2009 BBC comic drama about the early 1980s British home computer boom. It follows the rivalry between Clive Sinclair and Acorn founder Chris Curry over the BBC Micro contract and the ZX Spectrum.",
            "why_hn": "HN recommends it often as an entertaining and authentic dramatization of Sinclair versus Acorn, the story from which ARM grew.",
            "quote": "'Micro Men' is an excellent TV drama",
            "tags": [
              "clive sinclair",
              "acorn",
              "bbc micro",
              "zx spectrum",
              "docudrama"
            ],
            "learningOutcomes": [
              "BBC drama chronicling Clive Sinclair (ZX Spectrum) vs Chris Curry (BBC Micro / Acorn Computers)",
              "The legendary creation of the BBC Micro in a single weekend that eventually spawned ARM processors"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/XXBxV6-zamM"
          },
          {
            "order": 7,
            "vid": "VkVs4ZqWgN8",
            "title": "Steve Jobs - Apple Product Matrix Strategy 1997",
            "channel": "JackIsBack15",
            "topic": "Steve Jobs: Apple Product Matrix Strategy 1997",
            "level": "general",
            "score": 0.0,
            "recommenders": 0,
            "summary": "A one-minute clip of Steve Jobs describing how he cut Apple's product line down to a four-quadrant matrix of consumer and pro, desktop and portable, during the 1997 turnaround.",
            "why_hn": "Cited in Apple product-line threads as a reminder of the focus Jobs brought by reducing offerings to a few great products.",
            "quote": "One of the best things Steve ever did was to reduce the offerings to just",
            "tags": [
              "steve jobs",
              "apple",
              "product strategy",
              "focus",
              "1997"
            ],
            "learningOutcomes": [
              "Steve Jobs immediately after returning to Apple cutting dozens of products to focus on a 2x2 matrix: Consumer/Pro, Desktop/Portable"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/VkVs4ZqWgN8"
          },
          {
            "order": 8,
            "vid": "4Q7FTjhvZ7Y",
            "title": "Project Code Rush - The Beginnings of Netscape / Mozilla Documentary",
            "channel": "The Documentary Network",
            "topic": "Project Code Rush: Netscape & The Birth of Mozilla",
            "level": "general",
            "score": 13.0,
            "recommenders": 13,
            "summary": "Code Rush is a one-hour documentary following Netscape engineers in Silicon Valley through the company's last year as an independent firm. It covers the Mozilla open-source announcement, the frantic push to ready the source for release by March 31, 1998, and the toll on engineers' lives before the AOL acquisition.",
            "why_hn": "HN commenters recommend it as an intimate, embedded look at late-90s web history and the spirit of building something important under pressure.",
            "quote": "Code Rush, which is an awesome documentary for anyone interested in the history of the Web",
            "tags": [
              "netscape",
              "mozilla",
              "dot-com era",
              "open source",
              "jwz",
              "web history"
            ],
            "learningOutcomes": [
              "Behind-the-scenes documentary capturing Netscape engineers open-sourcing the browser to create Mozilla"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/4Q7FTjhvZ7Y"
          },
          {
            "order": 9,
            "vid": "4XpnKHJAok8",
            "title": "Tech Talk: Linus Torvalds on git",
            "channel": "Google",
            "topic": "Linus Torvalds on Git: Trust & Distributed Design",
            "level": "general",
            "score": 11.0,
            "recommenders": 9,
            "summary": "Linus Torvalds gives a Google tech talk on git, the source control system he created two years earlier. He argues for distributed version control over centralized systems such as CVS and Subversion.",
            "why_hn": "HN repeatedly recommends it as the iconic explanation of why git is designed as it is and why distributed VCS beats centralized ones.",
            "quote": "This talk by Linus is iconic, if you haven't watched it you should.",
            "tags": [
              "git",
              "linus torvalds",
              "version control",
              "subversion",
              "linux"
            ],
            "learningOutcomes": [
              "Linus Torvalds at Google explaining why centralized version control is fundamentally flawed and how Git works"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/4XpnKHJAok8"
          },
          {
            "order": 10,
            "vid": "qJEWOTZnFeg",
            "title": "\"Money doesn't interest me\" - Ton Roosendaal 2017 Interview",
            "channel": "Blender Guru",
            "topic": "Ton Roosendaal: The Creation of Blender",
            "level": "general",
            "score": 10.5,
            "recommenders": 7,
            "summary": "A long interview by Blender Guru with Ton Roosendaal, creator of Blender. They cover Blender's origins, the move to open source, why Ton is not driven by money, Autodesk, and what sets Blender apart from other open source projects.",
            "why_hn": "Recommended as the best account of Blender's history and its user-focused approach as a free software success story.",
            "quote": "I highly encourage to watch the whole interview",
            "tags": [
              "blender",
              "open source",
              "ton roosendaal",
              "3d software",
              "software history"
            ],
            "learningOutcomes": [
              "Ton Roosendaal reflecting on bankrupting his studio, raising money from users to open-source Blender, and building a global community"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/qJEWOTZnFeg"
          },
          {
            "order": 11,
            "vid": "ZSRHeXYDLko",
            "title": "Preventing the Collapse of Civilization / Jonathan Blow (Thekla, Inc)",
            "channel": "DevGAMM",
            "topic": "Preventing the Collapse of Civilization (Jonathan Blow)",
            "level": "general",
            "score": 12.5,
            "recommenders": 14,
            "summary": "A DevGAMM talk by Jonathan Blow arguing that civilizations can lose technological capability and that software quality is already deteriorating. He discusses how knowledge fails to transfer between generations.",
            "why_hn": "It is the standard link in HN threads about software decay, lost knowledge and fragile technological civilization.",
            "quote": "Anyone who finds this concept interesting to think about and hasn't seen this video may enjoy it",
            "tags": [
              "jonathan blow",
              "software decay",
              "lost knowledge",
              "technology regression",
              "complexity"
            ],
            "learningOutcomes": [
              "Jonathan Blow on how software complexity increases exponentially while fundamental programming competence is lost over generations"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ZSRHeXYDLko"
          },
          {
            "order": 12,
            "vid": "Unzc731iCUY",
            "title": "How to Speak",
            "channel": "MIT OpenCourseWare",
            "topic": "How to Speak: The Art of Communicating Ideas (Patrick Winston)",
            "level": "general",
            "score": 21.0,
            "recommenders": 17,
            "summary": "Patrick Winston's long-running MIT lecture on public speaking teaches heuristic rules for talks. It covers how to start, use time and place, boards, props and slides, and how to inform, persuade and finish.",
            "why_hn": "HN treats it as the canonical, near-universally recommended lecture on giving talks and presentations.",
            "quote": "drop what you're doing and watch it now",
            "tags": [
              "presentations",
              "communication",
              "mit",
              "patrick winston",
              "slides",
              "storytelling"
            ],
            "learningOutcomes": [
              "Patrick Winston's timeless MIT lecture on presenting technical ideas, structuring talks, and persuading audiences",
              "The promise, the empowerment promise, and the near-miss principle in communication"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/Unzc731iCUY"
          }
        ]
      }
    ]
  },
  {
    "id": "electronics-embedded-hardware",
    "title": "Electronics, Microprocessors & Hardware Hacking",
    "tagline": "Mechanical Circuits, Full-Bridge Rectifiers, Breadboard CPUs, 6502 Machine Code, VGA Generators & Rick Hartley PCB Grounding",
    "domain": "Hardware & Electronics",
    "difficulty": "Intermediate",
    "estimatedHours": "26 hours",
    "badge": "Maker & Hardware",
    "icon": "zap",
    "description": "Pick up the wire strippers and the oscilloscope probes. Start with mechanical computing gears and fluidic circuits, study diode rectification, trace electrons through Ben Eater's breadboard computer, program 6502 machine code, build discrete VGA video cards from logic chips, decode USB differential packets, and master high-speed PCB signal integrity with Rick Hartley.",
    "prerequisites": "High-school physics / basic electricity understanding.",
    "modules": [
      {
        "id": "hw-analog-to-cpu",
        "title": "Module 1: From Mechanical Logic to Breadboard CPUs",
        "description": "Start with physical/mechanical logic, AC to DC rectification, and build a programmable CPU on breadboards.",
        "lessons": [
          {
            "order": 1,
            "vid": "s1i-dnAH9Y4",
            "title": "Mechanical Computer (All Parts) - Basic Mechanisms In Fire Control Computers",
            "channel": "Excelsior10000",
            "topic": "Mechanical Computer: Basic Mechanisms in Fire Control",
            "level": "intro",
            "score": 13.5,
            "recommenders": 13,
            "summary": "A 1953 US Navy training film explaining the basic mechanisms in mechanical fire control computers aboard ships. It shows how gears, differentials and cams solved mathematical problems in permanent mechanical form.",
            "why_hn": "HN commenters repeatedly recommend it as a beautiful, approachable explanation of analog mechanical computation, and many have rewatched it.",
            "quote": "It illustrates the problems and solutions near perfectly, and I've watched it way too many times.",
            "tags": [
              "fire control computers",
              "analog computing",
              "us navy",
              "mechanisms",
              "gears"
            ],
            "learningOutcomes": [
              "Classic US Navy technical training on computing differential gears, cams, and multipliers mechanically"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/s1i-dnAH9Y4"
          },
          {
            "order": 2,
            "vid": "QrkiJZKJfpY",
            "title": "Mechanical circuits: electronics without electricity",
            "channel": "Steve Mould",
            "topic": "Mechanical Circuits: Electronics Without Electricity (Steve Mould)",
            "level": "general",
            "score": 1.0,
            "recommenders": 1,
            "summary": "Steve Mould shows Spintronics, a set of mechanical components such as resistors, capacitors and transistors linked by chains, that give an intuitive feel for how electrical circuits work.",
            "why_hn": "HN suggests it as a vivid, hands-on way to understand circuits, including for a blind child learning to program.",
            "quote": "they're basically mechanical circuits and it looks super cool.",
            "tags": [
              "spintronics",
              "electronics",
              "circuits",
              "physics analogy",
              "steve mould"
            ],
            "learningOutcomes": [
              "Steve Mould building fluidic logic gates, capacitors, and diodes using water and mechanics"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/QrkiJZKJfpY"
          },
          {
            "order": 3,
            "vid": "sI5Ftm1-jik",
            "title": "Making a Full Bridge Rectifier",
            "channel": "ElectroBOOM",
            "topic": "Making a Full Bridge Rectifier (ElectroBOOM)",
            "level": "intro",
            "score": 3.5,
            "recommenders": 3,
            "summary": "ElectroBOOM's Mehdi Sadaghdar explains how a full bridge rectifier works, the building block of AC to DC converters, with his usual humor and a demonstration of the circuit.",
            "why_hn": "Recommended as an enlightening and funny explanation of bridge rectifiers, often linked in power supply teardown threads.",
            "quote": "The linked video of how bridge rectifier works is enlightening, funny and terrifying.",
            "tags": [
              "rectifier",
              "electronics",
              "diodes",
              "ac to dc",
              "electroboom"
            ],
            "learningOutcomes": [
              "Mehdi Sadaghdar explaining AC to DC power conversion, diode bridge mechanics, and smoothing capacitors"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/sI5Ftm1-jik"
          },
          {
            "order": 4,
            "vid": "HyznrdDSSGM",
            "title": "8-bit computer update",
            "channel": "Ben Eater",
            "topic": "8-Bit Computer Update & Architecture",
            "level": "intro",
            "score": 15.0,
            "recommenders": 14,
            "summary": "Ben Eater's short update announcing his plan to build another 8-bit computer from scratch on camera. It kicks off the breadboard computer series that became widely known.",
            "why_hn": "HN repeatedly recommends the series it launched as the best way to understand how a CPU works, praised for Eater's clear teaching.",
            "quote": "I think I learned more from Ben Eater’s “Building an 8-bit breadboard computer” series [0] than my intro to computer architecture course at university.",
            "tags": [
              "ben eater",
              "breadboard computer",
              "cpu design",
              "digital logic",
              "electronics"
            ],
            "learningOutcomes": [
              "Ben Eater's iconic build of a functioning programmable computer on solderless breadboards",
              "Step-by-step examination of bus contention, control logic ROMs, and clock synchronization"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/HyznrdDSSGM"
          },
          {
            "order": 5,
            "vid": "LnzuMJLZRdU",
            "title": "“Hello, world” from scratch on a 6502 — Part 1",
            "channel": "Ben Eater",
            "topic": "Assembly on Bare Silicon: 6502 Part 1",
            "level": "intro",
            "score": 14.0,
            "recommenders": 11,
            "summary": "Ben Eater starts a series building a working computer on breadboards around the 6502 microprocessor. In this first part he gets a 'hello world' running from scratch.",
            "why_hn": "HN repeatedly recommends it as the best hands-on way to understand how a CPU and a computer work from first principles.",
            "quote": "It is highly recommended if you want to dive down into computers and digital logic on first principles.",
            "tags": [
              "6502",
              "breadboard computer",
              "digital electronics",
              "assembly",
              "ben eater"
            ],
            "learningOutcomes": [
              "Wiring an MOS 6502 processor, executing NOP slides, and displaying bytes on LEDs"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/LnzuMJLZRdU"
          },
          {
            "order": 6,
            "vid": "NGFhc8R_uO4",
            "title": "Indistinguishable From Magic: Manufacturing Modern Computer Chips",
            "channel": "Andor Gafotas",
            "topic": "Manufacturing Modern Computer Chips",
            "level": "general",
            "score": 22.0,
            "recommenders": 19,
            "summary": "A HOPE09 talk on how modern computer chips are manufactured, from 22nm transistors to ultra-clean fabs and the tricks used to pattern tiny features with light. It frames chipmaking as hacking electrical engineering and physics.",
            "why_hn": "HN repeatedly calls it the best in-depth introduction to IC manufacturing, a sense-of-awe talk by an independent engineer, while wishing for an updated version.",
            "quote": "This talk on YouTube is the most in depth explanation of IC manufacuring I have seen. I highly recommend it to anyone, no matter their background.",
            "tags": [
              "chip fabrication",
              "lithography",
              "semiconductors",
              "hope conference",
              "transistors"
            ],
            "learningOutcomes": [
              "How billion-transistor chips are manufactured compared to discrete breadboard gates"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/NGFhc8R_uO4"
          }
        ]
      },
      {
        "id": "hw-video-usb-pcb",
        "title": "Module 2: High-Speed Signals, Protocols & PCB Signal Integrity",
        "description": "Generate analog video signals with discrete counters, decode USB packets, and master high-speed PCB return paths.",
        "lessons": [
          {
            "order": 7,
            "vid": "l7rce6IQDWs",
            "title": "The world's worst video card?",
            "channel": "Ben Eater",
            "topic": "The World's Worst Video Card?",
            "level": "intermediate",
            "score": 8.0,
            "recommenders": 8,
            "summary": "Ben Eater explains how VGA signals work and builds a breadboard circuit that produces correct sync timing so a monitor recognizes the signal. He then builds toward displaying an image from simple logic chips.",
            "why_hn": "HN recommends it as a clear, from-scratch look at how video hardware works, understandable with just basic logic knowledge.",
            "quote": "Anyone with a basic understanding of logic circuits has enough background to understand it. Worth a watch.",
            "tags": [
              "vga",
              "breadboard",
              "ttl logic",
              "ben eater",
              "video signals",
              "hardware"
            ],
            "learningOutcomes": [
              "Ben Eater designing a video graphics card from EEPROMs, binary counters, and VGA timing sync signals",
              "Horizontal sync (HSync), vertical sync (VSync), and color DACs"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/l7rce6IQDWs"
          },
          {
            "order": 8,
            "vid": "wdgULBpRoXk",
            "title": "How does a USB keyboard work?",
            "channel": "Ben Eater",
            "topic": "How Does a USB Keyboard Work?",
            "level": "intermediate",
            "score": 7.0,
            "recommenders": 7,
            "summary": "Ben Eater explains how a USB keyboard communicates, covering the electrical interface, bit and packet encoding, packet contents, and a comparison with PS/2.",
            "why_hn": "HN commenters recommend it as a clear, comprehensive explanation of USB signaling and keyboard polling.",
            "quote": "Fantastic breakdown if you have 30 minutes",
            "tags": [
              "usb",
              "keyboards",
              "ps/2",
              "polling",
              "ben eater",
              "hardware"
            ],
            "learningOutcomes": [
              "Reverse engineering the USB differential D+/D- signaling using an oscilloscope and logic analyzer",
              "NRZI encoding, bit stuffing, USB packet descriptors, and HID enumeration"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/wdgULBpRoXk"
          },
          {
            "order": 9,
            "vid": "2XLZ4Z8LpEE",
            "title": "Using a 1930 Teletype as a Linux Terminal",
            "channel": "CuriousMarc",
            "topic": "Using a 1930 Teletype as a Linux Terminal",
            "level": "general",
            "score": 6.0,
            "recommenders": 4,
            "summary": "CuriousMarc connects a restored 1930 Model 15 Teletype to a Linux machine and uses it as a terminal, after commenters requested it. The video shows the challenges of linking a 5-bit mechanical device to a modern OS.",
            "why_hn": "HN commenters love it as a vivid demonstration of terminal history, explaining why tools like ed and the tty echo model work the way they do.",
            "quote": "It's one of the best things on the Internet, IMO.",
            "tags": [
              "teletype",
              "retro computing",
              "unix history",
              "terminals",
              "restoration"
            ],
            "learningOutcomes": [
              "CuriousMarc interfacing a mechanical Creed teletype with modern Linux serial TTY drivers"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/2XLZ4Z8LpEE"
          },
          {
            "order": 10,
            "vid": "ySuUZEjARPY",
            "title": "[LIVE] How to Achieve Proper Grounding - Rick Hartley - Expert Live Training (US)",
            "channel": "Altium",
            "topic": "How to Achieve Proper Grounding (Rick Hartley / Altium)",
            "level": "intermediate",
            "score": 12.5,
            "recommenders": 9,
            "summary": "Rick Hartley gives a roughly two-hour live training on proper grounding in PCB design. He explains how energy actually flows in the space between conductors, and how that governs noise, EMI, return paths and signal reflections.",
            "why_hn": "Hailed as the best video on electrical engineering and an essential, eye-opening watch for anyone designing high-speed boards.",
            "quote": "the best video I've ever seen on electrical engineering",
            "tags": [
              "grounding",
              "pcb design",
              "emi",
              "signal integrity",
              "return paths",
              "high-speed design"
            ],
            "learningOutcomes": [
              "Legendary 2h 20m masterclass by Rick Hartley on electromagnetic fields, return currents, ground planes, transmission lines, and eliminating PCB noise"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/ySuUZEjARPY"
          }
        ]
      }
    ]
  },
  {
    "id": "web-engineering-frontend",
    "title": "Web Engineering & Modern Frontend Architecture",
    "tagline": "JavaScript Internals, Event Loops, React Architecture, Svelte Compilers, Turbolinks, Phoenix LiveView & OAuth",
    "domain": "Software Engineering & Languages",
    "difficulty": "Beginner to Advanced",
    "estimatedHours": "32 hours",
    "badge": "Modern Web",
    "icon": "globe",
    "description": "Look past framework dogmas to understand how the browser engine, runtime event loop, reactive compilers, and network layers actually cooperate to render interactive web applications at scale. From Crockford's JS history to React's architecture, Svelte's compiler, Elm type invariants, Turbolinks, Phoenix LiveView, OAuth2, and modern web performance.",
    "prerequisites": "HTML, CSS, and basic JavaScript.",
    "modules": [
      {
        "id": "web-runtime-eventloop",
        "title": "Module 1: JavaScript Engine Runtimes & The Browser Event Loop",
        "description": "Master the asynchronous mechanics of JavaScript engines and how browsers coordinate execution.",
        "lessons": [
          {
            "order": 1,
            "vid": "JxAXlJEmNMg",
            "title": "Crockford on JavaScript - Volume 1: The Early Years",
            "channel": "YUI Library",
            "topic": "Crockford on JavaScript: The Early Years",
            "level": "intro",
            "score": 12.0,
            "recommenders": 10,
            "summary": "Douglas Crockford's first Yahoo lecture puts JavaScript in historical context. He traces the language's structure and quirks back through the early decades of computer science and programming language history.",
            "why_hn": "HN repeatedly recommends the Crockford series as a must-watch history of computing and programming languages, and as a way to learn to think in JavaScript.",
            "quote": "I urge you to watch this. It really is worth it!",
            "tags": [
              "douglas crockford",
              "javascript",
              "computing history",
              "programming languages",
              "web history"
            ],
            "learningOutcomes": [
              "Douglas Crockford on the creation of JavaScript at Netscape in 10 days by Brendan Eich and its Scheme/Self roots"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/JxAXlJEmNMg"
          },
          {
            "order": 2,
            "vid": "hQVTIJBZook",
            "title": "JavaScript: The Good Parts",
            "channel": "Google TechTalks",
            "topic": "JavaScript: The Good Parts",
            "level": "intermediate",
            "score": 11.5,
            "recommenders": 11,
            "summary": "Douglas Crockford's 2009 Google tech talk on the good and bad parts of JavaScript, based on his book. He argues for using a reliable subset of the language and avoiding its flawed features.",
            "why_hn": "A classic recommended to people learning JavaScript, even though some find it dogmatic and dated.",
            "quote": "This video changed my mind",
            "tags": [
              "javascript",
              "douglas crockford",
              "good parts",
              "best practices",
              "web"
            ],
            "learningOutcomes": [
              "Douglas Crockford explaining prototype inheritance, closure scope, and avoiding historical language pitfalls"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/hQVTIJBZook"
          },
          {
            "order": 3,
            "vid": "8aGhZQkoFbQ",
            "title": "What the heck is the event loop anyway? | Philip Roberts | JSConf EU",
            "channel": "JSConf",
            "topic": "What the Heck Is the Event Loop Anyway?",
            "level": "intermediate",
            "score": 16.5,
            "recommenders": 16,
            "summary": "Philip Roberts explains the JavaScript event loop, call stack, callbacks and asynchronous behavior with live visualizations using a tool he built. It demystifies terms like non-blocking and single-threaded.",
            "why_hn": "HN commenters repeatedly name it as the best explanation of the JS event loop and the first thing to watch before tackling async code.",
            "quote": "The tool he created to display the event loop in real time is fantastic.",
            "tags": [
              "event loop",
              "async javascript",
              "call stack",
              "callbacks",
              "visualization"
            ],
            "learningOutcomes": [
              "Philip Roberts: How asynchronous callbacks queue and execute in V8 and web browsers",
              "Preventing UI thread jank and understanding render blocking"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8aGhZQkoFbQ"
          },
          {
            "order": 4,
            "vid": "cCOL7MC4Pl0",
            "title": "Jake Archibald on the web browser event loop, setTimeout, micro tasks, requestAnimationFrame, ...",
            "channel": "JSConf",
            "topic": "Jake Archibald: In the Loop (Event Loop Deep Dive)",
            "level": "intermediate",
            "score": 7.0,
            "recommenders": 7,
            "summary": "Jake Archibald's JSConf.Asia 2018 talk \"In the Loop\" explains the browser event loop, covering tasks, microtasks, requestAnimationFrame, and how rendering interleaves with JavaScript. It uses visual walkthroughs to show why code runs in surprising orders and why setTimeout fixes are unreliable.",
            "why_hn": "HN treats it as the best primer on the event loop, praising its entertaining, easy-to-grasp visual explanations.",
            "quote": "actually making it both entertaining and easily grokable!",
            "tags": [
              "javascript",
              "event loop",
              "microtasks",
              "requestanimationframe",
              "settimeout",
              "web browsers"
            ],
            "learningOutcomes": [
              "Browser task queues, microtasks, requestAnimationFrame, and render layout timing differences"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/cCOL7MC4Pl0"
          }
        ]
      },
      {
        "id": "web-architectures",
        "title": "Module 2: Architectural Evolution: React, Svelte, Turbolinks & LiveView",
        "description": "Understand component architecture, virtual DOM diffing, compile-time reactivity, and the HTML-over-the-wire revolution.",
        "lessons": [
          {
            "order": 5,
            "vid": "x7cQ3mrcKaY",
            "title": "Pete Hunt: React: Rethinking best practices -- JSConf EU",
            "channel": "JSConf",
            "topic": "Pete Hunt: React: Rethinking Best Practices (JSConf EU 2013)",
            "level": "intermediate",
            "score": 10.0,
            "recommenders": 9,
            "summary": "Pete Hunt of Facebook and Instagram introduces React at JSConf EU 2013 and explains its design principles. He argues that separating templates from logic only separates technologies, not concerns, and makes the case for components.",
            "why_hn": "HN calls it the famous talk for understanding why React rejected separation of concerns by technology and for newcomers puzzled by JSX.",
            "quote": "See Pete Hunt's famous talk",
            "tags": [
              "react",
              "separation of concerns",
              "jsx",
              "components",
              "pete hunt",
              "frontend"
            ],
            "learningOutcomes": [
              "The historic 2013 talk introducing one-way data flow, JSX, and component-centric architecture"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/x7cQ3mrcKaY"
          },
          {
            "order": 6,
            "vid": "xsSnOQynTHs",
            "title": "Dan Abramov - Live React: Hot Reloading with Time Travel at react-europe 2015",
            "channel": "ReactEurope",
            "topic": "Dan Abramov: Live React Hot Reloading & Time Travel",
            "level": "intermediate",
            "score": 9.5,
            "recommenders": 12,
            "summary": "Dan Abramov live-codes hot reloading with time-travel debugging at React Europe 2015, debuting Redux and its devtools. The slides themselves are driven by application state.",
            "why_hn": "Seen as the canonical Redux introduction and a model live-coding talk about better developer tools.",
            "quote": "One of my favourites I watched recently was Dan Abramov introducing React hot loading, Redux and Redux Dev Tools in the same 30 minute talk",
            "tags": [
              "redux",
              "react",
              "hot reloading",
              "time travel debugging",
              "developer tools"
            ],
            "learningOutcomes": [
              "The birth of Redux and immutable state time-travel debugging"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/xsSnOQynTHs"
          },
          {
            "order": 7,
            "vid": "AdNJ3fydeao",
            "title": "Rich Harris - Rethinking reactivity",
            "channel": "You Gotta Love Frontend",
            "topic": "Rich Harris: Rethinking Reactivity (Svelte)",
            "level": "intermediate",
            "score": 15.5,
            "recommenders": 15,
            "summary": "Svelte creator Rich Harris explains moving reactivity into the compiler and language rather than tracking state at runtime, with a history of spreadsheets as reactive systems and comparisons to React.",
            "why_hn": "The most recommended introduction to Svelte, credited with sparking its adoption.",
            "quote": "you can (and I heartily recommend doing so) watch the \"Rethinking reactivity\" video here",
            "tags": [
              "svelte",
              "reactivity",
              "compilers",
              "react",
              "rich harris",
              "spreadsheets"
            ],
            "learningOutcomes": [
              "Why the virtual DOM is overhead and how compile-time reactive assignments work"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/AdNJ3fydeao"
          },
          {
            "order": 8,
            "vid": "IcgmSRJHu_8",
            "title": "\"Making Impossible States Impossible\" by Richard Feldman",
            "channel": "elm-conf",
            "topic": "Making Impossible States Impossible (Richard Feldman)",
            "level": "intermediate",
            "score": 15.5,
            "recommenders": 9,
            "summary": "Richard Feldman's elm-conf talk on designing models so that bugs from impossible application states cannot occur, using Elm's compiler and types. It demonstrates techniques for making invalid states unrepresentable.",
            "why_hn": "HN repeatedly recommends it as a talk that changed how people model data, with ideas that apply well beyond Elm to any typed language.",
            "quote": "the talk is Elm lang focused, but the concepts still apply to other languages.",
            "tags": [
              "elm",
              "type systems",
              "make illegal states unrepresentable",
              "functional programming",
              "data modeling"
            ],
            "learningOutcomes": [
              "Richard Feldman on preventing UI errors (loading spinners stuck, invalid form states) through algebraic data types"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/IcgmSRJHu_8"
          },
          {
            "order": 9,
            "vid": "SWEts0rlezA",
            "title": "RailsConf 2016 -  Turbolinks 5: I Can’t Believe It’s Not Native! by Sam Stephenson",
            "channel": "Confreaks",
            "topic": "Turbolinks 5: I Can't Believe It's Not Native! (Sam Stephenson)",
            "level": "intermediate",
            "score": 12.0,
            "recommenders": 6,
            "summary": "Sam Stephenson's RailsConf 2016 talk on Turbolinks 5, showing how small teams can ship fast Rails apps in the browser and hybrid iOS and Android apps sharing one set of web views.",
            "why_hn": "Repeatedly urged on people choosing a stack, as a case against heavy SPA complexity and for shared web and native code.",
            "quote": "I highly recommend this talk on managing the complexity of basecamp and sharing a codebase between web and native apps.",
            "tags": [
              "turbolinks",
              "rails",
              "basecamp",
              "hybrid mobile apps",
              "spa alternatives"
            ],
            "learningOutcomes": [
              "Sam Stephenson on HTML-over-the-wire, replacing full-page loads with pushState and body swaps without SPA complexity"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/SWEts0rlezA"
          },
          {
            "order": 10,
            "vid": "8xJzHq8ru0M",
            "title": "Chris McCord - Keynote: Phoenix LiveView - Interactive Apps without Javascript - ElixirConf EU 2019",
            "channel": "Code Sync",
            "topic": "Chris McCord: Phoenix LiveView (Interactive Apps Without JS)",
            "level": "intermediate",
            "score": 7.5,
            "recommenders": 4,
            "summary": "Chris McCord's ElixirConf EU 2019 keynote introducing Phoenix LiveView, which builds interactive server-rendered apps without writing JavaScript. It explains how only changed dynamic parts are sent over a websocket.",
            "why_hn": "HN recommends it as the primary source for understanding LiveView's advantages and its middle ground between multipage apps and SPAs.",
            "quote": "Great talk about it from the developer here",
            "tags": [
              "phoenix liveview",
              "elixir",
              "server-rendered ui",
              "websockets",
              "web frameworks"
            ],
            "learningOutcomes": [
              "Server-rendered reactive web applications with minimal DOM diffs over WebSockets"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/8xJzHq8ru0M"
          }
        ]
      },
      {
        "id": "web-security-performance",
        "title": "Module 3: Authentication Security & Web Performance",
        "description": "Secure user identities and optimize web applications for instant page loads.",
        "lessons": [
          {
            "order": 11,
            "vid": "996OiexHze0",
            "title": "OAuth 2.0 and OpenID Connect (in plain English)",
            "channel": "OktaDev",
            "topic": "OAuth 2.0 and OpenID Connect in Plain English",
            "level": "intro",
            "score": 7.5,
            "recommenders": 7,
            "summary": "Okta developer advocate Nate Barbettini explains OAuth 2.0 and OpenID Connect in a roughly hour-long talk. It starts from the problems the protocols solve and walks through the flows. The description notes the implicit flow material is now out of date.",
            "why_hn": "HN repeatedly points people to it as the clearest way to finally understand OAuth, to the point that one team made it required viewing for new hires.",
            "quote": "it was a requirement for new joiners to watch this in their first week",
            "tags": [
              "oauth 2.0",
              "openid connect",
              "authentication",
              "authorization",
              "web security"
            ],
            "learningOutcomes": [
              "Nate Barbettini demystifying access tokens, refresh tokens, authorization code flow, and identity claims"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/996OiexHze0"
          },
          {
            "order": 12,
            "vid": "-Ln-8QM8KhQ",
            "title": "How is this Website so fast!?",
            "channel": "Wes Bos",
            "topic": "Modern Web Performance: Server Rendering, Prefetching & Service Workers",
            "level": "intermediate",
            "score": 4.0,
            "recommenders": 4,
            "summary": "Wes Bos breaks down the techniques behind the McMaster-Carr website's speed: server-rendered HTML, prefetching, CDN and service worker caching, preloading, critical CSS and fixed-size images. He also notes its old-school jQuery and YUI JavaScript.",
            "why_hn": "HN points to it as the clearest frontend explanation of why McMaster-Carr feels so snappy, often contrasted with slow modern UIs.",
            "quote": "Here is Wes Bos taking a deeper dive into the intricacies of technologies used to accomplish this",
            "tags": [
              "page speed",
              "prefetching",
              "caching",
              "service workers",
              "mcmaster-carr",
              "frontend"
            ],
            "learningOutcomes": [
              "Modern web performance techniques: server-rendered HTML, resource prefetching, CDN edge caching, and service worker strategies",
              "Why McMaster-Carr loads faster than most modern SPAs despite using jQuery and YUI"
            ],
            "hackerTubeUrl": "https://hacker-tube.org/watch/-Ln-8QM8KhQ"
          }
        ]
      }
    ]
  }
];
var COURSES_DATA = window.HACKER_COURSES;
