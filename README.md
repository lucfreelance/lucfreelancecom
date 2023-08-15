# Online at:

https:///

# Astro Starter Kit: Portfolio

```
npm create astro@latest -- --template portfolio
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/portfolio)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/portfolio)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/portfolio/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

<!-- ![portfolio](https://user-images.githubusercontent.com/357379/210779178-a98f0fb7-6b1a-4068-894c-8e1403e26654.jpg) -->

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

### Theme

zapping-zenith

# -_- coding: utf-8 -_-

def get_bio():
name = "Your Name"
role = "Web Developer"
about_me = "Hello! I'm a passionate web developer with a love for creating engaging and user-friendly websites. With a strong background in HTML, CSS, and JavaScript, I enjoy turning design concepts into fully functional and responsive web applications. I'm constantly seeking to expand my skills and stay up-to-date with the latest web technologies. Let's build something amazing together! 🚀🌟"
contact_info = "📧 Email: your.email@example.com | 🌐 Portfolio: www.yourportfolio.com | 🐦 Twitter: @yourhandle"

    # Unicode colored characters
    colored_name = "\033[38;5;196m" + name + "\033[0m"  # Red
    colored_role = "\033[38;5;27m" + role + "\033[0m"   # Green
    colored_about_me = "\033[38;5;226m" + about_me + "\033[0m"   # Yellow
    colored_contact_info = "\033[38;5;21m" + contact_info + "\033[0m"   # Blue

    bio = f"{colored_name}\n{colored_role}\n\n{colored_about_me}\n\n{colored_contact_info}"

    return bio

if **name** == "**main**":
bio_text = get_bio()
print(bio_text)
