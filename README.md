# User Cards - Web Components

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwind-css&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

A simple, reusable custom web component for displaying user information with a skeleton loading state using Tailwind CSS.

## Table of contents

- [Preview](#preview)
- [Features](#features)
- [Usage](#usage)
  - [Example](#example)
- [Attributes](#attributes)
- [MIT License](#license)

## Preview

![User Card Component](screenshot.png)

## Features

- Native Web Component (`<user-card>`) — no frameworks required
- Built-in skeleton loader while avatar or content is loading
- Fully Tailwind CSS-based
- Handles avatar loading and fallback
- Supports custom labels, roles, bios, and buttons
- Optional simple male/female avatars

## Usage

Add a `<user-card>` element with optional attributes:

```html
<user-card
    label       =   "John Doe"
    role        =   "Software Engineer"
    avatar      =   "https://avatar.iran.liara.run/public/12"
    bio         =   "Focused on building clean, scalable, and user-centered applications."
    btn1-label  =   "View Profile"
    btn2-label  =   "Message">
</user-card>
```

### Example

![User Card Example](example.png)

## Attributes

| Attribute  | Description                 | Default / Example                       |
|------------|-----------------------------|-----------------------------------------|
| `label`      | User name                   | User Card                               |
| `role`       | User role                   | No information given                    |
| `avatar`     | Avatar image URL            | https://avatar.iran.liara.run/public/35 |
| `bio`        | Short biography             | Lorem ipsum                             |
| `btn1-label` | Label for the first button  | View Profile                            |
| `btn2-label` | Label for the second button | Message                                 |

---

## License

MIT License — free to use and modify.
