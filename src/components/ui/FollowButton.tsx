"use client"

import { useState } from "react";
import { Button } from "./button";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

function FollowButton({userId}: {userId: string}) {
    const [isLoading, setIsLoading] = useState(false);

    const handleFollow = async () => {
        try {
            await toggleFollow(userId)
            
        } catch (error) {
            toast.error("Error following user")
            
        } finally {
            setIsLoading(false)
        }
    };

  return (
    <Button 
    onClick={handleFollow} 
    size="sm" 
    variant={"secondary"} 
    disabled={isLoading} 
    className="w-20">
        {isLoading ? "Loading..." : "Follow"}
    
    </Button>
  )
}

export default FollowButton