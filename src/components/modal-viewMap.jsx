import React from "react";
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
// import { useViewMap } from "@/contexts/viewMap-context";

const ViewMap = ({ isOpen, onOpen }) => {
//   const { toggleViewMap } = useViewMap;

  return (
    // <div>
    //   <button
    //     className="border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white
    //       font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
    //     onClick={toggleViewMap}
    //   >
    //     View on map
    //   </button>
      <Dialog open={isOpen} onOpenChange={onOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <h2>The Map!!</h2>
          <DialogFooter>
            <Button type="submit" onClick={() => onOpen(false)} >Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    // </div>
  );
};

export default ViewMap;
