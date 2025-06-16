# AI Coding Tools: L1-L5 Classification (2025)

Based on [Zhu Liang's comprehensive framework](https://paradite.github.io/ai-coding/) inspired by autonomous vehicle classifications. This list is updated in June 2025 and is not exhaustive and is subject to change. The list is based on my personal experience with some of the tools and my understanding of the market.

TODO: Compare and find missing tools against another article: https://madhukarkumar.substack.com/p/a-comprehensive-guide-to-vibe-coding

## L1-L5 Framework Overview

The coding industry is experiencing rapid changes with AI coding tools, ranging from basic code completion to full-scale software development lifecycle. These are categorized into five levels:

| Level  | Capability                 | Description                                  | Examples                          |
| ------ | -------------------------- | -------------------------------------------- | --------------------------------- |
| **L1** | Code-level Completion      | Intelligent code suggestions and completions | GitHub Copilot, Tabnine           |
| **L2** | Task-level Code Generation | Ticket to Code, IDE with Chat                | ChatGPT, Claude, Cursor, Windsurf |
| **L3** | Project-level Generation   | Ticket to PR, Prompt to UI                   | v0, Sweep, Pythagora              |
| **L4** | PRD to Production          | AI Software Engineers                        | Devin, Lovable, Bolt, Marblism    |
| **L5** | AI Development Teams       | Multi-agent collaboration                    | AutoDev, MetaGPT, MGX             |

## Comprehensive Tool Comparison

| Tool                 | L1-L5 Level | Category                      | Key Features                                                     | Pricing                                       | Target Users                           | Strengths                                          | Limitations                           |
| -------------------- | ----------- | ----------------------------- | ---------------------------------------------------------------- | --------------------------------------------- | -------------------------------------- | -------------------------------------------------- | ------------------------------------- |
| **GitHub Copilot**   | L1          | Code Completion               | Inline suggestions, chat, code explanation                       | $10/month individual, $19/month business      | All developers                         | Wide IDE support, mature ecosystem, most popular   | Limited context awareness             |
| **Tabnine**          | L1          | Code Completion               | Privacy-focused, on-premise options, multi-language              | Free tier + $12/month Pro                     | Enterprise developers                  | Privacy, security, compliance                      | Less conversational than competitors  |
| **TabbyML**          | L1          | Self-hosted AI Code Assistant | Open-source, on-premises alternative to Copilot                  | Free (open source)                            | Privacy-focused developers             | Self-contained, no cloud needed                    | Requires setup, smaller model         |
| **Sourcegraph Cody** | L2          | Code Search & AI Assistant    | Codebase-aware chat, navigation, auto-completion                 | Free for open source, $9/user/month for teams | Teams, enterprise                      | Deep code understanding, works with private repos  | Requires setup                        |
| **ChatGPT**          | L2          | Task-level LLM                | Conversational coding assistance, debugging                      | $20/month Plus                                | General developers                     | Versatile, powerful reasoning                      | No IDE integration                    |
| **Claude**           | L2          | Task-level LLM                | Code generation, analysis, debugging                             | $20/month Pro                                 | General developers                     | Strong code understanding                          | No direct IDE integration             |
| **Cursor**           | L2          | AI-Native IDE                 | Chat, code completion, multi-file editing, codebase context      | Free tier + $20/month Pro                     | Professional developers                | Best codebase understanding, VS Code compatibility | Resource intensive                    |
| **Windsurf**         | L2          | AI-Native IDE                 | "Flows" for multi-step tasks, autonomous file creation/editing   | Free tier + paid plans                        | Developers wanting AI autonomy         | Bold autonomous actions, multi-file operations     | Can be unpredictable                  |
| **Continue**         | L2          | VS Code Extension             | Open-source AI coding assistant for VS Code                      | Free (open source)                            | VS Code users                          | Highly customizable, supports multiple LLMs        | VS Code only                          |
| **PearAI**           | L2          | AI-Native IDE                 | VS Code fork with integrated AI                                  | Free tier + paid plans                        | Developers wanting AI-first experience | Clean integration, familiar interface              | Smaller ecosystem                     |
| **Aider**            | L2-L3       | Git-aware CLI Assistant       | Terminal-based AI coding with git integration                    | Free (open source)                            | Command-line developers                | Strong git integration, works with local files     | Terminal-only, steeper learning curve |
| **16x Prompt**       | L2          | Desktop App                   | Workflow automation for LLM coding tasks                         | Paid plans                                    | Prompt engineering focused             | Streamlined LLM workflows                          | Niche use case                        |
| **v0 by Vercel**     | L3          | Web Builder                   | React/Next.js components, design-to-code                         | Free tier + usage-based                       | Frontend developers, designers         | High-quality UI components, Vercel integration     | Focused on React ecosystem            |
| **Sweep**            | L3          | GitHub Integration            | Ticket to PR automation                                          | Paid plans                                    | Teams using GitHub                     | Automated PR generation                            | Limited to specific workflows         |
| **Pythagora**        | L3          | Project Generator             | Full-stack app generation from requirements                      | Paid plans                                    | Non-technical founders                 | Complete project scaffolding                       | Early stage, limited complexity       |
| **Codegen**          | L3          | Enterprise                    | Ticket to PR automation for enterprises                          | Enterprise pricing                            | Large development teams                | Enterprise integration                             | High cost, complex setup              |
| **LlamaCoder**       | L3          | Web Builder                   | Generate websites from prompts                                   | Free                                          | Casual developers                      | Simple, no-setup required                          | Basic functionality                   |
| **Bolt**             | L4          | Web Builder                   | Instant preview, full-stack apps, no setup required              | Free with limits + paid tiers                 | Rapid prototypers, beginners           | Zero setup, instant results                        | Limited to web technologies           |
| **Lovable**          | L4          | Full-stack Builder            | Natural language to full apps, design + backend                  | Freemium model                                | Non-technical users, entrepreneurs     | Complete app generation, polished output           | Less control over architecture        |
| **Marblism**         | L4          | SaaS Builder                  | PRD to production SaaS applications                              | Paid plans                                    | Entrepreneurs, startups                | Full SaaS generation with auth, payments           | Template-based approach               |
| **Devin**            | L4          | AI Software Engineer          | $500 USD for 250 Agent Compute Units (ACUs) volume-based pricing | Enterprise pricing                            | Enterprise clients                     | 54.20 on SWE-bench Verified                        | Very expensive, limited availability  |
| **Genie (Cosine)**   | L4          | AI Software Engineer          | World's best AI Software Engineer                                | Waitlist                                      | Enterprise developers                  | Advanced autonomous capabilities                   | Not yet publicly available            |
| **devlo**            | L4          | AI Software Engineer          | 54.20 on SWE-bench Verified                                      | Paid plans                                    | Professional developers                | High SWE-bench performance                         | Limited availability                  |
| **Engine (Factory)** | L4          | AI Software Engineer          | 51.80 on SWE-bench Verified                                      | Contact sales                                 | Enterprise teams                       | Strong performance metrics                         | Enterprise-only                       |
| **AutoDev**          | L5          | AI Dev Team                   | Multiple AI agents collaborating on projects                     | Research stage                                | Researchers                            | Multi-agent collaboration                          | Still in research                     |
| **MetaGPT**          | L5          | AI Dev Team                   | Multi-agent software development framework                       | Open source                                   | Researchers, advanced users            | Comprehensive multi-agent system                   | Complex setup                         |
| **MGX**              | L5          | AI Dev Team                   | Commercial AI development teams                                  | Waitlist                                      | Enterprise clients                     | Production-ready multi-agent system                | Not yet available                     |

## Key Insights for Your "Vibe Coding" Presentation

### 1. **Clear Evolution Path**

The L1-L5 framework shows a clear progression from basic code completion to full AI development teams

### 2. **Your Tool Selection Maps Perfectly**

- **Cursor & Windsurf** = L2 (Task-level, most mature category)
- **v0** = L3 (Project-level, emerging capabilities)
- **Bolt & Lovable** = L4 (PRD to Production, cutting edge)

### 3. **Current Market Reality**

- **L1-L2**: Widely adopted, production-ready
- **L3**: Emerging, mixed results
- **L4**: Impressive demos, but expensive/limited access
- **L5**: Research stage, future potential

### 4. **SWE-bench as Performance Metric**

Tools are now being measured against standardized benchmarks like SWE-bench Verified, with top performers achieving 50%+ success rates

### 5. **The "Vibe Coding" Sweet Spot**

Your tested tools (L2-L4) represent the current sweet spot where natural language meets practical functionality - this is where "vibe coding" is most impactful today.

## Recommendations by Developer Type

| Developer Type       | Recommended Level | Best Tools              | Why                                          |
| -------------------- | ----------------- | ----------------------- | -------------------------------------------- |
| **Professional Dev** | L1 + L2           | GitHub Copilot + Cursor | Proven productivity, enterprise-ready        |
| **Startup Founder**  | L4                | Lovable + Bolt          | Rapid MVP creation, no technical team needed |
| **Learning/Student** | L2 + L3           | Continue + v0           | Educational value, free options              |
| **Enterprise Team**  | L1 + L3           | Tabnine + Codegen       | Security, compliance, workflow integration   |
| **Bleeding Edge**    | L4 + L5           | Devin + MetaGPT         | Future of autonomous development             |

This framework gives your presentation a much more structured narrative about where AI coding is heading!
