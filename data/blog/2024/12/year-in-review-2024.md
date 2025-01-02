---
title: "Our Year in Review, and What’s Ahead"
headline: "Our Year in Review, and What’s Ahead"
subhead: As 2024 comes to a close, we wanted to take a moment to reflect on what we achieved in this last year. Our community has continued to drive the development of CodeEdit. We're especially excited to share what we worked on, and what's coming for CodeEdit!
description: As 2024 comes to a close, we wanted to take a moment to reflect on what we achieved in this last year.
date: 2024-12-31
category: roundup
author: thecoolwinter
image: https://github.com/user-attachments/assets/108dadf2-2bdb-4954-b7ba-086c2be8abfd
---

## 🐙 Source Control

This year one of our focuses was improving how developers can use Git with CodeEdit. Our goal was to make Git easy. We felt editors can often miss the mark when it comes to the user experience and clarity that source control requires. So, as we built out our source control features we were grateful to our wonderful community as we looked for shared opinions and design guidance.

The heart of CodeEdit's source control features is the source control navigator pane. This pane was [seriously](https://github.com/CodeEditApp/CodeEdit/pull/1534) [upgraded](https://github.com/CodeEditApp/CodeEdit/pull/1471) this year, introducing new interfaces for initializing repositories, managing commits and messages, viewing history, local and remote branches, and more.

<figure>
  <video class="wide ratio-16-9" playsinline muted loop controls>
    <source src="https://github.com/user-attachments/assets/a5462167-f084-4fab-8229-38c5e5855d54" type="video/mp4">
  </video>
  <figcaption>Source control upgrades.</figcaption>
</figure>

## 📋 Tasks

We’re constantly working to make CodeEdit a tool that will adapt to any developer’s workflow. This year saw the introduction of the [Activity Viewer](https://github.com/CodeEditApp/CodeEdit/pull/1769), a way for developers to set up and run tasks in their workspace. Tasks are essentially shell scripts that run in a workspace, such as starting a development server, or kicking off a test run.

To configure tasks, we added workspace specific settings and will continue to expand them to allow developers to override settings for specific workspaces. Once tasks are configured, they send their output to a new Utility Area pane.

<figure>
  <video class="wide ratio-16-9" playsinline muted loop controls>
    <source src="https://github.com/user-attachments/assets/e316ad80-6e8b-4249-86dd-f79fb6b043ee" type="video/mp4">
  </video>
  <figcaption>Tasks & Activity Viewer demo, building an Next application.</figcaption>
</figure>

As we continue developing Tasks and the Activity Viewer, we see lots of potential for this feature to make day-to-day development with CodeEdit smoother and faster. We're excited to see where it'll go this next year, and are excited to see how developers like you use it.

## 🎨 Themes

Everyone loves themes, so they got some upgrades this year. We improved how default themes are bundled with CodeEdit. Now, default themes will be updated as new updates are released. It's now less confusing which themes are built-in or user-installed.

The theme list got improvements as well, adding [fuzzy](https://www.codeedit.app/blog/2024/02/generic-fuzzy-search-algorithm) [searching](https://github.com/CodeEditApp/CodeEdit/pull/1584) to the themes list so everything is easier to find, and improving the design so you never need to modify a [JSON file](https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme) to make your editor look just right.

## 📝 Source Editor

After introducing our custom ground-up [text view](https://github.com/CodeEditApp/CodeEditTextView) package at the end of last year, we continued to improve stability and accessibility. Support for non-latin characters, the macOS Sequoia system cursor, and fixes for many more [UX papercuts](https://en.wikipedia.org/wiki/Paper_cut_bug) were fixed and released in that package.

A code editor is more than just displaying text. This year saw bounds of progress making CodeEdit do much more in our [open-source](https://github.com/CodeEditApp/CodeEditSourceEditor) source editor view. A quick shortcut [⌘/ to comment code](https://github.com/CodeEditApp/CodeEditSourceEditor/pull/241), [indenting and unindenting lines](https://github.com/CodeEditApp/CodeEditSourceEditor/pull/266), and [tag](https://github.com/CodeEditApp/CodeEditSourceEditor/pull/247) [autocomplete](https://github.com/CodeEditApp/CodeEditSourceEditor/pull/250) powered by tree-sitter were all added by our wonderful contributors this past year. These features make a huge difference in the editing experience for CodeEdit

## 🧪 What's Next?

As we wrap up this year, we look ahead towards 2025 and what we hope to accomplish. We'll continue to lean on our community as we learn and build out an application we can all use and love. Here's what we'll be focusing on this coming year.

### Language Server Protocol integration. 

Supporting language servers will unlock a whole new level of functionality for CodeEdit. Autocomplete,  syntax highlighting upgrades, searching symbols, and so much more.

### Extension architecture.

Extensions are essential for a code editor. We know they're highly anticipated and can make or break an editor's success. We'll be working hard to get extensions right, ensuring CodeEdit gets the full power of good customization behind it.

### Solidifying the core.

We'll continue to solidify the core experience you have while writing code. Our mission is to create a macOS native editor, and we're not going to settle for less than perfection. We'll continue to work on performance in latency and memory utilization so you don't have to worry about your editor draining your battery.

## 💌 A Note of Gratitude

We want to extend a heartfelt thank you to every member of our community. Whether you contributed code, reported bugs, shared feedback, or simply used CodeEdit, you’ve played a vital role in our journey. Your passion and dedication inspire us to keep building and improving.

We'd also like to take the time to give a special shout out to our contributors! Everyone who took the time and effort to contribute towards our ambitious goal, whether the contribution was large or small, we want to say thank you.

As 2024 comes to a close, we’re excited to continue this journey with you. We're honored and proud of everything we accomplished this year. Here's to another great next year! 🎉

Happy New Year,
The CodeEdit Team
