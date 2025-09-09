# Standard for Commit Messages 🚀

Use this format to write commit messages that follow the **Conventional Commits** specifications (https://www.conventionalcommits.org/en/v1.0.0/#summary). Use emojis to quickly identify the type of change made.

---

## Message Structure (Conventional Commits)

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Main elements:

- **type**: Type of change (see table below)  
- **scope**: Optional scope of the change (e.g. `auth`, `api`, `ui`)  
- **description**: Short and imperative description  
- **body**: Detailed explanation (optional)  
- **footer**: Additional info such as BREAKING CHANGES (optional)  

---

## Examples

### Simple commit
```
✨ feat: add endpoint for user authentication
```

### Commit with scope
```
🐛 fix(auth): fix password validation in login
```

### Commit with BREAKING CHANGE
```
⬆️ feat(api)!: migrate to new API v2

BREAKING CHANGE: The API response structure has completely changed
```

### Full commit
```
📚 docs(readme): update installation guide

Added a complete section about development environment setup
with detailed examples for Windows, macOS, and Linux.

Refs: #45
```

---

## Types of Changes (Conventional Commits)

| Type | Emoji | Description | Release |
|------|-------|-------------|---------|
| ✨ **feat** | ✨ | New feature | Minor |
| 🐛 **fix** | 🐛 | Bug fix | Patch |
| 📚 **docs** | 📚 | Documentation changes | - |
| 🎨 **style** | 🎨 | Style changes (formatting, indentation) | - |
| ♻️ **refactor** | ♻️ | Code refactoring | - |
| 🚀 **perf** | 🚀 | Performance improvements | Patch |
| ✅ **test** | ✅ | Add or fix tests | - |
| 🔧 **chore** | 🔧 | Maintenance/build tasks | - |
| ⬆️ **upgrade** | ⬆️ | Dependency upgrade | Patch |
| ⬇️ **downgrade** | ⬇️ | Dependency downgrade | Patch |
| 🔥 **remove** | 🔥 | Remove code/files | Minor |
| 🛡️ **security** | 🛡️ | Security changes | Patch |
| 🏷️ **types** | 🏷️ | Type improvements (TypeScript) | - |
| 🚑 **hotfix** | 🚑 | Urgent critical fix | Patch |
| 💥 **breaking** | 💥 | Breaking changes | Major |

---

## BREAKING CHANGES

For backward-incompatible changes:

```
💥 feat!: change authentication API

BREAKING CHANGE: The `/auth/login` endpoint now requires JWT
```

Or in the footer:
```
🐛 fix: update error handling

BREAKING CHANGE: Error codes now follow HTTP standard format
```

---

## Best Practices

### ✅ **Recommended:**
- Be descriptive and specific  
- Use imperative mood ("Add", "Fix", "Update")  
- Limit the main line to 72 characters  
- Use scope to provide context  
- Link issues: `Refs: #number`  
- Write in English  

### ❌ **Avoid:**
- Generic messages like "fix bug" or "update code"  
- Multiple unrelated changes in one commit  
- Commits without a defined type  

---

## Quick Templates

### New feature
```
✨ feat(scope): short description

Detailed explanation of the change
```

### Bug fix
```
🐛 fix(scope): description of the fixed issue

Explanation of the cause and solution
```

### Documentation
```
📚 docs: update documentation

Details of what was updated
```

### Maintenance
```
🔧 chore: update CI/CD configuration

Changes made to pipelines
```

---

## Automation

These commits allow:  
- ✅ Automatic changelog generation  
- ✅ Automatic semantic versioning  
- ✅ Easy history navigation  
- ✅ CI/CD tool integration  

---

## Important  
- Commit messages must be written in **English**  

Thank you for keeping the project history clean and valuable by following Conventional Commits! 🚀

