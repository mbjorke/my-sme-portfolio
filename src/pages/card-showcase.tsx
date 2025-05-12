import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

export default function CardShowcase() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 flex flex-col gap-12 items-center">
      <h1 className="text-4xl font-bold mb-8 text-primary">Card Component Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
        {/* Default Card */}
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>No gradient, standard border and shadow.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">You can use this for standard content blocks.</p>
          </CardContent>
          <CardFooter>
            <span className="text-xs text-muted-foreground">Footer actions here</span>
          </CardFooter>
        </Card>

        {/* Gradient Border p-[2px] */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#7ed6df] via-[#16a085] to-[#1de9b6] transition-all duration-300 group hover:bg-gradient-to-tr hover:from-[#1de9b6] hover:via-[#16a085] hover:to-[#7ed6df] hover:shadow-lg">
          <Card className="rounded-2xl bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle>Gradient Border p-[2px]</CardTitle>
              <CardDescription>
                Very thin border using p-[2px].{' '}
                <span className="text-emerald-500">Hover for effect!</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Subtle, minimal accent.</p>
            </CardContent>
          </Card>
        </div>

        {/* Gradient Border p-1 */}
        {/* Use slightly smaller rounding for inner card to keep border natural */}
        <div className="p-1 rounded-2xl bg-gradient-to-r from-[#7ed6df] via-[#16a085] to-[#1de9b6] transition-all duration-300 group hover:bg-gradient-to-tr hover:from-[#1de9b6] hover:via-[#16a085] hover:to-[#7ed6df] hover:shadow-lg">
          <Card className="rounded-xl bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle>Gradient Border p-1</CardTitle>
              <CardDescription>
                Balanced border using p-1 (4px).{' '}
                <span className="text-emerald-500">Hover for effect!</span> <br />
                <span className="text-xs text-muted-foreground">
                  Inner card uses <code>rounded-xl</code> for a more natural border.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Modern, visible accent.</p>
            </CardContent>
          </Card>
        </div>

        {/* Gradient Border p-1.5 */}
        {/* Use even smaller rounding for thicker border */}
        <div className="p-1.5 rounded-2xl bg-gradient-to-r from-[#7ed6df] via-[#16a085] to-[#1de9b6] transition-all duration-300 group hover:bg-gradient-to-tr hover:from-[#1de9b6] hover:via-[#16a085] hover:to-[#7ed6df] hover:shadow-lg">
          <Card className="rounded-[calc(1rem-6px)] bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle>Gradient Border p-1.5</CardTitle>
              <CardDescription>
                Medium border using p-1.5 (6px).{' '}
                <span className="text-emerald-500">Hover for effect!</span> <br />
                <span className="text-xs text-muted-foreground">
                  Inner card uses <code>rounded-[calc(1rem-6px)]</code> for a pixel-perfect border.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Noticeable, but not overwhelming.</p>
            </CardContent>
          </Card>
        </div>

        {/* Gradient Border p-2 */}
        {/* Use much smaller rounding for thickest border */}
        <div className="p-2 rounded-2xl bg-gradient-to-r from-[#7ed6df] via-[#16a085] to-[#1de9b6] transition-all duration-300 group hover:bg-gradient-to-tr hover:from-[#1de9b6] hover:via-[#16a085] hover:to-[#7ed6df] hover:shadow-lg">
          <Card className="rounded-[calc(1rem-8px)] bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle>Gradient Border p-2</CardTitle>
              <CardDescription>
                Bold border using p-2 (8px).{' '}
                <span className="text-emerald-500">Hover for effect!</span> <br />
                <span className="text-xs text-muted-foreground">
                  Inner card uses <code>rounded-[calc(1rem-8px)]</code> for a pixel-perfect border.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Strong, eye-catching accent.</p>
            </CardContent>
          </Card>
        </div>
        {/* Reveal Gradient on Hover */}
        <div className="p-[2px] rounded-2xl transition-all duration-300 group bg-transparent hover:bg-gradient-to-r hover:from-[#7ed6df] hover:via-[#16a085] hover:to-[#1de9b6]">
          <Card className="rounded-2xl bg-card text-card-foreground shadow-sm transition-all duration-300">
            <CardHeader>
              <CardTitle>Reveal Gradient on Hover</CardTitle>
              <CardDescription>
                Looks like a default card until hovered.{' '}
                <span className="text-emerald-500">
                  Hover to reveal a thin gradient border (p-[2px]).
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is a popular interactive effect for modern UI cards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
