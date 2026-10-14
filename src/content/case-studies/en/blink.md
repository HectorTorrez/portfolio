## Problem

Quick notes are meant to be captured in a few seconds, but most notes apps need a full window, a document, or a sign-in before you can type. The thought is gone by the time the app opens.

## Role

Solo builder — product, SwiftUI interface, local persistence, keyboard flow, packaging, and the app icon.

## Constraints

A native macOS app (macOS 15+, Apple Silicon and Intel), no backend and no account. Notes live in a single JSON file on the user's Mac, so it has to stay readable and never silently lose data.

## Decisions

### A floating panel, not a document app

Blink is a small translucent window that stays out of the way until you need it. It opens, you type, you dismiss it and get back to work.

### One JSON file, with a safety net

Every workspace and its notes live in `~/Library/Application Support/Blink/notes.json`. If the file ever becomes unreadable, Blink moves it aside as `notes.corrupt-<timestamp>.json` instead of overwriting it, so a bad parse cannot destroy real notes.

### Workspaces for separate sets of notes

Notes are grouped by workspace, and existing notes start in Personal, so personal and work thoughts do not mix.

### Keyboard-first, autosaved

`⌘K` opens an action panel to create, browse, copy, delete, and restore notes. Notes save as you type, so there is no save button to remember.

## Outcome

A shipping macOS app: workspaces, quick search and switching, adjustable accent color, font size and background opacity, and notes that persist locally as JSON. Distributed as a universal `Blink.zip` release, with an install script that builds from source and copies the app into Applications.
