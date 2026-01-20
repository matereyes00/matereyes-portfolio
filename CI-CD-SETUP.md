# CI/CD Documentation Generation Pipeline

This repository uses GitHub Actions to automatically generate and commit documentation whenever code is pushed to the `main` or `master` branches.

## Setup

### Installation

The required dependencies are already configured in `package.json`. To install them locally:

```bash
npm install
```

This will install:

- **jsdoc**: JavaScript documentation generator
- **better-docs**: Beautiful JSDoc template

### Generate Documentation Locally

To generate documentation on your machine:

```bash
npm run docs
```

Documentation will be generated in the `docs/` folder.

### Watch Mode (Development)

To generate documentation with verbose output:

```bash
npm run docs:watch
```

## How It Works

### Automated Workflow

The GitHub Actions workflow (`.github/workflows/generate-docs.yml`) automatically:

1. **Triggers on**:

    - Push to `main` or `master` branches
    - Changes to `src/`, `package.json`, or `scripts/` folders
    - Pull requests (documentation check only, no commit)

2. **Executes**:

    - Checks out the code
    - Installs dependencies
    - Runs `npm run docs`
    - Commits and pushes changes (on push events)

3. **Commits with message**: `docs: auto-generate documentation [skip ci]`
    - The `[skip ci]` flag prevents infinite workflow loops

### Configuration

- **JSDoc Config**: `.jsdocrc.json` - Configures documentation generation
- **Workflow File**: `.github/workflows/generate-docs.yml` - Defines the CI/CD pipeline

## Writing Documentable Code

To ensure your code is included in the documentation, add JSDoc comments:

```javascript
/**
 * Fetches user data from the API
 * @param {number} userId - The user's ID
 * @returns {Promise<Object>} User data object
 * @throws {Error} If the API request fails
 */
function getUserData(userId) {
	// implementation
}
```

## Documentation Output

Generated documentation is placed in the `docs/` folder and includes:

- API reference for all functions and components
- Source code links
- Search functionality
- Module structure

## Tips

- Document React components with JSDoc:

    ```javascript
    /**
     * Button component
     * @component
     * @param {Object} props
     * @param {string} props.label - Button text
     * @param {Function} props.onClick - Click handler
     * @returns {JSX.Element}
     */
    export function Button({ label, onClick }) { ... }
    ```

- The workflow skips commits if there are no documentation changes
- Documentation is generated from the `src/` folder
- Push documentation to your repository or ignore it in `.gitignore`

## Troubleshooting

**Docs not generating?**

- Check workflow status in GitHub Actions tab
- Ensure `src/` has JSDoc comments
- Verify `.jsdocrc.json` configuration

**Infinite loops?**

- The `[skip ci]` flag in commit messages prevents this
- This is already configured in the workflow

**Want to skip documentation generation?**

- Include `[skip ci]` or `[ci skip]` in your commit message
