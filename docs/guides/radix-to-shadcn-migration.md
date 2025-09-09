# Radix UI to shadcn/ui Migration Guide

This guide covers migrating from Radix UI to shadcn/ui in our Next.js project. shadcn/ui provides beautiful, accessible components built on top of Radix UI primitives with Tailwind CSS styling.

## Overview

shadcn/ui is not a traditional npm package but a collection of copy-paste components that you own. This approach gives you:
- Full control over component code
- Easy customization
- No runtime dependency on shadcn itself
- Built-in Tailwind CSS styling
- TypeScript support out of the box

## Prerequisites

- Next.js 13+ (App Router or Pages Router)
- TypeScript
- Tailwind CSS
- Node.js 18+

## Step 1: Remove Radix UI Dependencies

First, remove existing Radix UI packages from your project:

```bash
# Remove common Radix UI packages
pnpm remove @radix-ui/react-dialog
pnpm remove @radix-ui/react-popover
pnpm remove @radix-ui/react-tooltip
pnpm remove @radix-ui/react-select
pnpm remove @radix-ui/react-checkbox
pnpm remove @radix-ui/react-radio-group
pnpm remove @radix-ui/react-switch
pnpm remove @radix-ui/react-tabs
pnpm remove @radix-ui/react-accordion
pnpm remove @radix-ui/react-dropdown-menu
pnpm remove @radix-ui/react-navigation-menu
pnpm remove @radix-ui/react-alert-dialog
pnpm remove @radix-ui/react-sheet
pnpm remove @radix-ui/react-toast
```

## Step 2: Install shadcn/ui CLI

Install the shadcn/ui CLI globally or use via npx:

```bash
# Install globally (optional)
pnpm add -g shadcn

# Or use with npx (recommended)
npx shadcn@latest init
```

## Step 3: Initialize shadcn/ui

Run the init command to set up your project:

```bash
npx shadcn@latest init
```

This will:
- Install required dependencies (`tailwindcss-animate`, `class-variance-authority`, `clsx`, `tailwind-merge`)
- Add utility functions
- Configure your `components.json`
- Set up your CSS variables for theming

Example `components.json` configuration:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## Step 4: Install Required Components

Add the components you need one by one:

```bash
# Common components
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add popover
npx shadcn@latest add tooltip
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add switch
npx shadcn@latest add tabs
npx shadcn@latest add accordion
npx shadcn@latest add dropdown-menu
npx shadcn@latest add navigation-menu
npx shadcn@latest add alert-dialog
npx shadcn@latest add sheet
npx shadcn@latest add toast
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add card
```

## Step 5: Update CSS Variables

Your project already uses Tailwind v4. The shadcn/ui init command will add the necessary CSS variables to your existing `styles/tailwind.css` file. The file should look like this after initialization:

```css
@import 'tailwindcss';

/*
  The default border color has changed to `currentColor` in Tailwind CSS v4,
  so we've added these compatibility styles to make sure everything still
  looks the same as it did with Tailwind CSS v3.

  If we ever want to remove these styles, we need to add an explicit border
  color utility to any element that depends on these defaults.
*/
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Step 6: Component Migration Examples

### Dialog Migration

**Before (Radix UI):**
```tsx
import * as Dialog from '@radix-ui/react-dialog';

function MyDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here.
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="IconButton">×</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

**After (shadcn/ui):**
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        {/* Content goes here */}
      </DialogContent>
    </Dialog>
  );
}
```

### Select Migration

**Before (Radix UI):**
```tsx
import * as Select from '@radix-ui/react-select';

function MySelect() {
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger">
        <Select.Value placeholder="Select a fruit..." />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.Viewport className="SelectViewport">
            <Select.Item value="apple" className="SelectItem">
              <Select.ItemText>Apple</Select.ItemText>
            </Select.Item>
            <Select.Item value="banana" className="SelectItem">
              <Select.ItemText>Banana</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
```

**After (shadcn/ui):**
```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function MySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

### Form Integration

shadcn/ui includes excellent form integration with React Hook Form and Zod:

```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## Step 7: Update Tailwind Configuration

Ensure your `tailwind.config.js` includes the shadcn/ui configuration:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

## Step 8: Testing and Validation

### Manual Testing
1. **Visual Testing**: Check that all components render correctly
2. **Interaction Testing**: Ensure all interactive elements work as expected
3. **Accessibility Testing**: Use screen readers and keyboard navigation
4. **Responsive Testing**: Test across different screen sizes

### Automated Testing
Add tests for your migrated components:

```tsx
// Example test for Dialog component
import { render, screen, fireEvent } from '@testing-library/react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

describe('Dialog', () => {
  it('opens and closes correctly', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>Dialog Content</DialogContent>
      </Dialog>
    );

    const trigger = screen.getByText('Open Dialog');
    fireEvent.click(trigger);

    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });
});
```

### E2E Testing with Playwright
Update your Playwright tests to work with the new components:

```typescript
// e2e/dialog.spec.ts
import { test, expect } from '@playwright/test';

test('dialog interaction', async ({ page }) => {
  await page.goto('/');
  
  await page.click('[data-testid="dialog-trigger"]');
  await expect(page.locator('[role="dialog"]')).toBeVisible();
  
  await page.keyboard.press('Escape');
  await expect(page.locator('[role="dialog"]')).not.toBeVisible();
});
```

## Breaking Changes and Migration Notes

### Props Changes
- Some prop names may have changed between Radix UI and shadcn/ui implementations
- Check each component's TypeScript definitions for the exact props

### Styling Changes
- shadcn/ui uses Tailwind CSS classes instead of custom CSS
- CSS variables are used for theming instead of custom properties
- Some default styles may differ

### Import Changes
- All imports now come from `@/components/ui/*` instead of individual Radix packages
- Utility functions are imported from `@/lib/utils`

### Bundle Size
- Bundle size may decrease since you only include the components you use
- No runtime dependency on shadcn/ui itself

## Checklist for Migration

- [ ] Remove all Radix UI dependencies
- [ ] Install shadcn/ui CLI and initialize project
- [ ] Update Tailwind configuration
- [ ] Add CSS variables to global styles
- [ ] Migrate components one by one
- [ ] Update imports throughout the codebase
- [ ] Test all interactive functionality
- [ ] Verify accessibility features
- [ ] Update documentation and storybook (if applicable)
- [ ] Run full test suite
- [ ] Performance testing to ensure no regressions

## Additional Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Radix UI to shadcn/ui Component Mapping](https://ui.shadcn.com/docs/components)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support and Troubleshooting

If you encounter issues during migration:

1. Check the shadcn/ui documentation for the specific component
2. Verify your Tailwind configuration includes all required settings
3. Ensure CSS variables are properly defined
4. Check for TypeScript errors and resolve prop mismatches
5. Test components in isolation before integrating into larger features

The migration should result in a more maintainable, customizable, and performant UI component library while maintaining all accessibility features from Radix UI.
