---
title: "Words Matter: How Apple's Terminology Shapes App Architecture and API Design"
description: Learn how Apple's thoughtful use of language and terminology can inform better app design, architecture decisions, API naming, and extension ecosystems. 
headline: "Words Matter: How Apple's Terminology Shapes App Architecture and API Design"
subhead: Exploring the subtle yet powerful influence of Apple's terminology on software architecture and API design decisions. 
image: https://github.com/user-attachments/assets/f665dee7-0a23-42c9-b2e4-f4b9a482ab2c
date: 2025-03-06
---

<img class="wide" alt="Typewriter" src="https://github.com/user-attachments/assets/f665dee7-0a23-42c9-b2e4-f4b9a482ab2c" />

In the journey of developing CodeEdit, one crucial realization we've had is the importance of how language influences software design. At first glance, it might seem trivial to obsess over words like "action," "command," "event," "perform," and "add," but diving deeper into Apple's deliberate usage of these terms reveals powerful insights that significantly shape how we build our application architecture, APIs, and overall user experience.

### Action vs. Command: Understanding Apple's Deliberate Terminology

When designing our API, we often use terms like "action" and "command" interchangeably without much thought—but Apple is extremely intentional with their choice of words. Understanding Apple's language can profoundly clarify our thinking and help us build a more consistent, intuitive system.

Let's first clarify these terms:

**Action**: An action broadly describes any interaction or event initiated by the user, such as clicking a button, typing text, or selecting something from a menu. Actions describe user intention and events that change the application's state.

**Command**: A command is a specific instruction—explicitly invoked by the user—that the application performs. Commands typically correspond directly to something selectable from the application's menus, buttons, or keyboard shortcuts.

**Why distinguish between Actions and Commands?**

In CodeEdit, we have multiple entry points for users to trigger functionality:

- Menus in the menubar
- UI Buttons
- Quick Actions panel (similar to command palettes in other editors)
- Key Bindings

Each of these entry points needs to trigger consistent and predictable behavior in our application. For example:

- When you **choose** a menu item (Apple intentionally uses "choose" for menu selections), you invoke a command.
- When you **press** a keyboard shortcut or click a button, you similarly invoke a command.
- When a document is modified or a file opens, the application broadcasts an event to inform other components.

By clearly separating these concepts, we ensure our APIs remain clear, scalable, and intuitive, not only for contributors building CodeEdit itself but also for future extension developers.

**Apple's deliberate wording examples:**

- Undo the last **action**: "Choose Edit > Undo"  
  (Here, an action is something that occurred—a general interaction.)
- Executing a menu **command** (a specific instruction): "Choose File > Open"

Commands can represent actions—but not every action represents a command. For instance, typing text into an editor is an action (user-driven), but it's not a command because it doesn't explicitly trigger a predefined operation or instruction.

### Events: Clarifying State Change Notifications

Now, let's consider **events**, another crucial piece in our API design puzzle. An event in our architecture is simply a notification broadcasted when something occurs within the application. Events announce state changes to multiple observers.

Unlike commands, which are imperative ("do this now"), events are declarative ("this happened").

For example:

- User selects "Build" from a menu or presses a key shortcut, invoking a **command**.
- The build process begins, and CodeEdit then posts an **event** ("project.build.started") to notify multiple interested components (UI indicators, logs, analytics, or extensions) that the build is underway.
- Upon completion, another event ("project.build.completed") is posted.

Events provide a clean separation of concerns. Commands initiate processes, and events announce the results, allowing multiple decoupled components to react accordingly.

### The Power of Choosing Verbs: Apple's Naming Conventions

Another insightful discovery is how Apple carefully chooses verbs in their APIs to convey precise meanings. Two particularly illustrative verbs are **perform** and **add**:

**Perform**: Apple frequently uses "perform" when explicitly invoking a defined action or command:
  - `perform(_: Selector)` from `NSObject`
  - `NSApplication.perform(_:with:)`

  This informed our decision to adopt `CommandManager.perform("commandName")` for explicit command invocations.

**Add**: Apple uses "add" consistently when registering something persistent, like observers or handlers:
  - `NotificationCenter.addObserver(...)`
  - `NSView.addSubview(...)`

Therefore, we chose `CommandManager.addCommand("commandName")` to explicitly register commands.

We also observed Apple's careful distinction among "choose," "pick," and "select":

**Choose**: Typically reserved for selecting menu items or explicit commands ("Choose File > New").

**Select**: Often used when interacting with UI elements like list items or selections in a collection ("Select the text you want to copy").

**Pick**: Commonly used for informal, quick decisions or interactions with simplified interfaces (e.g., color pickers, item pickers).

This nuanced use of language provides clarity and reduces ambiguity, guiding users intuitively through interactions.

### Conclusion: Why This Matters for CodeEdit

While these linguistic distinctions may initially seem subtle or trivial, embracing Apple's approach brings significant benefits:

- **API Consistency**: Clear distinctions make our APIs more intuitive and easier to learn.
- **Better Extension Experience**: Extension developers have clear guidelines for integrating seamlessly.
- **Enhanced Maintainability**: Explicit naming conventions reduce cognitive load for contributors, leading to cleaner codebases.

By carefully examining and adopting Apple's deliberate and precise language conventions, we reinforce CodeEdit's design clarity and ensure the application remains intuitive, powerful, and enjoyable for users and developers alike.
