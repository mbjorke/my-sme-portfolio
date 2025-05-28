import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

export function CardShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* 1. Primary Gradient */}
      <Card variant="primary">
        <CardHeader>
          <div className="flex gap-2 items-center mb-2">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/20">
              <span className="text-primary-foreground">1️⃣</span>
            </div>
            <CardDescription className="text-primary-foreground/80">primary</CardDescription>
          </div>
          <CardTitle className="text-2xl font-bold text-primary-foreground">NexusCore</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-sm text-primary-foreground/80">
            Trusted by industry leaders for reliable solutions
          </p>
        </CardContent>
        <CardFooter>
          <div className="font-mono text-xs text-primary-foreground/60">
            from-primary-700 via-primary-800 to-primary-900
          </div>
        </CardFooter>
      </Card>

      {/* 2. Secondary Gradient */}
      <Card variant="secondary">
        <CardHeader>
          <div className="flex gap-2 items-center mb-2">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/20">
              <span className="text-white">2️⃣</span>
            </div>
            <CardDescription className="text-white/80">Secondary</CardDescription>
          </div>
          <CardTitle className="text-2xl font-bold text-white">Scale & Grow</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-sm text-white/80">Sustainable solutions for tomorrow</p>
        </CardContent>
        <CardFooter>
          <div className="font-mono text-xs text-white/60">from-emerald-600 to-cyan-500</div>
        </CardFooter>
      </Card>

      {/* 3. Edit Phase Gradient */}
      <Card variant="tertiary">
        <CardHeader className="relative z-10">
          <div className="flex gap-2 items-center mb-2">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/20">
              <span className="text-white">3️⃣</span>
            </div>
            <CardDescription className="text-white/80">edit</CardDescription>
          </div>
          <CardTitle className="text-2xl font-bold text-white">Edit & Refine</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="mb-2 text-sm text-white/80">Perfecting every detail</p>
        </CardContent>
        <CardFooter className="relative z-10">
          <div className="font-mono text-xs text-white/60">from-teal-600 to-emerald-500</div>
        </CardFooter>
      </Card>

      {/* 4. Sunset Gradient */}
      <Card variant="sunset">
        <CardHeader className="relative z-10">
          <div className="flex gap-2 items-center mb-2">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/20">
              <span className="text-white">4️⃣</span>
            </div>
            <CardDescription className="text-white/80">sunset</CardDescription>
          </div>
          <CardTitle className="text-2xl font-bold text-white">Horizon Peak</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="mb-2 text-sm text-white/80">Where creativity meets opportunity</p>
        </CardContent>
        <CardFooter className="relative z-10">
          <div className="font-mono text-xs text-white/60">from-orange-500 to-purple-700</div>
        </CardFooter>
      </Card>

      {/* 5. Blueberry Gradient */}
      <Card variant="blueberry">
        <CardHeader className="relative z-10">
          <div className="flex gap-2 items-center mb-2">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/20">
              <span className="text-white">5️⃣</span>
            </div>
            <CardDescription className="text-white/80">Blueberry</CardDescription>
          </div>
          <CardTitle className="text-2xl font-bold text-white">Blueberry</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="mb-2 text-sm text-white/80">Scale & Grow</p>
        </CardContent>
        <CardFooter className="relative z-10">
          <div className="font-mono text-xs text-white/60">from-orange-500 to-purple-700</div>
        </CardFooter>
      </Card>

      {/* 6. Transparent */}
      <Card variant="transparent">
        <CardHeader className="relative z-10">
          <div className="flex gap-2 items-center mb-2">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/20">
              <span className="text-white">6️⃣</span>
            </div>
            <CardDescription className="text-white/80">Transparent</CardDescription>
          </div>
          <CardTitle className="text-2xl font-bold text-white">Transparent</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="mb-2 text-sm text-white/80">Scale & Grow</p>
        </CardContent>
        <CardFooter className="relative z-10">
          <div className="font-mono text-xs text-white/60">from-orange-500 to-purple-700</div>
        </CardFooter>
      </Card>
    </div>
  );
}
