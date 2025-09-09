"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DemoMigration() {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedValue, setSelectedValue] = useState("")

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>shadcn/ui Migration Demo</CardTitle>
          <CardDescription>
            This demonstrates migrated components from Radix UI to shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Button Component */}
          <div className="space-y-2">
            <Label>Button Variants</Label>
            <div className="flex gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Dialog Component */}
          <div className="space-y-2">
            <Label>Dialog Component</Label>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Migration Success!</DialogTitle>
                  <DialogDescription>
                    This dialog is now using shadcn/ui components instead of raw Radix UI.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p>The migration allows for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Better default styling with Tailwind</li>
                    <li>Consistent design system</li>
                    <li>Easy customization</li>
                    <li>Full component ownership</li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Select Component */}
          <div className="space-y-2">
            <Label htmlFor="demo-select">Select Component</Label>
            <Select value={selectedValue} onValueChange={setSelectedValue}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="tailwind">Tailwind CSS</SelectItem>
                <SelectItem value="shadcn">shadcn/ui</SelectItem>
              </SelectContent>
            </Select>
            {selectedValue && (
              <p className="text-sm text-muted-foreground">
                Selected: {selectedValue}
              </p>
            )}
          </div>

          {/* Checkbox Component */}
          <div className="space-y-2">
            <Label>Checkbox Component</Label>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="demo-checkbox" 
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked === true)}
              />
              <Label htmlFor="demo-checkbox">
                I agree to the terms and conditions
              </Label>
            </div>
            {isChecked && (
              <p className="text-sm text-green-600">
                ✓ Checkbox is checked using shadcn/ui!
              </p>
            )}
          </div>

          {/* Form Inputs */}
          <div className="space-y-2">
            <Label htmlFor="demo-input">Input Component</Label>
            <Input 
              id="demo-input"
              placeholder="Type something here..." 
              className="max-w-sm"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
