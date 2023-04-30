import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const RenderBasicJobCard = React.forwardRef<HTMLDivElement, any>(
  (props, ref) => {
    return (
      <Card {...props} ref={ref}>
        <CardHeader className="flex-row items-center gap-3">
          <Avatar className="rounded-md">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col space-y-1.5">
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </div>
        </CardHeader>
      </Card>
    );
  }
);

export default function BasicJobCard() {
  return (
    <React.Fragment>
      <Sheet>
        <SheetTrigger asChild>
          <RenderBasicJobCard />
        </SheetTrigger>
        <SheetContent size={"full"}>
          <SheetHeader className="mb-6">
            <div className="flex flex-row gap-3 items-center text-left my-4">
              <Avatar className="rounded-md mt-1">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <SheetTitle className="text-lg font-semibold leading-none tracking-tight">
                  Are you sure absolutely sure?
                </SheetTitle>
                <SheetDescription className="!mt-0 !space-y-1.5">
                  Apple
                </SheetDescription>
              </div>
            </div>
            <Button>Apply</Button>
          </SheetHeader>
          <div>
            <h3 className="font-semibold text-lg">About this job</h3>
          </div>
        </SheetContent>
      </Sheet>
    </React.Fragment>
  );
}
