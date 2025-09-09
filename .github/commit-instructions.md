## Commit Message Guidelines (Conventional Commits)

This project enforces [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) for all commit messages. This ensures clarity, automation, and a clean project history.

### Commit Message Format

```
<type>[optional scope]: <short description>

[optional body]

[optional footer(s)]
```

#### Example

```
feat(Button): add loading state to Button component

Allow users to show a loading spinner on the Button when submitting forms.

BREAKING CHANGE: Button API now requires a `loading` prop.
Fixes #123
```

### Types

Use one of the following types:

- **feat**: A new feature
- **fix**: A bug fix
- **perf**: Performance improvement
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **style**: Code style changes (formatting, missing semi colons, etc.)
- **test**: Adding or updating tests
- **build**: Changes to build process or dependencies
- **ops**: Operations, CI/CD, infrastructure
- **docs**: Documentation only changes
- **chore**: Maintenance tasks (no production code change)
- **merge**: Merge commits
- **revert**: Revert a previous commit

### Scope (Optional)

You may specify a scope to clarify what part of the code is affected, e.g. `feat(api): ...` or `fix(Button): ...`. Scopes are optional in this project.

### Description

- Use the imperative mood (e.g., "add", not "adds" or "added").
- Keep it concise (max 72 characters).
- Do not end with a period.

### Body (required)

Use the body to explain the motivation, context, or details of the change. Wrap lines at 72 characters.

### Footer (Optional)

Use the footer to reference issues or breaking changes.

- **BREAKING CHANGE:** Describe any breaking API or behavior change. Must start with `BREAKING CHANGE:`
- **Issue references:** Use `Fixes #123` or `Closes #456` to link issues.

### Breaking Changes

To indicate a breaking change, add a `!` after the type/scope or include a `BREAKING CHANGE:` footer:

```
feat!: drop support for Node 16

BREAKING CHANGE: Node 16 is no longer supported. Please upgrade to Node 18.
```

### Good Commit Examples
```
fix: handle null user in auth middleware

Prevent server crash when user is not authenticated by checking for null user object in the auth middleware.

```

Add detailed setup steps for new contributors, including environment variables and local development instructions.

```
refactor(Button): simplify props interface

Remove unused props and streamline the Button component interface for easier maintenance.
```

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

Add unit and integration tests to ensure Tooltip displays on hover and handles edge cases.

### Bad Commit Examples

Upgrade Storybook to the latest major version for improved performance and compatibility.
```

```
update stuff
bugfix
final changes
fixes
```

### Pre-commit Hook

This repository uses a pre-commit hook to enforce commit message format. If your commit is rejected, review these guidelines and amend your message.

---
For more details, see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
