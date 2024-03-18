<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">MY-TASK-BOARD</h1>
</p>
<p align="center">
    <em>HTTP error 401 for prompt `slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/leoikeh99/my-task-board?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/leoikeh99/my-task-board?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/leoikeh99/my-task-board?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/leoikeh99/my-task-board?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running my-task-board](#-running-my-task-board)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

HTTP error 401 for prompt `overview`

---

## 📦 Features

HTTP error 401 for prompt `features`

---

## 📂 Repository Structure

```sh
└── my-task-board/
    ├── @types
    │   └── next-auth.d.ts
    ├── README.md
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── prisma
    │   ├── migrations
    │   │   ├── 20240314071418_init2
    │   │   │   └── migration.sql
    │   │   ├── 20240314182138_init3
    │   │   │   └── migration.sql
    │   │   ├── 20240315182924_optional_desc
    │   │   │   └── migration.sql
    │   │   └── migration_lock.toml
    │   └── schema.prisma
    ├── public
    │   ├── assets
    │   │   ├── Add_round_duotone.svg
    │   │   ├── Done_round.svg
    │   │   ├── Done_round_duotone.svg
    │   │   ├── Edit_duotone.svg
    │   │   ├── Logo.svg
    │   │   ├── Time_atack_duotone.svg
    │   │   ├── Trash.svg
    │   │   ├── alarm-clock.svg
    │   │   ├── books.svg
    │   │   ├── close_ring_duotone-1.svg
    │   │   ├── close_ring_duotone.svg
    │   │   ├── coffee-cup.svg
    │   │   ├── github.svg
    │   │   ├── logout.svg
    │   │   ├── todo.svg
    │   │   └── weight-lift.svg
    │   ├── next.svg
    │   └── vercel.svg
    ├── src
    │   ├── app
    │   │   ├── action.ts
    │   │   ├── api
    │   │   │   └── auth
    │   │   │       └── [...nextauth]
    │   │   ├── error.tsx
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   ├── login
    │   │   │   └── page.tsx
    │   │   └── page.tsx
    │   ├── components
    │   │   ├── ToastProvider.tsx
    │   │   ├── auth
    │   │   │   ├── SignInButton.tsx
    │   │   │   └── SignOutButton.tsx
    │   │   ├── board
    │   │   │   ├── BoardInfo.tsx
    │   │   │   ├── forms
    │   │   │   │   ├── CreateBoard.tsx
    │   │   │   │   └── EditBoard.tsx
    │   │   │   ├── index.tsx
    │   │   │   └── task
    │   │   │       ├── TaskForms.tsx
    │   │   │       ├── TaskItem.tsx
    │   │   │       ├── Tasks.tsx
    │   │   │       └── forms
    │   │   ├── forms
    │   │   │   └── ActionButton.tsx
    │   │   └── ui
    │   │       ├── IconCover.tsx
    │   │       └── SidebarCover.tsx
    │   ├── constants.ts
    │   ├── context
    │   │   └── SettingsContext.tsx
    │   ├── lib
    │   │   ├── prisma.ts
    │   │   └── user.ts
    │   ├── middleware.ts
    │   ├── styles
    │   │   ├── formStyles.css
    │   │   └── layoutStyles.css
    │   └── utils.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                            | Summary                                        |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [tailwind.config.ts](https://github.com/leoikeh99/my-task-board/blob/master/tailwind.config.ts) | HTTP error 401 for prompt `tailwind.config.ts` |
| [tsconfig.json](https://github.com/leoikeh99/my-task-board/blob/master/tsconfig.json)           | HTTP error 401 for prompt `tsconfig.json`      |
| [postcss.config.js](https://github.com/leoikeh99/my-task-board/blob/master/postcss.config.js)   | HTTP error 401 for prompt `postcss.config.js`  |
| [package.json](https://github.com/leoikeh99/my-task-board/blob/master/package.json)             | HTTP error 401 for prompt `package.json`       |
| [next.config.mjs](https://github.com/leoikeh99/my-task-board/blob/master/next.config.mjs)       | HTTP error 401 for prompt `next.config.mjs`    |
| [package-lock.json](https://github.com/leoikeh99/my-task-board/blob/master/package-lock.json)   | HTTP error 401 for prompt `package-lock.json`  |

</details>

<details closed><summary>@types</summary>

| File                                                                                           | Summary                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [next-auth.d.ts](https://github.com/leoikeh99/my-task-board/blob/master/@types/next-auth.d.ts) | HTTP error 401 for prompt `@types/next-auth.d.ts` |

</details>

<details closed><summary>src</summary>

| File                                                                                      | Summary                                       |
| ----------------------------------------------------------------------------------------- | --------------------------------------------- |
| [middleware.ts](https://github.com/leoikeh99/my-task-board/blob/master/src/middleware.ts) | HTTP error 401 for prompt `src/middleware.ts` |
| [utils.ts](https://github.com/leoikeh99/my-task-board/blob/master/src/utils.ts)           | HTTP error 401 for prompt `src/utils.ts`      |
| [constants.ts](https://github.com/leoikeh99/my-task-board/blob/master/src/constants.ts)   | HTTP error 401 for prompt `src/constants.ts`  |

</details>

<details closed><summary>src.styles</summary>

| File                                                                                                   | Summary                                                 |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| [formStyles.css](https://github.com/leoikeh99/my-task-board/blob/master/src/styles/formStyles.css)     | HTTP error 401 for prompt `src/styles/formStyles.css`   |
| [layoutStyles.css](https://github.com/leoikeh99/my-task-board/blob/master/src/styles/layoutStyles.css) | HTTP error 401 for prompt `src/styles/layoutStyles.css` |

</details>

<details closed><summary>src.components</summary>

| File                                                                                                         | Summary                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| [ToastProvider.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/ToastProvider.tsx) | HTTP error 401 for prompt `src/components/ToastProvider.tsx` |

</details>

<details closed><summary>src.components.forms</summary>

| File                                                                                                             | Summary                                                           |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [ActionButton.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/forms/ActionButton.tsx) | HTTP error 401 for prompt `src/components/forms/ActionButton.tsx` |

</details>

<details closed><summary>src.components.board</summary>

| File                                                                                                       | Summary                                                        |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [index.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/index.tsx)         | HTTP error 401 for prompt `src/components/board/index.tsx`     |
| [BoardInfo.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/BoardInfo.tsx) | HTTP error 401 for prompt `src/components/board/BoardInfo.tsx` |

</details>

<details closed><summary>src.components.board.forms</summary>

| File                                                                                                                 | Summary                                                                |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [EditBoard.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/forms/EditBoard.tsx)     | HTTP error 401 for prompt `src/components/board/forms/EditBoard.tsx`   |
| [CreateBoard.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/forms/CreateBoard.tsx) | HTTP error 401 for prompt `src/components/board/forms/CreateBoard.tsx` |

</details>

<details closed><summary>src.components.board.task</summary>

| File                                                                                                            | Summary                                                             |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [Tasks.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/task/Tasks.tsx)         | HTTP error 401 for prompt `src/components/board/task/Tasks.tsx`     |
| [TaskForms.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/task/TaskForms.tsx) | HTTP error 401 for prompt `src/components/board/task/TaskForms.tsx` |
| [TaskItem.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/task/TaskItem.tsx)   | HTTP error 401 for prompt `src/components/board/task/TaskItem.tsx`  |

</details>

<details closed><summary>src.components.board.task.forms</summary>

| File                                                                                                                                | Summary                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [EditTask.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/task/forms/EditTask.tsx)                 | HTTP error 401 for prompt `src/components/board/task/forms/EditTask.tsx`         |
| [AddTask.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/task/forms/AddTask.tsx)                   | HTTP error 401 for prompt `src/components/board/task/forms/AddTask.tsx`          |
| [StatusRadioGroup.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/task/forms/StatusRadioGroup.tsx) | HTTP error 401 for prompt `src/components/board/task/forms/StatusRadioGroup.tsx` |
| [IconRadioGroup.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/board/task/forms/IconRadioGroup.tsx)     | HTTP error 401 for prompt `src/components/board/task/forms/IconRadioGroup.tsx`   |

</details>

<details closed><summary>src.components.ui</summary>

| File                                                                                                          | Summary                                                        |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [SidebarCover.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/ui/SidebarCover.tsx) | HTTP error 401 for prompt `src/components/ui/SidebarCover.tsx` |
| [IconCover.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/ui/IconCover.tsx)       | HTTP error 401 for prompt `src/components/ui/IconCover.tsx`    |

</details>

<details closed><summary>src.components.auth</summary>

| File                                                                                                              | Summary                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [SignInButton.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/auth/SignInButton.tsx)   | HTTP error 401 for prompt `src/components/auth/SignInButton.tsx`  |
| [SignOutButton.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/components/auth/SignOutButton.tsx) | HTTP error 401 for prompt `src/components/auth/SignOutButton.tsx` |

</details>

<details closed><summary>src.context</summary>

| File                                                                                                          | Summary                                                     |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [SettingsContext.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/context/SettingsContext.tsx) | HTTP error 401 for prompt `src/context/SettingsContext.tsx` |

</details>

<details closed><summary>src.lib</summary>

| File                                                                                  | Summary                                       |
| ------------------------------------------------------------------------------------- | --------------------------------------------- |
| [user.ts](https://github.com/leoikeh99/my-task-board/blob/master/src/lib/user.ts)     | HTTP error 401 for prompt `src/lib/user.ts`   |
| [prisma.ts](https://github.com/leoikeh99/my-task-board/blob/master/src/lib/prisma.ts) | HTTP error 401 for prompt `src/lib/prisma.ts` |

</details>

<details closed><summary>src.app</summary>

| File                                                                                      | Summary                                         |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [action.ts](https://github.com/leoikeh99/my-task-board/blob/master/src/app/action.ts)     | HTTP error 401 for prompt `src/app/action.ts`   |
| [error.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/app/error.tsx)     | HTTP error 401 for prompt `src/app/error.tsx`   |
| [globals.css](https://github.com/leoikeh99/my-task-board/blob/master/src/app/globals.css) | HTTP error 401 for prompt `src/app/globals.css` |
| [page.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/app/page.tsx)       | HTTP error 401 for prompt `src/app/page.tsx`    |
| [layout.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/app/layout.tsx)   | HTTP error 401 for prompt `src/app/layout.tsx`  |

</details>

<details closed><summary>src.app.api.auth.[...nextauth]</summary>

| File                                                                                                                   | Summary                                                                   |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/leoikeh99/my-task-board/blob/master/src/app/api/auth/[...nextauth]/route.ts)             | HTTP error 401 for prompt `src/app/api/auth/[...nextauth]/route.ts`       |
| [authOptions.ts](https://github.com/leoikeh99/my-task-board/blob/master/src/app/api/auth/[...nextauth]/authOptions.ts) | HTTP error 401 for prompt `src/app/api/auth/[...nextauth]/authOptions.ts` |

</details>

<details closed><summary>src.app.login</summary>

| File                                                                                      | Summary                                            |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [page.tsx](https://github.com/leoikeh99/my-task-board/blob/master/src/app/login/page.tsx) | HTTP error 401 for prompt `src/app/login/page.tsx` |

</details>

<details closed><summary>prisma</summary>

| File                                                                                         | Summary                                          |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [schema.prisma](https://github.com/leoikeh99/my-task-board/blob/master/prisma/schema.prisma) | HTTP error 401 for prompt `prisma/schema.prisma` |

</details>

<details closed><summary>prisma.migrations</summary>

| File                                                                                                                | Summary                                                           |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [migration_lock.toml](https://github.com/leoikeh99/my-task-board/blob/master/prisma/migrations/migration_lock.toml) | HTTP error 401 for prompt `prisma/migrations/migration_lock.toml` |

</details>

<details closed><summary>prisma.migrations.20240315182924_optional_desc</summary>

| File                                                                                                                                 | Summary                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [migration.sql](https://github.com/leoikeh99/my-task-board/blob/master/prisma/migrations/20240315182924_optional_desc/migration.sql) | HTTP error 401 for prompt `prisma/migrations/20240315182924_optional_desc/migration.sql` |

</details>

<details closed><summary>prisma.migrations.20240314071418_init2</summary>

| File                                                                                                                         | Summary                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [migration.sql](https://github.com/leoikeh99/my-task-board/blob/master/prisma/migrations/20240314071418_init2/migration.sql) | HTTP error 401 for prompt `prisma/migrations/20240314071418_init2/migration.sql` |

</details>

<details closed><summary>prisma.migrations.20240314182138_init3</summary>

| File                                                                                                                         | Summary                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [migration.sql](https://github.com/leoikeh99/my-task-board/blob/master/prisma/migrations/20240314182138_init3/migration.sql) | HTTP error 401 for prompt `prisma/migrations/20240314182138_init3/migration.sql` |

</details>

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the my-task-board repository:

```sh
git clone https://github.com/leoikeh99/my-task-board
```

2. Change to the project directory:

```sh
cd my-task-board
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running my-task-board

Use the following command to run my-task-board:

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🛠 Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/leoikeh99/my-task-board/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/leoikeh99/my-task-board/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/leoikeh99/my-task-board/issues)**: Submit bugs found or log feature requests for My-task-board.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/leoikeh99/my-task-board
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

[**Return**](#-quick-links)

---
