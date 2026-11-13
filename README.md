# ⚡ HACKER LEARN

> **Anti-Algorithm, High-Signal Technical Learning Platform**  
> 12 rigorous, university-caliber computer science roadmaps curated from 6,454+ peer-recommended lectures across 20 years of Hacker News.

[![Platform](https://img.shields.io/badge/Platform-macOS%20%7C%20Linux%20%7C%20Windows-brightgreen)](#-quick-start)
[![Zero Login](https://img.shields.io/badge/Auth-Zero%20Login%20Required-blue)](#-how-progress-is-saved)
[![Offline First](https://img.shields.io/badge/Storage-100%25%20Local%20%26%20Private-orange)](#-how-progress-is-saved)
[![Curriculum](https://img.shields.io/badge/Curriculum-12%20Domains%20%7C%20400%2B%20Hours-purple)](#-the-12-master-roadmaps)

---

## 🚀 What is Hacker Learn?

Modern learning platforms are choked with SEO optimization, 30-second superficial explainers, and sponsored corporate content. 

**Hacker Learn** takes a different approach:
* **0% Algorithmic Slop or Sponsored Noise**: Every single lesson is sourced strictly from the [HackerTube](https://hacker-tube.org/) archive (the most celebrated lectures in Hacker News history).
* **Zero Dependency Terminal Launch**: Run `hackerlearn` in your terminal and your learning dashboard immediately opens in your browser.
* **100% Local & Private**: No account creation, no email address, no remote tracking. Your progress, notes, and custom curricula are saved directly on your machine.
* **University-Grade Sequence**: Zero prerequisite skips. Every roadmap takes you step-by-step from foundational first principles to production-level architecture.

---

## ⚡ Quick Start: Launch in 5 Seconds

Open your terminal and run:

```bash
hackerlearn
```

Your default browser will immediately pop up with the full interactive dashboard at `http://localhost:8383`.

### Installation Options

#### Option A: Run via Python / Pip (Recommended)
```bash
# Clone the repository
git clone https://github.com/your-username/hackerlearn.git
cd hackerlearn

# Install the hackerlearn command
pip install -e .

# Launch anywhere!
hackerlearn
```

#### Option B: Run via Node.js / NPX (Zero Install)
```bash
npx hackerlearn
```

#### Option C: Direct Double-Click (No Installation)
* **Windows**: Double-click `hackerlearn.bat` (or open `index.html`).
* **macOS / Linux**: Run `./hackerlearn.sh`.

---

## 💾 How Progress is Saved (Zero Login Required)

Hacker Learn does **not** have accounts, passwords, or servers collecting your data.

* When `hackerlearn` launches, it runs on a dedicated local origin (`http://localhost:8383`).
* Your completed lessons, timestamps, markdown study notes, custom-built curricula, and theme settings are saved to your browser's local sandbox (`localStorage`).
* When you close your browser or turn off your computer and run `hackerlearn` tomorrow, **everything is exactly where you left it**.
* You can also export your entire study notebook and course progress to a single JSON file at any time.

---

## 🗺️ The 12 Master Roadmaps (Curriculum Overview)

> 🔒 *Note: To maintain the integrity of the pedagogical sequence, the full 145 video schedule, timecodes, lecture notes, and interactive player are unlocked inside the Hacker Learn app.*

### 1. Machine Learning & Deep Learning: Zero to Hero
`AI, Machine Learning & Data` • `Beginner to Advanced` • `20 Lessons (48 hours)`

> Vectors, Calculus, CS229, micrograd, makemore, Transformers, Tokenizers, and RLHF

An exhaustive, battle-tested masterclass for mastering modern machine learning and artificial intelligence as curated by Hacker News. Begins with geometric spatial intuition for linear algebra and calculus, progresses to classical supervised learning and linear regression with Andrew Ng, covers 3Blue1Brown's complete neural network series, builds micrograd and makemore with Andrej Karpathy, constructs GPT from scratch in PyTorch, and explores modern RLHF with OpenAI co-founder John Schulman.

**Roadmap Modules:**
* **Module 1: Mathematical Foundations (Vectors & Calculus)**: Develop geometric intuition for vectors, coordinate spaces, derivatives, and loss slopes before writing machine learning algorithms.
* **Module 2: Classical Machine Learning & Supervised Regression**: Understand the classical roots of machine learning: formal problem formulation, supervised vs unsupervised learning, linear regression, and cost function minimization.
* **Module 3: Neural Networks, Calculus & Backpropagation from Scratch**: Visualize weight spaces, derive backpropagation calculus, and build autograd engines and language models from scratch in Python.
* **Module 4: Attention Mechanisms, Tokenizers & Modern LLMs**: Master the self-attention architecture that powers ChatGPT, Claude, and Gemini, build tokenizers, and write a GPT from scratch.
* **Module 5: Reinforcement Learning & Alignment (RLHF)**: Learn how agents interact with environments, maximize rewards, and align modern models with human feedback.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 2. Systems Programming & Low-Level Hardware Mastery
`Systems, Networks & Security` • `Intermediate to Advanced` • `14 Lessons (38 hours)`

> Breadboards, 6502 Machine Code, Chip Fabrication, Mechanical Sympathy, C++, Rust & Zig

Step beneath the layers of high-level virtual machines. Start with discrete logic gates and microprocessors on breadboards, transition to modern EUV semiconductor physics, and master mechanical sympathy, cache lines, SIMD, C++ memory arenas, Rust systems design, and the Zig language.

**Roadmap Modules:**
* **Module 1: Building Up from Bare Silicon & Discrete Logic**: Deconstruct how digital electronics execute instructions by assembling microprocessors on breadboards and examining silicon fabrication.
* **Module 2: Mechanical Sympathy, Cache Hierarchies & Concurrency**: Understand how CPU cache lines, memory latency, and branch prediction dictate real-world software performance.
* **Module 3: C++ Memory Mechanics & High Performance**: Deep dive into memory allocators, cache-friendly data structures, and zero-cost abstractions.
* **Module 4: Modern Systems: Rust, Zig & ECS Architecture**: Compare zero-cost abstractions, compiler optimizations, memory ownership, and modern language design.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 3. Operating Systems, Kernels & Concurrency
`Systems, Networks & Security` • `Intermediate to Advanced` • `13 Lessons (34 hours)`

> UNIX Heritage, systemd, BeOS Microkernels, Container Isolation, Crash Dumps & Concurrency Runtimes

Explore the software layer that arbitrates between hardware and applications. From UNIX bootstrapping to BeOS microkernel concurrency, Apollo guidance software, modern Linux kernel evolution, systemd init architecture, production crash dump analysis, and thread runtimes.

**Roadmap Modules:**
* **Module 1: Genesis of UNIX & Operating System Bootstrapping**: Discover the revolutionary insights of Bell Labs and contrast traditional monolithic UNIX with modern init systems and microkernel architectures.
* **Module 2: Kernel Abstractions, Virtualization & Production Debugging**: Investigate how modern multicore, NVMe, and memory architectures challenge conventional OS abstractions, and master crash debugging.
* **Module 3: Concurrency Runtimes: From Event Loops to Kernel Threads**: Order concurrency from simplest to most advanced: asynchronous event loops, actor concurrency, and kernel M:N threading.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 4. Distributed Systems, Databases & Storage Engines
`Systems, Networks & Security` • `Intermediate to Advanced` • `14 Lessons (36 hours)`

> Relational Models, Stonebraker's Big Data, DynamoDB, Data Centers, CRDTs, WhatsApp Scaling & Simulation

Master the design of systems that span multiple machines across unreliable networks. Study relational theory from Andy Pavlo and Michael Stonebraker, NoSQL patterns, physical Google cluster architecture, conflict-free replicated data types (CRDTs), WhatsApp scaling to 1M+ TCP connections, and deterministic simulation testing from FoundationDB.

**Roadmap Modules:**
* **Module 1: Relational Foundations & Storage Internals**: Examine how databases organize bytes on disk, parse queries, and balance relational vs non-relational trade-offs.
* **Module 2: Infrastructure, Caching & Log-Structured Replication**: Study data center infrastructure, cache replacement mechanics, and conflict-free replicated data types.
* **Module 3: Distributed Resilience & Deterministic Testing**: Learn how top infrastructure teams engineer resilient systems that survive real-world cluster crashes.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 5. Cybersecurity, Reverse Engineering & Cryptography
`Systems, Networks & Security` • `Intermediate to Advanced` • `11 Lessons (32 hours)`

> Diffie-Hellman, SHA-256, Weird Machines, Game Boy Hardware Exploits, iOS Security & SSL Auditing

Demystify mathematical cryptography and real-world reverse engineering. Explore Diffie-Hellman key exchange, SHA-256 and proof-of-work, homomorphic encryption, alongside Meredith Patterson and Sergey Bratus on the Science of Insecurity, media.ccc.de's hardware reverse engineering of the Game Boy, Black Hat iOS teardowns, and Moxie Marlinspike on SSL certificate trust hierarchies. Note: This course builds strong theoretical and analytical foundations for security thinking. Practical penetration testing, binary exploitation (buffer overflows, ROP chains), and malware analysis require hands-on lab environments (CTFs, Hack The Box, pwnable.kr) that complement but go beyond video instruction.

**Roadmap Modules:**
* **Module 1: Mathematical Cryptography Foundations**: Understand the mathematical trapdoor functions and discrete logarithm problems behind modern encryption.
* **Module 2: Reverse Engineering, Protocol Hacking & System Vulnerabilities**: Learn formal exploit mechanics, hardware reverse engineering, mobile platform security, and systemic vulnerability economics.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 6. Compilers, Interpreters & Programming Language Theory
`Software Engineering & Languages` • `Intermediate to Advanced` • `10 Lessons (31 hours)`

> SICP, Growing a Language, Lexers in Go, Metacircular Evaluators, Type Systems, Python Internals & LLVM

Learn how human-readable code transforms into machine-executable instructions. Start with SICP metalinguistic abstraction, study Guy Steele's language growth philosophy, build concurrent lexical scanners in Go with Rob Pike, implement metacircular evaluators with William Byrd, study Richard Feldman's algebraic type systems, dissect Python's C runtime internals with Armin Ronacher, and explore LLVM code generation.

**Roadmap Modules:**
* **Module 1: Language Semantics & Metalinguistic Abstraction**: Examine how language paradigms shape developer thought and how to build scalable vocabularies.
* **Module 2: Lexing, Parsing, Evaluators & Type Systems**: Build scanners, implement metacircular interpreters from first principles, and design type systems that reject bugs at compile time.
* **Module 3: Interpreter Runtimes, JIT Barriers & LLVM Code Generation**: Inspect interpreter runtime bottlenecks, C extension leaks, and LLVM intermediate representations for dynamic language backends.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 7. Computer Graphics, Shaders & Demoscene Art
`Design, Graphics & Visual Media` • `Intermediate` • `9 Lessons (26 hours)`

> Bézier Curves, Splines, Perceptual Color, 4K Demoscene, Signed Distance Fields & Console Graphics Hacks

Discover the intersection of pure mathematics, hardware limitations, and visual artistry. Learn the differential geometry of curves and splines, perceptual colormaps, examine the legendary 4k demoscene demo 'elevated', master signed distance fields and raymarching with Inigo Quilez, and reverse-engineer PlayStation 1 and NES graphics hardware.

**Roadmap Modules:**
* **Module 1: Differential Geometry of Curves & Splines**: Master parametric polynomial curves, linear interpolation (lerp), and geometric continuity.
* **Module 2: Procedural Math, Shaders & Console Graphics Hacks**: See the 4k demoscene hook, learn raymarching from Inigo Quilez, and dissect console graphics architecture.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 8. Software Architecture, Refactoring & Craftsmanship
`Software Engineering & Languages` • `Beginner to Advanced` • `9 Lessons (27 hours)`

> Simple Made Easy, Sandi Metz Rules, Deep Modules, TDD Without Mocks, Timezones & Maybe Not

Write software that thrives over years of evolving requirements. Learn Rich Hickey's principles of simplicity, Sandi Metz's rules for clean object refactoring, John Ousterhout's philosophy of deep modules, Joshua Bloch's API design rules, Ian Cooper's guide to testing behavior without brittle mocks, and handling messy domain realities like timezones.

**Roadmap Modules:**
* **Module 1: Foundational Simplicity & Clean Design**: Establish the mental models and concrete heuristics for simple, maintainable software design.
* **Module 2: Testing Architecture, Invariants & Real-World Domain Complexity**: Test systems effectively without fragile unit mocks, handle difficult real-world domain rules, and manage schema evolution.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 9. Mathematics for Computer Scientists & Algorithmic Thinking
`Mathematics & Theoretical CS` • `Beginner to Advanced` • `11 Lessons (34 hours)`

> Linear Algebra, Gilbert Strang, Vector Transposes, Sorting, Dictionaries, Wave Physics, FFT & Quantum Math

Unlock the visual, physical, and algorithmic intuition behind the mathematics of modern computing. Journey through 3Blue1Brown's essence of linear algebra, Gilbert Strang's MIT 18.06 course, vector duals with Jiahao Chen, visual sorting algorithms, Raymond Hettinger's compact hash tables, physical wave mechanics with Dr. John Shive, the Fast Fourier Transform, and Quantum Computing mathematics.

**Roadmap Modules:**
* **Module 1: Linear Algebra & Matrix Decompositions**: Build spatial intuition for vectors, matrix transformations, determinants, and eigenspaces.
* **Module 2: Core Algorithms & Data Structures**: Visualize classic sorting algorithms and understand modern cache-friendly hash table implementations.
* **Module 3: Wave Mechanics, Sampling, FFT & Quantum Computing**: Explore physical wave mechanics, continuous frequency decomposition, discrete sampling, and quantum linear algebra.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 10. Computing History, Pioneers & Hacker Culture
`Computing History & Culture` • `All Levels` • `12 Lessons (33 hours)`

> Chronological: 1960s Bell Labs, Xerox PARC, Hamming, BBC Micro, Steve Jobs 1997, Netscape, Git & Jonathan Blow

Learn where our modern computing ecosystem came from, ordered strictly chronologically. From Bell Labs in the 1960s to Xerox PARC, Richard Hamming's research advice, the British microcomputer boom that spawned ARM, Steve Jobs' 1997 Apple turnaround, Netscape open-sourcing Mozilla, Linus Torvalds creating Git, Ton Roosendaal's Blender, and Jonathan Blow on software civilizational risk.

**Roadmap Modules:**
* **Module 1: 1960s–1970s: The Foundations (Bell Labs & Xerox PARC)**: Direct insights from the computer scientists who invented the foundations of our industry.
* **Module 2: 1980s–2000s: The Microcomputer Boom, Web Wars & Open Source**: Relive the pivotal battles that created personal computing, open-source software, and modern tech culture.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 11. Electronics, Microprocessors & Hardware Hacking
`Hardware & Electronics` • `Intermediate` • `10 Lessons (26 hours)`

> Mechanical Circuits, Full-Bridge Rectifiers, Breadboard CPUs, 6502 Machine Code, VGA Generators & Rick Hartley PCB Grounding

Pick up the wire strippers and the oscilloscope probes. Start with mechanical computing gears and fluidic circuits, study diode rectification, trace electrons through Ben Eater's breadboard computer, program 6502 machine code, build discrete VGA video cards from logic chips, decode USB differential packets, and master high-speed PCB signal integrity with Rick Hartley.

**Roadmap Modules:**
* **Module 1: From Mechanical Logic to Breadboard CPUs**: Start with physical/mechanical logic, AC to DC rectification, and build a programmable CPU on breadboards.
* **Module 2: High-Speed Signals, Protocols & PCB Signal Integrity**: Generate analog video signals with discrete counters, decode USB packets, and master high-speed PCB return paths.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

### 12. Web Engineering & Modern Frontend Architecture
`Software Engineering & Languages` • `Beginner to Advanced` • `12 Lessons (32 hours)`

> JavaScript Internals, Event Loops, React Architecture, Svelte Compilers, Turbolinks, Phoenix LiveView & OAuth

Look past framework dogmas to understand how the browser engine, runtime event loop, reactive compilers, and network layers actually cooperate to render interactive web applications at scale. From Crockford's JS history to React's architecture, Svelte's compiler, Elm type invariants, Turbolinks, Phoenix LiveView, OAuth2, and modern web performance.

**Roadmap Modules:**
* **Module 1: JavaScript Engine Runtimes & The Browser Event Loop**: Master the asynchronous mechanics of JavaScript engines and how browsers coordinate execution.
* **Module 2: Architectural Evolution: React, Svelte, Turbolinks & LiveView**: Understand component architecture, virtual DOM diffing, compile-time reactivity, and the HTML-over-the-wire revolution.
* **Module 3: Authentication Security & Web Performance**: Secure user identities and optimize web applications for instant page loads.

*(Launch the app with `hackerlearn` to view the complete lesson schedule and start learning.)*

---

## 📦 Distribution & Publishing Guide

Want to distribute Hacker Learn to your team, friends, or the open-source community so anyone can run `hackerlearn` from their terminal? Follow these steps:

### 1. Distribute via PyPI (`pip install hackerlearn`)
1. Create a free account on [PyPI](https://pypi.org/).
2. Install build tools:
   ```bash
   pip install --upgrade build twine
   ```
3. Build the package distribution archives:
   ```bash
   python -m build
   ```
4. Upload to PyPI:
   ```bash
   twine upload dist/*
   ```
5. Anyone in the world can now type:
   ```bash
   pip install hackerlearn
   hackerlearn
   ```

### 2. Distribute via NPM (`npx hackerlearn`)
1. Create a free account on [npmjs.com](https://www.npmjs.com/).
2. In your terminal:
   ```bash
   npm login
   npm publish
   ```
3. Anyone in the world can now simply run without installing anything:
   ```bash
   npx hackerlearn
   ```

---

## 🛡️ License & Provenance

* **Software**: MIT License.
* **Curriculum & Metadata**: Curated from the [HackerTube](https://hacker-tube.org/) archive under the Open Data Commons Attribution License (ODC-By 1.0).
* **Video Ownership**: All video lectures belong to their respective creators, universities, and conference foundations. Hacker Learn embeds video streams via YouTube's privacy-enhanced mode (`youtube-nocookie.com`).
