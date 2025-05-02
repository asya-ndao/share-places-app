import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const ViewMap = () => {

  const [viewMapOpen, setViewMapOpen] = useState(false);

  return (
    <>
      <button
        className="border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white
          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
        onClick={() => setViewMapOpen(true)}
      >
        View on map
      </button>
      <Dialog open={viewMapOpen} onOpenChange={setViewMapOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader >
            <DialogTitle className="text-2xl border-b-2 border-blue-700">The location Map</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
          </DialogHeader>
          <h2>The Map!!</h2>
          <DialogFooter>
            <Button onClick={() => setViewMapOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewMap;
