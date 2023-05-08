---
layout: ArticleLayout
title: The Ethics of Generative AI. Part I - Some Vocabulary
---

> This article series draws on and develops on a keynote I delivered at ImageCon in 2019, updated for our current cultural moment that I would term the "AI tsunami" in 2023. 

We live in astonishing times. A quick hop over to a Discord server, and you can prompt an image-creating AI, Midjourney, to generate images of eye-popping artistic quality. Pop open a website and ask ChatGPT to plan your entire vacation, step by step, refining it via coherent, friendly conversation. Book a virtual assistant to organize your nonprofit's books using one of a myriad of new AI-generated startups. Soon, perhaps, we might hire a virtual accountant to use AI to gather your tax documents while you sleep, file them for state and government taxes, and pop your refund into your bank account as you sip your morning coffee. 

## It's a New Era

In this brave new world of AI helpers, there is justifiable anxiety in all fields of expertise around job deprecation. Will we need software developers if most tasks currently handled by websites can be offloaded to chatbots? Will we need illustrators if you can just ask Midjourney to spin up some images? Will software engineers evolve (or devolve, depending on your point of view) into 'prompt engineers' endlessly prompting an AI to do tasks that used to require complex SQL queries, building tests, and auditing infrastructure? What about accountants, assistants, teachers?

We have just entered an era where AI is starting to play a major role in our daily lives. As we watch and learn what AI truly means for our work, it is important to understand exactly how these AI entities are being trained. If these systems are going to impact humans to the extent that many of us are rethinking our career trajectories after 20+ years in an industry, it behooves us to think carefully about the way these systems are engineered and speak up about any concerns we might have on our use of them. We owe ourselves that much. 

## MalAIse

Many community members in tech have expressed tremendous malaise in this time of upheaval. Dan Abramov, an undisputed leader in the field, speaks for many of us when he expresses both excitement and concern at what feels like a sudden groundswell of new modalities:

![Dan Abramov tweets about AI](/images/62/dan-abramov.png)

Aside from the malaise that comes naturally when faced with a sudden upsurge of a new field that threatens to disrupt tech in general, there is an additional malaise that some have expressed by the way this new technology is manifested. In particular, the threat of license violation, copyright infringement, exploitation, and plagiarism loom large. Let's approach this topic in steps, first by giving an overview of the tech itself, offering an analysis of its disruptive nature using the lexicon offered by ethicists, and discussing examples of ethical vs unethical usage.

Let's start at the beginning by talking about some of the words that are being used today to describe these systems.

## What is Generative AI?

Simply speaking, generative AI is a kind of artificial intelligence system that uses algorithms and sophisticated, complex models to generate new text, images, video, audio, or code. Let's ask ChatGPT what Generative AI is:

"Generative AI is a field of artificial intelligence that focuses on building systems capable of creating new data or content, such as images, videos, audio, or text, rather than simply analyzing or classifying existing data. Generative models are designed to learn the underlying patterns and structure of a given dataset and then use this knowledge to create new examples that are similar to the original data but have some degree of variation.

There are several types of generative models, including:

- Variational Autoencoder (VAE): a type of neural network that learns to generate new examples by encoding and decoding data in a low-dimensional latent space.

- Generative Adversarial Networks (GANs): a type of neural network that consists of two components: a generator that creates new examples, and a discriminator that tries to distinguish between the generated examples and the real ones. The generator tries to improve by fooling the discriminator, while the discriminator tries to improve by correctly identifying the generated examples.

- Auto-regressive models: a class of models that generate new data one element at a time, conditioned on the previously generated elements. Examples of auto-regressive models include language models like GPT-3, which can generate human-like text, and PixelCNNs, which can generate high-quality images.

Generative AI has a wide range of applications, from creating realistic images and videos to generating music, speech, and text. It is also used in fields such as drug discovery, where generative models can be used to design new molecules with specific properties."

The concept of 'generating new' is quite interesting in this context. These AI algorithms are trained on vast corpi of data, resulting in 'LLMs' or Large Language Models. 

A good example of an application that relies on an LLM is ChatGPT.

## What is ChatGPT (and similar text-generation tools)?

Let's take a look at one of the most visible AI assistants: [ChatGPT](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/). An AI helper that offers explanations in conversational format, ChatGPT helps users access information without searching for it. Unlike a typical search engine, ChatGPT can generate a conversational output in which you can refine your questions progressively to arrive at new answers.ChatGPT is a web application that offers use of a "Generative Pre-trained Transformer 3 (GPT-3), which is an autoregressive language model released in 2020 that uses deep learning to produce human-like text. When given a prompt, it will generate text that continues the prompt." 

