import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
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
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <div className="flex items-center gap-2 !mt-3">
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-sm">Company</p>
            <span>•</span>
            <p className="text-sm">Location</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
            expedita aperiam nam vel asperiores earum deleniti ipsam? Alias
            quod, numquam minima, inventore labore earum quibusdam, voluptates
            ab illo ex nesciunt?
          </p>
        </CardContent>
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
            <SheetTitle className="text-left text-lg font-semibold leading-none tracking-tight">
              Are you sure absolutely sure?
            </SheetTitle>
            <div className="flex items-center gap-2 !my-3">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">Company</p>
              <span>•</span>
              <p className="text-sm">Location</p>
            </div>
            <div className="flex justify-start">
              <Button>Apply</Button>
            </div>
          </SheetHeader>
          <div>
            <h3 className="font-semibold text-lg">About this job</h3>
          </div>
        </SheetContent>
      </Sheet>
    </React.Fragment>
  );
}
