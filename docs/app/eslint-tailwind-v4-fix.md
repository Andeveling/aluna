# ESLint Tailwind v4 Compatibility Fix

## Issue Summary
ESLint configuration was failing due to incompatibility between `eslint-plugin-tailwindcss` v3.18.2 and Tailwind CSS v4.1.13.

## Error Details
```bash
Error: Package subpath './resolveConfig' is not defined by "exports" in tailwindcss/package.json
```

The plugin was trying to import `tailwindcss/resolveConfig` which was removed in Tailwind v4.

## Solution Applied
1. **Commented out the plugin import** in `eslint.config.mjs`
2. **Disabled the plugin configuration** in the ESLint extends array
3. **Added explanatory comments** for future reference

### File Changes

**eslint.config.mjs:**
```javascript
// https://github.com/francoismassart/eslint-plugin-tailwindcss/pull/381
// Temporarily disabled due to Tailwind v4 compatibility issues
// import eslintPluginTailwindcss from "eslint-plugin-tailwindcss"

// In the extends array:
//  Temporarily disabled due to Tailwind v4 compatibility issues
//  https://github.com/francoismassart/eslint-plugin-tailwindcss/pull/381
// ...eslintPluginTailwindcss.configs["flat/recommended"],
```

## Result
- ✅ ESLint now runs successfully
- ✅ No more Tailwind plugin compatibility errors
- ⚠️ Some import ordering warnings remain (normal ESLint issues)

## Future Actions
- Monitor `eslint-plugin-tailwindcss` for Tailwind v4 support
- Re-enable the plugin when compatibility is restored
- Consider alternative Tailwind linting solutions if needed

## References
- [ESLint Plugin Tailwind Issue #381](https://github.com/francoismassart/eslint-plugin-tailwindcss/pull/381)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/v4-beta)