ChatGPT can be tried [at OpenAI's website](https://chat.openai.com/chat). Users can upgrade their subscription to the service to access even more powerful models. Developed by OpenAI, a San Francisco startup dedicated to building this type of tool to "democratize" AI, the project is closely connected to Microsoft, who "announced on September 22, 2020, that it had licensed "exclusive" use of GPT-3; others can still use the public API to receive output, but only Microsoft has access to GPT-3's underlying model." [source](https://en.wikipedia.org/wiki/GPT-3#cite_note-preprint-1). 

One tendence noticed by users of ChatGPT is that, while it offers a compelling, friendly chat interface, it can also '[hallucinate](https://spectrum.ieee.org/ai-hallucination#toggle-gdpr)' and with great confidence offer entirely incorrect answers. To stop this type of hallucinating, [OpenAI uses human verification systems](https://arxiv.org/pdf/1706.03741.pdf). It remains to be seen whether it can move beyond its reliance on text to begin to understand what is unspoken and unwritten in human utterance and thus to truly generate meaningful responses.

> For programmers, GitHub Copilot, Amazon Code Whisperer, and other tools have started to help speed up the production of software. These tools are trained on vast corpi of code such as all of GitHub's open source codebases. AI is also starting to be 'baked in' to products such as Notion, where you can ask an AI to describe elements of your tasks - a useful small tool.

## What is Midjourney (and similar image generation tools)

A foray into the Midjourney Discord (2 million users strong!), where you can type `/imagine` with a prompt to create a realistic, high resolution image, is a fascinating journey. It is interesting simply to watch what users are generating and try to imagine to what use the images will be put. During the recent Coronation ceremony of Charles III in England, many users imagined a vengeful Princess Diana, for example. The  prompt "zombified princess diana wielding excalibar fighing king charles for the crown. Wide angle, realistic, 4k - " rendered this image:

![Diana](/images/62/diana.png)

[Image generation AI platforms](https://gizmodo.com/ai-art-generators-ai-copyright-stable-diffusion-1850060656) like Dall-E, Midjourney, Stable Diffision, and others are trained on all kind of images, [scraping the internet](https://www.forbes.com/sites/robsalkowitz/2022/09/16/midjourney-founder-david-holz-on-the-impact-of-ai-on-art-imagination-and-the-creative-economy/?sh=6f437c462d2b) for all kinds of art. 

The Founder of Midjourney notes that the platform pays no heed to license, copyright, or the consent of living artists to train on their images. We'll come back to this fundamental problem with Generative AI in future articles.

## Some (Recent) History

Let's take a quick jog down memory lane and note a few landmarks. You'll quickly notice that the rate of innovation is only accelerating, as we no longer think in terms of years, but rather months, when marking important events in Generative AI's evolution:

> 2/2019: GPT-2 released [source](https://en.wikipedia.org/wiki/GPT-2)

> 2020: GPT-3 released [source](https://en.wikipedia.org/wiki/GPT-3)

> 11/2022 ChatGPT is published by OpenAI, backed by Microsoft

> 2/2023: [Google Bard](https://blog.google/technology/ai/bard-google-ai-search-updates/) released

> 3/2023: GPT-4 released [source](https://en.wikipedia.org/wiki/GPT-2) on ChatGPT Plus, a paid service by OpenAI.

> 3/2023: [Open letter asking for 6-month moratorium](https://futureoflife.org/open-letter/pause-giant-ai-experiments/) is published 

> 4/2023: Italy bans ChatGPT based on privacy concerns around intaking of data from minors, requesting an age-verification process on login [source](https://www.msn.com/en-us/money/other/italy-will-say-ciao-to-chatgpt-ban-if-openai-does-indeed-think-of-the-children/ar-AA19NG1X)

> 4/2023: Europe's privacy watchdog European Data Protection Board (EDPB) sets up a task force on ChatGPT. [source](https://www.livemint.com/technology/tech-news/after-ban-in-italy-this-european-agency-creates-chatgpt-taskforce-11681457235058.html)

> 5/2023: Italy's ban is [reversed](https://arstechnica.com/tech-policy/2023/05/openai-gives-in-to-italys-data-privacy-demands-ending-chatgpt-ban/) after OpenAI addresses some of its privacy questions

## The beginning

In this article, I've tried to layout, in a general way, the cultural moment in which we find ourselves. Some points I wanted to make in this introductory article include the idea that incredibly powerful tools are at our fingertips, fundamentally disrupting the way we have done our work in the past. Whether as coders, authors, artists, teachers, accountants, doctors, lawyers, or working in sales, AI is going to impact the way we live and work. For this reason, a certain amount of what I call 'malAIse' is an undercurrent of this cultural moment. In future articles in this series, I want to talk about the ethical dilemma that these tools have presented to us and how we might think about mitigating the harms they might cause. I also want to dive deep into how AI is going to impact education, a particular concern of mine. Please stay tuned!



